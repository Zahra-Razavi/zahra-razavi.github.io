import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Progress } from './ui/progress';
import { Skeleton } from './ui/skeleton';
import { Separator } from './ui/separator';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { 
  AlertCircle, 
  CheckCircle2, 
  Info, 
  AlertTriangle,
  Search,
  Plus,
  Download,
  Upload,
  Filter,
  Calendar as CalendarIcon,
  User,
  Settings,
  Home,
  FileText,
  DollarSign,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

// Design System Components
import { Container } from './design-system/Container';
import { Grid } from './design-system/Grid';
import { Stack } from './design-system/Stack';
import { Heading } from './design-system/Heading';
import { Text } from './design-system/Text';
import { PageHeader } from './design-system/PageHeader';
import { Section } from './design-system/Section';
import { MetricCard } from './design-system/MetricCard';
import { StatusCard } from './design-system/StatusCard';
import { InfoCard } from './design-system/InfoCard';
import { StatusBadge } from './design-system/StatusBadge';
import { EmptyState } from './design-system/EmptyState';
import { LoadingState } from './design-system/LoadingState';
import { DataTable } from './design-system/DataTable';

interface ComponentDemoProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
}

function ComponentDemo({ title, description, children, code }: ComponentDemoProps) {
  const [showCode, setShowCode] = useState(false);
  
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-muted p-4 border-b">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold">{title}</h3>
            {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
          </div>
          {code && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCode(!showCode)}
            >
              {showCode ? 'Hide Code' : 'Show Code'}
            </Button>
          )}
        </div>
      </div>
      <div className="p-6 bg-white">
        {children}
      </div>
      {showCode && code && (
        <div className="bg-slate-950 text-slate-50 p-4 overflow-x-auto">
          <pre className="text-sm">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

export default function ComponentKit() {
  const [progress, setProgress] = useState(66);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-[#4E0F60] text-white p-8 mb-8">
        <Container>
          <h1 className="text-4xl mb-2">Lendeck Component Kit</h1>
          <p className="text-lg opacity-90">
            Comprehensive showcase of all available components and design system elements
          </p>
        </Container>
      </div>

      <Container>
        <Tabs defaultValue="shadcn" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="shadcn">ShadCN Components</TabsTrigger>
            <TabsTrigger value="design-system">Design System</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
          </TabsList>

          {/* ShadCN Components Tab */}
          <TabsContent value="shadcn" className="space-y-8">
            {/* Buttons */}
            <Section title="Buttons" description="Various button styles and states">
              <ComponentDemo
                title="Button Variants"
                description="Different visual styles for buttons"
                code={`<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
              >
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">Default</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </ComponentDemo>

              <ComponentDemo
                title="Button Sizes"
                description="Different button sizes"
                code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Plus className="h-4 w-4" /></Button>`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon"><Plus className="h-4 w-4" /></Button>
                </div>
              </ComponentDemo>

              <ComponentDemo
                title="Buttons with Icons"
                description="Combining buttons with Lucide icons"
                code={`<Button><Download className="mr-2 h-4 w-4" />Download</Button>
<Button variant="outline"><Upload className="mr-2 h-4 w-4" />Upload</Button>
<Button variant="secondary"><Filter className="mr-2 h-4 w-4" />Filter</Button>`}
              >
                <div className="flex flex-wrap gap-3">
                  <Button><Download className="mr-2 h-4 w-4" />Download</Button>
                  <Button variant="outline"><Upload className="mr-2 h-4 w-4" />Upload</Button>
                  <Button variant="secondary"><Filter className="mr-2 h-4 w-4" />Filter</Button>
                  <Button variant="ghost"><Settings className="mr-2 h-4 w-4" />Settings</Button>
                </div>
              </ComponentDemo>
            </Section>

            {/* Cards */}
            <Section title="Cards" description="Container components for content">
              <ComponentDemo
                title="Basic Cards"
                description="Simple card layouts"
                code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>`}
              >
                <Grid cols="1" mdCols="2" gap="4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Simple Card</CardTitle>
                      <CardDescription>A basic card with header</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Stack gap="2">
                        <p>This is the card content area.</p>
                        <p className="text-sm text-muted-foreground">Cards organize related information.</p>
                      </Stack>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Another Card</CardTitle>
                      <CardDescription>Cards can contain any content</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Stack gap="2">
                        <p>Use cards to group related information together.</p>
                        <p className="text-sm text-muted-foreground">Consistent spacing improves readability.</p>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              </ComponentDemo>
            </Section>

            {/* Badges */}
            <Section title="Badges" description="Status indicators and labels">
              <ComponentDemo
                title="Badge Variants"
                description="Different badge styles"
                code={`<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
              >
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </ComponentDemo>

              <ComponentDemo
                title="Custom Colored Badges"
                description="Status badges with custom colors"
              >
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                  <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                  <Badge className="bg-red-100 text-red-800">Rejected</Badge>
                  <Badge className="bg-purple-100 text-purple-800">Review</Badge>
                </div>
              </ComponentDemo>
            </Section>

            {/* Form Inputs */}
            <Section title="Form Inputs" description="Input fields and form controls">
              <ComponentDemo
                title="Input Fields"
                description="Text inputs with different configurations"
                code={`<Input type="text" placeholder="Enter text..." />
<Input type="email" placeholder="Email address" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled input" />`}
              >
                <Stack gap="4">
                  <div>
                    <Label>Text Input</Label>
                    <Input type="text" placeholder="Enter text..." className="mt-1" />
                  </div>
                  <div>
                    <Label>Email Input</Label>
                    <Input type="email" placeholder="email@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label>Password Input</Label>
                    <Input type="password" placeholder="••••••••" className="mt-1" />
                  </div>
                  <div>
                    <Label>Disabled Input</Label>
                    <Input disabled placeholder="Disabled input" className="mt-1" />
                  </div>
                </Stack>
              </ComponentDemo>

              <ComponentDemo
                title="Input with Icons"
                description="Enhanced inputs with icon decorations"
              >
                <Stack gap="4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-10" />
                  </div>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Select date..." className="pl-10" />
                  </div>
                </Stack>
              </ComponentDemo>

              <ComponentDemo
                title="Textarea"
                description="Multi-line text input"
                code={`<Textarea placeholder="Enter your message..." />`}
              >
                <Textarea placeholder="Enter your message..." rows={4} />
              </ComponentDemo>

              <ComponentDemo
                title="Checkbox"
                description="Checkbox input with label"
                code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
              >
                <Stack gap="3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms1" />
                    <Label htmlFor="terms1">Accept terms and conditions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" defaultChecked />
                    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled" disabled />
                    <Label htmlFor="disabled">Disabled option</Label>
                  </div>
                </Stack>
              </ComponentDemo>

              <ComponentDemo
                title="Switch"
                description="Toggle switch control"
                code={`<div className="flex items-center space-x-2">
  <Switch id="airplane" />
  <Label htmlFor="airplane">Airplane Mode</Label>
</div>`}
              >
                <Stack gap="3">
                  <div className="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <Label htmlFor="notifications">Enable notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="marketing" defaultChecked />
                    <Label htmlFor="marketing">Marketing emails</Label>
                  </div>
                </Stack>
              </ComponentDemo>

              <ComponentDemo
                title="Select Dropdown"
                description="Dropdown selection menu"
                code={`<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>`}
              >
                <Select>
                  <SelectTrigger className="w-full max-w-xs">
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="suspended">Suspended</SelectItem>
                  </SelectContent>
                </Select>
              </ComponentDemo>
            </Section>

            {/* Alerts */}
            <Section title="Alerts" description="Important messages and notifications">
              <ComponentDemo
                title="Alert Variants"
                description="Different alert styles for various message types"
                code={`<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You have new notifications</AlertDescription>
</Alert>`}
              >
                <Stack gap="4">
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>Information</AlertTitle>
                    <AlertDescription>
                      This is an informational alert message.
                    </AlertDescription>
                  </Alert>
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-900">Success</AlertTitle>
                    <AlertDescription className="text-green-800">
                      Your changes have been saved successfully.
                    </AlertDescription>
                  </Alert>
                  <Alert className="border-yellow-200 bg-yellow-50">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertTitle className="text-yellow-900">Warning</AlertTitle>
                    <AlertDescription className="text-yellow-800">
                      Please review this information carefully.
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Something went wrong. Please try again.
                    </AlertDescription>
                  </Alert>
                </Stack>
              </ComponentDemo>
            </Section>

            {/* Avatars */}
            <Section title="Avatars" description="User profile images and fallbacks">
              <ComponentDemo
                title="Avatar Sizes and Fallbacks"
                description="Different avatar configurations"
                code={`<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>MD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-16 w-16">
                    <AvatarFallback>LG</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-20 w-20">
                    <AvatarFallback>XL</AvatarFallback>
                  </Avatar>
                </div>
              </ComponentDemo>
            </Section>

            {/* Progress */}
            <Section title="Progress Indicators" description="Loading and progress states">
              <ComponentDemo
                title="Progress Bar"
                description="Visual progress indicator"
                code={`<Progress value={66} />`}
              >
                <Stack gap="4">
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span>Progress</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                      Decrease
                    </Button>
                    <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                      Increase
                    </Button>
                  </div>
                </Stack>
              </ComponentDemo>

              <ComponentDemo
                title="Skeleton Loaders"
                description="Loading placeholders"
                code={`<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-3/4" />`}
              >
                <Stack gap="3">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </Stack>
              </ComponentDemo>
            </Section>

            {/* Dialog */}
            <Section title="Dialogs" description="Modal windows and overlays">
              <ComponentDemo
                title="Dialog / Modal"
                description="Overlay dialog for important actions"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-3 mt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </ComponentDemo>
            </Section>

            {/* Separator */}
            <Section title="Separator" description="Visual dividers">
              <ComponentDemo
                title="Horizontal and Vertical Separators"
                description="Dividing content sections"
              >
                <div className="space-y-4">
                  <div>Section 1</div>
                  <Separator />
                  <div>Section 2</div>
                  <Separator />
                  <div>Section 3</div>
                </div>
              </ComponentDemo>
            </Section>
          </TabsContent>

          {/* Design System Components Tab */}
          <TabsContent value="design-system" className="space-y-8">
            {/* Layout Components */}
            <Section title="Layout Components" description="Container, Grid, and Stack for layouts">
              <ComponentDemo
                title="Container"
                description="Centered content container with max-width"
                code={`<Container>
  <p>Content goes here</p>
</Container>`}
              >
                <div className="bg-muted p-4 rounded">
                  <Container>
                    <p>This content is centered and has a maximum width constraint.</p>
                  </Container>
                </div>
              </ComponentDemo>

              <ComponentDemo
                title="Grid Layout"
                description="Responsive grid system"
                code={`<Grid cols="1" mdCols="2" lgCols="3" gap="4">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>`}
              >
                <Grid cols="1" mdCols="2" lgCols="3" gap="4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="p-6 text-center">
                      <p>Grid Item {i}</p>
                    </Card>
                  ))}
                </Grid>
              </ComponentDemo>

              <ComponentDemo
                title="Stack Layout"
                description="Vertical spacing between elements"
                code={`<Stack gap="4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>`}
              >
                <Stack gap="4">
                  <Card className="p-4">Stack Item 1</Card>
                  <Card className="p-4">Stack Item 2</Card>
                  <Card className="p-4">Stack Item 3</Card>
                </Stack>
              </ComponentDemo>
            </Section>

            {/* Typography */}
            <Section title="Typography" description="Text and heading components">
              <ComponentDemo
                title="Headings"
                description="Different heading levels"
                code={`<Heading level="1">Heading 1</Heading>
<Heading level="2">Heading 2</Heading>
<Heading level="3">Heading 3</Heading>`}
              >
                <Stack gap="4">
                  <Heading level="1">Heading Level 1</Heading>
                  <Heading level="2">Heading Level 2</Heading>
                  <Heading level="3">Heading Level 3</Heading>
                  <Heading level="4">Heading Level 4</Heading>
                </Stack>
              </ComponentDemo>

              <ComponentDemo
                title="Text Component"
                description="Text with size and color variants"
                code={`<Text size="sm">Small text</Text>
<Text size="base">Base text</Text>
<Text size="lg">Large text</Text>
<Text variant="muted">Muted text</Text>`}
              >
                <Stack gap="3">
                  <Text size="sm">Small text size</Text>
                  <Text size="base">Base text size</Text>
                  <Text size="lg">Large text size</Text>
                  <Text variant="muted">Muted text color</Text>
                  <Text variant="error">Error text color</Text>
                </Stack>
              </ComponentDemo>

              <ComponentDemo
                title="Page Header"
                description="Consistent page header with title and actions"
                code={`<PageHeader
  title="Page Title"
  description="Page description"
  actions={<Button>Action</Button>}
/>`}
              >
                <PageHeader
                  title="Dashboard Overview"
                  description="View and manage your account activity"
                  actions={
                    <div className="flex gap-2">
                      <Button variant="outline">Export</Button>
                      <Button>New Deal</Button>
                    </div>
                  }
                />
              </ComponentDemo>
            </Section>

            {/* Card Components */}
            <Section title="Specialized Cards" description="Pre-built card components for common use cases">
              <ComponentDemo
                title="Metric Cards"
                description="Display key metrics and statistics"
                code={`<MetricCard
  title="Total Revenue"
  value="$45,231.89"
  trend={12.5}
  icon={DollarSign}
/>`}
              >
                <Grid cols="1" mdCols="2" lgCols="4" gap="4">
                  <MetricCard
                    title="Total Revenue"
                    value="$45,231.89"
                    trend={12.5}
                    icon={DollarSign}
                  />
                  <MetricCard
                    title="Active Deals"
                    value="234"
                    trend={-5.2}
                    icon={FileText}
                  />
                  <MetricCard
                    title="Conversion Rate"
                    value="24.5%"
                    trend={8.1}
                    icon={TrendingUp}
                  />
                  <MetricCard
                    title="Pending Review"
                    value="12"
                    icon={AlertCircle}
                  />
                </Grid>
              </ComponentDemo>

              <ComponentDemo
                title="Status Cards"
                description="Cards showing different status states"
                code={`<StatusCard
  title="Approved"
  count={45}
  icon={CheckCircle2}
  variant="success"
/>`}
              >
                <Grid cols="1" mdCols="2" lgCols="4" gap="4">
                  <StatusCard
                    title="Approved"
                    count={45}
                    icon={CheckCircle2}
                    variant="success"
                  />
                  <StatusCard
                    title="Pending"
                    count={12}
                    icon={AlertCircle}
                    variant="warning"
                  />
                  <StatusCard
                    title="In Review"
                    count={8}
                    icon={Info}
                    variant="info"
                  />
                  <StatusCard
                    title="Rejected"
                    count={3}
                    icon={AlertTriangle}
                    variant="error"
                  />
                </Grid>
              </ComponentDemo>

              <ComponentDemo
                title="Info Cards"
                description="Informational cards with optional actions"
                code={`<InfoCard
  title="Getting Started"
  description="Learn how to use the platform"
  icon={Info}
/>`}
              >
                <Grid cols="1" mdCols="2" gap="4">
                  <InfoCard
                    title="Getting Started"
                    description="Learn how to use the platform effectively with our comprehensive guide."
                    icon={Info}
                  />
                  <InfoCard
                    title="Need Help?"
                    description="Contact our support team for assistance with any questions."
                    icon={AlertCircle}
                  />
                </Grid>
              </ComponentDemo>
            </Section>

            {/* Status Components */}
            <Section title="Status Indicators" description="Status badges and indicators">
              <ComponentDemo
                title="Status Badges"
                description="Pre-styled status indicators"
                code={`<StatusBadge status="approved" />
<StatusBadge status="pending" />
<StatusBadge status="rejected" />`}
              >
                <div className="flex flex-wrap gap-3">
                  <StatusBadge status="approved" />
                  <StatusBadge status="pending" />
                  <StatusBadge status="rejected" />
                  <StatusBadge status="in_review" />
                  <StatusBadge status="active" />
                  <StatusBadge status="inactive" />
                  <StatusBadge status="funded" />
                  <StatusBadge status="closed" />
                </div>
              </ComponentDemo>
            </Section>

            {/* State Components */}
            <Section title="State Components" description="Empty and loading states">
              <ComponentDemo
                title="Empty State"
                description="Display when no data is available"
                code={`<EmptyState
  icon={FileText}
  title="No deals found"
  description="Get started by creating your first deal"
/>`}
              >
                <EmptyState
                  icon={FileText}
                  title="No deals found"
                  description="Get started by creating your first deal"
                  action={<Button>Create Deal</Button>}
                />
              </ComponentDemo>

              <ComponentDemo
                title="Loading State"
                description="Display while content is loading"
                code={`<LoadingState />`}
              >
                <LoadingState />
              </ComponentDemo>
            </Section>

            {/* Data Table */}
            <Section title="Data Table" description="Responsive table with search and filtering">
              <ComponentDemo
                title="Data Table"
                description="Full-featured data table component"
              >
                <DataTable
                  title="Recent Deals"
                  description="View and manage your recent deals"
                  columns={[
                    { header: 'Deal ID', accessor: (row: any) => row.id },
                    { header: 'Merchant', accessor: (row: any) => row.merchant },
                    { header: 'Amount', accessor: (row: any) => row.amount },
                    { header: 'Status', accessor: (row: any) => row.status }
                  ]}
                  data={[
                    {
                      id: '#12345',
                      merchant: 'Acme Corp',
                      amount: '$50,000',
                      status: <StatusBadge status="approved" />
                    },
                    {
                      id: '#12346',
                      merchant: 'Tech Solutions',
                      amount: '$75,000',
                      status: <StatusBadge status="pending" />
                    },
                    {
                      id: '#12347',
                      merchant: 'Global Industries',
                      amount: '$100,000',
                      status: <StatusBadge status="in_review" />
                    }
                  ]}
                  keyAccessor={(row: any) => row.id}
                  searchPlaceholder="Search deals..."
                  onSearch={(term) => console.log('Search:', term)}
                />
              </ComponentDemo>
            </Section>
          </TabsContent>

          {/* Patterns Tab */}
          <TabsContent value="patterns" className="space-y-8">
            <Section title="Common Patterns" description="Real-world usage examples">
              <ComponentDemo
                title="Form Pattern"
                description="Complete form with validation"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Update your contact details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Stack gap="4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label>First Name</Label>
                          <Input placeholder="John" className="mt-1" />
                        </div>
                        <div>
                          <Label>Last Name</Label>
                          <Input placeholder="Doe" className="mt-1" />
                        </div>
                      </div>
                      <div>
                        <Label>Email</Label>
                        <Input type="email" placeholder="john@example.com" className="mt-1" />
                      </div>
                      <div>
                        <Label>Phone</Label>
                        <Input type="tel" placeholder="+1 (555) 000-0000" className="mt-1" />
                      </div>
                      <div>
                        <Label>Message</Label>
                        <Textarea placeholder="Enter your message..." rows={4} className="mt-1" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="subscribe" />
                        <Label htmlFor="subscribe">Subscribe to newsletter</Label>
                      </div>
                      <div className="flex justify-end gap-3">
                        <Button variant="outline">Cancel</Button>
                        <Button>Save Changes</Button>
                      </div>
                    </Stack>
                  </CardContent>
                </Card>
              </ComponentDemo>

              <ComponentDemo
                title="Dashboard Metrics Pattern"
                description="KPI overview section"
              >
                <div>
                  <PageHeader
                    title="Dashboard"
                    description="Overview of your account performance"
                    actions={
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Last 30 days" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="7">Last 7 days</SelectItem>
                          <SelectItem value="30">Last 30 days</SelectItem>
                          <SelectItem value="90">Last 90 days</SelectItem>
                        </SelectContent>
                      </Select>
                    }
                  />
                  <div className="mt-6">
                    <Grid cols="1" mdCols="2" lgCols="4" gap="4">
                      <MetricCard
                        title="Total Funded"
                        value="$1,245,890"
                        trend={15.2}
                        icon={DollarSign}
                      />
                      <MetricCard
                        title="Active Deals"
                        value="48"
                        trend={8.4}
                        icon={FileText}
                      />
                      <MetricCard
                        title="Approval Rate"
                        value="87.3%"
                        trend={3.1}
                        icon={TrendingUp}
                      />
                      <MetricCard
                        title="Avg. Processing Time"
                        value="2.3 days"
                        trend={-12.5}
                        icon={AlertCircle}
                      />
                    </Grid>
                  </div>
                </div>
              </ComponentDemo>
            </Section>
          </TabsContent>
        </Tabs>

        <div className="mt-12 mb-8">
          <Separator />
          <div className="mt-8 text-center text-muted-foreground">
            <p>Lendeck Component Kit • Built with React, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </Container>
    </div>
  );
}