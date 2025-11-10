/**
 * Simple test file to verify design system components work
 */

import { Card, CardContent } from './components/ui/card';

export default function TestDesignSystem() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1>Design System Test</h1>
        
        <section>
          <h2>Colors</h2>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <div className="h-20 bg-lendeck-primary rounded"></div>
              <p className="text-sm mt-2">Primary</p>
            </div>
            <div>
              <div className="h-20 bg-lendeck-orange rounded"></div>
              <p className="text-sm mt-2">Orange</p>
            </div>
            <div>
              <div className="h-20 bg-lendeck-blue rounded"></div>
              <p className="text-sm mt-2">Blue</p>
            </div>
            <div>
              <div className="h-20 bg-lendeck-success rounded"></div>
              <p className="text-sm mt-2">Success</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Typography</h2>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <p>Regular paragraph text</p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2>CSS Variables</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <p>--lendeck-primary: <span style={{ color: 'var(--lendeck-primary)' }}>●</span></p>
                <p>--shadow-md: <span className="inline-block px-4 py-2 bg-white" style={{ boxShadow: 'var(--shadow-md)' }}>Box</span></p>
                <p>--space-4: <span className="inline-block bg-lendeck-primary" style={{ width: 'var(--space-4)', height: 'var(--space-4)' }}></span></p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
