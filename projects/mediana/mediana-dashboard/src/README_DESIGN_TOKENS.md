# Mediana Design Tokens - Complete Guide

Welcome to the Mediana VoIP Dashboard design token system! This README will help you get started quickly.

---

## 🚀 Quick Links

| I want to... | Go here |
|--------------|---------|
| **Import tokens to Figma** (5 min) | [`FIGMA_QUICK_START.md`](/FIGMA_QUICK_START.md) ⭐ |
| **Learn Figma integration** (detailed) | [`FIGMA_TOKENS_GUIDE.md`](/FIGMA_TOKENS_GUIDE.md) |
| **Understand token formats** | [`TOKENS_FORMAT_COMPARISON.md`](/TOKENS_FORMAT_COMPARISON.md) |
| **See Figma integration summary** | [`FIGMA_INTEGRATION_SUMMARY.md`](/FIGMA_INTEGRATION_SUMMARY.md) |
| **Map tokens to CSS** | [`TOKEN_CSS_MAPPING.md`](/TOKEN_CSS_MAPPING.md) |
| **Understand the system** | [`TOKENS_EXPLAINED.md`](/TOKENS_EXPLAINED.md) |
| **Use in development** | [`DESIGN_SYSTEM_README.md`](/DESIGN_SYSTEM_README.md) |
| **Browse all files** | [`DESIGN_SYSTEM_FILES.md`](/DESIGN_SYSTEM_FILES.md) |
| **See what was built** | [`IMPLEMENTATION_SUMMARY.md`](/IMPLEMENTATION_SUMMARY.md) |
| **View interactive showcase** | Open app → `/design-system` route |

---

## 🎨 For Designers (Figma)

### Step 1: Import Tokens (5 minutes)

