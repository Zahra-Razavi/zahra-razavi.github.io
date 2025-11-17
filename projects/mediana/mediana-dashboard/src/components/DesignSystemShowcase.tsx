import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { Slider } from './ui/slider';
import { Skeleton } from './ui/skeleton';
import { 
  Palette, 
  Type, 
  Layout, 
  AlertCircle, 
  CheckCircle,
  Info,
  Sparkles,
  Plus,
  Download,
  Upload,
  Trash2,
  Edit,
  Save,
  Send,
  Search,
  Settings,
  User,
  Phone,
  PhoneCall,
  Mail,
  Calendar,
  Clock,
  TrendingUp,
  TrendingDown,
  Activity,
  BarChart,
  PieChart,
  FileText,
  Folder,
  Home,
  Star,
  Heart,
  Bell,
  MessageSquare,
  Share2,
  Copy,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  X,
  Check,
  Minus,
  Grid,
  List,
  Filter,
  SortAsc,
  SortDesc,
  RefreshCw,
  Loader2,
  AlertTriangle,
  HelpCircle,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Zap,
  Menu,
} from 'lucide-react';

export function DesignSystemShowcase() {
  return (
    <div className="p-6 space-y-6 w-full min-w-0">
      <div className="space-y-2">
        <h1>Design System Showcase</h1>
        <p className="text-muted-foreground">
          A comprehensive overview of the Mediana VoIP design system including colors, typography, components, icons, and usage patterns.
        </p>
      </div>

      <Separator />

      {/* Table of Contents */}
      <section className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Quick Navigation</CardTitle>
            <CardDescription>Jump to any section of the design system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="justify-start" size="sm">
                <Palette className="h-4 w-4 mr-2" />
                Colors
              </Button>
              <Button variant="outline" className="justify-start" size="sm">
                <Type className="h-4 w-4 mr-2" />
                Typography
              </Button>
              <Button variant="outline" className="justify-start" size="sm">
                <Layout className="h-4 w-4 mr-2" />
                Spacing
              </Button>
              <Button variant="outline" className="justify-start" size="sm">
                <Layout className="h-4 w-4 mr-2" />
                Buttons
              </Button>
              <Button variant="outline" className="justify-start" size="sm">
                <Grid className="h-4 w-4 mr-2" />
                Forms
              </Button>
              <Button variant="outline" className="justify-start" size="sm">
                <List className="h-4 w-4 mr-2" />
                Tables
              </Button>
              <Button variant="outline" className="justify-start" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Cards
              </Button>
              <Button variant="outline" className="justify-start" size="sm">
                <Sparkles className="h-4 w-4 mr-2" />
                Icons
              </Button>
              <Button variant="outline" className="justify-start" size="sm">
                <AlertCircle className="h-4 w-4 mr-2" />
                Alerts
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Colors Section */}
      <section id="colors" className="space-y-4">
        <div className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-primary" />
          <h2>Color System</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ColorSwatch 
            name="Teal Primary" 
            value="#9AC6BD" 
            description="Primary brand color for actions and highlights"
            textColor="dark"
          />
          <ColorSwatch 
            name="Teal Accessible" 
            value="#6FA89E" 
            description="Accessible variant for better contrast"
            textColor="light"
          />
          <ColorSwatch 
            name="Dark Gray" 
            value="#262626" 
            description="Primary text and dark backgrounds"
            textColor="light"
          />
          <ColorSwatch 
            name="White" 
            value="#FFFFFF" 
            description="Backgrounds and light text"
            textColor="dark"
            border
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <ColorSwatch 
            name="Success" 
            value="#22c55e" 
            description="Success states and confirmations"
            textColor="light"
          />
          <ColorSwatch 
            name="Warning" 
            value="#f59e0b" 
            description="Warning states and alerts"
            textColor="dark"
          />
          <ColorSwatch 
            name="Destructive" 
            value="#ef4444" 
            description="Error states and destructive actions"
            textColor="light"
          />
        </div>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Design Tokens</AlertTitle>
          <AlertDescription>
            All colors are defined in <code className="bg-muted px-1 py-0.5 rounded">tokens.json</code> and can be imported into Figma using the Tokens Studio plugin.
          </AlertDescription>
        </Alert>
      </section>

      <Separator />

      {/* Spacing Section */}
      <section id="spacing" className="space-y-4">
        <div className="flex items-center gap-2">
          <Layout className="h-5 w-5 text-primary" />
          <h2>Spacing System</h2>
        </div>
        
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>4px Base Unit</AlertTitle>
          <AlertDescription>
            All spacing values are based on a 4px increment for consistency. This ensures pixel-perfect alignment and scalability across the entire application.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>Spacing Scale</CardTitle>
            <CardDescription>Standard spacing tokens for consistent layout throughout the dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                { name: 'spacing-0', value: '0px', pixels: 0, usage: 'No spacing' },
                { name: 'spacing-1', value: '4px', pixels: 4, usage: 'Minimal spacing, icon gaps' },
                { name: 'spacing-2', value: '8px', pixels: 8, usage: 'Tight spacing, small gaps' },
                { name: 'spacing-3', value: '12px', pixels: 12, usage: 'Compact spacing, form fields' },
                { name: 'spacing-4', value: '16px', pixels: 16, usage: 'Standard spacing, card padding' },
                { name: 'spacing-5', value: '20px', pixels: 20, usage: 'Medium spacing' },
                { name: 'spacing-6', value: '24px', pixels: 24, usage: 'Page padding, section spacing' },
                { name: 'spacing-8', value: '32px', pixels: 32, usage: 'Large spacing, major sections' },
                { name: 'spacing-10', value: '40px', pixels: 40, usage: 'Extra large spacing' },
                { name: 'spacing-12', value: '48px', pixels: 48, usage: 'Section breaks' },
                { name: 'spacing-16', value: '64px', pixels: 64, usage: 'Major layout spacing' },
                { name: 'spacing-20', value: '80px', pixels: 80, usage: 'Large sections' },
                { name: 'spacing-24', value: '96px', pixels: 96, usage: 'Page breaks' },
              ].map((space) => (
                <div key={space.name} className="flex items-center gap-4 p-3 border rounded-lg">
                  <div className="flex-shrink-0 w-32">
                    <code className="text-sm">{space.name}</code>
                  </div>
                  <div className="flex-shrink-0 w-16 text-sm font-mono">{space.value}</div>
                  <div className="flex-1">
                    <div 
                      className="bg-primary h-4 rounded" 
                      style={{ width: `${space.pixels}px` }}
                    />
                  </div>
                  <div className="flex-shrink-0 text-sm text-muted-foreground w-48">{space.usage}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Component Spacing Standards</CardTitle>
              <CardDescription>Recommended spacing for common use cases</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">Page Padding</span>
                  <code className="bg-muted px-2 py-1 rounded text-sm">p-6 (24px)</code>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">Card Padding</span>
                  <code className="bg-muted px-2 py-1 rounded text-sm">p-4 / p-6</code>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">Section Spacing</span>
                  <code className="bg-muted px-2 py-1 rounded text-sm">space-y-6</code>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">Grid Gap</span>
                  <code className="bg-muted px-2 py-1 rounded text-sm">gap-4 / gap-6</code>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">Button Padding</span>
                  <code className="bg-muted px-2 py-1 rounded text-sm">px-4 py-2</code>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm">Form Field Gap</span>
                  <code className="bg-muted px-2 py-1 rounded text-sm">space-y-2</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gap Utilities</CardTitle>
              <CardDescription>Tailwind gap classes for consistent spacing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">gap-1</span>
                  <span className="text-sm text-muted-foreground">4px</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">gap-2</span>
                  <span className="text-sm text-muted-foreground">8px</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">gap-3</span>
                  <span className="text-sm text-muted-foreground">12px</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">gap-4</span>
                  <span className="text-sm text-muted-foreground">16px - Standard</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm">gap-6</span>
                  <span className="text-sm text-muted-foreground">24px - Cards</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm">gap-8</span>
                  <span className="text-sm text-muted-foreground">32px - Sections</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Never Use Non-Standard Spacing</AlertTitle>
          <AlertDescription>
            Avoid arbitrary spacing values like 22.5px, 15px, or 18px. Always use values from the spacing scale (multiples of 4) to maintain consistency. If you need a value between two steps, round to the nearest standard value.
          </AlertDescription>
        </Alert>
      </section>

      <Separator />

      {/* Typography Section */}
      <section id="typography" className="space-y-4">
        <div className="flex items-center gap-2">
          <Type className="h-5 w-5 text-primary" />
          <h2>Typography</h2>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Type Scale</CardTitle>
            <CardDescription>Consistent typography hierarchy across the application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h1>Heading 1 - Page Titles</h1>
                <p className="text-muted-foreground text-sm">Used for main page headings</p>
              </div>
              <div>
                <h2>Heading 2 - Section Titles</h2>
                <p className="text-muted-foreground text-sm">Used for major sections</p>
              </div>
              <div>
                <h3>Heading 3 - Subsections</h3>
                <p className="text-muted-foreground text-sm">Used for subsection headings</p>
              </div>
              <div>
                <h4>Heading 4 - Card Titles</h4>
                <p className="text-muted-foreground text-sm">Used for card and component titles</p>
              </div>
              <div>
                <p>Body text - Regular paragraph text used for general content and descriptions across the interface</p>
                <p className="text-muted-foreground text-sm mt-1">Metadata and context</p>
              </div>
              <div>
                <p className="text-sm">Small text - Secondary information and labels</p>
                <p className="text-muted-foreground text-sm mt-1">Helper text</p>
              </div>
              <div>
                <p className="text-xs">Extra small text - Captions and timestamps</p>
                <p className="text-muted-foreground text-sm mt-1">Fine print</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Buttons Section */}
      <section id="buttons" className="space-y-4">
        <div className="flex items-center gap-2">
          <Layout className="h-5 w-5 text-primary" />
          <h2>Buttons</h2>
        </div>

        {/* Button Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>Different button styles for various use cases</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="destructive">Destructive Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </CardContent>
        </Card>

        {/* Button Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Button Sizes</CardTitle>
            <CardDescription>Four different button sizes for different contexts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg">Large Button</Button>
              <Button size="default">Default Button</Button>
              <Button size="sm">Small Button</Button>
              <Button size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Buttons with Icons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons with Icons</CardTitle>
            <CardDescription>Icons can be placed before or after text, or used alone</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-3">Icon + Text (Primary Actions)</h4>
              <div className="flex flex-wrap gap-3">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add New
                </Button>
                <Button>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload
                </Button>
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                <Button>
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3">Icon + Text (Secondary Actions)</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="secondary">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button variant="secondary">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="secondary">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh
                </Button>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3">Icon + Text (Outline Variant)</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open
                </Button>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3">Icon + Text (Destructive Actions)</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="destructive">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
                <Button variant="outline" className="text-destructive hover:text-destructive">
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3">Text + Icon (Trailing Icons)</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline">
                  Previous
                  <ChevronLeft className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline">
                  Expand
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3">Icon Only Buttons</h4>
              <div className="flex flex-wrap gap-3">
                <Button size="icon" variant="default">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3">Loading States</h4>
              <div className="flex flex-wrap gap-3">
                <Button disabled>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Loading...
                </Button>
                <Button variant="secondary" disabled>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing
                </Button>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3">Disabled States</h4>
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled Primary</Button>
                <Button variant="secondary" disabled>Disabled Secondary</Button>
                <Button variant="outline" disabled>Disabled Outline</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Form Components Section */}
      <section id="forms" className="space-y-4">
        <div className="flex items-center gap-2">
          <Grid className="h-5 w-5 text-primary" />
          <h2>Form Components</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Text Inputs */}
          <Card>
            <CardHeader>
              <CardTitle>Text Inputs</CardTitle>
              <CardDescription>Standard input fields for user data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled">Disabled Input</Label>
                <Input id="disabled" placeholder="Cannot edit" disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="error">Input with Error</Label>
                <Input id="error" placeholder="Invalid input" className="border-destructive" />
                <p className="text-xs text-destructive">This field is required</p>
              </div>
            </CardContent>
          </Card>

          {/* Textarea */}
          <Card>
            <CardHeader>
              <CardTitle>Textarea</CardTitle>
              <CardDescription>Multi-line text input</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message here..." rows={4} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" placeholder="Additional notes..." rows={3} />
              </div>
            </CardContent>
          </Card>

          {/* Select */}
          <Card>
            <CardHeader>
              <CardTitle>Select Dropdowns</CardTitle>
              <CardDescription>Dropdown selection menus</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">User Role</Label>
                <Select>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Checkboxes & Radio */}
          <Card>
            <CardHeader>
              <CardTitle>Checkboxes & Radio Buttons</CardTitle>
              <CardDescription>Selection controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Preferences</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="cursor-pointer">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing" className="cursor-pointer">Receive marketing emails</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifications" defaultChecked />
                    <Label htmlFor="notifications" className="cursor-pointer">Enable notifications</Label>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Plan Type</Label>
                <RadioGroup defaultValue="basic">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="basic" id="basic" />
                    <Label htmlFor="basic" className="cursor-pointer">Basic</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pro" id="pro" />
                    <Label htmlFor="pro" className="cursor-pointer">Professional</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enterprise" id="enterprise" />
                    <Label htmlFor="enterprise" className="cursor-pointer">Enterprise</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Switches & Sliders */}
          <Card>
            <CardHeader>
              <CardTitle>Switches</CardTitle>
              <CardDescription>Toggle switches for binary settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="airplane">Airplane Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable airplane mode</p>
                </div>
                <Switch id="airplane" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="wifi">Wi-Fi</Label>
                  <p className="text-sm text-muted-foreground">Connect to Wi-Fi</p>
                </div>
                <Switch id="wifi" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="bluetooth">Bluetooth</Label>
                  <p className="text-sm text-muted-foreground">Enable Bluetooth</p>
                </div>
                <Switch id="bluetooth" />
              </div>
            </CardContent>
          </Card>

          {/* Sliders */}
          <Card>
            <CardHeader>
              <CardTitle>Sliders</CardTitle>
              <CardDescription>Value selection with range sliders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Volume</Label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <Label>Brightness</Label>
                <Slider defaultValue={[75]} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <Label>Range Selection</Label>
                <Slider defaultValue={[25, 75]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Complete Form Example */}
        <Card>
          <CardHeader>
            <CardTitle>Complete Form Example</CardTitle>
            <CardDescription>All form elements working together</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyEmail">Company Email *</Label>
                <Input id="companyEmail" type="email" placeholder="john@company.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" type="tel" placeholder="+1 (555) 000-0000" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself..." rows={4} />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="subscribe" />
                <Label htmlFor="subscribe" className="cursor-pointer">
                  I want to receive updates and newsletters
                </Label>
              </div>

              <div className="flex gap-3">
                <Button type="submit">
                  <Save className="h-4 w-4 mr-2" />
                  Submit Form
                </Button>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Tables Section */}
      <section id="tables" className="space-y-4">
        <div className="flex items-center gap-2">
          <List className="h-5 w-5 text-primary" />
          <h2>Tables</h2>
        </div>

        {/* Basic Table */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Table</CardTitle>
            <CardDescription>Standard data table layout</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell>Admin</TableCell>
                  <TableCell><Badge>Active</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>jane@example.com</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell><Badge>Active</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bob Johnson</TableCell>
                  <TableCell>bob@example.com</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell><Badge variant="secondary">Inactive</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Advanced Table with Actions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Call Logs Table</CardTitle>
                <CardDescription>Table with actions and rich data</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      Date/Time
                      <SortAsc className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>From</TableHead>
                  <TableHead>To</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="text-sm">Oct 22, 2025</div>
                    <div className="text-xs text-muted-foreground">10:30 AM</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">+1 555 0123</div>
                    <div className="text-xs text-muted-foreground">John Doe</div>
                  </TableCell>
                  <TableCell>+1 555 0456</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      3m 45s
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Inbound</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-500">
                      <Check className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="icon" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="text-sm">Oct 22, 2025</div>
                    <div className="text-xs text-muted-foreground">9:15 AM</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">+1 555 0789</div>
                    <div className="text-xs text-muted-foreground">Jane Smith</div>
                  </TableCell>
                  <TableCell>+1 555 0321</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      1m 12s
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Outbound</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-500">
                      <Check className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="icon" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="text-sm">Oct 22, 2025</div>
                    <div className="text-xs text-muted-foreground">8:45 AM</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">+1 555 0999</div>
                    <div className="text-xs text-muted-foreground">Unknown</div>
                  </TableCell>
                  <TableCell>+1 555 0100</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      0m 0s
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Inbound</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="destructive">
                      <X className="h-3 w-3 mr-1" />
                      Missed
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="icon" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Cards Section */}
      <section id="cards" className="space-y-4">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <h2>Cards</h2>
        </div>

        {/* Stat/Metric Cards - Primary Pattern */}
        <Card>
          <CardHeader>
            <CardTitle>Stat/Metric Cards - Primary Pattern</CardTitle>
            <CardDescription>Used for dashboard metrics and KPIs with colored icon backgrounds</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                      <Phone className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <p className="text-2xl">24</p>
                      <p className="text-sm text-muted-foreground">Active Lines</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    +2 from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                      <PhoneCall className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <p className="text-2xl">7</p>
                      <p className="text-sm text-muted-foreground">Ongoing Calls</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    3 incoming, 4 outgoing
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                      <AlertTriangle className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <p className="text-2xl">1</p>
                      <p className="text-sm text-muted-foreground">Today's Incidents</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    -2 from yesterday
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <p className="text-2xl">156</p>
                      <p className="text-sm text-muted-foreground">Call Volume</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    +12% from last week
                  </p>
                </CardContent>
              </Card>
            </div>

            <Alert className="mt-4">
              <Info className="h-4 w-4" />
              <AlertTitle>Usage Pattern</AlertTitle>
              <AlertDescription>
                Use <code className="bg-muted px-1 py-0.5 rounded">CardContent</code> with <code className="bg-muted px-1 py-0.5 rounded">pt-6</code> padding. 
                Icon containers use <code className="bg-muted px-1 py-0.5 rounded">bg-teal-subtle</code> with <code className="bg-muted px-1 py-0.5 rounded">text-teal</code> for primary metrics, 
                or <code className="bg-muted px-1 py-0.5 rounded">bg-destructive/10</code> with <code className="bg-muted px-1 py-0.5 rounded">text-destructive</code> for warnings.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Standard Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Standard Content Cards</CardTitle>
            <CardDescription>Cards with header and body content for general use</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Call Volume</CardTitle>
                  <CardDescription>Calls and incidents over the past week</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Chart or content goes here. This is the standard card pattern with header and content.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Call Type Distribution</CardTitle>
                  <CardDescription>Breakdown of incoming vs outgoing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Use CardHeader with CardTitle and CardDescription, followed by CardContent.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Custom Reports</CardTitle>
                  <CardDescription>Generated analytics and insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Perfect for detailed content sections, charts, tables, or forms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Plan/Pricing Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Plan/Pricing Cards</CardTitle>
            <CardDescription>Feature cards with special borders and badges (used in Billing)</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="relative border-teal ring-2 ring-teal/20">
                <div className="absolute -top-3 right-4">
                  <Badge className="bg-green-500">Current Plan</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle>Professional</CardTitle>
                  <div className="space-y-1">
                    <div className="text-3xl">$99</div>
                    <p className="text-muted-foreground">per month</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal mr-3 flex-shrink-0" />
                      <span>50 concurrent calls</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal mr-3 flex-shrink-0" />
                      <span>Unlimited extensions</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal mr-3 flex-shrink-0" />
                      <span>Advanced analytics</span>
                    </div>
                  </div>
                  <Button disabled className="w-full">
                    Current Plan
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative border-teal/50">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge>Recommended</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle>Enterprise</CardTitle>
                  <div className="space-y-1">
                    <div className="text-3xl">$299</div>
                    <p className="text-muted-foreground">per month</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal mr-3 flex-shrink-0" />
                      <span>Unlimited concurrent calls</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal mr-3 flex-shrink-0" />
                      <span>Dedicated support</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-teal mr-3 flex-shrink-0" />
                      <span>Custom integrations</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Upgrade to Enterprise
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Alert className="mt-4">
              <Info className="h-4 w-4" />
              <AlertTitle>Border Styling</AlertTitle>
              <AlertDescription>
                Use <code className="bg-muted px-1 py-0.5 rounded">border-teal ring-2 ring-teal/20</code> for active/selected cards,
                and <code className="bg-muted px-1 py-0.5 rounded">border-teal/50</code> for recommended options.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Interactive Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Cards</CardTitle>
            <CardDescription>Cards with actions, progress bars, and dynamic content</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Latest system events</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm">View All</Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">John Doe made a call</p>
                      <p className="text-xs text-muted-foreground">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">Jane Smith updated IVR flow</p>
                      <p className="text-xs text-muted-foreground">15 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback>BJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">Bob Johnson added new line</p>
                      <p className="text-xs text-muted-foreground">1 hour ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage Overview</CardTitle>
                  <CardDescription>Current period statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Call Minutes Used</span>
                      <span>2,450 / 5,000</span>
                    </div>
                    <Progress value={49} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>SMS Messages</span>
                      <span>850 / 1,000</span>
                    </div>
                    <Progress value={85} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Storage Used</span>
                      <span>12 GB / 50 GB</span>
                    </div>
                    <Progress value={24} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Icons Section */}
      <section id="icons" className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2>Icon Set</h2>
        </div>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Lucide React Icons</AlertTitle>
          <AlertDescription>
            We use Lucide React for all icons. Import them from 'lucide-react' package. All icons are designed at 24x24px and scale perfectly.
          </AlertDescription>
        </Alert>

        {/* Action Icons */}
        <Card>
          <CardHeader>
            <CardTitle>Action Icons</CardTitle>
            <CardDescription>Common action and interaction icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              <IconDisplay icon={Plus} label="Plus" />
              <IconDisplay icon={Edit} label="Edit" />
              <IconDisplay icon={Trash2} label="Delete" />
              <IconDisplay icon={Save} label="Save" />
              <IconDisplay icon={Download} label="Download" />
              <IconDisplay icon={Upload} label="Upload" />
              <IconDisplay icon={Send} label="Send" />
              <IconDisplay icon={Search} label="Search" />
              <IconDisplay icon={Filter} label="Filter" />
              <IconDisplay icon={RefreshCw} label="Refresh" />
              <IconDisplay icon={Copy} label="Copy" />
              <IconDisplay icon={Share2} label="Share" />
              <IconDisplay icon={ExternalLink} label="External" />
              <IconDisplay icon={Settings} label="Settings" />
              <IconDisplay icon={X} label="Close" />
              <IconDisplay icon={Check} label="Check" />
            </div>
          </CardContent>
        </Card>

        {/* Navigation Icons */}
        <Card>
          <CardHeader>
            <CardTitle>Navigation Icons</CardTitle>
            <CardDescription>Directional and navigation icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              <IconDisplay icon={ChevronRight} label="Right" />
              <IconDisplay icon={ChevronLeft} label="Left" />
              <IconDisplay icon={ChevronDown} label="Down" />
              <IconDisplay icon={ChevronUp} label="Up" />
              <IconDisplay icon={Home} label="Home" />
              <IconDisplay icon={Grid} label="Grid" />
              <IconDisplay icon={List} label="List" />
              <IconDisplay icon={Menu} label="Menu" />
            </div>
          </CardContent>
        </Card>

        {/* Communication Icons */}
        <Card>
          <CardHeader>
            <CardTitle>Communication Icons</CardTitle>
            <CardDescription>Phone, email, and messaging icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              <IconDisplay icon={Phone} label="Phone" />
              <IconDisplay icon={Mail} label="Mail" />
              <IconDisplay icon={MessageSquare} label="Message" />
              <IconDisplay icon={Bell} label="Bell" />
              <IconDisplay icon={User} label="User" />
              <IconDisplay icon={Calendar} label="Calendar" />
            </div>
          </CardContent>
        </Card>

        {/* Status Icons */}
        <Card>
          <CardHeader>
            <CardTitle>Status & Feedback Icons</CardTitle>
            <CardDescription>Status indicators and feedback icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              <IconDisplay icon={CheckCircle} label="Success" color="text-green-500" />
              <IconDisplay icon={AlertCircle} label="Error" color="text-red-500" />
              <IconDisplay icon={AlertTriangle} label="Warning" color="text-yellow-500" />
              <IconDisplay icon={Info} label="Info" color="text-blue-500" />
              <IconDisplay icon={HelpCircle} label="Help" />
              <IconDisplay icon={Loader2} label="Loading" className="animate-spin" />
              <IconDisplay icon={Clock} label="Time" />
              <IconDisplay icon={Activity} label="Activity" />
            </div>
          </CardContent>
        </Card>

        {/* Data & Analytics Icons */}
        <Card>
          <CardHeader>
            <CardTitle>Data & Analytics Icons</CardTitle>
            <CardDescription>Charts, graphs, and data visualization icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              <IconDisplay icon={BarChart} label="Bar Chart" />
              <IconDisplay icon={PieChart} label="Pie Chart" />
              <IconDisplay icon={TrendingUp} label="Trending Up" color="text-green-500" />
              <IconDisplay icon={TrendingDown} label="Trending Down" color="text-red-500" />
              <IconDisplay icon={Activity} label="Activity" />
              <IconDisplay icon={SortAsc} label="Sort Asc" />
              <IconDisplay icon={SortDesc} label="Sort Desc" />
            </div>
          </CardContent>
        </Card>

        {/* File & Folder Icons */}
        <Card>
          <CardHeader>
            <CardTitle>File & Folder Icons</CardTitle>
            <CardDescription>Document and storage icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              <IconDisplay icon={FileText} label="File" />
              <IconDisplay icon={Folder} label="Folder" />
            </div>
          </CardContent>
        </Card>

        {/* Misc Icons */}
        <Card>
          <CardHeader>
            <CardTitle>Miscellaneous Icons</CardTitle>
            <CardDescription>Other commonly used icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              <IconDisplay icon={Star} label="Star" />
              <IconDisplay icon={Heart} label="Heart" />
              <IconDisplay icon={Eye} label="Eye" />
              <IconDisplay icon={EyeOff} label="Eye Off" />
              <IconDisplay icon={Lock} label="Lock" />
              <IconDisplay icon={Unlock} label="Unlock" />
              <IconDisplay icon={Zap} label="Zap" />
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Badges Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge className="h-5 w-5 rounded-full" />
          <h2>Badges & Labels</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>Different badge styles</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Status Badges</CardTitle>
              <CardDescription>Badges with icons for status indicators</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge className="bg-green-500">
                <Check className="h-3 w-3 mr-1" />
                Active
              </Badge>
              <Badge className="bg-yellow-500">
                <Clock className="h-3 w-3 mr-1" />
                Pending
              </Badge>
              <Badge variant="destructive">
                <X className="h-3 w-3 mr-1" />
                Inactive
              </Badge>
              <Badge variant="outline">
                <Minus className="h-3 w-3 mr-1" />
                Suspended
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Other Components */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Layout className="h-5 w-5 text-primary" />
          <h2>Other Components</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Progress & Loading */}
          <Card>
            <CardHeader>
              <CardTitle>Progress Indicators</CardTitle>
              <CardDescription>Loading and progress states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Progress Bar - 25%</Label>
                <Progress value={25} />
              </div>
              <div className="space-y-2">
                <Label>Progress Bar - 60%</Label>
                <Progress value={60} />
              </div>
              <div className="space-y-2">
                <Label>Progress Bar - 100%</Label>
                <Progress value={100} />
              </div>
            </CardContent>
          </Card>

          {/* Skeleton Loading */}
          <Card>
            <CardHeader>
              <CardTitle>Skeleton Loaders</CardTitle>
              <CardDescription>Placeholder loading states</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Avatars */}
          <Card>
            <CardHeader>
              <CardTitle>Avatars</CardTitle>
              <CardDescription>User profile pictures and fallbacks</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>BJ</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">AB</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Card>
            <CardHeader>
              <CardTitle>Tabs</CardTitle>
              <CardDescription>Content organization with tabs</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-2">
                  <p className="text-sm">Overview content goes here.</p>
                </TabsContent>
                <TabsContent value="analytics" className="space-y-2">
                  <p className="text-sm">Analytics content goes here.</p>
                </TabsContent>
                <TabsContent value="settings" className="space-y-2">
                  <p className="text-sm">Settings content goes here.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Alerts Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-primary" />
          <h2>Alerts & Notifications</h2>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Alert Types</CardTitle>
            <CardDescription>Contextual feedback messages</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>This is an informational message to keep users informed.</AlertDescription>
            </Alert>
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>Your changes have been saved successfully.</AlertDescription>
            </Alert>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>Please review your settings before proceeding.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Something went wrong. Please try again or contact support.</AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Design Tokens Reference */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2>Design Tokens</h2>
        </div>

        <Alert>
          <Sparkles className="h-4 w-4" />
          <AlertTitle>Figma Integration</AlertTitle>
          <AlertDescription className="space-y-2 mt-2">
            <p>The complete design system is available in <code className="bg-muted px-1 py-0.5 rounded">tokens.json</code> with 115+ tokens across 12 categories:</p>
            <ul className="list-disc list-inside space-y-1 text-sm mt-2">
              <li><strong>Colors:</strong> Primary palette, semantic colors, status indicators</li>
              <li><strong>Typography:</strong> Font families, sizes, weights, line heights</li>
              <li><strong>Spacing:</strong> Consistent spacing scale from 4px to 96px</li>
              <li><strong>Border Radius:</strong> Corner radius values for all components</li>
              <li><strong>Sizing:</strong> Component dimensions, icon sizes</li>
              <li><strong>Effects:</strong> Shadows, focus rings, transitions</li>
            </ul>
            <p className="text-sm mt-2">
              Import <code className="bg-muted px-1 py-0.5 rounded">tokens.json</code> into Figma using the <strong>Tokens Studio for Figma</strong> plugin to sync your designs with the codebase.
            </p>
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>Key Documentation Files</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <code className="bg-muted px-2 py-1 rounded text-xs">tokens.json</code>
              <span className="text-muted-foreground">Design tokens for Figma Tokens Studio plugin</span>
            </div>
            <div className="flex items-start gap-2">
              <code className="bg-muted px-2 py-1 rounded text-xs">design-system.ts</code>
              <span className="text-muted-foreground">TypeScript utilities and configuration</span>
            </div>
            <div className="flex items-start gap-2">
              <code className="bg-muted px-2 py-1 rounded text-xs">styles/globals.css</code>
              <span className="text-muted-foreground">CSS custom properties and global styles</span>
            </div>
            <div className="flex items-start gap-2">
              <code className="bg-muted px-2 py-1 rounded text-xs">FIGMA_TOKENS_GUIDE.md</code>
              <span className="text-muted-foreground">Complete guide for Figma integration</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function ColorSwatch({ 
  name, 
  value, 
  description,
  textColor = 'dark',
  border = false
}: { 
  name: string; 
  value: string; 
  description: string;
  textColor?: 'light' | 'dark';
  border?: boolean;
}) {
  return (
    <div className="space-y-2">
      <div 
        className={`w-full h-20 rounded-lg flex items-center justify-center ${border ? 'border-2 border-border' : ''}`}
        style={{ backgroundColor: value }}
      >
        <span className={textColor === 'light' ? 'text-white text-sm' : 'text-gray-900 text-sm'}>
          {value}
        </span>
      </div>
      <div>
        <div className="text-sm">{name}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

function IconDisplay({ 
  icon: Icon, 
  label, 
  color = 'text-foreground',
  className = ''
}: { 
  icon: any; 
  label: string; 
  color?: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
      <Icon className={`h-6 w-6 ${color} ${className}`} />
      <span className="text-xs text-center">{label}</span>
    </div>
  );
}

export default DesignSystemShowcase;
