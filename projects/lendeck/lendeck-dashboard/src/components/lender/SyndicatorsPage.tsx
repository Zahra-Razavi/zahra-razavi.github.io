import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Search, Eye, Plus, Edit, FileText, Mail, UserX, TrendingUp, TrendingDown, DollarSign, Users, Briefcase, Target } from 'lucide-react';
import { TableActionsMenu, TableActionItem } from '../ui/table-actions-menu';

const syndicatorData = [
  {
    id: 'SYN001',
    name: 'Apex Capital Syndicate',
    contactPerson: 'Robert Martinez',
    email: 'robert@apexcapital.com',
    phone: '(555) 123-9876',
    status: 'Active',
    type: 'Primary',
    totalInvestment: '$8,500,000',
    activeDeals: 45,
    avgParticipation: '35%',
    totalReturns: '$1,275,000',
    ytdReturns: '$425,000',
    riskTolerance: 'Medium-High',
    preferredDealSize: '$100K - $500K',
    performanceScore: 94,
    joinDate: '2021-09-15',
    lastActivity: '2024-01-16'
  },
  {
    id: 'SYN002',
    name: 'Metro Investment Partners',
    contactPerson: 'Jennifer Walsh',
    email: 'jennifer@metroinvest.com',
    phone: '(555) 234-8765',
    status: 'Active',
    type: 'Secondary',
    totalInvestment: '$5,200,000',
    activeDeals: 28,
    avgParticipation: '25%',
    totalReturns: '$780,000',
    ytdReturns: '$265,000',
    riskTolerance: 'Medium',
    preferredDealSize: '$50K - $300K',
    performanceScore: 89,
    joinDate: '2022-02-20',
    lastActivity: '2024-01-15'
  },
  {
    id: 'SYN003',
    name: 'Strategic Growth Fund',
    contactPerson: 'Thomas Chen',
    email: 'thomas@strategicgrowth.com',
    phone: '(555) 345-7654',
    status: 'Active',
    type: 'Primary',
    totalInvestment: '$3,800,000',
    activeDeals: 22,
    avgParticipation: '40%',
    totalReturns: '$570,000',
    ytdReturns: '$190,000',
    riskTolerance: 'High',
    preferredDealSize: '$200K - $1M',
    performanceScore: 92,
    joinDate: '2022-06-10',
    lastActivity: '2024-01-14'
  },
  {
    id: 'SYN004',
    name: 'Regional Capital Group',
    contactPerson: 'Sandra Lopez',
    email: 'sandra@regionalcapital.com',
    phone: '(555) 456-5432',
    status: 'Inactive',
    type: 'Secondary',
    totalInvestment: '$1,900,000',
    activeDeals: 8,
    avgParticipation: '15%',
    totalReturns: '$285,000',
    ytdReturns: '$45,000',
    riskTolerance: 'Low-Medium',
    preferredDealSize: '$25K - $150K',
    performanceScore: 76,
    joinDate: '2023-03-25',
    lastActivity: '2023-12-22'
  },
];

