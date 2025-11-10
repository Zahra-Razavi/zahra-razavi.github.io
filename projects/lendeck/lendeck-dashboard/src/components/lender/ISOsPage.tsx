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
import { Search, Eye, Plus, Edit, FileText, Mail, UserX, TrendingUp, TrendingDown, DollarSign, Users } from 'lucide-react';
import { TableActionsMenu, TableActionItem } from '../ui/table-actions-menu';

const isoData = [
  {
    id: 'ISO001',
    name: 'Premier Business Solutions',
    contactPerson: 'Sarah Johnson',
    email: 'sarah@premierbiz.com',
    phone: '(555) 123-4567',
    status: 'Active',
    tier: 'Platinum',
    totalDeals: 156,
    totalVolume: '$4,250,000',
    monthlyVolume: '$380,000',
    commissionRate: '3.5%',
    ytdCommissions: '$148,750',
    avgDealSize: '$27,244',
    approvalRate: '82%',
    joinDate: '2022-03-15',
    lastActivity: '2024-01-16',
    performanceScore: 95
  },
  {
    id: 'ISO002',
    name: 'Capital Connect Partners',
    contactPerson: 'Mike Chen',
    email: 'mike@capitalconnect.com',
    phone: '(555) 234-5678',
    status: 'Active',
    tier: 'Gold',
    totalDeals: 89,
    totalVolume: '$2,100,000',
    monthlyVolume: '$185,000',
    commissionRate: '3.0%',
    ytdCommissions: '$63,000',
    avgDealSize: '$23,596',
    approvalRate: '76%',
    joinDate: '2022-08-20',
    lastActivity: '2024-01-15',
    performanceScore: 88
  },
  {
    id: 'ISO003',
    name: 'Business Growth Advisors',
    contactPerson: 'Lisa Rodriguez',
    email: 'lisa@businessgrowth.com',
    phone: '(555) 345-6789',
    status: 'Active',
    tier: 'Silver',
    totalDeals: 45,
    totalVolume: '$950,000',
    monthlyVolume: '$95,000',
    commissionRate: '2.5%',
    ytdCommissions: '$23,750',
    avgDealSize: '$21,111',
    approvalRate: '71%',
    joinDate: '2023-01-10',
    lastActivity: '2024-01-14',
    performanceScore: 79
  },
  {
    id: 'ISO004',
    name: 'Enterprise Funding Group',
    contactPerson: 'David Kim',
    email: 'david@enterprisefunding.com',
    phone: '(555) 456-7890',
    status: 'Inactive',
    tier: 'Bronze',
    totalDeals: 23,
    totalVolume: '$480,000',
    monthlyVolume: '$15,000',
    commissionRate: '2.0%',
    ytdCommissions: '$9,600',
    avgDealSize: '$20,870',
    approvalRate: '65%',
    joinDate: '2023-06-15',
    lastActivity: '2023-12-28',
    performanceScore: 58
  },
];

