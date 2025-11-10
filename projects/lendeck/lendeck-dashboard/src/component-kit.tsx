import { Button } from './components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';

export default function ComponentKitPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#4E0F60',
        color: 'white',
        padding: '40px 20px',
        marginBottom: '40px'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>
            Lendeck Component Kit
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9 }}>
            Comprehensive showcase of all design system components
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px 60px' }}>
        
        {/* Buttons Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a' }}>
            Buttons
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>Different button styles and states</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Badges Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a' }}>
            Badges
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge className="bg-green-100 text-green-800">Approved</Badge>
                <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                <Badge className="bg-blue-100 text-blue-800">In Review</Badge>
                <Badge className="bg-red-100 text-red-800">Rejected</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cards Section */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a' }}>
            Cards
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <Card>
              <CardHeader>
                <CardTitle>Card Title 1</CardTitle>
                <CardDescription>This is a card description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card content goes here. Cards are container components for grouping related information.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title 2</CardTitle>
                <CardDescription>Another card example</CardDescription>
              </CardHeader>
              <CardContent>
                <p>You can put any content inside cards - text, buttons, forms, images, etc.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Card Title 3</CardTitle>
                <CardDescription>Third card example</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Cards are versatile and can be used throughout the application.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Color Palette */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', color: '#1a1a1a' }}>
            Lendeck Color Palette
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Brand Colors</CardTitle>
              <CardDescription>Official Lendeck color system</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
                <div>
                  <div style={{ 
                    backgroundColor: '#4E0F60', 
                    height: '80px', 
                    borderRadius: '8px',
                    marginBottom: '8px'
                  }}></div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>Primary</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>#4E0F60</div>
                </div>
                <div>
                  <div style={{ 
                    backgroundColor: '#FF5F0C', 
                    height: '80px', 
                    borderRadius: '8px',
                    marginBottom: '8px'
                  }}></div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>Orange</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>#FF5F0C</div>
                </div>
                <div>
                  <div style={{ 
                    backgroundColor: '#ED1E59', 
                    height: '80px', 
                    borderRadius: '8px',
                    marginBottom: '8px'
                  }}></div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>Pink</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>#ED1E59</div>
                </div>
                <div>
                  <div style={{ 
                    backgroundColor: '#00A8E8', 
                    height: '80px', 
                    borderRadius: '8px',
                    marginBottom: '8px'
                  }}></div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>Blue</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>#00A8E8</div>
                </div>
                <div>
                  <div style={{ 
                    backgroundColor: '#00B74A', 
                    height: '80px', 
                    borderRadius: '8px',
                    marginBottom: '8px'
                  }}></div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>Green</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>#00B74A</div>
                </div>
                <div>
                  <div style={{ 
                    backgroundColor: '#FFC107', 
                    height: '80px', 
                    borderRadius: '8px',
                    marginBottom: '8px'
                  }}></div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>Yellow</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>#FFC107</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Message */}
        <Card style={{ borderColor: '#00B74A', backgroundColor: '#f0fdf4' }}>
          <CardContent style={{ padding: '24px' }}>
            <div style={{ fontSize: '20px', fontWeight: '600', color: '#00B74A', marginBottom: '8px' }}>
              ✅ Component Kit is Working!
            </div>
            <p style={{ color: '#166534' }}>
              All components are rendering correctly. You can now explore the full design system.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
