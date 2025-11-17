/**
 * Mediana VoIP SaaS Dashboard - Design System
 * 
 * This file contains all design tokens, variables, constants, and configuration
 * for the Mediana dashboard application. All components should reference this
 * file for consistent styling and behavior.
 * 
 * Color Palette: White, #9AC6BD (teal), #262626 (dark gray), Black
 * Design Framework: shadcn/ui with Tailwind CSS v4
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================

/**
 * Primary Color Palette
 * All colors comply with WCAG 2.1 Level AA accessibility standards
 */
export const colors = {
  // Base colors
  white: '#ffffff',
  black: '#000000',
  darkGray: '#262626',
  
  // Teal scale - accessibility-compliant variants
  teal: {
    50: '#f0f9f7',    // Very light teal for subtle backgrounds
    100: '#ccebe6',   // Light teal for borders
    200: '#9AC6BD',   // Brand teal (decorative use only)
    600: '#4A8B82',   // Accessible teal (4.5:1 contrast on white)
    700: '#3A7A71',   // Dark teal
    800: '#2A6A61',   // Darker teal for high contrast
    900: '#1A5A51',   // Darkest teal
  },
  
  // Semantic colors
  destructive: {
    light: '#fee2e2',
    DEFAULT: '#dc2626',
    dark: '#991b1b',
  },
  
  success: {
    subtle: '#f0f9f7',
    DEFAULT: '#4A8B82',
    dark: '#2A6A61',
  },
  
  warning: {
    subtle: '#fef3c7',
    DEFAULT: '#f59e0b',
    dark: '#b45309',
  },
  
  info: {
    subtle: '#dbeafe',
    DEFAULT: '#3b82f6',
    dark: '#1e40af',
  },
  
  // Neutral scale
  neutral: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

// ============================================================================
// SPACING TOKENS
// ============================================================================

/**
 * Spacing scale following 8px grid system
 */
export const spacing = {
  0: '0px',
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
  32: '8rem',     // 128px
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

/**
 * Font size scale (base size: 14px)
 */
export const fontSize = {
  xs: '0.75rem',      // 10.5px
  sm: '0.857rem',     // 12px
  base: '1rem',       // 14px
  lg: '1.143rem',     // 16px
  xl: '1.286rem',     // 18px
  '2xl': '1.571rem',  // 22px
  '3xl': '2rem',      // 28px
  '4xl': '2.5rem',    // 35px
} as const;

/**
 * Font weights
 */
export const fontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

/**
 * Line heights
 */
export const lineHeight = {
  none: '1',
  tight: '1.25',
  normal: '1.5',
  relaxed: '1.75',
  loose: '2',
} as const;

// ============================================================================
// BORDER & RADIUS TOKENS
// ============================================================================

/**
 * Border radius values
 */
export const borderRadius = {
  none: '0',
  sm: 'calc(0.625rem - 4px)',   // ~6px
  md: 'calc(0.625rem - 2px)',   // ~8px
  lg: '0.625rem',               // 10px
  xl: 'calc(0.625rem + 4px)',   // ~14px
  '2xl': '1rem',                // 16px
  full: '9999px',
} as const;

/**
 * Border widths
 */
export const borderWidth = {
  DEFAULT: '1px',
  0: '0',
  2: '2px',
  4: '4px',
  8: '8px',
} as const;

// ============================================================================
// SHADOW TOKENS
// ============================================================================

/**
 * Box shadow values
 */
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  none: 'none',
} as const;

// ============================================================================
// ANIMATION & TRANSITION TOKENS
// ============================================================================

/**
 * Transition durations
 */
export const duration = {
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
} as const;

/**
 * Transition timing functions
 */
export const easing = {
  linear: 'linear',
  in: 'cubic-bezier(0.4, 0, 1, 1)',
  out: 'cubic-bezier(0, 0, 0.2, 1)',
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

// ============================================================================
// COMPONENT CONFIGURATIONS
// ============================================================================

/**
 * Button component variants and sizes
 */
export const buttonConfig = {
  variants: {
    default: {
      bg: colors.teal[600],
      text: colors.white,
      hover: colors.teal[700],
      active: colors.teal[800],
    },
    destructive: {
      bg: colors.destructive.DEFAULT,
      text: colors.white,
      hover: colors.destructive.dark,
    },
    outline: {
      bg: 'transparent',
      text: colors.teal[600],
      border: colors.teal[600],
      hover: colors.teal[50],
    },
    ghost: {
      bg: 'transparent',
      text: colors.teal[600],
      hover: colors.teal[50],
    },
    link: {
      bg: 'transparent',
      text: colors.teal[600],
      underline: true,
    },
  },
  sizes: {
    sm: {
      height: '2rem',      // 32px
      padding: '0.5rem 1rem',
    },
    md: {
      height: '2.5rem',    // 40px
      padding: '0.75rem 1.5rem',
    },
    lg: {
      height: '3rem',      // 48px
      padding: '1rem 2rem',
    },
    icon: {
      height: '2.5rem',
      width: '2.5rem',
      padding: '0.5rem',
    },
  },
} as const;

/**
 * Input component configuration
 */
export const inputConfig = {
  height: '2.5rem',         // 40px
  padding: '0.5rem 0.75rem',
  borderColor: colors.neutral[200],
  borderRadius: borderRadius.md,
  focusBorderColor: colors.teal[600],
  backgroundColor: colors.neutral[50],
  disabledOpacity: 0.5,
} as const;

/**
 * Card component configuration
 */
export const cardConfig = {
  backgroundColor: colors.white,
  borderColor: colors.neutral[200],
  borderRadius: borderRadius.lg,
  padding: spacing[6],
  shadow: shadows.sm,
} as const;

/**
 * Badge component variants
 */
export const badgeConfig = {
  variants: {
    default: {
      bg: colors.teal[600],
      text: colors.white,
    },
    secondary: {
      bg: colors.neutral[100],
      text: colors.neutral[900],
    },
    destructive: {
      bg: colors.destructive.DEFAULT,
      text: colors.white,
    },
    success: {
      bg: colors.success.DEFAULT,
      text: colors.white,
    },
    warning: {
      bg: colors.warning.DEFAULT,
      text: colors.white,
    },
    outline: {
      bg: 'transparent',
      text: colors.teal[600],
      border: colors.teal[600],
    },
  },
} as const;

// ============================================================================
// LAYOUT CONSTANTS
// ============================================================================

/**
 * Sidebar configuration
 */
export const sidebarConfig = {
  width: {
    expanded: '16rem',     // 256px
    collapsed: '4rem',     // 64px
  },
  backgroundColor: colors.darkGray,
  textColor: colors.white,
  activeColor: colors.teal[600],
  hoverColor: colors.neutral[700],
  borderColor: colors.neutral[700],
} as const;

/**
 * Dashboard layout configuration
 */
export const layoutConfig = {
  headerHeight: '4rem',     // 64px
  contentPadding: spacing[8],
  maxContentWidth: '1400px',
  mobileBreakpoint: '768px',
  tabletBreakpoint: '1024px',
} as const;

/**
 * Z-index scale
 */
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
} as const;

// ============================================================================
// VOIP DASHBOARD SPECIFIC CONSTANTS
// ============================================================================

/**
 * Call status colors and configurations
 */
export const callStatusConfig = {
  answered: {
    color: colors.success.DEFAULT,
    bgColor: colors.success.subtle,
    label: 'Answered',
    icon: 'PhoneIncoming',
  },
  missed: {
    color: colors.warning.DEFAULT,
    bgColor: colors.warning.subtle,
    label: 'Missed',
    icon: 'PhoneMissed',
  },
  rejected: {
    color: colors.destructive.DEFAULT,
    bgColor: colors.destructive.light,
    label: 'Rejected',
    icon: 'PhoneOff',
  },
  voicemail: {
    color: colors.info.DEFAULT,
    bgColor: colors.info.subtle,
    label: 'Voicemail',
    icon: 'Voicemail',
  },
} as const;

/**
 * Extension line status
 */
export const lineStatusConfig = {
  active: {
    color: colors.success.DEFAULT,
    label: 'Active',
    icon: 'CheckCircle2',
  },
  inactive: {
    color: colors.neutral[400],
    label: 'Inactive',
    icon: 'Circle',
  },
  busy: {
    color: colors.warning.DEFAULT,
    label: 'Busy',
    icon: 'Phone',
  },
  error: {
    color: colors.destructive.DEFAULT,
    label: 'Error',
    icon: 'AlertCircle',
  },
} as const;

/**
 * Chart colors for analytics
 */
export const chartColors = {
  primary: colors.teal[200],
  secondary: colors.darkGray,
  tertiary: colors.neutral[500],
  quaternary: '#7dd3fc',
  quinary: '#a78bfa',
} as const;

/**
 * Billing plan configuration
 */
export const billingPlans = {
  basic: {
    name: 'Basic Plan',
    monthlyFee: 29.99,
    color: colors.neutral[600],
    features: [
      'Up to 5 extensions',
      '1000 minutes/month',
      'Basic IVR',
      'Email support',
    ],
  },
  professional: {
    name: 'Professional Plan',
    monthlyFee: 79.99,
    color: colors.teal[600],
    features: [
      'Up to 20 extensions',
      'Unlimited minutes',
      'Advanced IVR',
      'Call recording',
      '24/7 priority support',
      'Analytics & reporting',
    ],
  },
} as const;

/**
 * IVR flow node types
 */
export const ivrNodeTypes = {
  menu: {
    label: 'Menu',
    icon: 'List',
    color: colors.teal[600],
  },
  prompt: {
    label: 'Prompt',
    icon: 'MessageSquare',
    color: colors.info.DEFAULT,
  },
  transfer: {
    label: 'Transfer',
    icon: 'PhoneForwarded',
    color: colors.success.DEFAULT,
  },
  voicemail: {
    label: 'Voicemail',
    icon: 'Voicemail',
    color: colors.warning.DEFAULT,
  },
  hangup: {
    label: 'Hangup',
    icon: 'PhoneOff',
    color: colors.destructive.DEFAULT,
  },
} as const;

// ============================================================================
// AUTHENTICATION CONSTANTS
// ============================================================================

/**
 * Authentication configuration
 */
export const authConfig = {
  passwordMinLength: 8,
  sessionTimeout: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  rememberMeDuration: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
  validation: {
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
    password: {
      minLength: 8,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      message: 'Password must be at least 8 characters with uppercase, lowercase, and number',
      weakMessage: 'Password must be at least 8 characters long',
    },
    name: {
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s'-]+$/,
      message: 'Name must contain only letters, spaces, hyphens, and apostrophes',
    },
  },
} as const;

/**
 * Authentication error messages
 */
export const authErrorMessages = {
  invalidCredentials: 'Invalid email or password',
  emailExists: 'An account with this email already exists',
  weakPassword: 'Password is too weak',
  passwordMismatch: 'Passwords do not match',
  networkError: 'Network error. Please try again',
  sessionExpired: 'Your session has expired. Please log in again',
  unauthorized: 'You are not authorized to access this resource',
} as const;

// ============================================================================
// ONBOARDING FLOW CONSTANTS
// ============================================================================

/**
 * Onboarding steps configuration
 */
export const onboardingSteps = [
  {
    id: 'personal-info',
    title: 'Personal Information',
    description: 'Enter your personal details',
    icon: 'User',
    required: true,
    canSkip: false,
  },
  {
    id: 'business-info',
    title: 'Business Information',
    description: 'Tell us about your business',
    icon: 'Building2',
    required: true,
    canSkip: false,
  },
  {
    id: 'lines-setup',
    title: 'Lines Setup',
    description: 'Configure your phone extensions',
    icon: 'Phone',
    required: false,
    canSkip: true,
  },
  {
    id: 'ivr-voices',
    title: 'IVR Voice Setup',
    description: 'Upload custom voice prompts',
    icon: 'Mic',
    required: false,
    canSkip: true,
  },
  {
    id: 'review',
    title: 'Review & Complete',
    description: 'Review your settings',
    icon: 'CheckCircle2',
    required: true,
    canSkip: false,
  },
] as const;

// ============================================================================
// NAVIGATION STRUCTURE
// ============================================================================

/**
 * Dashboard navigation items
 */
export const navigationItems = [
  {
    id: 'reports',
    label: 'Reports & Analytics',
    icon: 'BarChart3',
    path: '/reports',
  },
  {
    id: 'call-logs',
    label: 'Call Logs',
    icon: 'Phone',
    path: '/call-logs',
  },
  {
    id: 'lines',
    label: 'Lines',
    icon: 'PhoneCall',
    path: '/lines',
  },
  {
    id: 'ivr-flows',
    label: 'IVR Flows',
    icon: 'GitBranch',
    path: '/ivr-flows',
  },
  {
    id: 'ivr-voices',
    label: 'IVR Voices',
    icon: 'Mic',
    path: '/ivr-voices',
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: 'CreditCard',
    path: '/billing',
  },
] as const;

/**
 * Registration management sub-navigation
 */
export const registrationMenuItems = [
  {
    id: 'personal',
    label: 'Personal Information',
    path: '/registration/personal',
  },
  {
    id: 'business',
    label: 'Business Information',
    path: '/registration/business',
  },
  {
    id: 'settings',
    label: 'Account Settings',
    path: '/registration/settings',
  },
] as const;

// ============================================================================
// ACCESSIBILITY CONSTANTS
// ============================================================================

/**
 * WCAG 2.1 Level AA compliance constants
 */
export const accessibility = {
  contrastRatio: {
    normal: 4.5,      // For normal text
    large: 3,         // For large text (18pt+ or 14pt+ bold)
  },
  focusRingWidth: '2px',
  focusRingColor: colors.teal[600],
  focusRingOffset: '2px',
} as const;

// ============================================================================
// VALIDATION RULES
// ============================================================================

/**
 * Form validation rules and patterns
 */
export const validationRules = {
  phoneNumber: {
    pattern: /^[0-9\s\-\+\(\)]+$/,
    minLength: 10,
    maxLength: 15,
    message: 'Please enter a valid phone number',
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  idNumber: {
    pattern: /^[0-9]{9,11}$/,
    message: 'ID number must be 9-11 digits',
  },
  registrationId: {
    pattern: /^[A-Z0-9\-]+$/,
    minLength: 5,
    maxLength: 20,
    message: 'Registration ID must be 5-20 alphanumeric characters',
  },
  extensionNumber: {
    pattern: /^[0-9]{3,5}$/,
    message: 'Extension must be 3-5 digits',
  },
} as const;

// ============================================================================
// TABLE CONFIGURATIONS
// ============================================================================

/**
 * Common table settings
 */
export const tableConfig = {
  rowHeight: '3.5rem',       // 56px
  headerHeight: '3rem',      // 48px
  striped: true,
  stripedColor: colors.neutral[50],
  hoverColor: colors.teal[50],
  borderColor: colors.neutral[200],
  itemsPerPage: 10,
  pagination: {
    options: [10, 20, 50, 100],
  },
} as const;

// ============================================================================
// FILE UPLOAD CONFIGURATION
// ============================================================================

/**
 * File upload settings for IVR voices
 */
export const fileUploadConfig = {
  acceptedFormats: ['.mp3', '.wav', '.ogg'],
  maxFileSize: 10 * 1024 * 1024,  // 10MB
  maxFiles: 10,
  messages: {
    invalidFormat: 'Please upload only MP3, WAV, or OGG files',
    fileTooLarge: 'File size must not exceed 10MB',
    tooManyFiles: 'Maximum 10 files allowed',
  },
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Helper to get accessible teal color based on context
 * @param context - 'text' | 'background' | 'border' | 'decorative'
 * @returns Appropriate teal color value
 */
export function getAccessibleTealColor(
  context: 'text' | 'background' | 'border' | 'decorative'
): string {
  switch (context) {
    case 'text':
      return colors.teal[600]; // 4.5:1 contrast on white
    case 'background':
      return colors.teal[600]; // Use with white text
    case 'border':
      return colors.teal[200]; // Subtle borders
    case 'decorative':
      return colors.teal[200]; // Brand color for non-critical elements
    default:
      return colors.teal[600];
  }
}

/**
 * Generate CSS custom property names from design tokens
 */
export function getCSSVariable(token: string): string {
  return `var(--${token})`;
}

/**
 * Get call status configuration by status key
 */
export function getCallStatusConfig(status: keyof typeof callStatusConfig) {
  return callStatusConfig[status] || callStatusConfig.missed;
}

/**
 * Get line status configuration by status key
 */
export function getLineStatusConfig(status: keyof typeof lineStatusConfig) {
  return lineStatusConfig[status] || lineStatusConfig.inactive;
}

/**
 * Format currency values
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Format duration in seconds to readable format
 */
export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${secs}s`;
  } else {
    return `${secs}s`;
  }
}

/**
 * Format phone number to consistent display format
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phone;
}

/**
 * Validate form field based on validation rules
 */
export function validateField(
  value: string,
  rule: keyof typeof validationRules
): { valid: boolean; message?: string } {
  const validation = validationRules[rule];
  
  if (!validation) {
    return { valid: true };
  }
  
  if (validation.pattern && !validation.pattern.test(value)) {
    return { valid: false, message: validation.message };
  }
  
  if ('minLength' in validation && value.length < (validation.minLength || 0)) {
    return { valid: false, message: validation.message };
  }
  
  if ('maxLength' in validation && value.length > (validation.maxLength || Infinity)) {
    return { valid: false, message: validation.message };
  }
  
  return { valid: true };
}

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type ColorToken = typeof colors;
export type SpacingToken = typeof spacing;
export type FontSizeToken = typeof fontSize;
export type BorderRadiusToken = typeof borderRadius;
export type ShadowToken = typeof shadows;
export type CallStatus = keyof typeof callStatusConfig;
export type LineStatus = keyof typeof lineStatusConfig;
export type IVRNodeType = keyof typeof ivrNodeTypes;
export type BillingPlan = keyof typeof billingPlans;
export type OnboardingStepId = typeof onboardingSteps[number]['id'];
export type NavigationItemId = typeof navigationItems[number]['id'];
