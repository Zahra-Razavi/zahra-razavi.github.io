/**
 * Design System Usage Examples
 * 
 * This component demonstrates how to use the Mediana design system
 * tokens, utilities, and configurations in your components.
 * 
 * DO NOT USE THIS COMPONENT IN PRODUCTION - IT'S FOR REFERENCE ONLY
 */

import React from 'react';
import {
  colors,
  spacing,
  fontSize,
  borderRadius,
  buttonConfig,
  cardConfig,
  callStatusConfig,
  lineStatusConfig,
  navigationItems,
  getAccessibleTealColor,
  formatCurrency,
  formatDuration,
  formatPhoneNumber,
  validateField,
} from '../design-system';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import * as Icons from 'lucide-react';

/**
 * Example 1: Using Color Tokens
 */
export function ColorExample() {
  return (
    <div className="space-y-4">
      {/* Using CSS custom properties (preferred for dynamic themes) */}
      <div className="bg-primary text-primary-foreground p-4 rounded-lg">
        This uses CSS custom properties from globals.css
      </div>

      {/* Using design system color tokens directly */}
      <div 
        style={{ 
          backgroundColor: colors.teal[600], 
          color: colors.white,
          padding: spacing[4],
          borderRadius: borderRadius.lg,
        }}
      >
        This uses design system tokens directly
      </div>

      {/* Using accessible teal color utility */}
      <div 
        style={{ 
          color: getAccessibleTealColor('text'),
          backgroundColor: colors.teal[50],
          padding: spacing[4],
          borderRadius: borderRadius.lg,
        }}
      >
        This uses the accessibility helper function
      </div>

      {/* Using Tailwind utility classes from globals.css */}
      <div className="bg-teal text-white p-4 rounded-lg">
        This uses custom Tailwind utilities
      </div>
    </div>
  );
}

/**
 * Example 2: Using Button Configurations
 */
export function ButtonExample() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Using shadcn Button with design system */}
      <Button variant="default">Default Button</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>

      {/* Custom button using design system config */}
      <button
        style={{
          backgroundColor: buttonConfig.variants.default.bg,
          color: buttonConfig.variants.default.text,
          height: buttonConfig.sizes.md.height,
          padding: buttonConfig.sizes.md.padding,
          borderRadius: borderRadius.md,
        }}
        className="hover:opacity-90 transition-opacity"
      >
        Custom Button
      </button>
    </div>
  );
}

/**
 * Example 3: Using Card Configuration
 */
export function CardExample() {
  return (
    <div className="space-y-4">
      {/* Using shadcn Card (preferred) */}
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          Card content goes here
        </CardContent>
      </Card>

      {/* Custom card using design system config */}
      <div
        style={{
          backgroundColor: cardConfig.backgroundColor,
          borderColor: cardConfig.borderColor,
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: cardConfig.borderRadius,
          padding: cardConfig.padding,
          boxShadow: cardConfig.shadow,
        }}
      >
        <h3>Custom Card</h3>
        <p>Built with design system tokens</p>
      </div>
    </div>
  );
}

/**
 * Example 4: Using Call Status Configuration
 */
export function CallStatusExample() {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(callStatusConfig).map(([status, config]) => {
        const IconComponent = Icons[config.icon as keyof typeof Icons] as React.ComponentType<any>;
        
        return (
          <Badge
            key={status}
            style={{
              backgroundColor: config.bgColor,
              color: config.color,
            }}
          >
            {IconComponent && <IconComponent className="h-3 w-3 mr-1" />}
            {config.label}
          </Badge>
        );
      })}
    </div>
  );
}

/**
 * Example 5: Using Line Status Configuration
 */
