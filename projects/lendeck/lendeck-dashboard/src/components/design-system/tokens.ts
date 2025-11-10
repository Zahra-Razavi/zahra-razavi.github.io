/**
 * LENDECK DESIGN SYSTEM TOKENS
 * 
 * This file exports all design tokens as TypeScript constants
 * for use in components where CSS variables aren't accessible.
 * 
 * Always prefer using CSS variables in styles when possible.
 */

/* ========================================
   COLOR TOKENS
   ======================================== */

export const colors = {
  // Primary Brand Colors
  primary: '#4E0F60',
  lightPurple: '#E3E0F2',
  lightestPurple: '#F9F8FD',
  white: '#FFFFFF',
  orange: '#FF5F0C',
  lightOrange: '#FFCBAF',
  lightestOrange: '#FFF3EE',
  
  // Secondary Brand Colors
  pink: '#ED1E59',
  beige: '#EBE6DA',
  yellow: '#EAD01E',
  green: '#25A900',
  blue: '#159AEB',
  teal: '#0DA0BF',
  purpleAccent: '#9387EF',
  
  // Gray Scale
  grayDark: '#747474',
  gray: '#C6C6C6',
  grayLight: '#D7D7D9',
  grayLighter: '#E8E8E8',
  grayLightest: '#EEEEEE',
  
  // Status Colors
  error: '#DD003F',
  success: '#01942B',
  
  // Text Colors
  textDark: '#080209',
  textLight: '#FFFFFF',
} as const;

/* ========================================
   SPACING TOKENS
   ======================================== */

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
} as const;

/* ========================================
   TYPOGRAPHY TOKENS
   ======================================== */

export const typography = {
  fontFamily: {
    base: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    mono: "ui-monospace, SFMono-Regular, 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
  },
  
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
} as const;

/* ========================================
   SHADOW TOKENS
   ======================================== */

export const shadows = {
  xs: '0 1px 2px 0 rgba(78, 15, 96, 0.05)',
  sm: '0 1px 3px 0 rgba(78, 15, 96, 0.1), 0 1px 2px -1px rgba(78, 15, 96, 0.1)',
  md: '0 4px 6px -1px rgba(78, 15, 96, 0.1), 0 2px 4px -2px rgba(78, 15, 96, 0.1)',
  lg: '0 10px 15px -3px rgba(78, 15, 96, 0.1), 0 4px 6px -4px rgba(78, 15, 96, 0.1)',
  xl: '0 20px 25px -5px rgba(78, 15, 96, 0.1), 0 8px 10px -6px rgba(78, 15, 96, 0.1)',
  '2xl': '0 25px 50px -12px rgba(78, 15, 96, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(78, 15, 96, 0.05)',
} as const;

/* ========================================
   BORDER RADIUS TOKENS
   ======================================== */

export const borderRadius = {
  none: '0',
  xs: '0.25rem',   // 4px
  sm: '0.375rem',  // 6px
  md: '0.5rem',    // 8px
  lg: '0.625rem',  // 10px
  xl: '0.75rem',   // 12px
  '2xl': '1rem',   // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px',
} as const;

/* ========================================
   TRANSITION TOKENS
   ======================================== */

export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  base: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

/* ========================================
   Z-INDEX SCALE
   ======================================== */

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

/* ========================================
   BREAKPOINTS
   ======================================== */

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

/* ========================================
   COMPONENT SIZES
   ======================================== */

export const componentSizes = {
  statusCard: {
    padding: spacing[4],
    gap: spacing[3],
    iconSize: '2.5rem',
    iconInner: '1.25rem',
    radius: borderRadius.lg,
  },
  
  button: {
    paddingX: spacing[4],
    paddingY: spacing[2],
    radius: borderRadius.md,
  },
  
  input: {
    paddingX: spacing[3],
    paddingY: spacing[2],
    radius: borderRadius.md,
  },
  
  card: {
    padding: spacing[6],
    radius: borderRadius.xl,
  },
  
  modal: {
    padding: spacing[6],
    radius: borderRadius['2xl'],
  },
} as const;

/* ========================================
   LAYOUT TOKENS
   ======================================== */

export const layout = {
  containerMaxWidth: '1280px',
  sidebarWidth: '16rem',
  headerHeight: '4rem',
  contentPadding: spacing[6],
} as const;

/* ========================================
   DESIGN SYSTEM CONFIG
   ======================================== */

export const designSystem = {
  colors,
  spacing,
  typography,
  shadows,
  borderRadius,
  transitions,
  zIndex,
  breakpoints,
  componentSizes,
  layout,
} as const;

export default designSystem;
