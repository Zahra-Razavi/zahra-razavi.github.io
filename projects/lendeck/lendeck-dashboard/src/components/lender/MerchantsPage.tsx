import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Search, Eye, Plus, Edit, FileText, Mail, UserX, Building2, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { TableActionsMenu, TableActionItem } from '../ui/table-actions-menu';

const merchantData = [
  {
    id: 'M001',
    dba: 'ABC Electronics',
    legalName: 'ABC Electronics LLC',
    industry: 'Electronics Retail',
    status: 'Active',
    totalAdvances: 3,
    totalAmount: '$450,000',
    currentBalance: '$125,000',
    paymentStatus: 'Current',
    avgDailyPayment: '$2,100',
    factorRate: 1.25,
    lastPayment: '2024-01-16',
    joinDate: '2022-05-15',
    creditScore: 720,
    riskRating: 'Low'
  },
  {
    id: 'M002',
    dba: 'Metro Restaurant Group',
    legalName: 'Metro Restaurant Group Inc',
    industry: 'Food Service',
    status: 'Active',
    totalAdvances: 5,
    totalAmount: '$680,000',
    currentBalance: '$85,000',
    paymentStatus: 'Current',
    avgDailyPayment: '$3,200',
    factorRate: 1.22,
    lastPayment: '2024-01-16',
    joinDate: '2021-11-20',
    creditScore: 745,
    riskRating: 'Low'
  },
  {
    id: 'M003',
    dba: 'Tech Solutions Inc',
    legalName: 'Tech Solutions Incorporated',
    industry: 'Technology Services',
    status: 'Active',
    totalAdvances: 2,
    totalAmount: '$320,000',
    currentBalance: '$180,000',
    paymentStatus: 'Current',
    avgDailyPayment: '$1,800',
    factorRate: 1.28,
    lastPayment: '2024-01-15',
    joinDate: '2023-02-10',
    creditScore: 685,
    riskRating: 'Medium'
  },
  {
    id: 'M004',
    dba: 'Downtown Auto Repair',
    legalName: 'Downtown Automotive Services LLC',
    industry: 'Automotive Services',
    status: 'Past Due',
    totalAdvances: 4,
    totalAmount: '$290,000',
    currentBalance: '$95,000',
    paymentStatus: 'Past Due',
    avgDailyPayment: '$1,200',
    factorRate: 1.35,
    lastPayment: '2024-01-10',
    joinDate: '2022-08-30',
    creditScore: 650,
    riskRating: 'High'
  },
];

