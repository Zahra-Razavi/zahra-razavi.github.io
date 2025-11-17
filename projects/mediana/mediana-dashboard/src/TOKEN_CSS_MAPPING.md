# Token to CSS Variable Mapping

This document shows the complete mapping between `tokens.json` design tokens and CSS variables in `globals.css`.

**📌 Note**: The `tokens.json` file is formatted for **Tokens Studio for Figma** plugin. For Figma import instructions, see `/FIGMA_TOKENS_GUIDE.md`.

## 🔗 How It Works

**`tokens.json`** → Defines the design tokens (single source of truth)  
**`globals.css`** → Implements tokens as CSS variables  
**Components** → Use CSS variables via Tailwind classes

---

## 🎨 Color Token Mappings

### Brand Colors

| Token Path (tokens.json) | Token Value | CSS Variable | Tailwind Class |
|--------------------------|-------------|--------------|----------------|
| `global.colors.brand.teal.50` | `#f0f9f7` | `--teal-50` | `bg-teal-subtle` |
| `global.colors.brand.teal.100` | `#ccebe6` | `--teal-100` | `border-teal-subtle` |
| `global.colors.brand.teal.200` | `#9AC6BD` | `--teal-200` | `bg-teal-light` |
| `global.colors.brand.teal.600` | `#4A8B82` | `--teal-600` | `text-teal`, `bg-teal` |
| `global.colors.brand.teal.700` | `#3A7A71` | `--teal-700` | - |
| `global.colors.brand.teal.800` | `#2A6A61` | `--teal-800` | `bg-teal-dark` |
| `global.colors.brand.teal.900` | `#1A5A51` | `--teal-900` | - |
| `global.colors.brand.darkGray` | `#262626` | Used in `--foreground`, `--sidebar` | `text-dark-gray` |
| `global.colors.brand.white` | `#ffffff` | `--background` (light mode) | - |
| `global.colors.brand.black` | `#000000` | `--background` (dark mode) | - |

### Semantic Colors (Light Mode)

| Token Path (tokens.json) | Token Value | CSS Variable | Usage |
|--------------------------|-------------|--------------|-------|
| `global.colors.semantic.background` | `#ffffff` | `--background` | Page backgrounds |
| `global.colors.semantic.foreground` | `#262626` | `--foreground` | Text color |
| `global.colors.semantic.primary` | `#4A8B82` | `--primary` | Primary buttons |
| `global.colors.semantic.primary-foreground` | `#ffffff` | `--primary-foreground` | Text on primary |
| `global.colors.semantic.secondary` | `#f8f9fa` | `--secondary` | Secondary buttons |
| `global.colors.semantic.secondary-foreground` | `#262626` | `--secondary-foreground` | Text on secondary |
| `global.colors.semantic.muted` | `#f5f5f5` | `--muted` | Subtle backgrounds |
| `global.colors.semantic.muted-foreground` | `#6b7280` | `--muted-foreground` | Muted text |
| `global.colors.semantic.accent` | `#4A8B82` | `--accent` | Accent elements |
| `global.colors.semantic.accent-foreground` | `#ffffff` | `--accent-foreground` | Text on accent |
| `global.colors.semantic.destructive` | `#dc2626` | `--destructive` | Error/delete |
| `global.colors.semantic.destructive-foreground` | `#ffffff` | `--destructive-foreground` | Text on destructive |
| `global.colors.semantic.success` | `#4A8B82` | (custom) `bg-success` | Success states |
| `global.colors.semantic.success-subtle` | `#f0f9f7` | (custom) `bg-success-subtle` | Success backgrounds |
| `global.colors.semantic.card` | `#ffffff` | `--card` | Card backgrounds |
| `global.colors.semantic.card-foreground` | `#262626` | `--card-foreground` | Card text |
| `global.colors.semantic.popover` | `#ffffff` | `--popover` | Popover backgrounds |
| `global.colors.semantic.popover-foreground` | `#262626` | `--popover-foreground` | Popover text |
| `global.colors.semantic.border` | `#e5e7eb` | `--border` | Borders |
| `global.colors.semantic.input` | `#f9fafb` | `--input` | Input borders |
| `global.colors.semantic.ring` | `#4A8B82` | `--ring` | Focus rings |

