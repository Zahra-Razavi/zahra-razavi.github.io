// Test component to verify the fixed header is working
import React from 'react';

export function TestFixedHeader() {
  return (
    <div className="min-h-screen bg-background">
      {/* Test Fixed Header */}
      <header className="h-14 sm:h-16 bg-white border-b border-border flex items-center justify-between px-4 fixed sm:sticky top-0 left-0 right-0 z-50 w-full">
        <div className="font-bold text-primary">Lendeck</div>
        <div className="text-sm text-muted-foreground">Fixed Header Test</div>
      </header>
      
      {/* Test Content with proper spacing */}
      <div className="pt-16 sm:pt-20 md:pt-6">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Fixed Header Test</h1>
          <div className="space-y-4">
            {Array.from({ length: 50 }, (_, i) => (
              <div key={i} className="p-4 bg-card border rounded">
                <p>Content block {i + 1}</p>
                <p className="text-sm text-muted-foreground">
                  This content should scroll while the header stays fixed on mobile devices.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestFixedHeader;