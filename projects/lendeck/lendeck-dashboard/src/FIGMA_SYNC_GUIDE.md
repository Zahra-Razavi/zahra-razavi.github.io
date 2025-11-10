# Lendeck Design Tokens - Figma Sync Guide

This guide explains how to automatically sync your Lendeck design tokens, variables, and styles to Figma.

## 📋 Table of Contents
- [Method 1: Figma Tokens Plugin (Recommended)](#method-1-figma-tokens-plugin-recommended)
- [Method 2: Figma Variables API](#method-2-figma-variables-api)
- [Method 3: Style Dictionary](#method-3-style-dictionary)
- [Manual Color Styles Creation](#manual-color-styles-creation)

---

## Method 1: Figma Tokens Plugin (Recommended)

### ✅ Best For
- Quick setup
- Two-way sync between Figma and code
- Non-developers who need to manage tokens in Figma

### 📝 Steps

#### 1. Install Figma Tokens Plugin
1. Open Figma
2. Go to **Plugins** → **Find more plugins**
3. Search for **"Figma Tokens"** or **"Tokens Studio"**
4. Click **Install**

#### 2. Import Design Tokens
1. Open your Figma file
2. Run the **Figma Tokens** plugin (Plugins → Figma Tokens)
3. Click on the **Settings** icon (⚙️)
4. Select **Load from file/folder**
5. Choose the `design-tokens.json` file from this project
6. Click **Import**

#### 3. Apply Tokens to Figma
The plugin will automatically create:
- ✅ Color variables for all Lendeck brand colors
- ✅ Spacing variables (4px grid system)
- ✅ Typography styles (font sizes, weights, line heights)
- ✅ Shadow effects
- ✅ Border radius values

#### 4. Sync Options
- **One-time import**: Just import and use
- **GitHub sync**: Connect to your repository for automatic updates
- **JSONBin sync**: Use JSONBin.io for cloud storage
- **GitLab sync**: Use GitLab for version control

---

## Method 2: Figma Variables API

### ✅ Best For
- Programmatic control
- CI/CD integration
- Large-scale design systems

### 📝 Steps

#### 1. Get Figma Access Token
1. Go to [Figma Settings](https://www.figma.com/settings)
2. Scroll to **Personal access tokens**
3. Click **Generate new token**
4. Copy the token (save it securely!)

#### 2. Create a Sync Script
Create a file called `sync-to-figma.js`:

```javascript
const axios = require('axios');
const fs = require('fs');

const FIGMA_TOKEN = 'YOUR_FIGMA_TOKEN';
const FILE_KEY = 'YOUR_FIGMA_FILE_KEY'; // From Figma URL

const tokens = JSON.parse(fs.readFileSync('./design-tokens.json', 'utf8'));

async function createFigmaVariables() {
  const headers = {
    'X-Figma-Token': FIGMA_TOKEN,
    'Content-Type': 'application/json'
  };

  // Create color variables
  const colors = tokens['lendeck/colors'];
  
  for (const [category, colorGroup] of Object.entries(colors)) {
    for (const [name, colorData] of Object.entries(colorGroup)) {
      const variableName = `lendeck/${category}/${name}`;
      
      try {
        await axios.post(
          `https://api.figma.com/v1/files/${FILE_KEY}/variables`,
          {
            name: variableName,
            resolvedType: 'COLOR',
            valuesByMode: {
              default: { type: 'COLOR', value: colorData.value }
            }
          },
          { headers }
        );
        console.log(`✅ Created: ${variableName}`);
      } catch (error) {
        console.error(`❌ Failed: ${variableName}`, error.message);
      }
    }
  }
}

createFigmaVariables();
```

#### 3. Run the Script
```bash
node sync-to-figma.js
```

---

## Method 3: Style Dictionary

### ✅ Best For
- Multi-platform design systems
- Advanced token transformations
- Teams using multiple design tools

### 📝 Steps

#### 1. Install Style Dictionary
```bash
npm install -g style-dictionary
```

#### 2. Create Config File
Create `style-dictionary.config.js`:

```javascript
module.exports = {
  source: ['design-tokens.json'],
  platforms: {
    figma: {
      transformGroup: 'web',
      buildPath: 'build/figma/',
      files: [{
        destination: 'tokens.json',
        format: 'json/nested'
      }]
    },
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables'
      }]
    }
  }
};
```

#### 3. Build Tokens
```bash
style-dictionary build
```

#### 4. Import to Figma
Use the Figma Tokens plugin to import `build/figma/tokens.json`

---

## Manual Color Styles Creation

If you prefer to manually create Figma styles:

### Primary Brand Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Primary Purple | `#4E0F60` | Primary buttons, headers, key actions |
| Light Purple | `#E3E0F2` | Backgrounds, secondary elements |
| Lightest Purple | `#F9F8FD` | Page backgrounds, muted areas |
| Orange | `#FF5F0C` | Accent, CTAs, highlights |
| Light Orange | `#FFCBAF` | Hover states, backgrounds |
| Lightest Orange | `#FFF3EE` | Subtle backgrounds |

