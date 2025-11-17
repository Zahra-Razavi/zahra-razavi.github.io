# Figma Tokens Studio Integration Guide

This guide explains how to import the Mediana design tokens into Figma using the **Tokens Studio for Figma** plugin.

---

## 📋 Prerequisites

1. **Figma account** with edit access to your file
2. **Tokens Studio for Figma plugin** installed
   - Install from: https://www.figma.com/community/plugin/843461159747178978/Tokens-Studio-for-Figma

---

## 🚀 Import Process

### Step 1: Open Tokens Studio Plugin

1. Open your Figma file
2. Go to **Plugins** → **Tokens Studio for Figma**
3. The plugin panel will open on the right side

### Step 2: Prepare the Token File

1. Open `/tokens.json` in your code editor
2. Copy the **entire contents** of the file
3. Make sure you copy everything from the opening `{` to the closing `}`

### Step 3: Import into Figma

**Method A: Import from JSON**
1. In the Tokens Studio plugin, click the **Settings** icon (⚙️) in the top right
2. Click **"Import"** or **"Load from JSON"**
3. Paste the entire contents of `tokens.json`
4. Click **"Import"**

**Method B: Use File Storage**
1. In plugin settings, go to **"Sync"** tab
2. Choose your preferred sync method (GitHub, GitLab, etc.)
3. Connect to your repository
4. The plugin will automatically sync the `tokens.json` file

### Step 4: Apply Tokens

Once imported, you'll see all token categories in the plugin:

```
✅ colors (50+ tokens)
✅ spacing (13 tokens)
✅ borderRadius (8 tokens)
✅ fontFamilies (2 tokens)
✅ fontWeights (4 tokens)
✅ fontSize (7 tokens)
✅ lineHeights (4 tokens)
✅ letterSpacing (3 tokens)
✅ opacity (4 tokens)
✅ borderWidth (4 tokens)
✅ sizing (11 tokens)
✅ boxShadow (5 tokens)
```

---

## 🎨 Token Categories Explained

### Colors
All color tokens from the Mediana design system:

**Brand Colors:**
- `colors.brand.teal.50` → `#f0f9f7` (Very light teal)
- `colors.brand.teal.200` → `#9AC6BD` (Main brand teal)
- `colors.brand.teal.600` → `#4A8B82` (Accessible teal)
- `colors.brand.darkGray` → `#262626` (Dark gray)
- `colors.brand.white` → `#ffffff` (White)
- `colors.brand.black` → `#000000` (Black)

**Semantic Colors:**
- `colors.semantic.primary` → Main action color
- `colors.semantic.destructive` → Error/delete states
- `colors.semantic.success` → Success states
- `colors.semantic.border` → Border colors
- etc.

**Sidebar Colors:**
- `colors.sidebar.background` → Sidebar background
- `colors.sidebar.foreground` → Sidebar text
- etc.

**Chart Colors:**
- `colors.chart.1` through `colors.chart.5`

### Spacing
Consistent spacing scale (in pixels):
- `spacing.0` → 0px
- `spacing.1` → 4px
- `spacing.2` → 8px
- `spacing.4` → 16px (Standard padding)
- `spacing.6` → 24px (Page padding)
- `spacing.8` → 32px
- etc.

### Border Radius
- `borderRadius.none` → 0px
- `borderRadius.sm` → 4px
- `borderRadius.base` → 10px (Default)
- `borderRadius.full` → 9999px (Fully rounded)

### Typography

**Font Families:**
- `fontFamilies.base` → System font stack
- `fontFamilies.mono` → Monospace fonts

**Font Sizes:**
- `fontSize.xs` → 12px
- `fontSize.sm` → 14px (Sidebar)
- `fontSize.base` → 15px (Body text)
- `fontSize.lg` → 18px (H3, Headers)
- `fontSize.xl` → 20px (H2)
- `fontSize.2xl` → 24px (H1)

**Font Weights:**
- `fontWeights.normal` → 400
- `fontWeights.medium` → 500
- `fontWeights.semibold` → 600
- `fontWeights.bold` → 700

**Line Heights:**
- `lineHeights.tight` → 1.25
- `lineHeights.normal` → 1.5 (Default)
- `lineHeights.relaxed` → 1.75

### Sizing
Component-specific sizes:

**Icons:**
- `sizing.icon.sm` → 16px
- `sizing.icon.md` → 20px
- `sizing.icon.lg` → 24px

