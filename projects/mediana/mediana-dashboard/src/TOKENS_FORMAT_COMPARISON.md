# Tokens Format: Figma vs CSS

This document explains the difference between the token format in `tokens.json` (for Figma) and how they're used in CSS.

---

## 📋 Format Overview

### Tokens Studio for Figma Format (`tokens.json`)

```json
{
  "global": {
    "colors": {
      "brand": {
        "teal": {
          "600": {
            "value": "#4A8B82",
            "type": "color",
            "description": "Accessible teal"
          }
        }
      }
    },
    "spacing": {
      "4": {
        "value": "16",
        "type": "spacing",
        "description": "16px - Standard padding"
      }
    },
    "fontSize": {
      "base": {
        "value": "15",
        "type": "fontSizes",
        "description": "Base font size"
      }
    }
  }
}
```

**Key Features:**
- ✅ Wrapped in `"global"` object
- ✅ Numeric values are **strings without units** (e.g., `"16"` for spacing)
- ✅ Has `type` field (color, spacing, fontSizes, etc.)
- ✅ Includes `description` field
- ✅ Works with Tokens Studio for Figma plugin

### CSS Variables Format (`globals.css`)

```css
:root {
  --teal-600: #4A8B82;
  --spacing-4: 16px;
  --font-size-base: 15px;
}
```

**Key Features:**
- ✅ Direct CSS variable declarations
- ✅ Numeric values **include units** (e.g., `16px`, `15px`)
- ✅ No type or description (just the value)
- ✅ Used directly by browsers and Tailwind

---

## 🔄 Token Path Differences

### In tokens.json (Figma)
```
global.colors.brand.teal.600
global.spacing.4
global.fontSize.base
global.borderRadius.lg
```

### In CSS (Implementation)
```css
--teal-600
--spacing-4 (or just Tailwind p-4)
--font-size-base (or html { font-size: 15px; })
--radius-lg
```

### In Documentation
Often referenced as:
```
colors.brand.teal.600
spacing.4
fontSize.base
```

---

## 📊 Value Format Comparison

