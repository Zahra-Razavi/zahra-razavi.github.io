# Design Tokens Explained

## What Are Design Tokens?

Design tokens are the single source of truth for design decisions in your application. They define colors, spacing, typography, and other design primitives that are used consistently across your entire UI.

**🎨 Figma Integration**: The `tokens.json` file is formatted for **Tokens Studio for Figma** plugin, allowing you to import all design tokens directly into Figma. See `/FIGMA_TOKENS_GUIDE.md` for import instructions.

---

## How Tokens Work in Mediana

### The Two-File System

The Mediana design system uses a **two-file approach**:

#### 1. `/tokens.json` - The Specification (What)

This file **documents** all design decisions in a structured, machine-readable format.

```json
{
  "colors": {
    "brand": {
      "teal": {
        "600": {
          "value": "#4A8B82",
          "type": "color",
          "description": "Accessible teal for text and interactive elements (4.5:1 contrast)"
        }
      }
    }
  }
}
```

**Purpose**:
- ✅ Documentation of design decisions
- ✅ Single source of truth
- ✅ Machine-readable format
- ✅ Can be consumed by design tools (Figma, etc.)
- ✅ Version controlled design system

#### 2. `/styles/globals.css` - The Implementation (How)

This file **implements** the tokens as CSS variables that are actually used in the application.

```css
:root {
  --teal-600: #4A8B82;
  --primary: #4A8B82;
}

@theme inline {
  --color-teal-600: var(--teal-600);
  --color-primary: var(--primary);
}
```

**Purpose**:
- ✅ CSS variables that browsers understand
- ✅ Used by Tailwind and components
- ✅ Supports light/dark mode
- ✅ Runtime styling

---

## The Complete Flow

```
┌─────────────────────────────────────────────────────────────┐
│  1. DESIGN DECISION                                         │
│  Designer: "Primary color should be #4A8B82"                │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  2. DOCUMENTED IN tokens.json                               │
│  {                                                           │
│    "colors": {                                              │
│      "semantic": {                                          │
│        "primary": {                                         │
│          "light": { "value": "#4A8B82" }                    │
│        }                                                     │
│      }                                                       │
│    }                                                         │
│  }                                                           │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  3. IMPLEMENTED IN globals.css                              │
│  :root {                                                     │
│    --primary: #4A8B82;                                       │
│  }                                                           │
│                                                              │
│  @theme inline {                                            │
│    --color-primary: var(--primary);                         │
│  }                                                           │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  4. USED IN COMPONENTS                                      │
│  // Via component variant                                   │
│  <Button variant="default">                                 │
│    Primary Action                                           │
│  </Button>                                                   │
│                                                              │
│  // Button component uses: bg-primary text-primary-foreground│
│  // Which resolves to: var(--primary) = #4A8B82             │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│  5. RENDERED IN BROWSER                                     │
│  <button style="background-color: #4A8B82; color: #fff">    │
│    Primary Action                                           │
│  </button>                                                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Why Two Files?

### tokens.json Advantages:
1. **Design Tool Integration**: Can be imported into Figma, Sketch, etc.
2. **Documentation**: Self-documenting with descriptions and metadata
3. **Validation**: Can be validated against JSON schema
4. **Cross-Platform**: Can be consumed by iOS, Android, Web
5. **Version Control**: Track design decisions over time
6. **Automation**: Can generate code, documentation, or design files

### globals.css Advantages:
1. **Browser Compatible**: CSS variables work in all modern browsers
2. **Runtime Updates**: Can be changed without recompiling
3. **Dark Mode**: Easy theme switching with CSS variable overrides
4. **Cascade**: Inherits through DOM tree
5. **Tailwind Integration**: Works seamlessly with Tailwind v4

---

## How They Stay in Sync

### Current Approach: Manual Sync

**When updating a token:**

1. Update `tokens.json` (the spec):
   ```json
   "primary": {
     "light": { "value": "#NEW_COLOR" }
   }
   ```

2. Update `globals.css` (the implementation):
   ```css
   :root {
     --primary: #NEW_COLOR;
   }
   ```

### Why Manual?

- **Simplicity**: No build step required
- **Flexibility**: Can add CSS-specific features (calculations, fallbacks)
- **Control**: Explicit mapping between tokens and CSS variables
- **Transparency**: Easy to understand and debug

### Future Automation (Optional)

You could create a build script to generate `globals.css` from `tokens.json`:

```javascript
// Example: token-to-css.js
const tokens = require('./tokens.json');
const css = generateCSSFromTokens(tokens);
fs.writeFileSync('./styles/globals.css', css);
```

**Benefits**:
- ✅ Single source of truth
- ✅ No sync issues
- ✅ Automated consistency

**Trade-offs**:
- ❌ Adds build complexity
- ❌ Less manual control
- ❌ Requires tooling setup

---

## Mapping Reference

See `/TOKEN_CSS_MAPPING.md` for the complete mapping of every token to its CSS variable.

### Quick Examples:

| Token Path | Value | CSS Variable | Usage |
|------------|-------|--------------|-------|
| `colors.brand.teal.600` | `#4A8B82` | `--teal-600` | `text-teal`, `bg-teal` |
| `colors.semantic.primary.light` | `#4A8B82` | `--primary` | `<Button variant="default">` |
| `spacing.6` | `1.5rem` | N/A (Tailwind) | `p-6`, `m-6`, `gap-6` |
| `typography.fontSize.base` | `15px` | `--font-size` | `html { font-size: 15px; }` |

