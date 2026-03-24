# Design System Strategy: The Nocturnal Sanctuary

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Nocturnal Sanctuary."** 

Unlike standard PWAs that rely on sterile white backgrounds and rigid grids, this system is designed to mimic the quiet, focused energy of a forest at midnight. It moves away from the "template" look by utilizing heavy editorial whitespace, intentional asymmetry, and deep, tonal layering. We are building an environment that feels wise and calm—where information isn't just displayed, it is "illuminated." 

Through the use of overlapping elements (e.g., a card bleeding off the edge or a floating "moon" CTA), we challenge the mobile viewport's constraints to create an experience that feels expansive and premium.

---

## 2. Colors: Depth and Illumination
Our palette is rooted in the transition from deep forest shadows to the soft glow of moonlight. We use a "Dark Mode First" philosophy to ensure the 'nocturnal' vibe is central to the identity.

*   **Primary (#b5c4ff / #364984):** The Midnight Blue core. Use these for high-level structure and deep-sea containers.
*   **Secondary (#ffb783 / #fb8300):** The Moonlit Yellow. This is your light source. Use it sparingly for interactive highlights and "glow" effects.
*   **Tertiary (#aecfab / #365337):** The Forest Green. This provides the "Cozy" warmth, used for success states or organic accents.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to section content. Traditional borders create visual noise that breaks the "Calm" vibe.
*   **Boundaries through Shift:** Define sections solely through background shifts. For instance, a `surface-container-low` card sitting on a `surface` background provides all the definition needed.
*   **The Glass & Gradient Rule:** For hero sections and primary CTAs, use subtle gradients transitioning from `primary` to `primary-container`. Floating elements should utilize Glassmorphism: `surface` colors at 70% opacity with a `backdrop-blur` of 12px to 20px.

---

## 3. Typography: The Editorial Voice
We utilize a high-contrast typographic scale to create an "Editorial" feel that guides the eye with wisdom and authority.

*   **Display & Headline (Plus Jakarta Sans):** Our "Modern yet Approachable" voice. These should be set with generous leading and occasional intentional asymmetry (e.g., left-aligned headers with right-aligned body text).
*   **Title & Body (Inter):** Chosen for its exceptional legibility on mobile screens. While headers are the "Wise" personality, Inter is the "Focused" functional tool.
*   **Hierarchy as Brand:** Use `display-lg` for moments of reflection and `label-sm` for technical data. Never crowd the text; if the "Sanctuary" feels cramped, increase the vertical spacing.

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is a physical property, not a drop shadow. We stack surfaces like layers of misty air in a forest.

*   **The Layering Principle:** Strive for "Natural Lift." Place a `surface-container-highest` element (like a featured owl insight) over a `surface-container-low` background. The color shift creates the hierarchy without the need for dated UI tropes.
*   **Ambient Shadows:** If a floating action button (FAB) or modal requires a shadow, it must be an **Ambient Glow.** Use large blur values (24px+) at 6% opacity. The shadow color must be a tinted version of `primary` or `secondary`, never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a container boundary, use the `outline-variant` token at **15% opacity**. It should be barely perceptible—a "ghost" of a line.

---

## 5. Components: Softness and Intent

### Buttons
*   **Primary:** Rounded at `xl` (1.5rem). Use a subtle moonlight glow (a soft outer shadow using the `secondary` token).
*   **Tertiary:** Text-only with an underline that only appears on hover/focus, maintaining a clean, "Focused" interface.

### Chips
*   Used for filtering forest "topics." These should use `surface-container-high` with `full` rounding (pill shape). When selected, they should transition to the `secondary-container` color.

### Cards & Lists
*   **Strict Rule:** No divider lines between list items. Use `spacing-6` (1.5rem) of vertical whitespace or a alternating `surface` color shift to distinguish items.
*   **Interactivity:** Cards should have a subtle "lift" on press/hover, achieved by shifting from `surface-container-low` to `surface-container-high`.

### Input Fields
*   Fields should not be boxes. Use a "Soft Inset" look using `surface-container-lowest` against a `surface` background. Keep corners at `md` (0.75rem) to balance the extreme roundness of buttons.

### Signature Component: "The Moonlight Pulse"
*   For active states or notifications, use a slow-pulsing radial gradient background behind an icon using `secondary_fixed_dim`. This mimics the breathing of a sleeping owl.

---

## 6. Do's and Don'ts

### Do:
*   **DO** use whitespace as a functional element. Let the content breathe.
*   **DO** use the `xl` and `lg` rounding scales to mimic the soft, organic lines of the nocturnal owl illustration.
*   **DO** overlap elements (e.g., an image overlapping a text container) to create a sense of bespoke, high-end layout.

### Don't:
*   **DON'T** use high-contrast white on pure black. Stick to the `on-surface` and `surface` tokens to maintain the "Calm" nocturnal vibe.
*   **DON'T** use sharp corners. 0px or 4px corners are strictly forbidden in this system as they break the "Cozy" brand pillar.
*   **DON'T** use standard system alerts. Toast notifications and modals should feel like integrated "layers" of the UI, using glassmorphism and soft glows.