export function MerchantsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [selectedMerchant, setSelectedMerchant] = useState<any>(null);

  const filteredMerchants = merchantData.filter(merchant => {
    const matchesSearch = merchant.dba.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         merchant.legalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         merchant.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         merchant.industry.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || statusFilter === 'all' || merchant.status === statusFilter;
    const matchesIndustry = !industryFilter || industryFilter === 'all' || merchant.industry === industryFilter;
    return matchesSearch && matchesStatus && matchesIndustry;
  });

  const getStatusColor = (status: string) => {
    const colors = {
      'Active': 'bg-lendeck-success/10 text-lendeck-success border-lendeck-success/20',
      'Past Due': 'bg-lendeck-error/10 text-lendeck-error border-lendeck-error/20',
      'Paid Off': 'bg-lendeck-blue/10 text-lendeck-blue border-lendeck-blue/20',
      'Default': 'bg-lendeck-gray/10 text-lendeck-gray-dark border-lendeck-gray/20'
    };
    return colors[status as keyof typeof colors] || 'bg-lendeck-gray/10 text-lendeck-gray-dark border-lendeck-gray/20';
  };

  const getRiskColor = (risk: string) => {
    const colors = {
      'Low': 'bg-lendeck-success/10 text-lendeck-success border-lendeck-success/20',
      'Medium': 'bg-lendeck-yellow/10 text-lendeck-yellow border-lendeck-yellow/20',
      'High': 'bg-lendeck-error/10 text-lendeck-error border-lendeck-error/20'
    };
    return colors[risk as keyof typeof colors] || 'bg-lendeck-gray/10 text-lendeck-gray-dark border-lendeck-gray/20';
  };

  const handleViewMerchant = (merchant: any) => {
    setSelectedMerchant(merchant);
  };

  const industries = [...new Set(merchantData.map(m => m.industry))];

  return (
    <div className="space-y-6">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-blue/10 rounded-lg flex items-center justify-center">
                <Building2 className="h-5 w-5 text-lendeck-blue" />
              </div>
              <div>
                <div className="text-xl">247</div>
                <div className="text-sm text-muted-foreground">Total Merchants</div>
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
                <div className="text-xl">232</div>
                <div className="text-sm text-muted-foreground">Active Accounts</div>
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
                <div className="text-xl">$12.4M</div>
                <div className="text-sm text-muted-foreground">Outstanding Balance</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-orange/10 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-lendeck-orange" />
              </div>
              <div>
                <div className="text-xl">15</div>
                <div className="text-sm text-muted-foreground">Past Due</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Merchants List */}
      <Card>
        <div className="space-y-4 p-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Merchant Accounts</h1>
            <p className="text-muted-foreground text-sm sm:text-base">Manage merchant accounts and monitor payment performance</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 min-w-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search merchants, DBA, legal name, or industry..."
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
                  <SelectItem value="Past Due">Past Due</SelectItem>
                  <SelectItem value="Paid Off">Paid Off</SelectItem>
                  <SelectItem value="Default">Default</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Industries</SelectItem>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Merchant ID</TableHead>
                <TableHead>DBA</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Risk Rating</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Current Balance</TableHead>
                <TableHead>Daily Payment</TableHead>
                <TableHead>Last Payment</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMerchants.map((merchant) => (
                <TableRow key={merchant.id}>
                  <TableCell className="font-mono">{merchant.id}</TableCell>
                  <TableCell>{merchant.dba}</TableCell>
                  <TableCell>{merchant.industry}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(merchant.status)}>
                      {merchant.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getRiskColor(merchant.riskRating)}>
                      {merchant.riskRating}
                    </Badge>
                  </TableCell>
                  <TableCell>{merchant.totalAmount}</TableCell>
                  <TableCell>{merchant.currentBalance}</TableCell>
                  <TableCell>{merchant.avgDailyPayment}</TableCell>
                  <TableCell>{merchant.lastPayment}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewMerchant(merchant)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>Merchant Details - {merchant.dba}</DialogTitle>
                          <DialogDescription>
                            Comprehensive overview of {merchant.dba} account and payment history
                          </DialogDescription>
                        </DialogHeader>
                        {selectedMerchant && (
                          <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid w-full grid-cols-4">
                              <TabsTrigger value="overview">Overview</TabsTrigger>
                              <TabsTrigger value="payments">Payments</TabsTrigger>
                              <TabsTrigger value="advances">Advances</TabsTrigger>
                              <TabsTrigger value="documents">Documents</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="overview" className="space-y-4">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="mb-2">Business Information</h4>
                                  <div className="space-y-2 text-sm">
                                    <div><strong>DBA:</strong> {selectedMerchant.dba}</div>
                                    <div><strong>Legal Name:</strong> {selectedMerchant.legalName}</div>
                                    <div><strong>Industry:</strong> {selectedMerchant.industry}</div>
                                    <div><strong>Status:</strong> {selectedMerchant.status}</div>
                                    <div><strong>Join Date:</strong> {selectedMerchant.joinDate}</div>
                                    <div><strong>Credit Score:</strong> {selectedMerchant.creditScore}</div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="mb-2">Financial Overview</h4>
                                  <div className="space-y-2 text-sm">
                                    <div><strong>Total Advances:</strong> {selectedMerchant.totalAdvances}</div>
                                    <div><strong>Total Amount:</strong> {selectedMerchant.totalAmount}</div>
                                    <div><strong>Current Balance:</strong> {selectedMerchant.currentBalance}</div>
                                    <div><strong>Factor Rate:</strong> {selectedMerchant.factorRate}</div>
                                    <div><strong>Risk Rating:</strong> {selectedMerchant.riskRating}</div>
                                    <div><strong>Payment Status:</strong> {selectedMerchant.paymentStatus}</div>
                                  </div>
                                </div>
                              </div>
                            </TabsContent>

                            <TabsContent value="payments" className="space-y-4">
                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <Card>
                                  <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                      <div className="h-10 w-10 bg-lendeck-success/10 rounded-lg flex items-center justify-center">
                                        <DollarSign className="h-5 w-5 text-lendeck-success" />
                                      </div>
                                      <div>
                                        <div className="text-xl">{selectedMerchant.avgDailyPayment}</div>
                                        <div className="text-sm text-muted-foreground">Avg Daily Payment</div>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                                <Card>
                                  <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                      <div className="h-10 w-10 bg-lendeck-blue/10 rounded-lg flex items-center justify-center">
                                        <Calendar className="h-5 w-5 text-lendeck-blue" />
                                      </div>
                                      <div>
                                        <div className="text-xl">{selectedMerchant.lastPayment}</div>
                                        <div className="text-sm text-muted-foreground">Last Payment</div>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                                <Card>
                                  <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                      <div className="h-10 w-10 bg-lendeck-orange/10 rounded-lg flex items-center justify-center">
                                        <CheckCircle className="h-5 w-5 text-lendeck-orange" />
                                      </div>
                                      <div>
                                        <div className="text-xl">{selectedMerchant.paymentStatus}</div>
                                        <div className="text-sm text-muted-foreground">Payment Status</div>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </div>
                            </TabsContent>

                            <TabsContent value="advances" className="space-y-4">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="mb-2">Advance History</h4>
                                  <div className="space-y-2 text-sm">
                                    <div><strong>Total Advances:</strong> {selectedMerchant.totalAdvances}</div>
                                    <div><strong>Total Amount:</strong> {selectedMerchant.totalAmount}</div>
                                    <div><strong>Current Balance:</strong> {selectedMerchant.currentBalance}</div>
                                    <div><strong>Factor Rate:</strong> {selectedMerchant.factorRate}</div>
                                  </div>
                                </div>
                              </div>
                            </TabsContent>

                            <TabsContent value="documents" className="space-y-4">
                              <div>
                                <h4 className="mb-2">Document Management</h4>
                                <p className="text-sm text-muted-foreground">Merchant documents and contracts would be displayed here.</p>
                              </div>
                            </TabsContent>
                          </Tabs>
                        )}
                      </DialogContent>
                    </Dialog>
                    
                    <TableActionsMenu label="Merchant Actions">
                      <TableActionItem 
                        icon={<Edit className="h-4 w-4" />} 
                        label="Edit Merchant"
                        onClick={() => {}}
                      />
                      <TableActionItem 
                        icon={<Eye className="h-4 w-4" />} 
                        label="View Payments"
                        onClick={() => {}}
                      />
                      <TableActionItem 
                        icon={<FileText className="h-4 w-4" />} 
                        label="Payment Report"
                        onClick={() => {}}
                      />
                      <TableActionItem 
                        icon={<Mail className="h-4 w-4" />} 
                        label="Send Notice"
                        onClick={() => {}}
                      />
                      <TableActionItem 
                        icon={<UserX className="h-4 w-4" />} 
                        label="Suspend Account"
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