1. **Install Plugin**
   - Open Figma
   - Install "Tokens Studio for Figma" plugin
   - [Plugin Link](https://www.figma.com/community/plugin/843461159747178978)

2. **Copy Tokens**
   - Open [`/tokens.json`](/tokens.json)
   - Copy entire file (Cmd/Ctrl + A, then Cmd/Ctrl + C)

3. **Import to Figma**
   - Open Tokens Studio plugin in Figma
   - Settings ⚙️ → Import
   - Paste tokens
   - Click Import

4. **Verify**
   - You should see: colors, spacing, borderRadius, fontSize, etc.
   - Total: 115+ tokens

**📖 Detailed Guide**: See [`FIGMA_QUICK_START.md`](/FIGMA_QUICK_START.md)

---

### Step 2: Use Tokens

**Apply Colors:**
- Select element → Plugin → colors.semantic.primary → Click

**Apply Spacing:**
- Auto Layout frame → Plugin → spacing.6 → Apply to padding

**Apply Shadows:**
- Select element → Plugin → boxShadow.md → Click

**Create Components:**
- Use tokens for all properties
- Example: Button with `primary` color + `spacing.4` padding

**📖 Complete Guide**: See [`FIGMA_TOKENS_GUIDE.md`](/FIGMA_TOKENS_GUIDE.md)

---

## 💻 For Developers (Web)

### Tokens Are Already Implemented!

**Where:**
- Design tokens: [`/tokens.json`](/tokens.json) (Figma format)
- CSS variables: [`/styles/globals.css`](/styles/globals.css) (web implementation)
- Interactive showcase: `/design-system` route in the app

### Using Tokens in Code

**Method 1: Tailwind Classes** (Recommended)
```tsx
<div className="p-6 text-teal bg-primary">
  {/* p-6 = spacing.6 (24px) */}
  {/* text-teal = colors.brand.teal.600 */}
  {/* bg-primary = colors.semantic.primary */}
</div>
```

**Method 2: Component Variants**
```tsx
<Button variant="default">      {/* Uses --primary */}
<Badge variant="destructive">   {/* Uses --destructive */}
<Button variant="secondary">    {/* Uses --secondary */}
```

**Method 3: Direct CSS Variables**
```tsx
<div style={{ color: 'var(--teal-600)' }}>
  Custom element
</div>
```

**📖 Full Guide**: See [`DESIGN_SYSTEM_README.md`](/DESIGN_SYSTEM_README.md)

---

## 📋 What's in tokens.json

### Token Categories (115+ tokens)

```
✅ colors (50+ tokens)
   ├── brand (teal scale, white, black, darkGray)
   ├── semantic (primary, destructive, success, border, etc.)
   ├── sidebar (background, foreground, primary, accent)
   └── chart (5 chart colors)

✅ spacing (13 tokens)
   └── 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24

✅ borderRadius (8 tokens)
   └── none, sm, md, base, lg, xl, 2xl, full

✅ fontFamilies (2 tokens)
   └── base, mono

✅ fontWeights (4 tokens)
   └── normal, medium, semibold, bold

✅ fontSize (7 tokens)
   └── xs, sm, base, lg, xl, 2xl, 3xl

✅ lineHeights (4 tokens)
   └── tight, normal, relaxed, loose

✅ letterSpacing (3 tokens)
   └── tight, normal, wide

✅ opacity (4 tokens)
   └── 0, 50, 75, 100

✅ borderWidth (4 tokens)
   └── 0, 1, 2, 4

✅ sizing (11 tokens)
   ├── icon (xs, sm, md, lg, xl)
   ├── button (sm, md, lg)
   └── avatar (sm, md, lg, xl)

✅ boxShadow (5 tokens)
   └── sm, md, lg, xl, none
```

---

## 🔄 Token Format

### Figma Format (tokens.json)

```json
{
  "global": {
    "colors": {
      "semantic": {
        "primary": {
          "value": "#4A8B82",
          "type": "color",
          "description": "Primary action color"
        }
      }
    },
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

**Key Points:**
- ✅ Wrapped in `"global"` object
- ✅ Numeric values as **strings without units**
- ✅ Has `type` field for each token
- ✅ Includes helpful descriptions

### CSS Format (globals.css)

```css
:root {
  --primary: #4A8B82;
  --spacing-6: 1.5rem;  /* 24px */
}
```

**Key Points:**
- ✅ Direct CSS variables
- ✅ Numeric values **with units** (px, rem)
- ✅ Used by Tailwind and components

**📖 Format Details**: See [`TOKENS_FORMAT_COMPARISON.md`](/TOKENS_FORMAT_COMPARISON.md)

---

## 🎯 Mediana Brand Colors

### Primary Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| **Teal 200** (Light) | `#9AC6BD` | Backgrounds, decorative elements |
| **Teal 600** (Accessible) | `#4A8B82` | Text, buttons, interactive elements ⭐ |
| **Dark Gray** | `#262626` | Sidebar, text, dark UI elements |
| **White** | `#ffffff` | Backgrounds, light UI |
| **Black** | `#000000` | Dark mode backgrounds |

### Semantic Colors

| Token | Value | Purpose |
|-------|-------|---------|
| **Primary** | `#4A8B82` | Main actions, primary buttons |
| **Destructive** | `#dc2626` | Errors, delete actions |
| **Success** | `#4A8B82` | Success states, confirmations |
| **Border** | `#e5e7eb` | Borders, dividers |
| **Muted** | `#f5f5f5` | Subtle backgrounds |

**📊 Full Color Reference**: Open `/design-system` → Colors tab

---

## 📏 Spacing Scale

| Token | Pixels | Common Use |
|-------|--------|------------|
| `spacing.2` | 8px | Tight padding, small gaps |
| `spacing.4` | 16px | Standard padding ⭐ |
| `spacing.6` | 24px | Page/card padding ⭐ |
| `spacing.8` | 32px | Large spacing |

**Usage in Code:**
```tsx
<div className="p-4">      {/* 16px padding */}
<div className="p-6">      {/* 24px padding */}
<div className="space-y-4"> {/* 16px vertical gaps */}
```

**📐 Full Spacing Reference**: Open `/design-system` → Spacing tab

---

## 📝 Typography

### Font Sizes

| Token | Size | Usage |
|-------|------|-------|
| `fontSize.base` | 15px | Body text ⭐ |
| `fontSize.sm` | 14px | Sidebar items |
| `fontSize.lg` | 18px | H3, page headers |
| `fontSize.2xl` | 24px | H1 headings |

### Font Weights

| Token | Weight | Usage |
|-------|--------|-------|
| `fontWeights.normal` | 400 | Body text |
| `fontWeights.medium` | 500 | Labels, buttons ⭐ |
| `fontWeights.bold` | 700 | Headings |

**Auto-Applied:** Typography is automatically applied to `<h1>`, `<p>`, `<label>`, etc.

**📖 Typography Guide**: Open `/design-system` → Typography tab

---

## 🔗 Design-Development Workflow

### Perfect Sync

```
1. DESIGNER in Figma
   ↓
   Imports tokens.json to Tokens Studio
   ↓
   Creates designs using token values
   ↓
   Exports/hands off to development

2. DEVELOPER in Code
   ↓
   Uses same tokens (already in globals.css)
   ↓
   Builds components with exact values
   ↓
   Perfect match with designs! ✅
```

### Keeping in Sync

**Manual Sync:**
1. Update `tokens.json`
2. Update `globals.css` with same values
3. Re-import to Figma

**Auto Sync (Recommended):**
1. Set up GitHub sync in Tokens Studio
2. Plugin auto-updates when tokens change
3. No manual work needed! ✅

**📖 Sync Guide**: See [`FIGMA_TOKENS_GUIDE.md`](/FIGMA_TOKENS_GUIDE.md) → "Keeping Tokens Synced"

---

## 📚 Documentation Files

### 🎨 Figma Integration (NEW!)
- **[`FIGMA_QUICK_START.md`](/FIGMA_QUICK_START.md)** - 5-minute import guide ⭐
- **[`FIGMA_TOKENS_GUIDE.md`](/FIGMA_TOKENS_GUIDE.md)** - Complete Figma guide
- **[`TOKENS_FORMAT_COMPARISON.md`](/TOKENS_FORMAT_COMPARISON.md)** - Format differences
- **[`FIGMA_INTEGRATION_SUMMARY.md`](/FIGMA_INTEGRATION_SUMMARY.md)** - What was built

### 🔧 Token System
- **[`tokens.json`](/tokens.json)** - Token definitions (Figma format)
- **[`TOKENS_EXPLAINED.md`](/TOKENS_EXPLAINED.md)** - How tokens work
- **[`TOKEN_CSS_MAPPING.md`](/TOKEN_CSS_MAPPING.md)** - Token → CSS mapping

### 💻 Development
- **[`DESIGN_SYSTEM_README.md`](/DESIGN_SYSTEM_README.md)** - Main dev guide
- **[`DESIGN_SYSTEM_FILES.md`](/DESIGN_SYSTEM_FILES.md)** - File index
- **[`IMPLEMENTATION_SUMMARY.md`](/IMPLEMENTATION_SUMMARY.md)** - What was built
- **`/design-system` route** - Interactive showcase

---

## ✅ Quick Start Checklist

### For Designers
- [ ] Install Tokens Studio for Figma plugin
- [ ] Copy `/tokens.json`
- [ ] Import to Figma
- [ ] Verify all categories appear
- [ ] Apply first color token
- [ ] Create primary button component
- [ ] Set up GitHub sync (optional)

### For Developers
- [ ] Review `/design-system` showcase
- [ ] Read `DESIGN_SYSTEM_README.md`
- [ ] Check `TOKEN_CSS_MAPPING.md` for reference
- [ ] Understand CSS variables in `globals.css`
- [ ] Use Tailwind classes with tokens
- [ ] Build components matching Figma

---

## 🎯 Key Features

### ✅ 115+ Design Tokens
- Comprehensive coverage of colors, spacing, typography, effects
- Organized by purpose (brand, semantic, component-specific)
- Accessibility-compliant color contrast ratios

### ✅ Figma Integration
- Import directly to Figma Tokens Studio plugin
- Create components with token-based styles
- Auto-sync with GitHub for updates
- Perfect design-dev consistency

### ✅ CSS Implementation
- All tokens as CSS variables in `globals.css`
- Tailwind-compatible naming
- Automatic typography application
- Dark mode support

### ✅ Interactive Showcase
- Visual reference at `/design-system` route
- 6 tabs: Colors, Typography, Spacing, Components, Tokens, Mapping
- Live examples and code snippets
- Component playground

### ✅ Complete Documentation
- 11 documentation files covering all aspects
- Quick start guides for rapid onboarding
- Detailed guides for in-depth understanding
- Format comparisons and mappings

---

## 🚀 Get Started Now

### Designers
1. Open [`FIGMA_QUICK_START.md`](/FIGMA_QUICK_START.md)
2. Follow the 5-minute guide
3. Start designing with tokens!

### Developers
1. Open app → `/design-system` route
2. Browse the token showcase
3. Read [`DESIGN_SYSTEM_README.md`](/DESIGN_SYSTEM_README.md)
4. Start building with tokens!

---

## 🆘 Need Help?

| Question | Answer |
|----------|--------|
| How do I import to Figma? | See [`FIGMA_QUICK_START.md`](/FIGMA_QUICK_START.md) |
| Why are Figma values different? | See [`TOKENS_FORMAT_COMPARISON.md`](/TOKENS_FORMAT_COMPARISON.md) |
| How do I use in code? | See [`DESIGN_SYSTEM_README.md`](/DESIGN_SYSTEM_README.md) |
| Where's the color mapping? | See [`TOKEN_CSS_MAPPING.md`](/TOKEN_CSS_MAPPING.md) or `/design-system` → Mapping tab |
| What's the complete guide? | See [`FIGMA_TOKENS_GUIDE.md`](/FIGMA_TOKENS_GUIDE.md) |

---

## 📊 Stats

- **Total Tokens**: 115+
- **Documentation Files**: 11
- **Token Categories**: 12
- **Color Tokens**: 50+
- **Component Sizes**: 11
- **Shadow Effects**: 5
- **Status**: ✅ Production Ready

---

**🎉 Your design system is ready for Figma and development!**

**Last Updated**: October 21, 2025  
**Mediana VoIP Dashboard Design System**