### Secondary Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Pink | `#ED1E59` | Status, alerts |
| Yellow | `#EAD01E` | Warnings, pending states |
| Green | `#25A900` | Success states |
| Blue | `#159AEB` | Information, links |
| Teal | `#0DA0BF` | Alternative accent |
| Purple Accent | `#9387EF` | Charts, data viz |

### Gray Scale
| Name | Hex Code |
|------|----------|
| Gray Dark | `#747474` |
| Gray | `#C6C6C6` |
| Gray Light | `#D7D7D9` |
| Gray Lighter | `#E8E8E8` |
| Gray Lightest | `#EEEEEE` |

### Semantic Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Error | `#DD003F` | Error states, destructive actions |
| Success | `#01942B` | Success messages, confirmations |

---

## Typography Styles in Figma

Create text styles with these specifications:

### Headings
- **H1**: 30px, Bold (700), Line height 125%, Letter spacing -0.025em
- **H2**: 24px, Bold (700), Line height 125%, Letter spacing -0.025em
- **H3**: 20px, Semibold (600), Line height 150%
- **H4**: 18px, Semibold (600), Line height 150%
- **H5**: 16px, Semibold (600), Line height 150%
- **H6**: 14px, Semibold (600), Line height 150%

### Body Text
- **Base**: 16px, Normal (400), Line height 150%
- **Small**: 14px, Normal (400), Line height 150%
- **XSmall**: 12px, Normal (400), Line height 150%

---

## Spacing System (8px Grid)

Create spacing variables in Figma:
- **1**: 4px
- **2**: 8px
- **3**: 12px
- **4**: 16px
- **5**: 20px
- **6**: 24px
- **8**: 32px
- **10**: 40px
- **12**: 48px
- **16**: 64px
- **20**: 80px
- **24**: 96px

---

## Shadow Effects

Create effect styles with these specifications:

### Elevation System
- **XS**: `0 1px 2px rgba(78, 15, 96, 0.05)`
- **SM**: Multiple layers - see design-tokens.json
- **MD**: Cards, dropdowns
- **LG**: Modals, popovers
- **XL**: Large overlays
- **2XL**: Maximum elevation

---

## Border Radius

Create border radius variables:
- **XS**: 4px
- **SM**: 6px
- **MD**: 8px (default)
- **LG**: 10px
- **XL**: 12px
- **2XL**: 16px
- **3XL**: 24px
- **Full**: 9999px (circular)

---

## Layout Variables

Create number variables for layout:
- **Container Max Width**: 1280px
- **Sidebar Width**: 256px
- **Header Height**: 64px
- **Content Padding**: 24px

---

## Automated Workflow (Advanced)

For continuous sync between code and Figma:

1. **Set up GitHub Actions**
2. **Use Figma Tokens plugin with GitHub sync**
3. **Every code push updates Figma automatically**

Example `.github/workflows/sync-tokens.yml`:

```yaml
name: Sync Tokens to Figma

on:
  push:
    paths:
      - 'design-tokens.json'
      - 'styles/globals.css'

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Sync to Figma
        run: |
          # Add your sync script here
          echo "Syncing tokens to Figma..."
```

---

## Troubleshooting

### Common Issues

**❌ Plugin can't read JSON**
- Ensure JSON is valid (use JSONLint.com)
- Check file encoding is UTF-8

**❌ Colors not appearing correctly**
- Verify hex codes don't have spaces
- Ensure color type is set correctly

**❌ Variables not syncing**
- Check Figma file permissions
- Verify API token has correct scope

---

## Additional Resources

- [Figma Tokens Documentation](https://docs.tokens.studio/)
- [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383)
- [Style Dictionary Docs](https://amzn.github.io/style-dictionary/)
- [Lendeck Design System](/components/design-system/README.md)

---

## Support

For questions or issues with the Lendeck design system:
1. Check this guide first
2. Review the design tokens JSON file
3. Consult the design system README
4. Contact the design system team

---

**Last Updated**: October 2025  
**Version**: 1.0.0  
**Maintainer**: Lendeck Design Team
