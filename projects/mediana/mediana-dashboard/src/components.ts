/**
 * Mediana VoIP Design System - Component Specifications
 * 
 * This file defines all component variants, states, and their token mappings.
 * Components are organized by category and include detailed specifications
 * for consistent implementation across the application.
 * 
 * @version 1.0.0
 */

export const components = {
  /**
   * BUTTONS
   * Primary interactive elements with multiple variants and states
   */
  button: {
    base: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "spacing.2", // 8px
      whiteSpace: "nowrap",
      borderRadius: "borderRadius.md",
      fontSize: "typography.fontSize.md",
      fontWeight: "typography.fontWeight.medium",
      lineHeight: "typography.lineHeight.normal",
      transition: "transition.duration.normal transition.easing.default",
      outline: "none",
      cursor: "pointer",
      disabled: {
        opacity: "0.5",
        pointerEvents: "none",
        cursor: "not-allowed"
      },
      focus: {
        ring: "3px",
        ringColor: "colors.semantic.ring",
        ringOpacity: "50%",
        borderColor: "colors.semantic.ring"
      }
    },
    variants: {
      default: {
        background: "colors.semantic.primary",
        color: "colors.semantic.primary.foreground",
        hover: {
          background: "colors.semantic.primary (90% opacity)"
        }
      },
      destructive: {
        background: "colors.semantic.destructive",
        color: "colors.semantic.destructive.foreground",
        hover: {
          background: "colors.semantic.destructive (90% opacity)"
        },
        focus: {
          ringColor: "colors.semantic.destructive",
          ringOpacity: "20%"
        }
      },
      outline: {
        background: "colors.semantic.background",
        color: "colors.semantic.foreground",
        border: "1px solid colors.semantic.border",
        hover: {
          background: "colors.semantic.accent",
          color: "colors.semantic.accent.foreground"
        }
      },
      secondary: {
        background: "colors.semantic.secondary",
        color: "colors.semantic.secondary.foreground",
        hover: {
          background: "colors.semantic.secondary (80% opacity)"
        }
      },
      ghost: {
        background: "transparent",
        color: "colors.semantic.foreground",
        hover: {
          background: "colors.semantic.accent",
          color: "colors.semantic.accent.foreground"
        }
      },
      link: {
        background: "transparent",
        color: "colors.semantic.primary",
        textDecoration: "underline",
        textUnderlineOffset: "4px",
        hover: {
          textDecoration: "underline"
        }
      }
    },
    sizes: {
      sm: {
        height: "size.button.sm", // 32px
        borderRadius: "borderRadius.md",
        gap: "spacing.1.5",
        padding: "spacing.2 spacing.3", // 8px 12px
        withIcon: {
          padding: "spacing.2 spacing.2.5" // 8px 10px
        }
      },
      md: {
        height: "size.button.md", // 36px
        padding: "spacing.2 spacing.4", // 8px 16px
        withIcon: {
          padding: "spacing.2 spacing.3" // 8px 12px
        }
      },
      lg: {
        height: "size.button.lg", // 40px
        borderRadius: "borderRadius.md",
        padding: "spacing.2 spacing.6", // 8px 24px
        withIcon: {
          padding: "spacing.2 spacing.4" // 8px 16px
        }
      },
      icon: {
        width: "size.button.md",
        height: "size.button.md",
        borderRadius: "borderRadius.md"
      }
    },
    icons: {
      size: "size.icon.sm", // 16px (4 in Tailwind)
      shrink: "0",
      pointerEvents: "none"
    }
  },

  /**
   * CARDS
   * Container components for grouping related content
   */
  card: {
    base: {
      borderRadius: "borderRadius.lg",
      border: "1px solid colors.semantic.border",
      background: "colors.semantic.card",
      color: "colors.semantic.card.foreground",
      boxShadow: "shadow.sm"
    },
    header: {
      display: "flex",
      flexDirection: "column",
      gap: "spacing.1.5",
      padding: "spacing.6" // 24px
    },
    title: {
      fontSize: "typography.fontSize.lg",
      fontWeight: "typography.fontWeight.semibold",
      lineHeight: "typography.lineHeight.tight",
      letterSpacing: "typography.letterSpacing.tight"
    },
    description: {
      fontSize: "typography.fontSize.sm",
      color: "colors.semantic.muted.foreground"
    },
    content: {
      padding: "spacing.6", // 24px
      paddingTop: "0"
    },
    footer: {
      display: "flex",
      alignItems: "center",
      padding: "spacing.6", // 24px
      paddingTop: "0"
    }
  },

  /**
   * INPUTS
   * Form input fields with consistent styling
   */
  input: {
    base: {
      display: "flex",
      width: "100%",
      borderRadius: "borderRadius.md",
      border: "1px solid colors.semantic.border",
      background: "colors.semantic.input.background",
      padding: "spacing.2 spacing.3", // 8px 12px
      fontSize: "typography.fontSize.md",
      fontWeight: "typography.fontWeight.normal",
      lineHeight: "typography.lineHeight.normal",
      transition: "transition.duration.normal transition.easing.default",
      outline: "none",
      placeholder: {
        color: "colors.semantic.muted.foreground"
      },
      focus: {
        borderColor: "colors.semantic.ring",
        ring: "3px",
        ringColor: "colors.semantic.ring",
        ringOpacity: "50%"
      },
      disabled: {
        opacity: "0.5",
        cursor: "not-allowed"
      }
    },
    sizes: {
      sm: {
        height: "size.input.sm",
        fontSize: "typography.fontSize.sm"
      },
      md: {
        height: "size.input.md",
        fontSize: "typography.fontSize.md"
      },
      lg: {
        height: "size.input.lg",
        fontSize: "typography.fontSize.lg"
      }
    },
    file: {
      border: "0",
      background: "transparent",
      fontSize: "typography.fontSize.sm",
      fontWeight: "typography.fontWeight.medium",
      cursor: "pointer"
    }
  },

  /**
   * LABELS
   * Form labels and text descriptions
   */
  label: {
    base: {
      fontSize: "typography.fontSize.md",
      fontWeight: "typography.fontWeight.medium",
      lineHeight: "typography.lineHeight.normal",
      cursor: "pointer",
      disabled: {
        opacity: "0.7",
        cursor: "not-allowed"
      }
    }
  },

  /**
   * TABLES
   * Data table components with consistent styling
   */
  table: {
    wrapper: {
      width: "100%",
      position: "relative",
      overflow: "auto"
    },
    base: {
      width: "100%",
      captionSide: "bottom",
      fontSize: "typography.fontSize.sm"
    },
    header: {
      borderBottom: "1px solid colors.semantic.border",
      background: "colors.semantic.muted"
    },
    headerCell: {
      height: "size.input.md",
      padding: "spacing.2 spacing.4", // 8px 16px
      textAlign: "left",
      verticalAlign: "middle",
      fontWeight: "typography.fontWeight.medium",
      color: "colors.semantic.foreground"
    },
    body: {},
    row: {
      borderBottom: "1px solid colors.semantic.border",
      transition: "transition.duration.fast transition.easing.default",
      hover: {
        background: "colors.semantic.muted (50% opacity)"
      }
    },
    cell: {
      padding: "spacing.4", // 16px
      verticalAlign: "middle"
    },
    footer: {
      borderTop: "1px solid colors.semantic.border",
      background: "colors.semantic.muted",
      fontWeight: "typography.fontWeight.medium"
    },
    caption: {
      marginTop: "spacing.4",
      fontSize: "typography.fontSize.sm",
      color: "colors.semantic.muted.foreground"
    }
  },

  /**
   * BADGES
   * Status and category indicators
   */
  badge: {
    base: {
      display: "inline-flex",
      alignItems: "center",
      borderRadius: "borderRadius.full",
      padding: "spacing.1 spacing.2.5", // 4px 10px
      fontSize: "typography.fontSize.xs",
      fontWeight: "typography.fontWeight.semibold",
      lineHeight: "typography.lineHeight.tight",
      transition: "transition.duration.normal transition.easing.default",
      border: "1px solid transparent",
      focus: {
        ring: "2px",
        ringColor: "colors.semantic.ring",
        ringOffset: "2px"
      }
    },
    variants: {
      default: {
        background: "colors.semantic.primary",
        color: "colors.semantic.primary.foreground",
        hover: {
          background: "colors.semantic.primary (80% opacity)"
        }
      },
      secondary: {
        background: "colors.semantic.secondary",
        color: "colors.semantic.secondary.foreground",
        hover: {
          background: "colors.semantic.secondary (80% opacity)"
        }
      },
      destructive: {
        background: "colors.semantic.destructive",
        color: "colors.semantic.destructive.foreground",
        hover: {
          background: "colors.semantic.destructive (80% opacity)"
        }
      },
      outline: {
        color: "colors.semantic.foreground",
        border: "1px solid colors.semantic.border"
      },
      success: {
        background: "colors.semantic.success",
        color: "#ffffff"
      }
    }
  },

  /**
   * DIALOGS & MODALS
   * Overlay components for focused interactions
   */
  dialog: {
    overlay: {
      position: "fixed",
      inset: "0",
      zIndex: "zIndex.modal",
      background: "rgba(0, 0, 0, 0.8)",
      animation: "fade-in 150ms"
    },
    content: {
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "zIndex.modal",
      width: "100%",
      maxWidth: "512px",
      gap: "spacing.4",
      border: "1px solid colors.semantic.border",
      background: "colors.semantic.card",
      padding: "spacing.6",
      boxShadow: "shadow.lg",
      borderRadius: "borderRadius.lg",
      animation: "slide-in 200ms"
    },
    header: {
      display: "flex",
      flexDirection: "column",
      gap: "spacing.1.5",
      textAlign: "center"
    },
    title: {
      fontSize: "typography.fontSize.lg",
      fontWeight: "typography.fontWeight.semibold",
      lineHeight: "typography.lineHeight.tight",
      letterSpacing: "typography.letterSpacing.tight"
    },
    description: {
      fontSize: "typography.fontSize.sm",
      color: "colors.semantic.muted.foreground"
    },
    footer: {
      display: "flex",
      flexDirection: "column-reverse",
      gap: "spacing.2",
      responsive: {
        sm: {
          flexDirection: "row",
          justifyContent: "flex-end"
        }
      }
    }
  },

  /**
   * DROPDOWN MENUS
   * Contextual menus and selections
   */
  dropdownMenu: {
    content: {
      minWidth: "192px",
      overflow: "hidden",
      borderRadius: "borderRadius.md",
      border: "1px solid colors.semantic.border",
      background: "colors.semantic.popover",
      color: "colors.semantic.popover.foreground",
      boxShadow: "shadow.md",
      padding: "spacing.1",
      zIndex: "zIndex.dropdown",
      animation: "fade-in 100ms"
    },
    item: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: "spacing.2",
      borderRadius: "borderRadius.sm",
      padding: "spacing.1.5 spacing.2", // 6px 8px
      paddingLeft: "spacing.8",
      fontSize: "typography.fontSize.sm",
      outline: "none",
      cursor: "pointer",
      transition: "transition.duration.fast transition.easing.default",
      focus: {
        background: "colors.semantic.accent",
        color: "colors.semantic.accent.foreground"
      },
      disabled: {
        opacity: "0.5",
        pointerEvents: "none"
      }
    },
    label: {
      padding: "spacing.1.5 spacing.2",
      fontSize: "typography.fontSize.sm",
      fontWeight: "typography.fontWeight.semibold",
      color: "colors.semantic.foreground"
    },
    separator: {
      height: "1px",
      margin: "spacing.1 0",
      background: "colors.semantic.muted"
    }
  },

  /**
   * SELECT
   * Dropdown selection components
   */
  select: {
    trigger: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "spacing.2",
      borderRadius: "borderRadius.md",
      border: "1px solid colors.semantic.border",
      background: "colors.semantic.card",
      padding: "spacing.2 spacing.3",
      fontSize: "typography.fontSize.md",
      outline: "none",
      focus: {
        borderColor: "colors.semantic.ring",
        ring: "3px",
        ringColor: "colors.semantic.ring",
        ringOpacity: "50%"
      },
      disabled: {
        opacity: "0.5",
        cursor: "not-allowed"
      }
    },
    content: {
      position: "relative",
      zIndex: "zIndex.dropdown",
      maxHeight: "384px",
      minWidth: "128px",
      overflow: "hidden",
      borderRadius: "borderRadius.md",
      border: "1px solid colors.semantic.border",
      background: "colors.semantic.popover",
      color: "colors.semantic.popover.foreground",
      boxShadow: "shadow.md"
    },
    item: {
      position: "relative",
      display: "flex",
      width: "100%",
      alignItems: "center",
      borderRadius: "borderRadius.sm",
      padding: "spacing.1.5 spacing.8 spacing.1.5 spacing.2",
      fontSize: "typography.fontSize.sm",
      outline: "none",
      cursor: "pointer",
      focus: {
        background: "colors.semantic.accent",
        color: "colors.semantic.accent.foreground"
      },
      disabled: {
        opacity: "0.5",
        pointerEvents: "none"
      }
    }
  },

  /**
   * SWITCH
   * Toggle switches for binary states
   */
  switch: {
    root: {
      display: "inline-flex",
      width: "44px",
      height: "24px",
      shrink: "0",
      borderRadius: "borderRadius.full",
      border: "2px solid transparent",
      background: "colors.semantic.switch.background",
      cursor: "pointer",
      transition: "transition.duration.normal transition.easing.default",
      disabled: {
        opacity: "0.5",
        cursor: "not-allowed"
      },
      focus: {
        ring: "2px",
        ringColor: "colors.semantic.ring",
        ringOffset: "2px",
        ringOffsetColor: "colors.semantic.background"
      },
      checked: {
        background: "colors.semantic.primary"
      }
    },
    thumb: {
      display: "block",
      width: "20px",
      height: "20px",
      background: "colors.semantic.background",
      borderRadius: "borderRadius.full",
      boxShadow: "shadow.sm",
      transition: "transition.duration.normal transition.easing.default",
      pointerEvents: "none",
      checked: {
        transform: "translateX(20px)"
      }
    }
  },

  /**
   * PROGRESS BAR
   * Progress indicators for multi-step flows
   */
  progress: {
    root: {
      position: "relative",
      width: "100%",
      height: "16px",
      overflow: "hidden",
      borderRadius: "borderRadius.full",
      background: "colors.semantic.secondary"
    },
    indicator: {
      height: "100%",
      width: "100%",
      background: "colors.semantic.primary",
      transition: "transition.duration.slow transition.easing.default"
    }
  },

  /**
   * SIDEBAR
   * Navigation sidebar with menu items
   */
  sidebar: {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "256px",
      background: "colors.sidebar.background",
      color: "colors.sidebar.foreground",
      borderRight: "1px solid colors.sidebar.border",
      fontSize: "16px" // Increased from base
    },
    header: {
      padding: "spacing.4"
    },
    content: {
      padding: "spacing.4",
      flex: "1",
      overflow: "auto"
    },
    footer: {
      padding: "spacing.4",
      borderTop: "1px solid colors.sidebar.border"
    },
    menu: {
      display: "flex",
      flexDirection: "column",
      gap: "spacing.2.5", // 10px
      fontSize: "spacing.3.5" // 14px
    },
    menuItem: {
      fontSize: "spacing.3.5" // 14px
    },
    menuButton: {
      display: "flex",
      alignItems: "center",
      gap: "spacing.2",
      width: "100%",
      padding: "spacing.2 spacing.3",
      borderRadius: "borderRadius.md",
      fontSize: "spacing.3.5", // 14px
      fontWeight: "typography.fontWeight.medium",
      transition: "transition.duration.fast transition.easing.default",
      cursor: "pointer",
      hover: {
        background: "colors.sidebar.accent"
      },
      active: {
        background: "colors.sidebar.primary",
        color: "colors.sidebar.primary.foreground"
      },
      icon: {
        size: "size.icon.sm" // 16px (4 in Tailwind)
      }
    }
  },

  /**
   * HEADER
   * Page header with title and actions
   */
  header: {
    container: {
      background: "colors.semantic.card",
      borderBottom: "1px solid colors.semantic.border",
      padding: "spacing.3 spacing.4" // 12px 16px
    },
    content: {
      display: "flex",
      alignItems: "center",
      gap: "spacing.4"
    },
    title: {
      fontSize: "typography.fontSize.lg",
      fontWeight: "typography.fontWeight.bold"
    }
  },

  /**
   * AVATAR
   * User profile images with fallback
   */
  avatar: {
    root: {
      position: "relative",
      display: "flex",
      shrink: "0",
      overflow: "hidden",
      borderRadius: "borderRadius.full"
    },
    sizes: {
      sm: {
        width: "size.avatar.sm",
        height: "size.avatar.sm"
      },
      md: {
        width: "size.avatar.md",
        height: "size.avatar.md"
      },
      lg: {
        width: "size.avatar.lg",
        height: "size.avatar.lg"
      }
    },
    image: {
      aspectRatio: "1 / 1",
      width: "100%",
      height: "100%"
    },
    fallback: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      background: "colors.semantic.muted",
      color: "colors.semantic.foreground"
    }
  },

  /**
   * TEXTAREA
   * Multi-line text input
   */
  textarea: {
    base: {
      display: "flex",
      width: "100%",
      minHeight: "80px",
      borderRadius: "borderRadius.md",
      border: "1px solid colors.semantic.border",
      background: "colors.semantic.card",
      padding: "spacing.3",
      fontSize: "typography.fontSize.md",
      outline: "none",
      resize: "vertical",
      placeholder: {
        color: "colors.semantic.muted.foreground"
      },
      focus: {
        borderColor: "colors.semantic.ring",
        ring: "3px",
        ringColor: "colors.semantic.ring",
        ringOpacity: "50%"
      },
      disabled: {
        opacity: "0.5",
        cursor: "not-allowed"
      }
    }
  },

  /**
   * SEPARATOR
   * Visual dividers
   */
  separator: {
    horizontal: {
      height: "1px",
      width: "100%",
      background: "colors.semantic.border"
    },
    vertical: {
      height: "100%",
      width: "1px",
      background: "colors.semantic.border"
    }
  },

  /**
   * TOOLTIP
   * Contextual help text
   */
  tooltip: {
    trigger: {
      cursor: "pointer"
    },
    content: {
      zIndex: "zIndex.tooltip",
      overflow: "hidden",
      borderRadius: "borderRadius.md",
      background: "colors.semantic.primary",
      color: "colors.semantic.primary.foreground",
      padding: "spacing.1.5 spacing.3",
      fontSize: "typography.fontSize.sm",
      boxShadow: "shadow.md",
      animation: "fade-in 100ms"
    }
  },

  /**
   * ACCORDION
   * Collapsible content sections
   */
  accordion: {
    item: {
      borderBottom: "1px solid colors.semantic.border"
    },
    trigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "spacing.4 0",
      fontSize: "typography.fontSize.md",
      fontWeight: "typography.fontWeight.medium",
      transition: "transition.duration.fast transition.easing.default",
      hover: {
        textDecoration: "underline"
      }
    },
    content: {
      overflow: "hidden",
      fontSize: "typography.fontSize.sm",
      transition: "transition.duration.normal transition.easing.default"
    }
  },

  /**
   * ALERT
   * Notification messages
   */
  alert: {
    root: {
      position: "relative",
      width: "100%",
      borderRadius: "borderRadius.lg",
      border: "1px solid colors.semantic.border",
      padding: "spacing.4",
      fontSize: "typography.fontSize.sm"
    },
    variants: {
      default: {
        background: "colors.semantic.background",
        color: "colors.semantic.foreground"
      },
      destructive: {
        border: "1px solid colors.semantic.destructive",
        color: "colors.semantic.destructive",
        background: "colors.semantic.destructive (10% opacity)"
      }
    },
    title: {
      marginBottom: "spacing.1",
      fontWeight: "typography.fontWeight.medium",
      lineHeight: "typography.lineHeight.tight",
      letterSpacing: "typography.letterSpacing.tight"
    },
    description: {
      fontSize: "typography.fontSize.sm",
      opacity: "0.9"
    }
  },

  /**
   * CHECKBOX
   * Selection checkboxes
   */
  checkbox: {
    root: {
      width: "16px",
      height: "16px",
      shrink: "0",
      borderRadius: "borderRadius.sm",
      border: "1px solid colors.semantic.primary",
      background: "transparent",
      transition: "transition.duration.fast transition.easing.default",
      focus: {
        ring: "2px",
        ringColor: "colors.semantic.ring",
        ringOffset: "2px"
      },
      disabled: {
        opacity: "0.5",
        cursor: "not-allowed"
      },
      checked: {
        background: "colors.semantic.primary",
        color: "colors.semantic.primary.foreground"
      }
    }
  }
};