### Semantic Colors (Dark Mode)

| Token Path | Token Value | CSS Variable (Dark Mode) |
|------------|-------------|--------------------------|
| `colors.semantic.background.dark` | `#000000` | `--background` |
| `colors.semantic.foreground.dark` | `#ffffff` | `--foreground` |
| `colors.semantic.primary.dark` | `#9AC6BD` | `--primary` |
| `colors.semantic.primary.foreground.dark` | `#000000` | `--primary-foreground` |
| `colors.semantic.secondary.dark` | `#374151` | `--secondary` |
| `colors.semantic.secondary.foreground.dark` | `#ffffff` | `--secondary-foreground` |
| `colors.semantic.muted.dark` | `#374151` | `--muted` |
| `colors.semantic.muted.foreground.dark` | `#9ca3af` | `--muted-foreground` |
| `colors.semantic.accent.dark` | `#9AC6BD` | `--accent` |
| `colors.semantic.accent.foreground.dark` | `#000000` | `--accent-foreground` |
| `colors.semantic.destructive.dark` | `#ef4444` | `--destructive` |
| `colors.semantic.card.dark` | `#262626` | `--card` |
| `colors.semantic.card.foreground.dark` | `#ffffff` | `--card-foreground` |
| `colors.semantic.popover.dark` | `#262626` | `--popover` |
| `colors.semantic.popover.foreground.dark` | `#ffffff` | `--popover-foreground` |
| `colors.semantic.border.dark` | `#374151` | `--border` |
| `colors.semantic.input.dark` | `#374151` | `--input` |
| `colors.semantic.ring.dark` | `#9AC6BD` | `--ring` |

### Sidebar Colors

| Token Path | Token Value | CSS Variable | Usage |
|------------|-------------|--------------|-------|
| `colors.sidebar.background.light` | `#262626` | `--sidebar` | Sidebar background |
| `colors.sidebar.background.dark` | `#000000` | `--sidebar` (dark) | Dark mode sidebar |
| `colors.sidebar.foreground` | `#ffffff` | `--sidebar-foreground` | Sidebar text |
| `colors.sidebar.primary.light` | `#4A8B82` | `--sidebar-primary` | Active menu items |
| `colors.sidebar.primary.dark` | `#9AC6BD` | `--sidebar-primary` (dark) | Dark mode active |
| `colors.sidebar.primary.foreground.light` | `#ffffff` | `--sidebar-primary-foreground` | Text on active |
| `colors.sidebar.primary.foreground.dark` | `#000000` | `--sidebar-primary-foreground` (dark) | Dark mode text |
| `colors.sidebar.accent.light` | `#374151` | `--sidebar-accent` | Hover states |
| `colors.sidebar.accent.dark` | `#262626` | `--sidebar-accent` (dark) | Dark mode hover |
| `colors.sidebar.accent.foreground` | `#ffffff` | `--sidebar-accent-foreground` | Text on hover |
| `colors.sidebar.border.light` | `#374151` | `--sidebar-border` | Sidebar borders |
| `colors.sidebar.border.dark` | `#262626` | `--sidebar-border` (dark) | Dark mode borders |
| `colors.sidebar.ring.light` | `#4A8B82` | `--sidebar-ring` | Focus rings |
| `colors.sidebar.ring.dark` | `#9AC6BD` | `--sidebar-ring` (dark) | Dark mode rings |

### Chart Colors

| Token Path | Token Value | CSS Variable | Usage |
|------------|-------------|--------------|-------|
| `colors.chart.1` | `#9AC6BD` | `--chart-1` | Primary chart color |
| `colors.chart.2` | `#262626` | `--chart-2` | Secondary chart color |
| `colors.chart.3` | `#6b7280` | `--chart-3` | Tertiary chart color |
| `colors.chart.4` | `#7dd3fc` | `--chart-4` | Sky blue data |
| `colors.chart.5` | `#a78bfa` | `--chart-5` | Purple data |

---