---

## Using Tokens in Your Code

### Method 1: Tailwind Utility Classes (Recommended)

```tsx
// Spacing tokens
<div className="p-6">          {/* tokens.spacing.6 → 24px */}
<div className="space-y-4">    {/* tokens.spacing.4 → 16px */}

// Color tokens
<div className="text-teal">    {/* tokens.brand.teal.600 → #4A8B82 */}
<div className="bg-teal-light"> {/* tokens.brand.teal.200 → #9AC6BD */}
```

### Method 2: Component Variants (Recommended)

```tsx
// Components internally use CSS variables from tokens
<Button variant="default">     {/* Uses --primary */}
<Badge variant="destructive">  {/* Uses --destructive */}
<Button variant="secondary">   {/* Uses --secondary */}
```

### Method 3: Direct CSS Variables (Advanced)

```tsx
// Access CSS variables directly if needed
<div style={{ color: 'hsl(var(--teal-600))' }}>
  Custom styled element
</div>

// Or in a CSS module
.customClass {
  background-color: var(--primary);
  border-color: var(--border);
}
```

### Method 4: Reading from tokens.json (Build Time)

```typescript
// Import tokens for programmatic access
import tokens from './tokens.json';

// Use in JavaScript/TypeScript
const primaryColor = tokens.colors.semantic.primary.light.value; // "#4A8B82"
const spacing = tokens.spacing['6'].value; // "1.5rem"
```

---

## Updating Tokens: Step-by-Step

### Scenario: Change Primary Color

**Current**: Primary color is `#4A8B82` (teal)  
**Goal**: Change to `#2563eb` (blue)

#### Step 1: Update tokens.json

```json
{
  "colors": {
    "semantic": {
      "primary": {
        "light": {
          "value": "#2563eb",  // Changed from #4A8B82
          "type": "color",
          "description": "Primary action color"
        }
      }
    }
  }
}
```

#### Step 2: Update globals.css

```css
:root {
  --primary: #2563eb;  /* Changed from #4A8B82 */
}
```

#### Step 3: Components Update Automatically

All components using `--primary` will automatically use the new color:
- `<Button variant="default">` → Now blue
- Primary badges → Now blue
- Active states → Now blue

#### Step 4: Verify in Showcase

Visit `/design-system` to see the updated colors in:
- Colors tab
- Components tab
- Mapping tab

---

## Token Categories Explained

### 1. Brand Colors (`tokens.colors.brand`)

Core brand identity colors that rarely change.

```json
"teal": {
  "200": "#9AC6BD",  // Light teal (decorative)
  "600": "#4A8B82",  // Accessible teal (text/interactive)
  "900": "#1A5A51"   // Dark teal (emphasis)
}
```

**Mapped to**: `--teal-200`, `--teal-600`, `--teal-900`

### 2. Semantic Colors (`tokens.colors.semantic`)

Purpose-driven colors that communicate meaning.

```json
"primary": { "light": "#4A8B82" },      // Main actions
"destructive": { "light": "#dc2626" },  // Errors, deletions
"success": { "value": "#4A8B82" },      // Success states
"muted": { "light": "#f5f5f5" }         // Subtle backgrounds
```

**Mapped to**: `--primary`, `--destructive`, etc.

### 3. Spacing (`tokens.spacing`)

Consistent spacing scale for margins, padding, gaps.

```json
"4": { "value": "1rem" },    // 16px - Standard padding
"6": { "value": "1.5rem" },  // 24px - Page padding
"2.5": { "value": "0.625rem" }  // 10px - Sidebar gaps
```

**Used via**: Tailwind classes (`p-4`, `gap-6`, `space-y-2.5`)

### 4. Typography (`tokens.typography`)

Font sizes, weights, and line heights.

```json
"fontSize": {
  "base": { "value": "15px" },  // Body text
  "lg": { "value": "1.125rem" },  // Headings
  "2xl": { "value": "1.5rem" }  // Hero text
}
```

**Auto-applied**: Via `globals.css` base styles to `<h1>`, `<p>`, etc.

---

## Best Practices

### ✅ DO:

1. **Update tokens.json first** (design spec)
2. **Then update globals.css** (implementation)
3. **Use semantic tokens** in components (`--primary` not `#4A8B82`)
4. **Reference TOKEN_CSS_MAPPING.md** when mapping
5. **Test in both light and dark mode** after changes
6. **Check the showcase** (`/design-system`) to verify

### ❌ DON'T:

1. **Hardcode color values** in components
2. **Skip updating tokens.json** when changing globals.css
3. **Create new CSS variables** without documenting in tokens.json
4. **Use brand colors directly** (use semantic tokens instead)
5. **Override typography** with Tailwind classes unnecessarily

---

## Verification Checklist

When making token changes, verify:

- [ ] Token updated in `tokens.json`
- [ ] CSS variable updated in `globals.css`
- [ ] Light mode value set (`:root`)
- [ ] Dark mode value set (`.dark`) if applicable
- [ ] Accessible contrast ratios maintained (4.5:1 minimum)
- [ ] Checked in showcase (`/design-system`)
- [ ] Tested components using the token
- [ ] Updated `TOKEN_CSS_MAPPING.md` if new token
- [ ] Both files committed together in version control

---

## FAQ

### Q: Why not generate CSS from JSON automatically?

**A**: Manual mapping provides:
- Clear, explicit relationships
- Flexibility for CSS-specific features
- No build step required
- Easy to understand and debug

You can add automation later if needed.

### Q: Can I add a new color token?

**A**: Yes! Follow these steps:

1. Add to `tokens.json`:
   ```json
   "colors": {
     "semantic": {
       "warning": { "value": "#f59e0b" }
     }
   }
   ```

2. Add to `globals.css`:
   ```css
   :root {
     --warning: #f59e0b;
   }
   ```

3. Create utility class (optional):
   ```css
   .text-warning { color: var(--warning); }
   ```

4. Document in `TOKEN_CSS_MAPPING.md`

### Q: What if tokens.json and globals.css get out of sync?

**A**: 
- Reference `/TOKEN_CSS_MAPPING.md` as the authoritative mapping
- The showcase (`/design-system` → Mapping tab) shows current mappings
- In conflict, `globals.css` is what actually runs (implementation beats spec)
- Update `tokens.json` to match reality, then document the change

### Q: Can I use tokens outside of React components?

**A**: Yes!
- **CSS files**: Use CSS variables (`var(--primary)`)
- **JavaScript**: Import `tokens.json` and access values
- **Build scripts**: Parse `tokens.json` programmatically
- **Design tools**: Export `tokens.json` to Figma tokens plugin

---

## Resources

| Resource | Purpose |
|----------|---------|
| `/tokens.json` | Design token specification |
| `/styles/globals.css` | CSS variable implementation |
| `/TOKEN_CSS_MAPPING.md` | Complete token-to-CSS mapping |
| `/design-system` (Mapping tab) | Interactive mapping reference |
| `/DESIGN_SYSTEM_README.md` | Usage documentation |

---

## Summary

**tokens.json**: 📋 Design specification (what colors, spacing, etc. should be)  
**globals.css**: 🎨 CSS implementation (how browsers render them)  
**TOKEN_CSS_MAPPING.md**: 🔗 The bridge (how they connect)

Both files work together to create a complete design token system.

**Last Updated**: October 21, 2025