export function ISOsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [tierFilter, setTierFilter] = useState('all');
  const [selectedISO, setSelectedISO] = useState<any>(null);
  const [addISODialog, setAddISODialog] = useState(false);

  const filteredISOs = isoData.filter(iso => {
    const matchesSearch = iso.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         iso.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         iso.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || statusFilter === 'all' || iso.status === statusFilter;
    const matchesTier = !tierFilter || tierFilter === 'all' || iso.tier === tierFilter;
    return matchesSearch && matchesStatus && matchesTier;
  });

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-lendeck-success/10 text-lendeck-success border-lendeck-success/20' : 'bg-lendeck-error/10 text-lendeck-error border-lendeck-error/20';
  };

  const getTierColor = (tier: string) => {
    const colors = {
      'Platinum': 'bg-lendeck-purple-accent/10 text-lendeck-purple-accent border-lendeck-purple-accent/20',
      'Gold': 'bg-lendeck-yellow/10 text-lendeck-yellow border-lendeck-yellow/20',
      'Silver': 'bg-lendeck-gray/10 text-lendeck-gray-dark border-lendeck-gray/20',
      'Bronze': 'bg-lendeck-orange/10 text-lendeck-orange border-lendeck-orange/20'
    };
    return colors[tier as keyof typeof colors] || 'bg-lendeck-gray/10 text-lendeck-gray-dark border-lendeck-gray/20';
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-lendeck-success';
    if (score >= 75) return 'text-lendeck-yellow';
    return 'text-lendeck-error';
  };

  const handleViewISO = (iso: any) => {
    setSelectedISO(iso);
  };

  return (
    <div className="space-y-6">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-blue/10 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-lendeck-blue" />
              </div>
              <div>
                <div className="text-xl">156</div>
                <div className="text-sm text-muted-foreground">Total ISOs</div>
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
                <div className="text-xl">142</div>
                <div className="text-sm text-muted-foreground">Active ISOs</div>
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
                <div className="text-xl">$7.8M</div>
                <div className="text-sm text-muted-foreground">Total Volume YTD</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-orange/10 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-lendeck-orange" />
              </div>
              <div>
                <div className="text-xl">$245K</div>
                <div className="text-sm text-muted-foreground">Commissions Paid</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ISOs List */}
      <Card>
        <div className="space-y-4 p-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">ISO Partners</h1>
              <p className="text-muted-foreground text-sm sm:text-base">Manage Independent Sales Organizations and their performance</p>
            </div>
            <Dialog open={addISODialog} onOpenChange={setAddISODialog}>
              <DialogTrigger asChild>
                <Button className="shrink-0">
                  <Plus className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Add ISO</span>
                  <span className="sm:hidden">Add</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New ISO</DialogTitle>
                  <DialogDescription>
                    Register a new Independent Sales Organization
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
                      <Label htmlFor="tier">Tier</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select tier" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Bronze">Bronze</SelectItem>
                          <SelectItem value="Silver">Silver</SelectItem>
                          <SelectItem value="Gold">Gold</SelectItem>
                          <SelectItem value="Platinum">Platinum</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="commissionRate">Commission Rate (%)</Label>
                      <Input type="number" placeholder="Enter commission rate" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea placeholder="Enter any additional notes..." />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setAddISODialog(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setAddISODialog(false)}>
                      Add ISO
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
                  placeholder="Search ISOs, contact persons, or IDs..."
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
              
              <Select value={tierFilter} onValueChange={setTierFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tiers</SelectItem>
                  <SelectItem value="Platinum">Platinum</SelectItem>
                  <SelectItem value="Gold">Gold</SelectItem>
                  <SelectItem value="Silver">Silver</SelectItem>
                  <SelectItem value="Bronze">Bronze</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ISO ID</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tier</TableHead>
                <TableHead>Commission</TableHead>
                <TableHead>Total Deals</TableHead>
                <TableHead>Monthly Volume</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredISOs.map((iso) => (
                <TableRow key={iso.id}>
                  <TableCell className="font-mono">{iso.id}</TableCell>
                  <TableCell>{iso.name}</TableCell>
                  <TableCell>{iso.contactPerson}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(iso.status)}>
                      {iso.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getTierColor(iso.tier)}>
                      {iso.tier}
                    </Badge>
                  </TableCell>
                  <TableCell>{iso.commissionRate}</TableCell>
                  <TableCell>{iso.totalDeals}</TableCell>
                  <TableCell>{iso.monthlyVolume}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewISO(iso)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>ISO Details - {iso.name}</DialogTitle>
                            <DialogDescription>
                              Comprehensive overview of {iso.name} performance and details
                            </DialogDescription>
                          </DialogHeader>
                          {selectedISO && (
                            <Tabs defaultValue="overview" className="w-full">
                              <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="performance">Performance</TabsTrigger>
                                <TabsTrigger value="commissions">Commissions</TabsTrigger>
                                <TabsTrigger value="history">History</TabsTrigger>
                              </TabsList>
                              
                              <TabsContent value="overview" className="space-y-4">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="mb-2">Company Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <div><strong>Company:</strong> {selectedISO.name}</div>
                                      <div><strong>Contact:</strong> {selectedISO.contactPerson}</div>
                                      <div><strong>Email:</strong> {selectedISO.email}</div>
                                      <div><strong>Phone:</strong> {selectedISO.phone}</div>
                                      <div><strong>Status:</strong> {selectedISO.status}</div>
                                      <div><strong>Tier:</strong> {selectedISO.tier}</div>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="mb-2">Key Metrics</h4>
                                    <div className="space-y-2 text-sm">
                                      <div><strong>Total Deals:</strong> {selectedISO.totalDeals}</div>
                                      <div><strong>Total Volume:</strong> {selectedISO.totalVolume}</div>
                                      <div><strong>Avg Deal Size:</strong> {selectedISO.avgDealSize}</div>
                                      <div><strong>Approval Rate:</strong> {selectedISO.approvalRate}</div>
                                      <div><strong>Performance Score:</strong> {selectedISO.performanceScore}</div>
                                      <div><strong>Join Date:</strong> {selectedISO.joinDate}</div>
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="performance" className="space-y-4">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="text-2xl">{selectedISO.monthlyVolume}</div>
                                      <div className="text-sm text-muted-foreground">Monthly Volume</div>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="text-2xl">{selectedISO.approvalRate}</div>
                                      <div className="text-sm text-muted-foreground">Approval Rate</div>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="text-2xl">{selectedISO.avgDealSize}</div>
                                      <div className="text-sm text-muted-foreground">Avg Deal Size</div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </TabsContent>

                              <TabsContent value="commissions" className="space-y-4">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="mb-2">Commission Structure</h4>
                                    <div className="space-y-2 text-sm">
                                      <div><strong>Commission Rate:</strong> {selectedISO.commissionRate}</div>
                                      <div><strong>YTD Commissions:</strong> {selectedISO.ytdCommissions}</div>
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="history" className="space-y-4">
                                <div>
                                  <h4 className="mb-2">Activity History</h4>
                                  <div className="space-y-2 text-sm">
                                    <div><strong>Last Activity:</strong> {selectedISO.lastActivity}</div>
                                    <div><strong>Join Date:</strong> {selectedISO.joinDate}</div>
                                  </div>
                                </div>
                              </TabsContent>
                            </Tabs>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <TableActionsMenu label="ISO Actions">
                        <TableActionItem 
                          icon={<Edit className="h-4 w-4" />} 
                          label="Edit ISO"
                          onClick={() => {}}
                        />
                        <TableActionItem 
                          icon={<Eye className="h-4 w-4" />} 
                          label="View Deals"
                          onClick={() => {}}
                        />
                        <TableActionItem 
                          icon={<FileText className="h-4 w-4" />} 
                          label="Commission Report"
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