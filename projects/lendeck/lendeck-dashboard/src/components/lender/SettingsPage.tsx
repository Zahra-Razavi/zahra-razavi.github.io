import { useState } from 'react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';
import { User, Building2, Bell, Lock, Palette, Key, Mail, Phone, MapPin, Sliders } from 'lucide-react';
import { Badge } from '../ui/badge';

export function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [dealAlerts, setDealAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full md:w-auto">
          <TabsTrigger value="profile">Personal Info</TabsTrigger>
          <TabsTrigger value="organization">Company Info</TabsTrigger>
          <TabsTrigger value="underwriting">Underwriting</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-lendeck-primary/10 rounded-lg flex items-center justify-center">
                  <User className="h-5 w-5 text-lendeck-primary" />
                </div>
                <div>
                  <CardTitle>Personal Information</CardTitle>
                  <p className="text-sm text-muted-foreground">Update your personal details</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Jane" defaultValue="Sarah" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" defaultValue="Johnson" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </Label>
                <Input id="email" type="email" placeholder="jane@example.com" defaultValue="sarah.johnson@lender.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" defaultValue="+1 (555) 987-6543" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" placeholder="Senior Underwriter" defaultValue="Senior Underwriter" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select defaultValue="underwriting">
                  <SelectTrigger id="department">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="underwriting">Underwriting</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                    <SelectItem value="risk">Risk Management</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="executive">Executive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Organization Settings */}
        <TabsContent value="organization" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-lendeck-orange/10 rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-lendeck-orange" />
                </div>
                <div>
                  <CardTitle>Organization Information</CardTitle>
                  <p className="text-sm text-muted-foreground">Manage your organization details</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="orgName">Organization Name</Label>
                <Input id="orgName" placeholder="Capital Lending Group" defaultValue="Capital Lending Group" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="legalName">Legal Name</Label>
                <Input id="legalName" placeholder="Capital Lending Group LLC" defaultValue="Capital Lending Group LLC" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="orgPhone">Organization Phone</Label>
                  <Input id="orgPhone" type="tel" placeholder="+1 (555) 000-0000" defaultValue="+1 (555) 234-5678" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="orgEmail">Organization Email</Label>
                  <Input id="orgEmail" type="email" placeholder="info@lender.com" defaultValue="info@capitallending.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" type="url" placeholder="https://example.com" defaultValue="https://capitallending.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Business Address
                </Label>
                <Input id="address" placeholder="123 Main Street" defaultValue="789 Financial Plaza" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="New York" defaultValue="New York" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" placeholder="NY" defaultValue="NY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" placeholder="10001" defaultValue="10005" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="taxId">Tax ID / EIN</Label>
                  <Input id="taxId" placeholder="XX-XXXXXXX" defaultValue="98-7654321" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="licenseNumber">Lending License Number</Label>
                  <Input id="licenseNumber" placeholder="LIC-XXXXXXX" defaultValue="LIC-NY-123456" />
                </div>
              </div>

              <Separator />

              <div className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lending Limits & Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="minLoan">Minimum Loan Amount</Label>
                  <Input id="minLoan" type="text" placeholder="$10,000" defaultValue="$25,000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxLoan">Maximum Loan Amount</Label>
                  <Input id="maxLoan" type="text" placeholder="$500,000" defaultValue="$2,000,000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="minTerm">Minimum Term (Months)</Label>
                  <Input id="minTerm" type="number" placeholder="6" defaultValue="6" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxTerm">Maximum Term (Months)</Label>
                  <Input id="maxTerm" type="number" placeholder="24" defaultValue="36" />
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Update Limits</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Underwriting Settings */}
        <TabsContent value="underwriting" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-lendeck-green/10 rounded-lg flex items-center justify-center">
                  <Sliders className="h-5 w-5 text-lendeck-green" />
                </div>
                <div>
                  <CardTitle>Underwriting Criteria</CardTitle>
                  <p className="text-sm text-muted-foreground">Configure automatic approval thresholds</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-4">Credit Score Requirements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="minCredit">Minimum Credit Score</Label>
                    <Input id="minCredit" type="number" placeholder="600" defaultValue="650" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredCredit">Preferred Credit Score</Label>
                    <Input id="preferredCredit" type="number" placeholder="700" defaultValue="720" />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-4">Business Requirements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="minRevenue">Minimum Annual Revenue</Label>
                    <Input id="minRevenue" type="text" placeholder="$250,000" defaultValue="$500,000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="minYears">Minimum Years in Business</Label>
                    <Input id="minYears" type="number" placeholder="1" defaultValue="2" />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-4">Auto-Approval Settings</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="autoApproval">Enable Auto-Approval</Label>
                      <p className="text-sm text-muted-foreground">Automatically approve deals meeting all criteria</p>
                    </div>
                    <Switch id="autoApproval" defaultChecked />
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label htmlFor="autoApprovalLimit">Auto-Approval Amount Limit</Label>
                    <Input id="autoApprovalLimit" type="text" placeholder="$100,000" defaultValue="$250,000" />
                    <p className="text-xs text-muted-foreground">
                      Deals above this amount require manual review
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-4">Risk Flags</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="bankruptcyFlag">Flag Previous Bankruptcies</Label>
                      <p className="text-sm text-muted-foreground">Require manual review for bankruptcy history</p>
                    </div>
                    <Switch id="bankruptcyFlag" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="nsf Flag">Flag High NSF Frequency</Label>
                      <p className="text-sm text-muted-foreground">Alert when NSF rate exceeds threshold</p>
                    </div>
                    <Switch id="nsfFlag" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="industryFlag">Flag High-Risk Industries</Label>
                      <p className="text-sm text-muted-foreground">Require additional review for specific industries</p>
                    </div>
                    <Switch id="industryFlag" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button>Save Criteria</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-lendeck-blue/10 rounded-lg flex items-center justify-center">
                  <Bell className="h-5 w-5 text-lendeck-blue" />
                </div>
                <div>
                  <CardTitle>Notification Preferences</CardTitle>
                  <p className="text-sm text-muted-foreground">Choose how you want to be notified</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-4">Communication Channels</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="emailNotif">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive updates via email</p>
                    </div>
                    <Switch 
                      id="emailNotif" 
                      checked={emailNotifications}
                      onCheckedChange={setEmailNotifications}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="smsNotif">SMS Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive text message alerts</p>
                    </div>
                    <Switch 
                      id="smsNotif" 
                      checked={smsNotifications}
                      onCheckedChange={setSmsNotifications}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-4">Deal & Underwriting Notifications</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="newSubmissions">New Deal Submissions</Label>
                      <p className="text-sm text-muted-foreground">Alert when new deals are submitted</p>
                    </div>
                    <Switch id="newSubmissions" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="underwritingAlerts">Underwriting Queue Changes</Label>
                      <p className="text-sm text-muted-foreground">Notify when deals enter your queue</p>
                    </div>
                    <Switch id="underwritingAlerts" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="approvalAlerts">Deal Approvals Required</Label>
                      <p className="text-sm text-muted-foreground">Alert when your approval is needed</p>
                    </div>
                    <Switch id="approvalAlerts" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="fundingAlerts">Funding Notifications</Label>
                      <p className="text-sm text-muted-foreground">Alert when deals are funded</p>
                    </div>
                    <Switch id="fundingAlerts" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-4">Portfolio & Risk Alerts</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="paymentAlerts">Payment Delays & Defaults</Label>
                      <p className="text-sm text-muted-foreground">Alert on payment issues</p>
                    </div>
                    <Switch id="paymentAlerts" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="riskAlerts">Risk Score Changes</Label>
                      <p className="text-sm text-muted-foreground">Notify when merchant risk scores change</p>
                    </div>
                    <Switch id="riskAlerts" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="portfolioAlerts">Portfolio Threshold Alerts</Label>
                      <p className="text-sm text-muted-foreground">Alert when portfolio limits are reached</p>
                    </div>
                    <Switch id="portfolioAlerts" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-4">Reports & Summaries</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dailyReports">Daily Activity Report</Label>
                      <p className="text-sm text-muted-foreground">Daily summary of activities</p>
                    </div>
                    <Switch id="dailyReports" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="weeklyReports">Weekly Performance Report</Label>
                      <p className="text-sm text-muted-foreground">Weekly portfolio performance summary</p>
                    </div>
                    <Switch 
                      id="weeklyReports" 
                      checked={weeklyReports}
                      onCheckedChange={setWeeklyReports}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="monthlyReports">Monthly Executive Summary</Label>
                      <p className="text-sm text-muted-foreground">Monthly overview for leadership</p>
                    </div>
                    <Switch id="monthlyReports" defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-lendeck-error/10 rounded-lg flex items-center justify-center">
                  <Lock className="h-5 w-5 text-lendeck-error" />
                </div>
                <div>
                  <CardTitle>Security Settings</CardTitle>
                  <p className="text-sm text-muted-foreground">Manage your password and security options</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="••••••••" />
                </div>
                <Button>Update Password</Button>
              </div>

              <Separator />

              <div>
                <h4 className="mb-4">Two-Factor Authentication</h4>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-medium">2FA Status</p>
                      <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Using authenticator app for additional security
                    </p>
                  </div>
                  <Button variant="outline">Manage 2FA</Button>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-4">Active Sessions</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">Current Session - Chrome (Windows)</p>
                      <p className="text-sm text-muted-foreground">New York, NY • Last active: Now</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">Mobile App - iOS</p>
                      <p className="text-sm text-muted-foreground">New York, NY • Last active: 1 hour ago</p>
                    </div>
                    <Button variant="ghost" size="sm">Revoke</Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-4">IP Restrictions</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="ipRestriction">Enable IP Restrictions</Label>
                      <p className="text-sm text-muted-foreground">Only allow access from approved IP addresses</p>
                    </div>
                    <Switch id="ipRestriction" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences Settings */}
        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-lendeck-purple-accent/10 rounded-lg flex items-center justify-center">
                  <Palette className="h-5 w-5 text-lendeck-purple-accent" />
                </div>
                <div>
                  <CardTitle>Display Preferences</CardTitle>
                  <p className="text-sm text-muted-foreground">Customize how you view the dashboard</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English (US)</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="est">
                  <SelectTrigger id="timezone">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                    <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                    <SelectItem value="cst">Central Time (CST)</SelectItem>
                    <SelectItem value="est">Eastern Time (EST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateFormat">Date Format</Label>
                <Select defaultValue="mdy">
                  <SelectTrigger id="dateFormat">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currency">Currency Display</Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="currency">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div>
                <h4 className="mb-4">Dashboard Layout</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="compactMode">Compact Mode</Label>
                      <p className="text-sm text-muted-foreground">Reduce spacing for more content</p>
                    </div>
                    <Switch id="compactMode" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="darkMode">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">Switch to dark theme</p>
                    </div>
                    <Switch id="darkMode" />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="defaultView">Default Dashboard View</Label>
                      <p className="text-sm text-muted-foreground">Choose your default landing page</p>
                    </div>
                    <Select defaultValue="dashboard">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dashboard">Dashboard Overview</SelectItem>
                        <SelectItem value="deals">Deals</SelectItem>
                        <SelectItem value="underwriting">Underwriting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-lendeck-teal/10 rounded-lg flex items-center justify-center">
                  <Key className="h-5 w-5 text-lendeck-teal" />
                </div>
                <div>
                  <CardTitle>API Access & Integrations</CardTitle>
                  <p className="text-sm text-muted-foreground">Manage API keys for integrations</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Production API Key</p>
                    <p className="text-sm text-muted-foreground font-mono">pk_live_••••••••••••7891</p>
                  </div>
                  <Button variant="outline" size="sm">Regenerate</Button>
                </div>
              </div>
              <div className="p-4 border rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Test API Key</p>
                    <p className="text-sm text-muted-foreground font-mono">pk_test_••••••••••••3456</p>
                  </div>
                  <Button variant="outline" size="sm">Regenerate</Button>
                </div>
              </div>
              <div className="p-4 border rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Webhook URL</p>
                    <p className="text-sm text-muted-foreground font-mono">https://api.capitallending.com/webhook</p>
                  </div>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Key className="h-4 w-4 mr-2" />
                Generate New API Key
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