/**
 * Component usage guidelines and best practices
 */
export const componentGuidelines = {
  buttons: {
    usage: "Use 'default' variant for primary actions, 'outline' for secondary actions, 'ghost' for tertiary actions",
    accessibility: "Always include descriptive text or aria-label for icon-only buttons",
    spacing: "Maintain at least 8px gap between adjacent buttons"
  },
  cards: {
    usage: "Group related content and actions within cards",
    spacing: "Use consistent padding (24px) for all card sections",
    nesting: "Avoid nesting cards more than 2 levels deep"
  },
  forms: {
    usage: "Always pair inputs with labels for accessibility",
    validation: "Show error states with red border and error message",
    spacing: "Use 16px (spacing.4) vertical spacing between form fields"
  },
  tables: {
    usage: "Use for tabular data with consistent row structure",
    responsive: "Consider card layouts for mobile views",
    pagination: "Limit to 10-20 rows per page for better performance"
  },
  colors: {
    teal: "Use teal-600 (#4A8B82) for text and interactive elements, teal-200 (#9AC6BD) for decorative elements only",
    contrast: "Maintain minimum 4.5:1 contrast ratio for text",
    semantic: "Use semantic color tokens (primary, destructive, etc.) instead of raw color values"
  },
  typography: {
    hierarchy: "Use proper heading levels (h1-h4) for content structure",
    lineHeight: "Default line height is 1.5 for optimal readability",
    fontSizes: "Avoid using custom font sizes; stick to defined scale"
  },
  spacing: {
    consistency: "Use spacing tokens (2, 4, 6, 8, etc.) for consistent layout",
    pageLayout: "Use 24px (spacing.6) for page padding",
    componentGaps: "Use 8px (spacing.2) for small gaps, 16px (spacing.4) for medium gaps"
  }
};

export default components;