export function LineStatusExample() {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.entries(lineStatusConfig).map(([status, config]) => {
        const IconComponent = Icons[config.icon as keyof typeof Icons] as React.ComponentType<any>;
        
        return (
          <div
            key={status}
            className="flex items-center gap-2 px-3 py-1 rounded"
            style={{ color: config.color }}
          >
            {IconComponent && <IconComponent className="h-4 w-4" />}
            <span>{config.label}</span>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Example 6: Using Navigation Items
 */
export function NavigationExample() {
  return (
    <div className="space-y-2">
      {navigationItems.map((item) => {
        const IconComponent = Icons[item.icon as keyof typeof Icons] as React.ComponentType<any>;
        
        return (
          <div
            key={item.id}
            className="flex items-center gap-3 p-3 rounded hover:bg-teal-subtle cursor-pointer transition-colors"
          >
            {IconComponent && <IconComponent className="h-5 w-5 text-teal" />}
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Example 7: Using Utility Functions
 */
export function UtilityFunctionsExample() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Format Currency</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Original: 29.99</p>
          <p>Formatted: {formatCurrency(29.99)}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Format Duration</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Original: 3725 seconds</p>
          <p>Formatted: {formatDuration(3725)}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Format Phone Number</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Original: 5551234567</p>
          <p>Formatted: {formatPhoneNumber('5551234567')}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Validate Field</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p>Email validation:</p>
            <p>Valid: {JSON.stringify(validateField('user@example.com', 'email'))}</p>
            <p>Invalid: {JSON.stringify(validateField('invalid-email', 'email'))}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/**
 * Example 8: Responsive Spacing
 */
export function SpacingExample() {
  return (
    <div>
      {/* Using spacing tokens */}
      <div style={{ padding: spacing[4], marginBottom: spacing[2] }}>
        Padding: {spacing[4]}, Margin: {spacing[2]}
      </div>
      
      {/* Using Tailwind utilities (preferred) */}
      <div className="p-4 mb-2">
        Tailwind utilities (preferred method)
      </div>
    </div>
  );
}

/**
 * Example 9: Typography with Design System
 */
export function TypographyExample() {
  return (
    <div className="space-y-4">
      {/* Typography is automatically styled via globals.css */}
      <h1>Heading 1 - Auto-styled from globals.css</h1>
      <h2>Heading 2 - Auto-styled from globals.css</h2>
      <h3>Heading 3 - Auto-styled from globals.css</h3>
      <p>Paragraph - Auto-styled from globals.css</p>
      
      {/* Custom typography using design system */}
      <div
        style={{
          fontSize: fontSize['2xl'],
          color: colors.teal[600],
        }}
      >
        Custom Typography with Design Tokens
      </div>
    </div>
  );
}

/**
 * Complete Example: Building a Component with Design System
 */
export function CompleteExample() {
  const callData = {
    status: 'answered' as const,
    duration: 125,
    phoneNumber: '5551234567',
    cost: 0.15,
  };

  const config = callStatusConfig[callData.status];
  const IconComponent = Icons[config.icon as keyof typeof Icons] as React.ComponentType<any>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {IconComponent && (
            <IconComponent 
              className="h-5 w-5" 
              style={{ color: config.color }}
            />
          )}
          Call Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Status:</span>
          <Badge 
            style={{ 
              backgroundColor: config.bgColor, 
              color: config.color 
            }}
          >
            {config.label}
          </Badge>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Phone:</span>
          <span>{formatPhoneNumber(callData.phoneNumber)}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Duration:</span>
          <span>{formatDuration(callData.duration)}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Cost:</span>
          <span>{formatCurrency(callData.cost)}</span>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Main Example Component
 */
export default function DesignSystemExample() {
  return (
    <div className="p-8 space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="mb-2">Mediana Design System Examples</h1>
        <p className="text-muted-foreground">
          Reference examples for using the design system in components
        </p>
      </div>

      <section className="space-y-4">
        <h2>Colors</h2>
        <ColorExample />
      </section>

      <section className="space-y-4">
        <h2>Buttons</h2>
        <ButtonExample />
      </section>

      <section className="space-y-4">
        <h2>Cards</h2>
        <CardExample />
      </section>

      <section className="space-y-4">
        <h2>Call Status Badges</h2>
        <CallStatusExample />
      </section>

      <section className="space-y-4">
        <h2>Line Status Indicators</h2>
        <LineStatusExample />
      </section>

      <section className="space-y-4">
        <h2>Navigation Items</h2>
        <NavigationExample />
      </section>

      <section className="space-y-4">
        <h2>Utility Functions</h2>
        <UtilityFunctionsExample />
      </section>

      <section className="space-y-4">
        <h2>Spacing</h2>
        <SpacingExample />
      </section>

      <section className="space-y-4">
        <h2>Typography</h2>
        <TypographyExample />
      </section>

      <section className="space-y-4">
        <h2>Complete Component Example</h2>
        <CompleteExample />
      </section>
    </div>
  );
}
