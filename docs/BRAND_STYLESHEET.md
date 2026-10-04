# Eve Count Brand & Canva Stylesheet

**Source Repository:** `evecount_repo`  
**Target:** Canva Presentations, Brand Kit, and Web Design System  
**Aesthetic:** Deep-Tech Stealth Venture Studio | Architectural | High-Contrast Dark Mode

---

## 1. Quick-Copy Palette (Canva Brand Kit)

| Role | Name | HEX Code | CSS Variable | Recommended Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Canvas / Background** | Deep Obsidian | `#09090B` | `--background` (`240 10% 3.9%`) | Full slide background, dark mode foundation |
| **Primary Text** | Crisp Off-White | `#FAFAFA` | `--foreground` (`0 0% 98%`) | Headlines, main titles, high contrast |
| **Muted Text / Secondary**| Mid Gray | `#999999` | `--muted-foreground` (`0 0% 60%`) | Subtitles, body descriptions, slide numbers |
| **Primary Accent / Rings**| Brushed Titanium | `#A1A1A1` | `--primary` / `--ring` (`0 0% 63%`) | Key highlights, active tags, subtle dividers |
| **Card / Surface Fill** | Dark Slate Charcoal | `#313135` | `--secondary` / `--accent` (`240 5% 20%`) | Container cards, callout boxes, pill button fills |
| **Hairline Dividers** | Border Zinc | `#252528` | `--border` / `--input` (`240 5% 15%`) | 1px hairline border lines, container outlines |
| **Steel Gradient Start** | Brushed Platinum | `#BFBFBF` | `hsl(0, 0%, 75%)` | Text gradient start / metallic sheen |
| **Steel Gradient End** | Industrial Steel | `#808080` | `hsl(0, 0%, 50%)` | Text gradient end / metallic contrast |

### Quantum & Data Visualization Accents
Use sparingly for charts, stat callouts, diagnostic alert tags, and status badges:

- **Signal Coral / Flame:** `#E76E50` (`--chart-1`)
- **Quantum Teal:** `#2A9D8F` (`--chart-2`)
- **Abyssal Navy:** `#264653` (`--chart-3`)
- **Warm Gold:** `#E9C46A` (`--chart-4`)
- **Solar Amber:** `#F4A261` (`--chart-5`)

---

## 2. Typography Rules

| Role | Primary Font (Canva) | Alternative | Weight | Styling & Spacing |
| :--- | :--- | :--- | :--- | :--- |
| **Display / H1** | **`Inter`** (or `Inter Tight`) | `Outfit`, `Archivo` | **Extra Bold (800)** | Tracking tight (`-0.03em`), high contrast against dark background |
| **Section Headings / H2**| **`Inter`** | `Roboto` | **Semi Bold (600)** | Architectural, clean, crisp |
| **Body / Diagnostic** | **`Inter`** | `Helvetica` | **Regular (400)** | Generous line-height (`1.5` – `1.6`), `#999999` or `#FAFAFA` |
| **Tags / Metrics / Code** | **`JetBrains Mono`** | `Space Mono` | **Bold (700)** | Uppercase, wide letter-spacing (`+0.1em`), inside `#313135` pill |

---

## 3. Copy-Paste Canva AI / Magic Design Prompt

Paste this directly into Canva's Magic Design / AI prompt box when generating or styling presentations:

```text
Apply the Eve Count stealth venture design style:
- Background: Deep Obsidian #09090B
- Text: Crisp off-white #FAFAFA for headers, cool gray #999999 for body and subtitles
- Accent & Card Fills: Dark slate #313135 with subtle 1px hairline borders in #252528
- Brand Gradient: Brushed steel gradient from #BFBFBF to #808080 for highlighted keywords
- Typography: Inter ExtraBold for headlines, Inter Regular for body text, Space Mono or JetBrains Mono for metrics and category tags
- Aesthetic: Deep-tech, stealth venture studio, architectural, clean-box, high-contrast, zero clutter.
```

---

## 4. Web CSS Design Tokens (`globals.css`)

```css
:root {
  /* Canvas & Text */
  --background: 240 10% 3.9%;         /* #09090B */
  --foreground: 0 0% 98%;             /* #FAFAFA */
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  
  /* Primary & Slate Grays */
  --primary: 0 0% 63%;                /* #A1A1A1 */
  --primary-foreground: 240 10% 3.9%; /* #09090B */
  --secondary: 240 5% 20%;            /* #313135 */
  --secondary-foreground: 0 0% 98%;   /* #FAFAFA */
  --muted: 240 5% 20%;                /* #313135 */
  --muted-foreground: 0 0% 60%;       /* #999999 */
  --accent: 240 5% 20%;               /* #313135 */
  --accent-foreground: 0 0% 98%;      /* #FAFAFA */
  --border: 240 5% 15%;               /* #252528 */
  --ring: 0 0% 63%;                   /* #A1A1A1 */

  /* Metallic Gradient */
  --steel-start: #BFBFBF;             /* hsl(0, 0%, 75%) */
  --steel-end: #808080;               /* hsl(0, 0%, 50%) */

  /* Data Visualization */
  --chart-1: 12 76% 61%;              /* #E76E50 */
  --chart-2: 173 58% 39%;             /* #2A9D8F */
  --chart-3: 197 37% 24%;             /* #264653 */
  --chart-4: 43 74% 66%;              /* #E9C46A */
  --chart-5: 27 87% 67%;              /* #F4A261 */
}

.steel-gradient {
  background: linear-gradient(145deg, hsl(0, 0%, 75%), hsl(0, 0%, 50%));
}
```