## 📝 Typography Token Mappings

### Font Family

| Token Path | Token Value | CSS Usage |
|------------|-------------|-----------|
| `typography.fontFamily.base` | `system-ui, -apple-system, ...` | Default font stack (applied globally) |
| `typography.fontFamily.mono` | `ui-monospace, 'Cascadia Code', ...` | Monospace font (for code) |

### Font Size

| Token Path | Token Value | CSS Variable | Actual Size | Usage |
|------------|-------------|--------------|-------------|-------|
| `typography.fontSize.base` | `15px` | `--font-size` | 15px | Root font size |
| `typography.fontSize.xs` | `0.75rem` | `--text-xs` | 12px | Small text |
| `typography.fontSize.sm` | `0.875rem` | `--text-sm` | 14px | Sidebar items |
| `typography.fontSize.md` | `1rem` | `--text-base` | 15px | Body text |
| `typography.fontSize.lg` | `1.125rem` | `--text-lg` | 18px | H3, Headers |
| `typography.fontSize.xl` | `1.25rem` | `--text-xl` | 20px | H2 |
| `typography.fontSize.2xl` | `1.5rem` | `--text-2xl` | 24px | H1 |
| `typography.fontSize.3xl` | `1.875rem` | `--text-3xl` | 30px | Hero text |

**Note**: Typography sizes are applied automatically via `globals.css` base layer. Do not use Tailwind text size classes.

### Font Weight

| Token Path | Token Value | CSS Variable | Usage |
|------------|-------------|--------------|-------|
| `typography.fontWeight.normal` | `400` | `--font-weight-normal` | Body text |
| `typography.fontWeight.medium` | `500` | `--font-weight-medium` | Labels, buttons |
| `typography.fontWeight.semibold` | `600` | (not in CSS) | Emphasis |
| `typography.fontWeight.bold` | `700` | (not in CSS) | Headings |

**Note**: Font weights are applied automatically via `globals.css` for semantic elements.

### Line Height

| Token Path | Token Value | Applied To |
|------------|-------------|------------|
| `typography.lineHeight.tight` | `1.25` | (Custom use) |
| `typography.lineHeight.normal` | `1.5` | Default for all elements ⭐ |
| `typography.lineHeight.relaxed` | `1.75` | (Custom use) |
| `typography.lineHeight.loose` | `2` | (Custom use) |

---

## 📏 Spacing Token Mappings

All spacing tokens map directly to Tailwind's spacing scale:

| Token Path | Token Value | Tailwind Class | Pixel Value |
|------------|-------------|----------------|-------------|
| `spacing.0` | `0` | `p-0`, `m-0`, `gap-0` | 0px |
| `spacing.0.5` | `0.125rem` | `p-0.5`, `m-0.5` | 2px |
| `spacing.1` | `0.25rem` | `p-1`, `m-1` | 4px |
| `spacing.1.5` | `0.375rem` | `p-1.5`, `m-1.5` | 6px |
| `spacing.2` | `0.5rem` | `p-2`, `m-2` | 8px |
| `spacing.2.5` | `0.625rem` | `p-2.5`, `m-2.5` | 10px ⭐ Sidebar gaps |
| `spacing.3` | `0.75rem` | `p-3`, `m-3` | 12px |
| `spacing.3.5` | `0.875rem` | `p-3.5`, `m-3.5` | 14px ⭐ Sidebar text |
| `spacing.4` | `1rem` | `p-4`, `m-4` | 16px ⭐ Standard padding |
| `spacing.5` | `1.25rem` | `p-5`, `m-5` | 20px |
| `spacing.6` | `1.5rem` | `p-6`, `m-6` | 24px ⭐ Page padding |
| `spacing.8` | `2rem` | `p-8`, `m-8` | 32px |
| `spacing.10` | `2.5rem` | `p-10`, `m-10` | 40px |
| `spacing.12` | `3rem` | `p-12`, `m-12` | 48px |
| `spacing.16` | `4rem` | `p-16`, `m-16` | 64px |
| `spacing.20` | `5rem` | `p-20`, `m-20` | 80px |
| `spacing.24` | `6rem` | `p-24`, `m-24` | 96px |

