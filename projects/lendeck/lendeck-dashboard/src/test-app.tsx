import React from 'react';

export default function TestApp() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#4E0F60] mb-4">Lendeck</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Application loaded successfully!
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">✓ React components working</p>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">✓ Tailwind CSS working</p>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">✓ Lendeck brand colors working</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}