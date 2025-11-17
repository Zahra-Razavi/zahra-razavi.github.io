// This file has been removed as it's no longer needed
export default function DesignShowcase() {
  return null;
}
  const [activeSection, setActiveSection] = useState('onboarding');

  const sections = [
    { id: 'onboarding', name: 'Onboarding Flow', icon: <User className="h-4 w-4" /> },
    { id: 'dashboard', name: 'Dashboard Layout', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'reports', name: 'Reports & Analytics', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'call-logs', name: 'Call Logs', icon: <PhoneCall className="h-4 w-4" /> },
    { id: 'lines', name: 'Lines Management', icon: <Hash className="h-4 w-4" /> },
    { id: 'ivr-flows', name: 'IVR Flows', icon: <GitBranch className="h-4 w-4" /> },
    { id: 'ivr-voices', name: 'IVR Voices', icon: <Mic className="h-4 w-4" /> },
    { id: 'billing', name: 'Billing', icon: <CreditCard className="h-4 w-4" /> },
    { id: 'components', name: 'UI Components', icon: <Settings className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-semibold">Mediana VoIP Dashboard</h1>
              <p className="text-sm text-muted-foreground">Complete Design System & UI Showcase</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Navigation Sidebar */}
        <div className="w-64 border-r bg-card h-screen sticky top-0 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Design Sections</h3>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === section.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {section.icon}
                  <span>{section.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="container mx-auto px-6 py-8">
            {/* Onboarding Flow Design */}
            {activeSection === 'onboarding' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">5-Step Onboarding Flow</h2>
                  <p className="text-muted-foreground">Progressive user registration with validation and professional styling</p>
                </div>

                {/* Step 1: Personal Information */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5 text-primary" />
                      <CardTitle>Step 1: Personal Information</CardTitle>
                      <Badge variant="default" className="bg-primary text-primary-foreground">Required</Badge>
                    </div>
                    <CardDescription>Professional form layout with proper spacing and validation indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name *</label>
                        <div className="h-10 bg-input-background border border-input rounded-md px-3 flex items-center text-sm">
                          John
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name *</label>
                        <div className="h-10 bg-input-background border border-input rounded-md px-3 flex items-center text-sm">
                          Smith
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Mobile Number *</label>
                        <div className="h-10 bg-input-background border border-input rounded-md px-3 flex items-center text-sm">
                          +1 (555) 123-4567
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">ID Number *</label>
                        <div className="h-10 bg-input-background border border-input rounded-md px-3 flex items-center text-sm">
                          ID123456789
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 2: Business Information */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      <CardTitle>Step 2: Business Information</CardTitle>
                      <Badge variant="default" className="bg-primary text-primary-foreground">Required</Badge>
                    </div>
                    <CardDescription>Company details for VoIP service setup</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Company Name *</label>
                        <div className="h-10 bg-input-background border border-input rounded-md px-3 flex items-center text-sm">
                          Acme Corporation
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Business Registration ID *</label>
                        <div className="h-10 bg-input-background border border-input rounded-md px-3 flex items-center text-sm">
                          REG123456789
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Progress Indicator */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">40% Complete</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <div className="flex justify-between mt-4">
                      <Button variant="outline">Previous</Button>
                      <Button>Next</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Dashboard Layout */}
            {activeSection === 'dashboard' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Main Dashboard Layout</h2>
                  <p className="text-muted-foreground">Professional sidebar navigation with collapsible sections</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Sidebar Navigation Structure</CardTitle>
                    <CardDescription>Dark sidebar with teal accents and organized menu sections</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-dark-gray text-white rounded-lg p-4 space-y-2">
                      <div className="flex items-center space-x-2 mb-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-medium">Mediana VoIP</h3>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 px-3 py-2 bg-primary rounded text-primary-foreground">
                          <BarChart3 className="h-4 w-4" />
                          <span>Reports & Analytics</span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 py-2 hover:bg-sidebar-accent rounded">
                          <PhoneCall className="h-4 w-4" />
                          <span>Call Logs</span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 py-2 hover:bg-sidebar-accent rounded">
                          <Hash className="h-4 w-4" />
                          <span>Lines</span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 py-2 hover:bg-sidebar-accent rounded">
                          <Settings className="h-4 w-4" />
                          <span>IVR Flows</span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 py-2 hover:bg-sidebar-accent rounded">
                          <Mic className="h-4 w-4" />
                          <span>IVR Voices</span>
                        </div>
                        <div className="flex items-center space-x-2 px-3 py-2 hover:bg-sidebar-accent rounded">
                          <CreditCard className="h-4 w-4" />
                          <span>Billing</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Reports & Analytics */}
            {activeSection === 'reports' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Reports & Analytics Dashboard</h2>
                  <p className="text-muted-foreground">Comprehensive analytics with charts and key performance indicators</p>
                </div>

                {/* Key Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Active Lines</CardTitle>
                      <Phone className="h-4 w-4 text-teal" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-dark-gray">24</div>
                      <p className="text-xs text-muted-foreground">+2 from last month</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Ongoing Calls</CardTitle>
                      <PhoneCall className="h-4 w-4 text-teal" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-dark-gray">7</div>
                      <p className="text-xs text-muted-foreground">3 incoming, 4 outgoing</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Today's Incidents</CardTitle>
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-dark-gray">1</div>
                      <p className="text-xs text-muted-foreground">-2 from yesterday</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Call Volume</CardTitle>
                      <TrendingUp className="h-4 w-4 text-teal" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-dark-gray">156</div>
                      <p className="text-xs text-muted-foreground">+12% from last week</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Chart Placeholder */}
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Call Volume</CardTitle>
                    <CardDescription>Calls and incidents over the past week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] bg-muted/30 rounded flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Interactive Bar Chart</p>
                        <p className="text-sm text-muted-foreground">Shows daily call volume and incident tracking</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Call Logs */}
            {activeSection === 'call-logs' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Call Logs Management</h2>
                  <p className="text-muted-foreground">Comprehensive call history with advanced filtering and search</p>
                </div>

                {/* Filters Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced Filters</CardTitle>
                    <CardDescription>Filter call logs by multiple criteria</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Search</label>
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <div className="h-10 bg-input-background border border-input rounded-md pl-9 pr-3 flex items-center text-sm">
                            Phone number, extension...
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Status</label>
                        <div className="h-10 bg-input-background border border-input rounded-md px-3 flex items-center text-sm">
                          All statuses ▼
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Call Type</label>
                        <div className="h-10 bg-input-background border border-input rounded-md px-3 flex items-center text-sm">
                          All types ▼
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Date Range</label>
                        <div className="h-10 bg-input-background border border-input rounded-md px-3 flex items-center text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          Pick a date range
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Call Logs Table */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Call History</CardTitle>
                        <CardDescription>Detailed log of all incoming and outgoing calls</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Sample Call Log Entries */}
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="font-mono text-sm">+1 (555) 123-4567</div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                            <div className="font-mono text-sm">101 (Reception)</div>
                            <Badge variant="default" className="bg-success text-white">Answered</Badge>
                            <Badge variant="outline" className="border-teal text-teal bg-teal-subtle">Incoming</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            00:04:32 • 2025-01-15 09:23:45
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="font-mono text-sm">102 (Sales)</div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                            <div className="font-mono text-sm">+1 (555) 987-6543</div>
                            <Badge variant="destructive">Missed</Badge>
                            <Badge variant="outline" className="border-dark-gray text-dark-gray bg-gray-50">Outgoing</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            00:00:00 • 2025-01-15 10:12:33
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Lines Management */}
            {activeSection === 'lines' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Lines Management</h2>
                  <p className="text-muted-foreground">Configure and manage phone extensions and routing settings</p>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Total Extensions</CardTitle>
                      <Phone className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">5</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Active Lines</CardTitle>
                      <Phone className="h-4 w-4 text-success" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">4</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Current Calls</CardTitle>
                      <Phone className="h-4 w-4 text-teal" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Busy Lines</CardTitle>
                      <Phone className="h-4 w-4 text-red-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Extensions Table */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Extension Management</CardTitle>
                        <CardDescription>Configure and manage your phone extensions</CardDescription>
                      </div>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Extension
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Sample Extension Entries */}
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="grid grid-cols-5 gap-8 flex-1">
                            <div>
                              <p className="font-medium">Reception</p>
                              <p className="text-sm text-muted-foreground">Main entrance</p>
                            </div>
                            <div className="font-mono">101</div>
                            <div className="text-sm">Voicemail</div>
                            <div><Badge variant="default" className="bg-success text-white">Active</Badge></div>
                            <div className="flex items-center space-x-1">
                              <Volume2 className="h-4 w-4 text-success" />
                              <span className="text-sm">Enabled</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="grid grid-cols-5 gap-8 flex-1">
                            <div>
                              <p className="font-medium">Sales Team</p>
                              <p className="text-sm text-muted-foreground">Customer sales</p>
                            </div>
                            <div className="font-mono">102</div>
                            <div className="text-sm">Forward to +1-555-0123</div>
                            <div><Badge variant="destructive">Busy</Badge></div>
                            <div className="flex items-center space-x-1">
                              <Volume2 className="h-4 w-4 text-success" />
                              <span className="text-sm">Enabled</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* IVR Flows */}
            {activeSection === 'ivr-flows' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">IVR Flow Designer</h2>
                  <p className="text-muted-foreground">Design and manage Interactive Voice Response flows</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Flow List */}
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>IVR Flows</CardTitle>
                        <Button size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Create
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="border border-primary bg-primary/5 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-sm">Main Reception Flow</p>
                          <Badge variant="default" className="bg-success text-white">Active</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Primary customer service flow</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-muted-foreground">4 nodes</span>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm">
                              <Play className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-sm">After Hours Flow</p>
                          <Badge variant="secondary">Draft</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Automated flow for off-hours</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-muted-foreground">2 nodes</span>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm">
                              <Play className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Flow Designer */}
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="flex items-center space-x-2">
                              <span>Main Reception Flow</span>
                              <Badge variant="default" className="bg-success text-white">Active</Badge>
                            </CardTitle>
                            <CardDescription>Primary customer service flow for incoming calls</CardDescription>
                          </div>
                          <Button size="sm">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Node
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-muted/30 rounded-lg p-6 space-y-6">
                          {/* Welcome Node */}
                          <div className="flex items-center space-x-4">
                            <div className="bg-card border rounded-lg p-4 min-w-[200px]">
                              <div className="flex items-center space-x-2 mb-2">
                                <Mic className="h-4 w-4" />
                                <span className="text-sm font-medium">Welcome Message</span>
                                <Badge variant="outline" className="text-xs">greeting</Badge>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                Thank you for calling Mediana...
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          </div>

                          {/* Menu Node */}
                          <div className="flex items-center space-x-4">
                            <div className="bg-card border rounded-lg p-4 min-w-[200px]">
                              <div className="flex items-center space-x-2 mb-2">
                                <GitBranch className="h-4 w-4" />
                                <span className="text-sm font-medium">Main Menu</span>
                                <Badge variant="outline" className="text-xs">menu</Badge>
                              </div>
                              <p className="text-xs text-muted-foreground mb-2">
                                Press 1 for Sales, 2 for Support...
                              </p>
                              <div className="space-y-1">
                                <div className="flex items-center text-xs">
                                  <span className="bg-primary text-primary-foreground px-1 rounded mr-2">1</span>
                                  <span>Sales</span>
                                </div>
                                <div className="flex items-center text-xs">
                                  <span className="bg-primary text-primary-foreground px-1 rounded mr-2">2</span>
                                  <span>Support</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}

            {/* IVR Voices */}
            {activeSection === 'ivr-voices' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">IVR Voice Library</h2>
                  <p className="text-muted-foreground">Manage audio files for your IVR system</p>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Total Files</CardTitle>
                      <FileAudio className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">6</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Total Storage</CardTitle>
                      <Volume2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3.2 MB</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Active Files</CardTitle>
                      <Mic className="h-4 w-4 text-success" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">5</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm">Total Usage</CardTitle>
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">358</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Voice Files Table */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Voice File Library</CardTitle>
                        <CardDescription>Manage your audio files used in IVR flows</CardDescription>
                      </div>
                      <Button>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload File
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Sample Voice File Entries */}
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="grid grid-cols-6 gap-4 flex-1">
                            <div>
                              <p className="font-medium">Welcome Message</p>
                              <p className="text-sm text-muted-foreground">Main greeting</p>
                            </div>
                            <div className="font-mono text-sm">welcome_greeting.mp3</div>
                            <div className="font-mono">00:12</div>
                            <div>156 KB</div>
                            <div><Badge variant="outline">MP3</Badge></div>
                            <div><Badge variant="default" className="bg-success text-white">Active</Badge></div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Play className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="grid grid-cols-6 gap-4 flex-1">
                            <div>
                              <p className="font-medium">Hold Music</p>
                              <p className="text-sm text-muted-foreground">Background music</p>
                            </div>
                            <div className="font-mono text-sm">hold_music.mp3</div>
                            <div className="font-mono">02:30</div>
                            <div>2.1 MB</div>
                            <div><Badge variant="outline">MP3</Badge></div>
                            <div><Badge variant="secondary">Processing</Badge></div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm" disabled>
                              <Play className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Billing */}
            {activeSection === 'billing' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Billing & Subscription</h2>
                  <p className="text-muted-foreground">Manage your plan, payment methods, and billing history</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Current Plan */}
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle>Current Plan: Professional</CardTitle>
                            <CardDescription>Your subscription is active and billing monthly</CardDescription>
                          </div>
                          <Button>Upgrade Plan</Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Monthly Cost</p>
                            <p className="text-2xl font-bold">$49</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Next Billing Date</p>
                            <p className="text-lg">February 1, 2025</p>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="mb-2">Plan Features:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="flex items-center text-sm">
                              <Check className="h-4 w-4 text-success mr-2" />
                              Up to 25 extensions
                            </div>
                            <div className="flex items-center text-sm">
                              <Check className="h-4 w-4 text-success mr-2" />
                              Advanced IVR flows
                            </div>
                            <div className="flex items-center text-sm">
                              <Check className="h-4 w-4 text-success mr-2" />
                              Call recording
                            </div>
                            <div className="flex items-center text-sm">
                              <Check className="h-4 w-4 text-success mr-2" />
                              Priority support
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Payment Method */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-3 mb-4">
                        <CreditCard className="h-8 w-8 text-muted-foreground" />
                        <div>
                          <p className="font-medium">**** **** **** 4242</p>
                          <p className="text-sm text-muted-foreground">Expires 12/27</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Update Payment Method
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Usage Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle>Current Usage</CardTitle>
                    <CardDescription>Monitor your plan usage and limits</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Extensions Used</span>
                          <span className="text-sm text-muted-foreground">5 / 25</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Monthly Minutes</span>
                          <span className="text-sm text-muted-foreground">1,234 / 5,000</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Storage Used</span>
                          <span className="text-sm text-muted-foreground">3.2 MB / 1 GB</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '1%' }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* UI Components */}
            {activeSection === 'components' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">UI Components & Design System</h2>
                  <p className="text-muted-foreground">Core components and styling used throughout the application</p>
                </div>

                {/* Color Palette */}
                <Card>
                  <CardHeader>
                    <CardTitle>Color Palette</CardTitle>
                    <CardDescription>Accessibility-compliant color system with proper contrast ratios</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <div className="h-16 bg-primary rounded border flex items-center justify-center">
                          <span className="text-primary-foreground text-sm font-medium">#4A8B82</span>
                        </div>
                        <p className="text-sm font-medium">Primary Teal</p>
                        <p className="text-xs text-muted-foreground">WCAG AA compliant</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-16 bg-teal-light rounded border flex items-center justify-center">
                          <span className="text-dark-gray text-sm font-medium">#9AC6BD</span>
                        </div>
                        <p className="text-sm font-medium">Light Teal</p>
                        <p className="text-xs text-muted-foreground">Decorative only</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-16 bg-dark-gray rounded border flex items-center justify-center">
                          <span className="text-white text-sm font-medium">#262626</span>
                        </div>
                        <p className="text-sm font-medium">Dark Gray</p>
                        <p className="text-xs text-muted-foreground">Text & accents</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-16 bg-white border rounded flex items-center justify-center">
                          <span className="text-dark-gray text-sm font-medium">#FFFFFF</span>
                        </div>
                        <p className="text-sm font-medium">White</p>
                        <p className="text-xs text-muted-foreground">Background</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Buttons & Badges */}
                <Card>
                  <CardHeader>
                    <CardTitle>Buttons & Badges</CardTitle>
                    <CardDescription>Interactive elements with consistent styling</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="mb-3">Button Variants</h4>
                        <div className="flex flex-wrap gap-3">
                          <Button>Primary Button</Button>
                          <Button variant="outline">Outline Button</Button>
                          <Button variant="secondary">Secondary Button</Button>
                          <Button variant="ghost">Ghost Button</Button>
                          <Button variant="destructive">Destructive Button</Button>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="mb-3">Badge Variants</h4>
                        <div className="flex flex-wrap gap-3">
                          <Badge variant="default" className="bg-success text-white">Active</Badge>
                          <Badge variant="secondary">Draft</Badge>
                          <Badge variant="destructive">Error</Badge>
                          <Badge variant="outline">Outline</Badge>
                          <Badge variant="outline" className="border-teal text-teal bg-teal-subtle">Custom Teal</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Typography */}
                <Card>
                  <CardHeader>
                    <CardTitle>Typography Scale</CardTitle>
                    <CardDescription>Consistent text hierarchy with proper line heights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h1>Heading 1 - Main Page Titles</h1>
                        <p className="text-sm text-muted-foreground">text-2xl, font-medium, line-height: 1.5</p>
                      </div>
                      <div>
                        <h2>Heading 2 - Section Titles</h2>
                        <p className="text-sm text-muted-foreground">text-xl, font-medium, line-height: 1.5</p>
                      </div>
                      <div>
                        <h3>Heading 3 - Subsection Titles</h3>
                        <p className="text-sm text-muted-foreground">text-lg, font-medium, line-height: 1.5</p>
                      </div>
                      <div>
                        <h4>Heading 4 - Card Titles</h4>
                        <p className="text-sm text-muted-foreground">text-base, font-medium, line-height: 1.5</p>
                      </div>
                      <div>
                        <p>Body text - Regular paragraph content</p>
                        <p className="text-sm text-muted-foreground">text-base, font-normal, line-height: 1.5</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}