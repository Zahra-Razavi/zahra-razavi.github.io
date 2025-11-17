/**
 * ============================================================================
 * MEDIANA VOIP SAAS DASHBOARD - DESIGN SYSTEM GUIDE
 * ============================================================================
 * 
 * This guide explains how to use the Mediana design system effectively.
 * The design system is built on shadcn/ui components with Tailwind CSS v4.
 * 
 * ============================================================================
 * TABLE OF CONTENTS
 * ============================================================================
 * 
 * 1. Overview
 * 2. Design System Architecture
 * 3. Color System & Accessibility
 * 4. Component Usage Patterns
 * 5. Styling Best Practices
 * 6. Common Patterns & Examples
 * 7. File Organization
 * 8. Authentication System
 * 9. Migration Guide
 * 
 * ============================================================================
 * 1. OVERVIEW
 * ============================================================================
 * 
 * The Mediana design system consists of three layers:
 * 
 * Layer 1: Design Tokens (/design-system.ts)
 * - Raw values: colors, spacing, typography, etc.
 * - Configuration objects: buttonConfig, cardConfig, etc.
 * - Utility functions: formatCurrency, validateField, etc.
 * - Business constants: callStatusConfig, billingPlans, etc.
 * 
 * Layer 2: CSS Custom Properties (/styles/globals.css)
 * - CSS variables that map to design tokens
 * - Theme-aware (light/dark mode support)
 * - Used by Tailwind and shadcn components
 * 
 * Layer 3: React Components (/components/ui/*)
 * - Pre-built shadcn/ui components
 * - Styled using CSS custom properties
 * - Accessible and customizable
 * 
 * ============================================================================
 * 2. DESIGN SYSTEM ARCHITECTURE
 * ============================================================================
 * 
 * RECOMMENDED APPROACH (Priority Order):
 * 
 * ✅ FIRST CHOICE: Use shadcn/ui components
 * --------------------------------------------------
 * import { Button } from './components/ui/button';
 * import { Card } from './components/ui/card';
 * 
 * <Button variant="default">Click me</Button>
 * 
 * WHY: Pre-built, accessible, theme-aware, consistent
 * 
 * 
 * ✅ SECOND CHOICE: Use Tailwind utility classes
 * --------------------------------------------------
 * <div className="bg-primary text-primary-foreground p-4 rounded-lg">
 *   Content
 * </div>
 * 
 * WHY: Consistent with CSS custom properties, easy to maintain
 * 
 * 
 * ✅ THIRD CHOICE: Use custom Tailwind utilities from globals.css
 * --------------------------------------------------
 * <div className="bg-teal text-white p-4">
 *   Accessible teal background
 * </div>
 * 
 * WHY: Mediana-specific utilities with accessibility built-in
 * 
 * 
 * ✅ FOURTH CHOICE: Use design system tokens for dynamic values
 * --------------------------------------------------
 * import { colors, spacing } from '../design-system';
 * 
 * <div style={{ 
 *   backgroundColor: colors.teal[600],
 *   padding: spacing[4]
 * }}>
 *   Dynamic content
 * </div>
 * 
 * WHY: When you need JavaScript access to values
 * 
 * 
 * ❌ AVOID: Hard-coded values
 * --------------------------------------------------
 * <div style={{ backgroundColor: '#9AC6BD', padding: '16px' }}>
 *   Don't do this
 * </div>
 * 
 * WHY: Not maintainable, breaks consistency
 * 
 * ============================================================================
 * 3. COLOR SYSTEM & ACCESSIBILITY
 * ============================================================================
 * 
 * BRAND COLORS:
 * - White: #ffffff
 * - Black: #000000
 * - Dark Gray: #262626
 * - Teal: #9AC6BD (decorative only - low contrast!)
 * 
 * ACCESSIBLE TEAL VARIANTS:
 * - teal-50: #f0f9f7  → Subtle backgrounds
 * - teal-100: #ccebe6 → Light borders
 * - teal-200: #9AC6BD → Brand color (decorative)
 * - teal-600: #4A8B82 → Text/buttons (4.5:1 contrast ✓)
 * - teal-700: #3A7A71 → Dark teal
 * - teal-800: #2A6A61 → Darker teal
 * - teal-900: #1A5A51 → Darkest teal
 * 
 * ACCESSIBILITY RULES:
 * 
 * ✅ DO: Use teal-600+ for text on white backgrounds
 * <p className="text-teal">This has proper contrast</p>
 * 
 * ✅ DO: Use teal-200 for decorative elements
 * <div className="border-teal-light">Decorative border</div>
 * 
 * ❌ DON'T: Use teal-200 for text on white
 * <p style={{ color: '#9AC6BD' }}>Hard to read!</p>
 * 
 * ✅ DO: Use the helper function when in doubt
 * import { getAccessibleTealColor } from '../design-system';
 * const textColor = getAccessibleTealColor('text');
 * 
 * WCAG COMPLIANCE:
 * - Normal text: 4.5:1 contrast minimum
 * - Large text (18pt+): 3:1 contrast minimum
 * - All Mediana teal-600+ variants meet these requirements
 * 
 * ============================================================================
 * 4. COMPONENT USAGE PATTERNS
 * ============================================================================
 * 
 * BUTTONS
 * -------
 * import { Button } from './components/ui/button';
 * 
 * // Primary action
 * <Button variant="default">Save</Button>
 * 
 * // Destructive action
 * <Button variant="destructive">Delete</Button>
 * 
 * // Secondary action
 * <Button variant="outline">Cancel</Button>
 * 
 * // Tertiary action
 * <Button variant="ghost">Skip</Button>
 * 
 * // Different sizes
 * <Button size="sm">Small</Button>
 * <Button size="md">Medium</Button>
 * <Button size="lg">Large</Button>
 * 
 * 
 * CARDS
 * -----
 * import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
 * 
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *   </CardHeader>
 *   <CardContent>
 *     Card content goes here
 *   </CardContent>
 * </Card>
 * 
 * 
 * BADGES
 * ------
 * import { Badge } from './components/ui/badge';
 * 
 * <Badge variant="default">Active</Badge>
 * <Badge variant="destructive">Error</Badge>
 * <Badge variant="secondary">Pending</Badge>
 * 
 * 
 * INPUTS
 * ------
 * import { Input } from './components/ui/input';
 * import { Label } from './components/ui/label';
 * 
 * <div>
 *   <Label htmlFor="email">Email</Label>
 *   <Input 
 *     id="email" 
 *     type="email" 
 *     placeholder="Enter your email" 
 *   />
 * </div>
 * 
 * 
 * TABLES
 * ------
 * import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './components/ui/table';
 * 
 * <Table>
 *   <TableHeader>
 *     <TableRow>
 *       <TableHead>Name</TableHead>
 *       <TableHead>Status</TableHead>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John Doe</TableCell>
 *       <TableCell>Active</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * 
 * 
 * DIALOGS
 * -------
 * import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog';
 * 
 * <Dialog>
 *   <DialogTrigger asChild>
 *     <Button>Open Dialog</Button>
 *   </DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Dialog Title</DialogTitle>
 *     </DialogHeader>
 *     <p>Dialog content</p>
 *   </DialogContent>
 * </Dialog>
 * 
 * ============================================================================
 * 5. STYLING BEST PRACTICES
 * ============================================================================
 * 
 * TYPOGRAPHY
 * ----------
 * ⚠️ IMPORTANT: Do NOT use Tailwind text size/weight classes unless necessary
 * 
 * ✅ DO: Let globals.css handle typography
 * <h1>This heading is auto-styled</h1>
 * <p>This paragraph is auto-styled</p>
 * 
 * ❌ DON'T: Override typography unnecessarily
 * <h1 className="text-2xl font-bold">Unnecessary overrides</h1>
 * 
 * ✅ DO: Use when you need custom sizes
 * <div className="text-lg font-medium">Custom styled text</div>
 * 
 * 
 * SPACING
 * -------
 * ✅ DO: Use Tailwind spacing utilities
 * <div className="p-4 mb-2 space-y-4">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </div>
 * 
 * ✅ DO: Use design system spacing for dynamic values
 * import { spacing } from '../design-system';
 * <div style={{ padding: spacing[4] }}>Dynamic padding</div>
 * 
 * 
 * COLORS
 * ------
 * ✅ DO: Use semantic color names
 * <div className="bg-primary text-primary-foreground">Primary</div>
 * <div className="bg-destructive text-destructive-foreground">Error</div>
 * 
 * ✅ DO: Use custom teal utilities
 * <div className="bg-teal text-white">Accessible teal</div>
 * <div className="bg-teal-subtle">Light teal background</div>
 * 
 * ❌ DON'T: Use arbitrary color values
 * <div className="bg-[#9AC6BD]">Avoid this</div>
 * 
 * 
 * RESPONSIVE DESIGN
 * -----------------
 * ✅ DO: Use Tailwind responsive prefixes
 * <div className="p-4 md:p-8 lg:p-12">
 *   Responsive padding
 * </div>
 * 
 * 
 * STATES
 * ------
 * ✅ DO: Use Tailwind state variants
 * <button className="bg-primary hover:bg-primary/90 active:bg-primary/80 disabled:opacity-50">
 *   Button with states
 * </button>
 * 
 * ============================================================================
 * 6. COMMON PATTERNS & EXAMPLES
 * ============================================================================
 * 
 * CALL STATUS DISPLAY
 * -------------------
 * import { callStatusConfig } from '../design-system';
 * import { Badge } from './components/ui/badge';
 * 
 * function CallStatus({ status }: { status: keyof typeof callStatusConfig }) {
 *   const config = callStatusConfig[status];
 *   
 *   return (
 *     <Badge style={{ backgroundColor: config.bgColor, color: config.color }}>
 *       {config.label}
 *     </Badge>
 *   );
 * }
 * 
 * 
 * LINE STATUS INDICATOR
 * ---------------------
 * import { lineStatusConfig } from '../design-system';
 * import { CheckCircle2, Circle, Phone, AlertCircle } from 'lucide-react';
 * 
 * const icons = { CheckCircle2, Circle, Phone, AlertCircle };
 * 
 * function LineStatus({ status }: { status: keyof typeof lineStatusConfig }) {
 *   const config = lineStatusConfig[status];
 *   const Icon = icons[config.icon as keyof typeof icons];
 *   
 *   return (
 *     <div className="flex items-center gap-2" style={{ color: config.color }}>
 *       <Icon className="h-4 w-4" />
 *       <span>{config.label}</span>
 *     </div>
 *   );
 * }
 * 
 * 
 * FORMATTED CURRENCY
 * ------------------
 * import { formatCurrency } from '../design-system';
 * 
 * function PriceDisplay({ amount }: { amount: number }) {
 *   return <span>{formatCurrency(amount)}</span>;
 * }
 * 
 * 
 * FORMATTED PHONE NUMBER
 * ----------------------
 * import { formatPhoneNumber } from '../design-system';
 * 
 * function PhoneDisplay({ phone }: { phone: string }) {
 *   return <span>{formatPhoneNumber(phone)}</span>;
 * }
 * 
 * 
 * VALIDATED FORM FIELD
 * --------------------
 * import { validateField } from '../design-system';
 * import { Input } from './components/ui/input';
 * 
 * function EmailInput() {
 *   const [email, setEmail] = React.useState('');
 *   const [error, setError] = React.useState('');
 *   
 *   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 *     const value = e.target.value;
 *     setEmail(value);
 *     
 *     const validation = validateField(value, 'email');
 *     setError(validation.valid ? '' : validation.message || '');
 *   };
 *   
 *   return (
 *     <div>
 *       <Input 
 *         type="email" 
 *         value={email} 
 *         onChange={handleChange}
 *         className={error ? 'border-destructive' : ''}
 *       />
 *       {error && <p className="text-destructive text-sm mt-1">{error}</p>}
 *     </div>
 *   );
 * }
 * 
 * 
 * NAVIGATION WITH ICONS
 * ---------------------
 * import { navigationItems } from '../design-system';
 * import { Link } from 'react-router-dom';
 * import * as Icons from 'lucide-react';
 * 
 * function Navigation() {
 *   return (
 *     <nav>
 *       {navigationItems.map((item) => {
 *         const Icon = Icons[item.icon as keyof typeof Icons] as React.ComponentType<any>;
 *         
 *         return (
 *           <Link 
 *             key={item.id} 
 *             to={item.path}
 *             className="flex items-center gap-2 p-2 hover:bg-teal-subtle rounded"
 *           >
 *             <Icon className="h-4 w-4" />
 *             <span>{item.label}</span>
 *           </Link>
 *         );
 *       })}
 *     </nav>
 *   );
 * }
 * 
 * 
 * BILLING PLAN CARD
 * -----------------
 * import { billingPlans, formatCurrency } from '../design-system';
 * import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
 * import { Button } from './components/ui/button';
 * 
 * function PlanCard({ plan }: { plan: keyof typeof billingPlans }) {
 *   const config = billingPlans[plan];
 *   
 *   return (
 *     <Card>
 *       <CardHeader>
 *         <CardTitle>{config.name}</CardTitle>
 *       </CardHeader>
 *       <CardContent className="space-y-4">
 *         <div className="text-3xl font-bold">
 *           {formatCurrency(config.monthlyFee)}/mo
 *         </div>
 *         <ul className="space-y-2">
 *           {config.features.map((feature, i) => (
 *             <li key={i} className="flex items-center gap-2">
 *               <Check className="h-4 w-4 text-success" />
 *               {feature}
 *             </li>
 *           ))}
 *         </ul>
 *         <Button className="w-full">Choose Plan</Button>
 *       </CardContent>
 *     </Card>
 *   );
 * }
 * 
 * ============================================================================
 * 7. FILE ORGANIZATION
 * ============================================================================
 * 
 * /design-system.ts
 * - Design tokens and configuration
 * - Business constants
 * - Utility functions
 * - Type exports
 * 
 * /styles/globals.css
 * - CSS custom properties
 * - Tailwind configuration
 * - Custom utilities
 * - Base styles
 * 
 * /components/ui/*
 * - shadcn/ui components
 * - Pre-styled and accessible
 * - Use throughout the app
 * 
 * /components/*.tsx
 * - Application-specific components
 * - Use shadcn components + design system
 * 
 * /components/[feature]/*
 * - Feature-specific components
 * - Group related components together
 * 
 * ============================================================================
 * 8. MIGRATION GUIDE
 * ============================================================================
 * 
 * If you have existing components with hard-coded values:
 * 
 * STEP 1: Identify hard-coded values
 * -----------------------------------
 * ❌ Before:
 * <div style={{ backgroundColor: '#9AC6BD', padding: '16px' }}>
 * 
 * 
 * STEP 2: Check if a shadcn component exists
 * ------------------------------------------
 * ✅ After:
 * import { Card, CardContent } from './components/ui/card';
 * <Card><CardContent>...</CardContent></Card>
 * 
 * 
 * STEP 3: If no component exists, use Tailwind
 * --------------------------------------------
 * ✅ After:
 * <div className="bg-teal p-4">
 * 
 * 
 * STEP 4: For dynamic values, use design system
 * ---------------------------------------------
 * ✅ After:
 * import { colors, spacing } from '../design-system';
 * <div style={{ backgroundColor: colors.teal[600], padding: spacing[4] }}>
 * 
 * 
 * STEP 5: Replace business logic with design system constants
 * -----------------------------------------------------------
 * ❌ Before:
 * const callStatuses = {
 *   answered: { color: '#4A8B82', label: 'Answered' },
 *   // ...
 * };
 * 
 * ✅ After:
 * import { callStatusConfig } from '../design-system';
 * const config = callStatusConfig.answered;
 * 
 * 
 * STEP 6: Use utility functions for formatting
 * --------------------------------------------
 * ❌ Before:
 * const formatted = `$${amount.toFixed(2)}`;
 * 
 * ✅ After:
 * import { formatCurrency } from '../design-system';
 * const formatted = formatCurrency(amount);
 * 
 * ============================================================================
 * ADDITIONAL RESOURCES
 * ============================================================================
 * 
 * - shadcn/ui documentation: https://ui.shadcn.com
 * - Tailwind CSS documentation: https://tailwindcss.com
 * - WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
 * - Design System Example: /components/DesignSystemExample.tsx
 * 
 * ============================================================================
 */

// This file is for documentation purposes only
export {};
