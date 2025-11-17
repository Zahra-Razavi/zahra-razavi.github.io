# Figma Tokens - Quick Start Guide

Get your Mediana design tokens into Figma in **5 minutes**.

---

## ⚡ Quick Steps

### 1. Install Plugin (1 min)

1. Open Figma
2. Go to **Plugins** → **Find more plugins**
3. Search for **"Tokens Studio for Figma"**
4. Click **Install**

**Plugin URL**: https://www.figma.com/community/plugin/843461159747178978

---

### 2. Copy Tokens (30 sec)

1. Open `/tokens.json` in your code editor
2. Select **ALL** content (Cmd/Ctrl + A)
3. Copy to clipboard (Cmd/Ctrl + C)

**Important**: Make sure you copy the entire file from `{` to `}`

---

### 3. Import to Figma (1 min)

1. In Figma, open **Tokens Studio for Figma** plugin
2. Click the **⚙️ Settings** icon (top right)
3. Click **"Import"** button
4. Paste the tokens (Cmd/Ctrl + V)
5. Click **"Import"**

**✅ Done!** You should now see all token categories in the plugin panel.

---

### 4. Verify Import (1 min)

Check that you see these categories in the plugin:

- ✅ **colors** (50+ tokens)
  - `brand` → Teal scale + core colors
  - `semantic` → Primary, destructive, success, etc.
  - `sidebar` → Sidebar-specific colors
  - `chart` → Chart colors

- ✅ **spacing** (13 tokens)
  - `0` through `24`

- ✅ **borderRadius** (8 tokens)
  - `none`, `sm`, `md`, `base`, `lg`, `xl`, `2xl`, `full`

- ✅ **fontSize** (7 tokens)
  - `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl`

- ✅ **fontWeights** (4 tokens)
  - `normal`, `medium`, `semibold`, `bold`

- ✅ **boxShadow** (5 tokens)
  - `sm`, `md`, `lg`, `xl`, `none`

**If you see all these, you're ready to use tokens!**

---

## 🎨 Using Tokens (Quick Examples)

### Apply a Color

1. Select any element (frame, shape, text)
2. In Tokens Studio plugin, navigate to **colors** → **semantic**
3. Click **"primary"**
4. Color applied! ✅

### Apply Spacing (Padding)

1. Select a frame with Auto Layout
2. Go to **spacing** in plugin
3. Click **"6"** (24px)
4. Apply to padding ✅

### Apply a Shadow

1. Select any element
2. Go to **boxShadow**
3. Click **"md"**
4. Shadow applied! ✅

---

## 🎯 Create Your First Component

Let's create a **Primary Button** using tokens:

### Step 1: Create Button Frame
1. Create a frame (F)
2. Enable Auto Layout (Shift + A)
3. Add text: "Button"

### Step 2: Apply Tokens

**Background:**
- Plugin → **colors.semantic.primary** → Click

**Text Color:**
- Select text → **colors.semantic.primary-foreground** → Click

**Padding:**
- Horizontal: **spacing.4** (16px)
- Vertical: **spacing.2** (8px)

**Border Radius:**
- **borderRadius.base** (10px)

**Text Size:**
- **fontSize.base** (15px)

**Font Weight:**
- **fontWeights.medium** (500)

**Shadow:**
- **boxShadow.sm**

### Step 3: Make it a Component
1. Select the button frame
2. Press **Cmd/Ctrl + Alt + K** (Create Component)
3. Name it "Button/Primary"

**🎉 You've created a token-based component!**

---

## 📚 Next Steps

### Create More Components

**Card:**
- Background: `colors.semantic.card`
- Border: `colors.semantic.border` with `borderWidth.1`
- Radius: `borderRadius.lg`
- Padding: `spacing.6`
- Shadow: `boxShadow.md`

**Secondary Button:**
- Background: `colors.semantic.secondary`
- Text: `colors.semantic.secondary-foreground`
- (Same spacing/typography as primary)

**Destructive Button:**
- Background: `colors.semantic.destructive`
- Text: `colors.semantic.destructive-foreground`
- (Same spacing/typography as primary)

### Create Color Styles

Turn frequently used colors into Figma styles:

1. Right-click a color token → **"Create style"**
2. Or create manually:
   - **Styles panel** → **+** → Link to token

