package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/aymerick/raymond"
	chi "github.com/go-chi/chi/v5"
	"github.com/innomon/aigen-app/framework"
	"github.com/innomon/aigen-app/utils/datamodels"
)

func main() {
	configPath := ""
	if len(os.Args) > 1 {
		configPath = os.Args[1]
	}

	config, err := framework.LoadConfig(configPath)
	if err != nil {
		log.Fatalf("Error loading configuration: %v", err)
	}

	app, err := framework.NewApp(config)
	if err != nil {
		log.Fatalf("Error creating app: %v", err)
	}
	defer app.DAO.Close()

	// Add Rare Rack Custom Routes
	app.Router.Get("/", func(w http.ResponseWriter, r *http.Request) {
		limit := "10"
		products, _, err := app.EntityService.List(r.Context(), "rarerack_product", datamodels.Pagination{Limit: &limit}, nil, nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// Prepare images and materials for each product
		for _, product := range products {
			if imgStr, ok := product["images"].(string); ok && imgStr != "" {
				product["images"] = strings.Split(imgStr, ",")
			} else {
				product["images"] = []string{}
			}

			// Fetch materials (Collection)
			id := product["id"].(string)
			materials, _, _ := app.EntityService.CollectionList(r.Context(), "rarerack_product", id, "materials", datamodels.Pagination{}, nil, nil)
			product["materials"] = materials
		}

		renderTemplate(w, "home", map[string]interface{}{
			"title":    "Where Materials Begin Again",
			"products": products,
		})
	})

	app.Router.Get("/products/{id}", func(w http.ResponseWriter, r *http.Request) {
		id := chi.URLParam(r, "id")
		product, err := app.EntityService.Single(r.Context(), "rarerack_product", id)
		if err != nil {
			http.Error(w, "Product not found", http.StatusNotFound)
			return
		}

		// Split images
		if imgStr, ok := product["images"].(string); ok && imgStr != "" {
			product["images"] = strings.Split(imgStr, ",")
		} else {
			product["images"] = []string{}
		}

		// Fetch Artisan
		if artisanId, ok := product["artisan"].(string); ok && artisanId != "" {
			artisan, _ := app.EntityService.Single(r.Context(), "rarerack_artisan", artisanId)
			product["artisan"] = artisan
		}

		// Fetch Materials (Collection)
		materials, _, _ := app.EntityService.CollectionList(r.Context(), "rarerack_product", id, "materials", datamodels.Pagination{}, nil, nil)
		product["materials"] = materials

		renderTemplate(w, "product", map[string]interface{}{
			"title":   product["title"].(string),
			"product": product,
		})
	})

	app.Router.Get("/makers", func(w http.ResponseWriter, r *http.Request) {
		limit := "100"
		makers, _, err := app.EntityService.List(r.Context(), "rarerack_artisan", datamodels.Pagination{Limit: &limit}, nil, nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		renderTemplate(w, "makers", map[string]interface{}{
			"title":  "Meet the Makers",
			"makers": makers,
		})
	})

	app.Router.Get("/makers/{id}", func(w http.ResponseWriter, r *http.Request) {
		id := chi.URLParam(r, "id")
		artisan, err := app.EntityService.Single(r.Context(), "rarerack_artisan", id)
		if err != nil {
			http.Error(w, "Artisan not found", http.StatusNotFound)
			return
		}

		// Handle artisan profile image if it was a list (unlikely but for consistency)
		if imgStr, ok := artisan["profile_image"].(string); ok && imgStr != "" {
			// Profile image is usually single, but let's ensure it's handled
		}

		// Fetch Products by this Artisan
		filter := []datamodels.Filter{
			{
				FieldName: "artisan",
				MatchType: datamodels.MatchAll,
				Constraints: []datamodels.Constraint{
					{Match: "eq", Values: []interface{}{id}},
				},
			},
		}
		limit := "50"
		products, _, _ := app.EntityService.List(r.Context(), "rarerack_product", datamodels.Pagination{Limit: &limit}, filter, nil)

		// Prepare products
		for _, product := range products {
			if imgStr, ok := product["images"].(string); ok && imgStr != "" {
				product["images"] = strings.Split(imgStr, ",")
			} else {
				product["images"] = []string{}
			}

			// Fetch materials (Collection)
			prodId := product["id"].(string)
			materials, _, _ := app.EntityService.CollectionList(r.Context(), "rarerack_product", prodId, "materials", datamodels.Pagination{}, nil, nil)
			product["materials"] = materials
		}

		renderTemplate(w, "artisan", map[string]interface{}{
			"title":    artisan["name"].(string),
			"artisan":  artisan,
			"products": products,
		})
	})

	app.Router.Get("/apply", func(w http.ResponseWriter, r *http.Request) {
		renderTemplate(w, "apply", map[string]interface{}{
			"title": "Apply as Artisan",
		})
	})

	app.Router.Post("/apply", func(w http.ResponseWriter, r *http.Request) {
		r.ParseForm()

		data := map[string]interface{}{
			"name":           r.FormValue("name"),
			"email":          r.FormValue("email"),
			"philosophy":     r.FormValue("philosophy"),
			"portfolio_link": r.FormValue("portfolio_link"),
			"status":         "Pending",
		}

		_, err := app.EntityService.Insert(r.Context(), "rarerack_application", data)
		if err != nil {
			http.Error(w, "Failed to submit application: "+err.Error(), http.StatusInternalServerError)
			return
		}

		renderTemplate(w, "apply", map[string]interface{}{
			"title":   "Application Received",
			"success": true,
		})
	})

	if err := app.Run(); err != nil {
		log.Fatalf("App failed to run: %v", err)
	}
}

func renderTemplate(w http.ResponseWriter, name string, data map[string]interface{}) {
	layoutPath := filepath.Join("wwwroot", "templates", "layout.hbs")
	tplPath := filepath.Join("wwwroot", "templates", name+".hbs")

	// If template doesn't exist, create a placeholder for testing
	if _, err := os.Stat(tplPath); os.IsNotExist(err) {
		data["body"] = fmt.Sprintf("<h1>%s</h1><p>Template %s.hbs not found. Placeholder content.</p>", data["title"], name)
	} else {
		contentTpl, err := raymond.ParseFile(tplPath)
		if err != nil {
			http.Error(w, fmt.Sprintf("Error parsing template: %v", err), http.StatusInternalServerError)
			return
		}
		body, err := contentTpl.Exec(data)
		if err != nil {
			http.Error(w, fmt.Sprintf("Error executing template: %v", err), http.StatusInternalServerError)
			return
		}
		data["body"] = body
	}

	layoutTpl, err := raymond.ParseFile(layoutPath)
	if err != nil {
		http.Error(w, fmt.Sprintf("Error parsing layout: %v", err), http.StatusInternalServerError)
		return
	}

	result, err := layoutTpl.Exec(data)
	if err != nil {
		http.Error(w, fmt.Sprintf("Error executing layout: %v", err), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "text/html")
	fmt.Fprint(w, result)
}