| Token Type | Figma tokens.json | CSS globals.css | Notes |
|------------|------------------|-----------------|-------|
| **Color** | `"#4A8B82"` | `#4A8B82` | Same (hex with #) |
| **Spacing** | `"16"` | `16px` or `1rem` | Figma: no unit, CSS: with unit |
| **Font Size** | `"15"` | `15px` | Figma: no unit, CSS: with unit |
| **Border Radius** | `"10"` | `10px` or `0.625rem` | Figma: no unit, CSS: with unit |
| **Font Weight** | `"500"` | `500` | Both unitless |
| **Line Height** | `"1.5"` | `1.5` | Both unitless |
| **Opacity** | `"0.5"` | `0.5` | Both unitless (0-1) |
| **Border Width** | `"2"` | `2px` | Figma: no unit, CSS: with unit |

---

## 🎯 Why Different Formats?

### Tokens Studio Format
- **Universal**: Can be used across platforms (Figma, iOS, Android, Web)
- **Platform Agnostic**: No units = can be converted to any unit system
- **Transformable**: Can generate different outputs (px, rem, pt, dp)
- **Structured**: Type system helps tools understand token purpose

### CSS Format
- **Browser Ready**: Direct CSS that browsers understand
- **No Build Step**: Works immediately in web apps
- **Tailwind Compatible**: Integrates with Tailwind v4
- **Runtime**: Can be changed without recompiling

---

## 📝 Common Token Mappings

### Colors (Same format)

| tokens.json | CSS | Value |
|-------------|-----|-------|
| `global.colors.brand.teal.600` | `--teal-600` | `#4A8B82` |
| `global.colors.semantic.primary` | `--primary` | `#4A8B82` |
| `global.colors.semantic.destructive` | `--destructive` | `#dc2626` |

**Note**: Color values are identical in both formats.

### Spacing (Different units)

| tokens.json | Value | CSS | Value |
|-------------|-------|-----|-------|
| `global.spacing.1` | `"4"` | Tailwind `p-1` | `0.25rem` (4px) |
| `global.spacing.4` | `"16"` | Tailwind `p-4` | `1rem` (16px) |
| `global.spacing.6` | `"24"` | Tailwind `p-6` | `1.5rem` (24px) |

**Note**: Figma tokens use raw pixel values (as strings), CSS uses rem.

### Typography (Different units)

| tokens.json | Value | CSS | Value |
|-------------|-------|-----|-------|
| `global.fontSize.base` | `"15"` | `--font-size: 15px` | `15px` |
| `global.fontSize.lg` | `"18"` | H3 default | `1.125rem` (18px) |
| `global.fontSize.2xl` | `"24"` | H1 default | `1.5rem` (24px) |

### Weights & Heights (Same format)

| tokens.json | Value | CSS | Value |
|-------------|-------|-----|-------|
| `global.fontWeights.medium` | `"500"` | `--font-weight-medium` | `500` |
| `global.lineHeights.normal` | `"1.5"` | Applied to elements | `1.5` |
| `global.opacity.50` | `"0.5"` | Used via Tailwind | `0.5` |

---

## 🛠️ How to Use Each Format

### Using tokens.json (Figma)

1. **Import to Figma**:
   ```
   Tokens Studio plugin → Import → Paste tokens.json
   ```

2. **Apply in Figma**:
   - Select element
   - Click token in plugin
   - Token applied to element

3. **Create Styles**:
   - Right-click token → Create style
   - Reusable Figma color/text style

**See**: `/FIGMA_TOKENS_GUIDE.md` for complete instructions

### Using CSS Variables (Web)

1. **Already Implemented** in `globals.css`:
   ```css
   :root {
     --primary: #4A8B82;
     --spacing-4: 1rem;
   }
   ```

2. **Use in Components**:
   ```tsx
   // Via Tailwind
   <div className="p-4 text-teal bg-primary">
   
   // Via CSS variables
   <div style={{ color: 'var(--primary)' }}>
   ```

3. **Automatic Application**:
   - Typography auto-applied to `<h1>`, `<p>`, etc.
   - Components use semantic tokens

---

## 🔄 Conversion Examples

### Example 1: Primary Color

**Figma tokens.json**:
```json
{
  "global": {
    "colors": {
      "semantic": {
        "primary": {
          "value": "#4A8B82",
          "type": "color"
        }
      }
    }
  }
}
```

**CSS globals.css**:
```css
:root {
  --primary: #4A8B82;
}
```

**Usage**:
- Figma: Apply `colors.semantic.primary` to fill
- Web: `<Button variant="default">` uses `--primary`

### Example 2: Spacing

**Figma tokens.json**:
```json
{
  "global": {
    "spacing": {
      "6": {
        "value": "24",
        "type": "spacing",
        "description": "24px - Page padding"
      }
    }
  }
}
```

**CSS globals.css**:
```css
/* Spacing handled by Tailwind */
/* p-6 = padding: 1.5rem (24px) */
```

**Usage**:
- Figma: Set padding to `spacing.6` (24px)
- Web: `<div className="p-6">` (24px padding)

### Example 3: Typography

**Figma tokens.json**:
```json
{
  "global": {
    "fontSize": {
      "base": {
        "value": "15",
        "type": "fontSizes"
      }
    },
    "fontWeights": {
      "medium": {
        "value": "500",
        "type": "fontWeights"
      }
    }
  }
}
```

**CSS globals.css**:
```css
:root {
  --font-size: 15px;
  --font-weight-medium: 500;
}

html {
  font-size: var(--font-size);
}

label {
  font-weight: var(--font-weight-medium);
}
```

**Usage**:
- Figma: Text layer with `fontSize.base` + `fontWeights.medium`
- Web: `<label>` automatically styled with both

---

## ⚠️ Important Notes

### 1. Token Paths
- **Figma**: Full path includes `global` prefix
- **Documentation**: Often omits `global` for brevity
- **CSS**: Variables don't include the full path

### 2. Spacing Units
- **Figma tokens**: Always pixels (as numbers without units)
- **CSS**: Can be `px`, `rem`, `em` - we use `rem` for responsiveness
- **1rem = 16px by default**, but our base is 15px

### 3. Type Field
- **Required in Figma**: Tells plugin how to interpret value
- **Not in CSS**: CSS knows based on context

### 4. Semantic vs Brand
- **Brand colors**: `colors.brand.teal.600` = specific color
- **Semantic colors**: `colors.semantic.primary` = purpose-based
- **Prefer semantic** in components for easier theming

---

## 📚 Related Documentation

| File | Purpose |
|------|---------|
| `/tokens.json` | Figma Tokens Studio format |
| `/styles/globals.css` | CSS variable implementation |
| `/FIGMA_TOKENS_GUIDE.md` | How to import to Figma |
| `/TOKEN_CSS_MAPPING.md` | Token to CSS mapping |
| `/TOKENS_EXPLAINED.md` | Design token system overview |

---

## ✅ Quick Reference

**Import to Figma?**
→ Use `/tokens.json` with Tokens Studio plugin

**Use in React/CSS?**
→ Tokens already in `/styles/globals.css`

**Find a color value?**
→ Check `/design-system` showcase or `tokens.json`

**Map token to CSS variable?**
→ See `/TOKEN_CSS_MAPPING.md`

**Update a token?**
→ Update both `tokens.json` AND `globals.css`

---

**Last Updated**: October 21, 2025