**Recommended styles:**
- Primary
- Destructive
- Success
- Border
- Teal 200 (brand color)
- Teal 600 (accessible)

### Create Text Styles

**Heading 1:**
- Font: `fontFamilies.base`
- Size: `fontSize.2xl` (24px)
- Weight: `fontWeights.bold` (700)
- Line Height: `lineHeights.normal` (1.5)

**Body:**
- Font: `fontFamilies.base`
- Size: `fontSize.base` (15px)
- Weight: `fontWeights.normal` (400)
- Line Height: `lineHeights.normal` (1.5)

**Sidebar Item:**
- Font: `fontFamilies.base`
- Size: `fontSize.sm` (14px)
- Weight: `fontWeights.medium` (500)
- Line Height: `lineHeights.normal` (1.5)

### Set Up GitHub Sync (Optional)

Keep tokens automatically synced:

1. Plugin **Settings** → **Sync**
2. Choose **GitHub**
3. Authenticate
4. Point to your repository
5. Select `/tokens.json`
6. Enable **Auto-sync**

**Benefits:**
- Automatic updates when tokens change
- Always in sync with development
- Version control for design tokens

---

## 🆘 Quick Troubleshooting

### Problem: Tokens not showing after import
**Solution:** 
- Check that you copied the entire `tokens.json` file
- Look for the "global" wrapper in the JSON
- Try refreshing the plugin

### Problem: Colors look wrong
**Solution:**
- Our tokens use hex format with `#` symbol
- Plugin should handle this automatically
- Check token value shows correct hex code

### Problem: Can't apply spacing
**Solution:**
- Make sure element has Auto Layout enabled
- Spacing tokens are numbers (e.g., "16" = 16px)
- Apply to padding/gap in Auto Layout settings

### Problem: Font family not working
**Solution:**
- System fonts must be installed on your computer
- Use fonts from Figma's library as alternative
- Font family tokens are reference only

---

## 📖 Full Documentation

For complete details, see:

| Guide | What's Inside |
|-------|---------------|
| `/FIGMA_TOKENS_GUIDE.md` | Complete import & usage guide |
| `/TOKENS_FORMAT_COMPARISON.md` | Figma vs CSS format explained |
| `/TOKEN_CSS_MAPPING.md` | How tokens map to CSS |
| `/DESIGN_SYSTEM_README.md` | Overall design system docs |

---

## ✅ Checklist

Quick reference for getting started:

- [ ] Plugin installed
- [ ] `tokens.json` copied
- [ ] Tokens imported to Figma
- [ ] All categories visible (colors, spacing, etc.)
- [ ] Applied first color token
- [ ] Applied first spacing token
- [ ] Created first component with tokens
- [ ] Created color styles (optional)
- [ ] Created text styles (optional)
- [ ] Set up GitHub sync (optional)

---

## 🎨 Token Quick Reference

### Most Used Colors
```
colors.semantic.primary           → Main actions (#4A8B82)
colors.semantic.destructive       → Errors/delete (#dc2626)
colors.semantic.border            → Borders (#e5e7eb)
colors.brand.teal.200            → Brand color light (#9AC6BD)
colors.brand.teal.600            → Brand color accessible (#4A8B82)
```

### Most Used Spacing
```
spacing.2   → 8px   (tight padding)
spacing.4   → 16px  (standard padding)
spacing.6   → 24px  (page/card padding)
spacing.8   → 32px  (large spacing)
```

### Most Used Typography
```
fontSize.base   → 15px (body text)
fontSize.lg     → 18px (headers)
fontSize.2xl    → 24px (page titles)
fontWeights.medium → 500 (labels, buttons)
fontWeights.bold   → 700 (headings)
```

### Most Used Effects
```
boxShadow.sm   → Subtle elevation
boxShadow.md   → Card elevation (most common)
boxShadow.lg   → Modal/dialog elevation
```

---

**⏱️ Total Time: ~5 minutes**  
**📁 Token Count: 115+ tokens ready to use**  
**🎯 Result: Design system in Figma matching your code**

**Questions?** See `/FIGMA_TOKENS_GUIDE.md` for detailed help.

---

**Last Updated**: October 21, 2025  
**Mediana VoIP Dashboard - Design System**