export function SyndicatorsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedSyndicator, setSelectedSyndicator] = useState<any>(null);
  const [addSyndicatorDialog, setAddSyndicatorDialog] = useState(false);

  const filteredSyndicators = syndicatorData.filter(syndicator => {
    const matchesSearch = syndicator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         syndicator.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         syndicator.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || statusFilter === 'all' || syndicator.status === statusFilter;
    const matchesType = !typeFilter || typeFilter === 'all' || syndicator.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-lendeck-success/10 text-lendeck-success border-lendeck-success/20' : 'bg-lendeck-error/10 text-lendeck-error border-lendeck-error/20';
  };

  const getTypeColor = (type: string) => {
    return type === 'Primary' ? 'bg-lendeck-primary/10 text-lendeck-primary border-lendeck-primary/20' : 'bg-lendeck-purple-accent/10 text-lendeck-purple-accent border-lendeck-purple-accent/20';
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-lendeck-success';
    if (score >= 75) return 'text-lendeck-yellow';
    return 'text-lendeck-error';
  };

  const handleViewSyndicator = (syndicator: any) => {
    setSelectedSyndicator(syndicator);
  };

  return (
    <div className="space-y-6">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-blue/10 rounded-lg flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-lendeck-blue" />
              </div>
              <div>
                <div className="text-xl">24</div>
                <div className="text-sm text-muted-foreground">Total Syndicators</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-success/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-lendeck-success" />
              </div>
              <div>
                <div className="text-xl">22</div>
                <div className="text-sm text-muted-foreground">Active Partners</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-primary/10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-lendeck-primary" />
              </div>
              <div>
                <div className="text-xl">$19.4M</div>
                <div className="text-sm text-muted-foreground">Total Investment</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-orange/10 rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-lendeck-orange" />
              </div>
              <div>
                <div className="text-xl">103</div>
                <div className="text-sm text-muted-foreground">Active Deals</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Syndicators List */}
      <Card>
        <div className="space-y-4 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">Syndicator Partners</h1>
              <p className="text-muted-foreground text-sm sm:text-base">Manage investment syndication partners and their performance</p>
            </div>
            <Dialog open={addSyndicatorDialog} onOpenChange={setAddSyndicatorDialog}>
              <DialogTrigger asChild>
                <Button className="shrink-0">
                  <Plus className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Add Syndicator</span>
                  <span className="sm:hidden">Add</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Syndicator</DialogTitle>
                  <DialogDescription>
                    Register a new investment syndicator partner
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input placeholder="Enter company name" />
                    </div>
                    <div>
                      <Label htmlFor="contactPerson">Contact Person</Label>
                      <Input placeholder="Enter contact name" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input type="email" placeholder="Enter email address" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input placeholder="Enter phone number" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="type">Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Primary">Primary</SelectItem>
                          <SelectItem value="Secondary">Secondary</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="riskTolerance">Risk Tolerance</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select risk tolerance" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Low-Medium">Low-Medium</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Medium-High">Medium-High</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea placeholder="Enter any additional notes..." />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setAddSyndicatorDialog(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setAddSyndicatorDialog(false)}>
                      Add Syndicator
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 min-w-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search syndicators, contacts, or IDs..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Primary">Primary</SelectItem>
                  <SelectItem value="Secondary">Secondary</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Syndicator ID</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Active Deals</TableHead>
                <TableHead>Investment</TableHead>
                <TableHead>YTD Returns</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSyndicators.map((syndicator) => (
                <TableRow key={syndicator.id}>
                  <TableCell className="font-mono">{syndicator.id}</TableCell>
                  <TableCell>{syndicator.name}</TableCell>
                  <TableCell>{syndicator.contactPerson}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(syndicator.status)}>
                      {syndicator.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getTypeColor(syndicator.type)}>
                      {syndicator.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{syndicator.activeDeals}</TableCell>
                  <TableCell>{syndicator.totalInvestment}</TableCell>
                  <TableCell>{syndicator.ytdReturns}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewSyndicator(syndicator)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>Syndicator Details - {syndicator.name}</DialogTitle>
                            <DialogDescription>
                              Comprehensive overview of {syndicator.name} investment performance and details
                            </DialogDescription>
                          </DialogHeader>
                          {selectedSyndicator && (
                            <Tabs defaultValue="overview" className="w-full">
                              <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="performance">Performance</TabsTrigger>
                                <TabsTrigger value="deals">Deals</TabsTrigger>
                                <TabsTrigger value="history">History</TabsTrigger>
                              </TabsList>
                              
                              <TabsContent value="overview" className="space-y-4">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="mb-2">Company Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <div><strong>Company:</strong> {selectedSyndicator.name}</div>
                                      <div><strong>Contact:</strong> {selectedSyndicator.contactPerson}</div>
                                      <div><strong>Email:</strong> {selectedSyndicator.email}</div>
                                      <div><strong>Phone:</strong> {selectedSyndicator.phone}</div>
                                      <div><strong>Status:</strong> {selectedSyndicator.status}</div>
                                      <div><strong>Type:</strong> {selectedSyndicator.type}</div>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="mb-2">Investment Profile</h4>
                                    <div className="space-y-2 text-sm">
                                      <div><strong>Total Investment:</strong> {selectedSyndicator.totalInvestment}</div>
                                      <div><strong>Risk Tolerance:</strong> {selectedSyndicator.riskTolerance}</div>
                                      <div><strong>Preferred Deal Size:</strong> {selectedSyndicator.preferredDealSize}</div>
                                      <div><strong>Avg Participation:</strong> {selectedSyndicator.avgParticipation}</div>
                                      <div><strong>Performance Score:</strong> {selectedSyndicator.performanceScore}</div>
                                      <div><strong>Join Date:</strong> {selectedSyndicator.joinDate}</div>
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="performance" className="space-y-4">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="text-2xl">{selectedSyndicator.totalReturns}</div>
                                      <div className="text-sm text-muted-foreground">Total Returns</div>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="text-2xl">{selectedSyndicator.ytdReturns}</div>
                                      <div className="text-sm text-muted-foreground">YTD Returns</div>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="text-2xl">{selectedSyndicator.activeDeals}</div>
                                      <div className="text-sm text-muted-foreground">Active Deals</div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </TabsContent>

                              <TabsContent value="deals" className="space-y-4">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="mb-2">Deal Statistics</h4>
                                    <div className="space-y-2 text-sm">
                                      <div><strong>Active Deals:</strong> {selectedSyndicator.activeDeals}</div>
                                      <div><strong>Avg Participation:</strong> {selectedSyndicator.avgParticipation}</div>
                                      <div><strong>Preferred Deal Size:</strong> {selectedSyndicator.preferredDealSize}</div>
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="history" className="space-y-4">
                                <div>
                                  <h4 className="mb-2">Activity History</h4>
                                  <div className="space-y-2 text-sm">
                                    <div><strong>Last Activity:</strong> {selectedSyndicator.lastActivity}</div>
                                    <div><strong>Join Date:</strong> {selectedSyndicator.joinDate}</div>
                                  </div>
                                </div>
                              </TabsContent>
                            </Tabs>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <TableActionsMenu label="Syndicator Actions">
                        <TableActionItem 
                          icon={<Edit className="h-4 w-4" />} 
                          label="Edit Syndicator"
                          onClick={() => {}}
                        />
                        <TableActionItem 
                          icon={<Eye className="h-4 w-4" />} 
                          label="View Deals"
                          onClick={() => {}}
                        />
                        <TableActionItem 
                          icon={<FileText className="h-4 w-4" />} 
                          label="Performance Report"
                          onClick={() => {}}
                        />
                        <TableActionItem 
                          icon={<Mail className="h-4 w-4" />} 
                          label="Send Message"
                          onClick={() => {}}
                        />
                        <TableActionItem 
                          icon={<UserX className="h-4 w-4" />} 
                          label="Deactivate"
                          onClick={() => {}}
                          variant="destructive"
                        />
                      </TableActionsMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}