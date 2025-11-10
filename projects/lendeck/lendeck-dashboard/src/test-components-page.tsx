import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';

export default function TestComponentsPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">Test Components Page</h1>
          <p className="text-lg text-muted-foreground">
            Testing if basic page renders
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Test Card</CardTitle>
          </CardHeader>
          <CardContent>
            <p>If you can see this, the basic page structure works.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