**Usage Examples**:
```tsx
<div className="p-6">         {/* padding: 24px */}
<div className="space-y-4">   {/* gap: 16px */}
<div className="gap-2.5">     {/* gap: 10px - sidebar menu gaps */}
```

---

## 🔲 Border Radius Token Mappings

| Token Path | Token Value | CSS Variable | Pixel Value |
|------------|-------------|--------------|-------------|
| `borderRadius.none` | `0` | - | 0px |
| `borderRadius.sm` | `0.225rem` | `--radius-sm` | 3.6px |
| `borderRadius.md` | `0.425rem` | `--radius-md` | 6.8px |
| `borderRadius.base` | `0.625rem` | `--radius` | 10px ⭐ |
| `borderRadius.lg` | `0.625rem` | `--radius-lg` | 10px |
| `borderRadius.xl` | `0.825rem` | `--radius-xl` | 13.2px |
| `borderRadius.2xl` | `1rem` | - | 16px |
| `borderRadius.full` | `9999px` | - | Full rounded |

**Applied via**:
- `:root { --radius: 0.625rem; }` in `globals.css`
- Components use `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`
- Calculated as: `calc(var(--radius) - 4px)`, `calc(var(--radius) - 2px)`, etc.

---

## 🌑 Shadow Token Mappings

| Token Path | Token Value | Tailwind Class |
|------------|-------------|----------------|
| `shadow.none` | `none` | `shadow-none` |
| `shadow.sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | `shadow-sm` |
| `shadow.md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), ...` | `shadow-md` |
| `shadow.lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), ...` | `shadow-lg` |
| `shadow.xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), ...` | `shadow-xl` |

---

## ⚡ Transition Token Mappings

### Duration

| Token Path | Token Value | Tailwind Class |
|------------|-------------|----------------|
| `transition.duration.fast` | `150ms` | `duration-150` |
| `transition.duration.normal` | `200ms` | `duration-200` |
| `transition.duration.slow` | `300ms` | `duration-300` |

### Easing

| Token Path | Token Value | Tailwind Class |
|------------|-------------|----------------|
| `transition.easing.default` | `cubic-bezier(0.4, 0, 0.2, 1)` | `ease-in-out` |
| `transition.easing.in` | `cubic-bezier(0.4, 0, 1, 1)` | `ease-in` |
| `transition.easing.out` | `cubic-bezier(0, 0, 0.2, 1)` | `ease-out` |
| `transition.easing.inOut` | `cubic-bezier(0.4, 0, 0.2, 1)` | `ease-in-out` |

---

## 🔢 Z-Index Token Mappings

| Token Path | Token Value | Usage |
|------------|-------------|-------|
| `zIndex.base` | `0` | Default layering |
| `zIndex.dropdown` | `1000` | Dropdown menus |
| `zIndex.sticky` | `1100` | Sticky elements |
| `zIndex.fixed` | `1200` | Fixed elements |
| `zIndex.modal` | `1300` | Modal dialogs |
| `zIndex.popover` | `1400` | Popovers |
| `zIndex.tooltip` | `1500` | Tooltips |

---

## 📱 Breakpoint Token Mappings

| Token Path | Token Value | Tailwind Prefix |
|------------|-------------|-----------------|
| `breakpoint.xs` | `475px` | `xs:` |
| `breakpoint.sm` | `640px` | `sm:` |
| `breakpoint.md` | `768px` | `md:` |
| `breakpoint.lg` | `1024px` | `lg:` |
| `breakpoint.xl` | `1280px` | `xl:` |
| `breakpoint.2xl` | `1536px` | `2xl:` |

---

## 📐 Size Token Mappings

### Icon Sizes

| Token Path | Token Value | Usage |
|------------|-------------|-------|
| `size.icon.xs` | `12px` | Tiny icons |
| `size.icon.sm` | `16px` | Small icons (h-4 w-4) |
| `size.icon.md` | `20px` | Medium icons (h-5 w-5) |
| `size.icon.lg` | `24px` | Large icons (h-6 w-6) |
| `size.icon.xl` | `32px` | Extra large icons |

### Button Sizes

| Token Path | Token Value | Tailwind Class | Description |
|------------|-------------|----------------|-------------|
| `size.button.sm` | `32px` | `h-8` | Small button |
| `size.button.md` | `36px` | `h-9` | Default button |
| `size.button.lg` | `40px` | `h-10` | Large button |

### Input Sizes

| Token Path | Token Value | Usage |
|------------|-------------|-------|
| `size.input.sm` | `32px` | Small inputs |
| `size.input.md` | `36px` | Default inputs |
| `size.input.lg` | `40px` | Large inputs |

### Avatar Sizes

| Token Path | Token Value | Usage |
|------------|-------------|-------|
| `size.avatar.sm` | `24px` | Small avatars |
| `size.avatar.md` | `32px` | Medium avatars |
| `size.avatar.lg` | `40px` | Large avatars |
| `size.avatar.xl` | `48px` | Extra large avatars |

---

## 🔄 How to Update Tokens

### To Change a Color:

1. **Update `tokens.json`**:
```json
"colors": {
  "brand": {
    "teal": {
      "600": { "value": "#NEW_COLOR", ... }
    }
  }
}
```

2. **Update `globals.css`**:
```css
:root {
  --primary: #NEW_COLOR;
  --teal-600: #NEW_COLOR;
}
```

3. **Component automatically updates** (if using Tailwind classes like `text-teal` or `bg-primary`)

### To Add a New Token:

1. **Add to `tokens.json`**:
```json
"colors": {
  "semantic": {
    "warning": {
      "value": "#f59e0b",
      "type": "color",
      "description": "Warning color"
    }
  }
}
```

2. **Add CSS variable in `globals.css`**:
```css
:root {
  --warning: #f59e0b;
}