**Buttons:**
- `sizing.button.sm` → 32px
- `sizing.button.md` → 36px (Default)
- `sizing.button.lg` → 40px

**Avatars:**
- `sizing.avatar.sm` → 24px
- `sizing.avatar.md` → 32px
- `sizing.avatar.lg` → 40px

### Box Shadows
- `boxShadow.sm` → Small shadow
- `boxShadow.md` → Medium shadow (Default)
- `boxShadow.lg` → Large shadow
- `boxShadow.xl` → Extra large shadow
- `boxShadow.none` → No shadow

---

## 🎯 How to Use Tokens in Figma

### Applying Color Tokens

1. Select an element (frame, shape, text, etc.)
2. In the Tokens Studio plugin, navigate to **colors**
3. Find the token you want (e.g., `colors.semantic.primary`)
4. Click on the token name
5. The color will be applied to your selection

**Creating Styles:**
- You can create Figma color styles from tokens
- Right-click a token → **"Create style"**
- This creates a reusable color style linked to the token

### Applying Typography Tokens

1. Select a text layer
2. In the plugin, go to **fontSize**, **fontWeights**, etc.
3. Click the tokens to apply:
   - Font size
   - Font weight
   - Line height
   - Letter spacing

**Typography Sets:**
- You can create text style sets that combine multiple tokens
- Example: H1 = fontSize.2xl + fontWeights.bold + lineHeights.tight

### Applying Spacing Tokens

1. Select a frame or auto-layout
2. Go to **spacing** in the plugin
3. Apply tokens to:
   - Padding (all sides or individual)
   - Gap (spacing between items)

### Applying Effects (Shadows)

1. Select an element
2. Go to **boxShadow** in the plugin
3. Click a shadow token (sm, md, lg, xl)
4. The shadow effect will be applied

---

## 🔧 Creating Styles from Tokens

### Color Styles

For each important color token, create a Figma style:

1. Right-click the token → **"Create style"**
2. Or manually create:
   - Click **+** next to Color Styles in Figma
   - Name it (e.g., "Primary")
   - Link it to the token in Tokens Studio

**Recommended Color Styles:**
- Primary (`colors.semantic.primary`)
- Destructive (`colors.semantic.destructive`)
- Success (`colors.semantic.success`)
- Border (`colors.semantic.border`)
- Background (`colors.semantic.background`)
- Teal Light (`colors.brand.teal.200`)
- Teal Accessible (`colors.brand.teal.600`)

### Text Styles

Create text styles for common typography:

**Example: Body Text**
- Font: `fontFamilies.base`
- Size: `fontSize.base` (15px)
- Weight: `fontWeights.normal` (400)
- Line Height: `lineHeights.normal` (1.5)

**Example: Heading 1**
- Font: `fontFamilies.base`
- Size: `fontSize.2xl` (24px)
- Weight: `fontWeights.bold` (700)
- Line Height: `lineHeights.normal` (1.5)

**Example: Sidebar Menu Item**
- Font: `fontFamilies.base`
- Size: `fontSize.sm` (14px)
- Weight: `fontWeights.medium` (500)
- Line Height: `lineHeights.normal` (1.5)

### Effect Styles

Create shadow effects:
1. Create a new Effect Style in Figma
2. Name it (e.g., "Card Shadow")
3. Link to `boxShadow.md` in Tokens Studio

---

## 🔄 Keeping Tokens Synced

### Option 1: Manual Updates

When tokens change:
1. Copy updated `tokens.json`
2. Import into Tokens Studio plugin
3. All elements using tokens will update automatically

### Option 2: GitHub Sync (Recommended)

1. In Tokens Studio → Settings → Sync
2. Choose **GitHub** as storage provider
3. Authenticate with GitHub
4. Select your repository
5. Point to `/tokens.json` file
6. Enable **Auto-sync**

**Benefits:**
- ✅ Automatic updates when tokens change
- ✅ Version control for design tokens
- ✅ Team collaboration
- ✅ Single source of truth

### Option 3: GitLab/Bitbucket/URL

Similar to GitHub, but using other platforms or a direct URL.

---

## 📝 Token Naming Convention

Our tokens follow this structure:

```
global.{category}.{subcategory}.{name}

Examples:
global.colors.brand.teal.600
global.spacing.6
global.fontSize.base
global.borderRadius.lg
```

In Figma, you'll see them organized by category in the plugin sidebar.

---

## 🎨 Creating Component Variants with Tokens

### Example: Button Component

Create a button component with variants:

**Default Variant:**
- Fill: `colors.semantic.primary`
- Text: `colors.semantic.primary-foreground`
- Padding: `spacing.4` horizontal, `spacing.2` vertical
- Border Radius: `borderRadius.base`
- Height: `sizing.button.md`
- Font Size: `fontSize.base`
- Font Weight: `fontWeights.medium`
- Shadow: `boxShadow.sm`

**Destructive Variant:**
- Fill: `colors.semantic.destructive`
- Text: `colors.semantic.destructive-foreground`
- (Same spacing, sizing, typography)

**Secondary Variant:**
- Fill: `colors.semantic.secondary`
- Text: `colors.semantic.secondary-foreground`
- (Same spacing, sizing, typography)

### Example: Card Component

- Background: `colors.semantic.card`
- Text: `colors.semantic.card-foreground`
- Border: `colors.semantic.border` with `borderWidth.1`
- Border Radius: `borderRadius.lg`
- Padding: `spacing.6`
- Shadow: `boxShadow.md`

---

## 🚨 Troubleshooting

### Issue: Tokens not importing

**Solution:**
1. Verify JSON syntax is valid (use JSONLint.com)
2. Check that you copied the entire file
3. Make sure you're using the latest version of Tokens Studio plugin
4. Try restarting Figma

### Issue: Colors look wrong

**Solution:**
- Tokens Studio uses hex colors without the `#` in some cases
- Our tokens include the `#` symbol
- The plugin should handle this automatically
- If issues persist, check the "Transform" settings in the plugin

### Issue: Shadows not applying

**Solution:**
- Make sure the element supports effects
- Check that shadow values use the correct format (x, y, blur, spread, color)
- Our shadows use the `dropShadow` type which should work correctly

### Issue: Font families not working

**Solution:**
- Font families in tokens are strings
- Make sure the fonts are installed on your system
- Figma needs access to the system fonts or Figma fonts library

---

## 📊 Token Coverage

| Category | Tokens | Type | Usage |
|----------|--------|------|-------|
| Colors | 50+ | color | Fills, strokes, text |
| Spacing | 13 | spacing | Padding, gaps, margins |
| Border Radius | 8 | borderRadius | Corner rounding |
| Font Families | 2 | fontFamilies | Text layers |
| Font Sizes | 7 | fontSizes | Text layers |
| Font Weights | 4 | fontWeights | Text layers |
| Line Heights | 4 | lineHeights | Text layers |
| Letter Spacing | 3 | letterSpacing | Text layers |
| Opacity | 4 | opacity | Transparency |
| Border Width | 4 | borderWidth | Strokes |
| Sizing | 11 | sizing | Component sizes |
| Box Shadow | 5 | boxShadow | Effects |

**Total: 115+ design tokens**

---

## ✅ Best Practices

1. **Use semantic tokens** where possible (e.g., `colors.semantic.primary` instead of `colors.brand.teal.600`)
2. **Create Figma styles** from frequently used tokens
3. **Document your components** with which tokens they use
4. **Sync with GitHub** for automatic updates
5. **Test in both light/dark modes** if applicable
6. **Use Auto Layout** with spacing tokens for consistency
7. **Create component sets** with token-based variants

---

## 🔗 Related Files

| File | Purpose |
|------|---------|
| `/tokens.json` | Token definitions for Figma import |
| `/styles/globals.css` | CSS implementation of tokens |
| `/TOKEN_CSS_MAPPING.md` | Token to CSS variable mapping |
| `/DESIGN_SYSTEM_README.md` | Design system usage guide |

---

## 📚 Additional Resources

- **Tokens Studio Documentation**: https://docs.tokens.studio/
- **Figma Plugin**: https://www.figma.com/community/plugin/843461159747178978
- **GitHub Sync Guide**: https://docs.tokens.studio/sync/github
- **Video Tutorial**: Search "Tokens Studio for Figma tutorial" on YouTube

---

## 🎯 Quick Start Checklist

- [ ] Install Tokens Studio for Figma plugin
- [ ] Copy contents of `/tokens.json`
- [ ] Import into Tokens Studio plugin
- [ ] Verify all token categories appear (colors, spacing, typography, etc.)
- [ ] Create Figma color styles for main brand colors
- [ ] Create text styles for common typography
- [ ] Create effect styles for shadows
- [ ] Set up GitHub sync (optional but recommended)
- [ ] Start using tokens in your designs!

---

**Last Updated**: October 21, 2025  
**Mediana VoIP Dashboard Design System**
