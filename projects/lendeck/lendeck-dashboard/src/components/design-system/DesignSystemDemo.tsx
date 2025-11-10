/**
 * DESIGN SYSTEM DEMO PAGE
 * 
 * A simplified demonstration of key Lendeck design system components.
 */

import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Users, DollarSign, FileText, CheckCircle } from 'lucide-react';

export function DesignSystemDemo() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b pb-6">
          <h1 className="text-3xl font-bold mb-2">Lendeck Design System</h1>
          <p className="text-muted-foreground">Design tokens, components, and patterns</p>
        </div>

        {/* Typography */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Typography</h2>
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h1>Heading 1 - Main Page Title</h1>
                <p className="text-sm text-muted-foreground">30px / Bold</p>
              </div>
              <div>
                <h2>Heading 2 - Section Title</h2>
                <p className="text-sm text-muted-foreground">24px / Bold</p>
              </div>
              <div>
                <h3>Heading 3 - Subsection</h3>
                <p className="text-sm text-muted-foreground">20px / Semibold</p>
              </div>
              <div>
                <p>Regular body text for main content</p>
                <p className="text-sm text-muted-foreground">16px / Normal</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Colors */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 space-y-2">
                <div className="h-16 w-full rounded bg-lendeck-primary"></div>
                <p className="text-sm font-medium">Primary Purple</p>
                <p className="text-xs text-muted-foreground">#4E0F60</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 space-y-2">
                <div className="h-16 w-full rounded bg-lendeck-orange"></div>
                <p className="text-sm font-medium">Orange</p>
                <p className="text-xs text-muted-foreground">#FF5F0C</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 space-y-2">
                <div className="h-16 w-full rounded bg-lendeck-blue"></div>
                <p className="text-sm font-medium">Blue</p>
                <p className="text-xs text-muted-foreground">#159AEB</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 space-y-2">
                <div className="h-16 w-full rounded bg-lendeck-success"></div>
                <p className="text-sm font-medium">Success</p>
                <p className="text-xs text-muted-foreground">#01942B</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Status Cards */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Status Cards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-lendeck-blue/10">
                    <Users className="h-5 w-5 text-lendeck-blue" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl">156</div>
                    <div className="text-sm text-muted-foreground">Active Users</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-lendeck-success/10">
                    <DollarSign className="h-5 w-5 text-lendeck-success" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl">$125K</div>
                    <div className="text-sm text-muted-foreground">Total Revenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-lendeck-primary/10">
                    <FileText className="h-5 w-5 text-lendeck-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl">89</div>
                    <div className="text-sm text-muted-foreground">Active Deals</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-lendeck-green/10">
                    <CheckCircle className="h-5 w-5 text-lendeck-green" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Buttons</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-4">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Spacing */}
        <section className="pb-16">
          <h2 className="text-2xl font-bold mb-4">Spacing Scale (8px grid)</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm font-mono">8px</div>
                  <div className="h-8 bg-lendeck-primary" style={{ width: '8px' }}></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm font-mono">16px</div>
                  <div className="h-8 bg-lendeck-primary" style={{ width: '16px' }}></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm font-mono">24px</div>
                  <div className="h-8 bg-lendeck-primary" style={{ width: '24px' }}></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm font-mono">32px</div>
                  <div className="h-8 bg-lendeck-primary" style={{ width: '32px' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
