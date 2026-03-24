# Design System Document

## 1. Overview & Creative North Star
### The Creative North Star: "The Modern Artisan"
This design system moves away from the sterile, cookie-cutter aesthetics of global SaaS. It is an editorial-first framework that celebrates the burgeoning Indian startup ecosystem by blending the precision of high-tech with the soul of Indian craftsmanship. 

We break the "template" look by embracing **Intentional Asymmetry**. Instead of perfectly centered grids, we use overlapping elements—like a Terracotta-tinted card bleeding off the edge of an Indigo section—to create a sense of dynamic growth. The experience should feel like a nocturnal sanctuary: quiet, premium, and deeply trustworthy, yet punctuated by the vibrant energy of Marigold and Saffron.

---

## 2. Colors
Our palette is a dialogue between the deep stillness of an Indian night and the festive warmth of its heritage.

*   **Primary (Saffron/Marigold):** Use `primary` (#ffb97c) and `primary_container` (#ff9100) for high-impact CTAs. These represent the "glow" of the system.
*   **Background (Indigo):** The base is `surface` (#000450). It is never true black; it is a deep, atmospheric ink.
*   **Tertiary (Terracotta):** Use `tertiary` (#ffb6a3) and its containers for auxiliary information or earthy accents that ground the digital experience.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. Boundaries must be defined solely through background color shifts. For example, a `surface_container_low` section sitting on a `surface` background creates a clear but sophisticated division.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface_container` tiers (Lowest to Highest) to create depth:
*   **Lowest:** For secondary background areas.
*   **Highest:** For high-priority interactive cards or modals.
Nesting an inner container with a slightly higher tier (e.g., `surface_container_high` inside `surface_container`) creates a "lift" that feels organic rather than programmed.

### The "Glass & Gradient" Rule
To achieve a signature look, use **Glassmorphism**. Floating elements should use semi-transparent surface colors with a `backdrop-filter: blur(20px)`. Main CTAs should utilize a subtle linear gradient transitioning from `primary` to `primary_container` to add "soul" and dimension.

---

## 3. Typography
We pair two distinct personalities to create an editorial feel.

*   **Display & Headlines (Epilogue):** An authoritative, high-contrast sans-serif that feels like a modern broadsheet. Use `display-lg` (3.5rem) for hero statements to command attention.
*   **Body & Titles (Plus Jakarta Sans):** A friendly, modern typeface with an "artisanal flair." It ensures high readability while maintaining a custom, boutique feel.
*   **Hierarchy as Identity:** Use extreme scale contrast. A `display-lg` headline paired with a `label-md` uppercase caption creates a premium, designer-led layout that avoids the "standard app" look.

---

## 4. Elevation & Depth
We eschew traditional shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Stacking tiers (e.g., `surface_container_lowest` on `surface_container_low`) creates a soft, natural lift. This mimics fine paper layering.
*   **Ambient Shadows:** If a floating effect is required, shadows must be ultra-diffused. Use large blur values (30px+) and low opacity (4%-8%). The shadow color should be a tinted version of `on_surface` (Indigo-tinted) rather than grey.
*   **The "Ghost Border" Fallback:** If a border is essential for accessibility, use the `outline_variant` token at **15% opacity**. Never use 100% opaque borders.
*   **Materiality:** Use backdrop blurs to allow the deep Indigo background to bleed through UI elements, ensuring the design feels integrated into the "sanctuary" environment.

---

## 5. Components

### Buttons
*   **Primary:** Saffron gradient (`primary` to `primary_container`) with `on_primary` text. Radius: `ROUND_TWELVE` (1rem).
*   **Secondary:** Glassmorphic base using `surface_container_high` at 60% opacity with a "Ghost Border."
*   **Tertiary:** Text-only in `primary_fixed`, using `1.4rem` (Spacing 4) horizontal padding.

### Cards & Lists
*   **Constraint:** No divider lines. Use vertical white space from the Spacing Scale (e.g., `10` or `12`) to separate content blocks.
*   **Visual Shift:** Use `surface_container_low` for card backgrounds to distinguish them from the main `surface`.

### Inputs & Fields
*   **Styling:** Inputs should be "bottom-heavy," utilizing a `surface_container_highest` background with a subtle `outline_variant` bottom-stroke only. 
*   **States:** On focus, the bottom-stroke transforms into a 2px `primary` (Marigold) line.

### Signature Component: The "Heritage Badge"
A custom Chip variant using `tertiary_container` (Terracotta) with `on_tertiary_container` text, used to highlight Indian startup sectors (e.g., "Agritech," "Fintech"). It uses `xl` (3rem) roundness for a pill shape.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. A hero image can be offset to the right while text stays left-aligned with ample white space.
*   **Do** use the Spacing Scale religiously. Consistent gaps of `8` (2.75rem) or `10` (3.5rem) between sections create a "breathable" premium feel.
*   **Do** use `primary` (Saffron) sparingly as a "glow" effect to guide the user's eye to success states or primary actions.

### Don't:
*   **Don't** use 1px solid white or grey lines. They break the nocturnal immersion.
*   **Don't** use pure black (#000000). Always use the Indigo `surface` (#000450).
*   **Don't** clutter the screen. If in doubt, increase the spacing by two steps on the scale.
*   **Don't** use standard "drop shadows." They feel cheap. Stick to tonal transitions or highly diffused ambient glows.