# Design System Strategy: The Midnight Festival

## 1. Overview & Creative North Star
This design system is built upon the Creative North Star of **"The Cosmic Hearth."** It represents the intersection of the vast, mysterious startup landscape (Midnight) and the warmth of a supportive community (Hearth). By blending the deep, intellectual atmosphere of Deep Indigo with the energetic sparks of Saffron and Marigold, we create an environment that feels both elite and accessible.

To move beyond the "standard startup template," this system rejects rigid grids in favor of **Intentional Asymmetry**. Elements should feel like celestial bodies—nested, overlapping, and glowing. We avoid cold, clinical layouts by using extreme roundedness (`ROUND_FULL`) and soft, organic layering that mimics the gentle presence of our owl mascot.

---

## 2. Colors: Tonal Depth & Glow
Our palette is a high-contrast interplay between the shadows of the night and the vibrant energy of innovation.

*   **Primary (#fe9832 - Saffron):** The heat of the fire. Used for primary actions and high-energy highlights.
*   **Secondary (#fcc800 - Marigold):** The light of the moon. Used for secondary accents and "wise" insights.
*   **Tertiary (#a2aaff):** The soft atmospheric glow. Used for informational states and subtle depth.
*   **Surface (#090e1c):** The infinite canvas. This deep indigo provides the base for all editorial storytelling.

### The "No-Line" Rule
Sectioning must never be achieved through 1px solid borders. Boundaries are defined solely by background shifts. To separate a section, transition from `surface` to `surface-container-low`. To draw focus, place a `surface-container-highest` card atop a `surface-container` background.

### The Glass & Gradient Rule
To achieve the "Midnight Festival" vibe, use **Glassmorphism** for floating elements (nav bars, modal overlays). Apply `surface-variant` at 60% opacity with a `24px` backdrop blur. Use subtle linear gradients for CTAs, transitioning from `primary` (#fe9832) to `primary-container` (#ea8822) at a 135-degree angle to provide "soul" and dimension.

---

## 3. Typography: Editorial Playfulness
We utilize **Plus Jakarta Sans** for its geometric clarity and friendly character.

*   **Display (Display-LG/MD):** Used for "Hero" moments. Use tight letter-spacing (-0.02em) and treat text as a graphic element. Overlap display text with owl mascot illustrations to break the box.
*   **Headlines (Headline-LG/MD):** Bold and energetic. These lead the user through the ecosystem with authority.
*   **Body (Body-LG/MD):** Set with generous line-height (1.6) to ensure readability against the dark `surface`.
*   **Labels (Label-MD):** Used for metadata, always in uppercase with +0.05em tracking to maintain a premium feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are forbidden. We create height through light and color density.

*   **The Layering Principle:** Stacking is the primary tool for hierarchy. 
    *   *Base:* `surface`
    *   *Navigation/Groups:* `surface-container-low`
    *   *Interactive Cards:* `surface-container-highest`
*   **Ambient Shadows:** If an element must float (like the owl mascot guide), use an extra-diffused shadow: `offset-y: 20px, blur: 40px, color: rgba(0, 0, 0, 0.4)`. 
*   **The Ghost Border:** For high-density data where separation is critical, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.

---

## 5. Components: Friendly Primitives

### Buttons
*   **Primary:** `ROUND_FULL`, `primary` background with `on-primary` text. Use a subtle inner glow (1px white at 10% opacity) on the top edge to mimic moonlight hitting the button.
*   **Tertiary:** No background. Use `primary` text with an icon. Upon hover, animate a `surface-container-high` background fade-in.

### Chips & Tags
*   **Action Chips:** Use `secondary-container` backgrounds. These should feel like small "tokens" of achievement within the ecosystem.

### Cards & Lists
*   **Cards:** Forbid divider lines. Use `surface-container-low` for the card body and `surface-container-highest` for internal headers or footers to create internal hierarchy.
*   **List Items:** Use vertical spacing (`spacing-4`) and a subtle `surface` shift on hover. Leading elements (icons or owl avatars) should be encased in a `secondary` circular container.

### The "Wise Guide" Mascot Integration
The mascot from the reference imagery is an active UI element.
*   **Contextual Tooltips:** The owl should "peek" from the side of tooltips, using `secondary` as the speech bubble color.
*   **Empty States:** Use the owl in various "Midnight Festival" scenarios (holding a lantern, looking through a telescope) to provide warmth and reduce friction.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use `ROUND_FULL` for all interactive elements to maintain the "Playful" brand pillar.
*   **Do** embrace negative space. The "Midnight" aesthetic requires breathing room for the "Hearth" elements to shine.
*   **Do** use the Spacing Scale strictly. Consistent rhythmic gaps replace the need for borders.

### Don't:
*   **Don't** use pure white (#FFFFFF) for text. Use `on-surface` (#e1e4fa) to prevent eye strain on dark backgrounds.
*   **Don't** use 90-degree angles. This system is organic and communal; sharp corners break the "Soft Rounded" promise.
*   **Don't** use standard "Grey" shadows. Shadows should be deep indigos or translucent blacks to keep the "Midnight" palette pure.