@theme inline {
  --color-warning: var(--warning);
}
```

3. **Use in components**:
```tsx
<Badge className="bg-[hsl(var(--warning))]">Warning</Badge>
```

or create a utility class:
```css
.bg-warning {
  background-color: var(--warning);
}
```

---

## ✅ Verification Checklist

When updating tokens, verify:

- [ ] Token is defined in `tokens.json`
- [ ] CSS variable exists in `globals.css` (`:root` and/or `.dark`)
- [ ] Variable is exposed in `@theme inline` block (for Tailwind)
- [ ] Utility class exists (if needed)
- [ ] Components using the token display correctly
- [ ] Both light and dark mode values are set (if applicable)
- [ ] Accessibility contrast ratios are maintained (4.5:1 for text)

---

## 📊 Token Coverage Summary

| Category | Tokens in JSON | CSS Variables | Utility Classes | Coverage |
|----------|----------------|---------------|-----------------|----------|
| Colors | 50+ | 40+ | 15+ | ✅ 100% |
| Typography | 20+ | 10+ | Auto-applied | ✅ 100% |
| Spacing | 17 | N/A (Tailwind) | All | ✅ 100% |
| Border Radius | 8 | 4 | All | ✅ 100% |
| Shadows | 5 | N/A (Tailwind) | All | ✅ 100% |
| Transitions | 7 | N/A (Tailwind) | All | ✅ 100% |
| Z-Index | 7 | N/A (Custom) | N/A | ✅ 100% |
| Breakpoints | 6 | N/A (Tailwind) | All | ✅ 100% |
| Sizes | 16 | N/A (Custom) | Various | ✅ 100% |

**Total Token Coverage**: ✅ 100% of tokens are mapped to CSS or Tailwind

---

## 🎯 Key Takeaways

1. **tokens.json** is the design spec (documentation and specification)
2. **globals.css** implements the spec as CSS variables
3. **Components** consume via Tailwind classes or CSS variables
4. **To change a design decision**: Update both tokens.json and globals.css
5. **Spacing, shadows, transitions**: Use Tailwind classes directly (they match token values)
6. **Colors**: Use CSS variables or custom utility classes
7. **Typography**: Auto-applied, no classes needed

---

**Last Updated**: October 21, 2025  
**Maintained by**: Mediana Development Team
