import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Checkbox } from '../ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Separator } from '../ui/separator';
import { ScrollArea } from '../ui/scroll-area';
import { 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  RotateCcw, 
  FolderOpen, 
  Plus,
  Download,
  Calendar,
  DollarSign,
  Building2,
  FileText,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Banknote,
  TrendingUp,
  Clock
} from 'lucide-react';

// Mock data for ACH transactions
const mockTransactions = [
  {
    id: 'ACH-2024-001',
    companyName: 'TechCorp Solutions',
    dealId: 'DEAL-2024-156',
    type: 'Correlated Pull',
    amount: 25000,
    splitAmount: 23750,
    status: 'Completed' as const,
    date: '2024-01-15',
    accountDetails: '**** 1234',
    routingNumber: '021000021'
  },
  {
    id: 'ACH-2024-002',
    companyName: 'Global Manufacturing Inc',
    dealId: 'DEAL-2024-178',
    type: 'Manual Pull',
    amount: 50000,
    splitAmount: 47500,
    status: 'Pending' as const,
    date: '2024-01-14',
    accountDetails: '**** 5678',
    routingNumber: '021000021'
  },
  {
    id: 'ACH-2024-003',
    companyName: 'Retail Ventures LLC',
    dealId: 'DEAL-2024-134',
    type: 'Correlated Pull',
    amount: 75000,
    splitAmount: 71250,
    status: 'Failed' as const,
    date: '2024-01-13',
    accountDetails: '**** 9012',
    routingNumber: '021000021'
  }
];

// Mock data for disbursements
const mockDisbursements = [
  {
    id: 'DISB-2024-001',
    companyName: 'TechCorp Solutions',
    dealId: 'DEAL-2024-156',
    amount: 25000,
    splitAmount: 23750,
    date: '2024-01-15',
    status: 'Completed' as const
  },
  {
    id: 'DISB-2024-002',
    companyName: 'Manufacturing Co',
    dealId: 'DEAL-2024-145',
    amount: 40000,
    splitAmount: 38000,
    date: '2024-01-12',
    status: 'Completed' as const
  }
];

// Mock companies and deals for dropdowns
const mockCompanies = [
  { id: '1', name: 'TechCorp Solutions' },
  { id: '2', name: 'Global Manufacturing Inc' },
  { id: '3', name: 'Retail Ventures LLC' },
  { id: '4', name: 'Service Industries Ltd' }
];

const mockDeals = {
  '1': [
    { id: 'DEAL-2024-156', name: 'Equipment Financing - $25K' },
    { id: 'DEAL-2024-157', name: 'Working Capital - $15K' }
  ],
  '2': [
    { id: 'DEAL-2024-178', name: 'Expansion Loan - $50K' }
  ],
  '3': [
    { id: 'DEAL-2024-134', name: 'Inventory Financing - $75K' }
  ]
};

export function ACHManagementPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>([]);
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<typeof mockTransactions[0] | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('transactions');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedDeal, setSelectedDeal] = useState('');

  const filteredTransactions = mockTransactions.filter(transaction => {
    const matchesSearch = !searchTerm || 
      transaction.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.dealId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || transaction.status.toLowerCase() === statusFilter;
    const matchesType = typeFilter === 'all' || transaction.type.toLowerCase().includes(typeFilter.toLowerCase());
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleTransactionSelect = (transactionId: string, checked: boolean) => {
    if (checked) {
      setSelectedTransactions([...selectedTransactions, transactionId]);
    } else {
      setSelectedTransactions(selectedTransactions.filter(id => id !== transactionId));
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedTransactions(filteredTransactions.map(t => t.id));
    } else {
      setSelectedTransactions([]);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Completed</Badge>;
      case 'Pending':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Pending</Badge>;
      case 'Failed':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getAvailableDeals = () => {
    return selectedCompany ? (mockDeals[selectedCompany as keyof typeof mockDeals] || []) : [];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl">ACH Management & Payments</h1>
        <p className="text-muted-foreground">
          Manage Your ACH Transactions and Professional Service Fee Collections
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total Transactions</p>
                <p className="font-semibold">127</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total Volume</p>
                <p className="font-semibold">$2.4M</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-yellow-600" />
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="font-semibold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Banknote className="h-4 w-4 text-purple-600" />
              <div>
                <p className="text-sm text-muted-foreground">Split Earnings</p>
                <p className="font-semibold">$228K</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="transactions">ACH Transactions</TabsTrigger>
          <TabsTrigger value="manual-pull">Manual ACH Pull</TabsTrigger>
          <TabsTrigger value="disbursements">Disbursement History</TabsTrigger>
        </TabsList>

        {/* ACH Transactions Tab */}
        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  ACH Transactions
                </CardTitle>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by Deal ID, Company Name, Rep Name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full sm:w-80"
                    />
                  </div>
                  
                  <Button
                    variant="outline"
                    onClick={() => setIsFiltersExpanded(!isFiltersExpanded)}
                    className="flex items-center gap-2"
                  >
                    <Filter className="h-4 w-4" />
                    Filters
                    {isFiltersExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {isFiltersExpanded && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t">
                  <div>
                    <Label>Date Range</Label>
                    <Select defaultValue="30">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">Last 7 days</SelectItem>
                        <SelectItem value="30">Last 30 days</SelectItem>
                        <SelectItem value="90">Last 90 days</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Transaction Type</Label>
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="manual">Manual Pull</SelectItem>
                        <SelectItem value="correlated">Correlated Pull</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Status</Label>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Deal Size Range</Label>
                    <div className="flex items-center space-x-2">
                      <Input placeholder="Min" className="w-20" />
                      <span>-</span>
                      <Input placeholder="Max" className="w-20" />
                    </div>
                  </div>
                </div>
              )}
            </CardHeader>

            <CardContent>
              {selectedTransactions.length > 0 && (
                <div className="flex items-center space-x-2 mb-4 p-3 bg-muted rounded-lg">
                  <span className="text-sm">{selectedTransactions.length} transaction(s) selected</span>
                  <Button size="sm" variant="outline">
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Retry Selected
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    Export Selected
                  </Button>
                </div>
              )}

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox
                          checked={selectedTransactions.length === filteredTransactions.length}
                          onCheckedChange={handleSelectAll}
                        />
                      </TableHead>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Company Name</TableHead>
                      <TableHead>Deal ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Split Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTransactions.map((transaction) => (
                      <TableRow key={transaction.id} className="hover:bg-muted/50">
                        <TableCell>
                          <Checkbox
                            checked={selectedTransactions.includes(transaction.id)}
                            onCheckedChange={(checked) => 
                              handleTransactionSelect(transaction.id, checked as boolean)
                            }
                          />
                        </TableCell>
                        <TableCell className="cursor-pointer hover:text-primary" 
                                  onClick={() => {
                                    setSelectedTransaction(transaction);
                                    setIsDetailOpen(true);
                                  }}>
                          {transaction.id}
                        </TableCell>
                        <TableCell>{transaction.companyName}</TableCell>
                        <TableCell>{transaction.dealId}</TableCell>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell>${transaction.amount.toLocaleString()}</TableCell>
                        <TableCell>${transaction.splitAmount.toLocaleString()}</TableCell>
                        <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => {
                                setSelectedTransaction(transaction);
                                setIsDetailOpen(true);
                              }}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Edit className="h-4 w-4" />
                            </Button>
                            {transaction.status === 'Failed' && (
                              <Button size="sm" variant="ghost">
                                <RotateCcw className="h-4 w-4" />
                              </Button>
                            )}
                            <Button size="sm" variant="ghost">
                              <FolderOpen className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Manual ACH Pull Tab */}
        <TabsContent value="manual-pull" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Manual Pull Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Manual ACH Pull
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockCompanies.map((company) => (
                        <SelectItem key={company.id} value={company.id}>
                          {company.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="deal">Deal ID</Label>
                  <Select value={selectedDeal} onValueChange={setSelectedDeal} disabled={!selectedCompany}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select deal" />
                    </SelectTrigger>
                    <SelectContent>
                      {getAvailableDeals().map((deal) => (
                        <SelectItem key={deal.id} value={deal.id}>
                          {deal.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                  />
                </div>

                <div>
                  <Label htmlFor="split-amount">Split Amount (Auto-calculated)</Label>
                  <Input
                    id="split-amount"
                    type="number"
                    placeholder="Auto-calculated based on admin percentage"
                    disabled
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Calculated at 95% (admin-set percentage)
                  </p>
                </div>

                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Additional notes or comments"
                    rows={3}
                  />
                </div>

                <Button className="w-full">
                  Initiate Manual ACH Pull
                </Button>
              </CardContent>
            </Card>

            {/* Correlated Pull Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Correlated ACH Pull
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="company-corr">Company Name</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockCompanies.map((company) => (
                        <SelectItem key={company.id} value={company.id}>
                          {company.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="deal-corr">Deal ID</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select deal" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deal1">DEAL-2024-156 - Equipment Financing</SelectItem>
                      <SelectItem value="deal2">DEAL-2024-157 - Working Capital</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="account-details">Bank Account Details</Label>
                  <Input
                    id="account-details"
                    placeholder="Account number"
                  />
                </div>

                <div>
                  <Label htmlFor="routing">Routing Number</Label>
                  <Input
                    id="routing"
                    placeholder="Routing number"
                  />
                </div>

                <div>
                  <Label htmlFor="amount-corr">Amount</Label>
                  <Input
                    id="amount-corr"
                    type="number"
                    placeholder="Enter amount"
                  />
                </div>

                <div>
                  <Label htmlFor="split-amount-corr">Split Amount (Auto-calculated)</Label>
                  <Input
                    id="split-amount-corr"
                    type="number"
                    placeholder="Auto-calculated based on admin percentage"
                    disabled
                  />
                </div>

                <div>
                  <Label htmlFor="notes-corr">Notes</Label>
                  <Textarea
                    id="notes-corr"
                    placeholder="Additional notes or comments"
                    rows={3}
                  />
                </div>

                <Button className="w-full">
                  Initiate Correlated ACH Pull
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Disbursement History Tab */}
        <TabsContent value="disbursements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Disbursement History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Disbursement ID</TableHead>
                      <TableHead>Company Name</TableHead>
                      <TableHead>Deal ID</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Split Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockDisbursements.map((disbursement) => (
                      <TableRow key={disbursement.id}>
                        <TableCell>{disbursement.id}</TableCell>
                        <TableCell>{disbursement.companyName}</TableCell>
                        <TableCell>{disbursement.dealId}</TableCell>
                        <TableCell>${disbursement.amount.toLocaleString()}</TableCell>
                        <TableCell>${disbursement.splitAmount.toLocaleString()}</TableCell>
                        <TableCell>{disbursement.date}</TableCell>
                        <TableCell>{getStatusBadge(disbursement.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Button size="sm" variant="ghost">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <FolderOpen className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Transaction Detail Dialog */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Transaction Details - {selectedTransaction?.id}
            </DialogTitle>
          </DialogHeader>
          
          {selectedTransaction && (
            <div className="space-y-6">
              {/* Transaction Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Transaction Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Transaction ID:</span>
                      <span>{selectedTransaction.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company:</span>
                      <span>{selectedTransaction.companyName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deal ID:</span>
                      <span>{selectedTransaction.dealId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type:</span>
                      <span>{selectedTransaction.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount:</span>
                      <span>${selectedTransaction.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Split Amount:</span>
                      <span>${selectedTransaction.splitAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      {getStatusBadge(selectedTransaction.status)}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Bank Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Account:</span>
                      <span>{selectedTransaction.accountDetails}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Routing:</span>
                      <span>{selectedTransaction.routingNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span>{selectedTransaction.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <div className="flex-grow">
                        <p className="text-sm">Transaction initiated</p>
                        <p className="text-xs text-muted-foreground">Jan 15, 2024 at 2:30 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2" />
                      <div className="flex-grow">
                        <p className="text-sm">Bank processing started</p>
                        <p className="text-xs text-muted-foreground">Jan 15, 2024 at 3:15 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2" />
                      <div className="flex-grow">
                        <p className="text-sm">Transaction completed</p>
                        <p className="text-xs text-muted-foreground">Jan 16, 2024 at 9:00 AM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comments */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Comments & Notes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm">John Smith</span>
                        <span className="text-xs text-muted-foreground">Jan 15, 2024</span>
                      </div>
                      <p className="text-sm">Initial ACH pull setup for TechCorp deal completion.</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Add Comment</Label>
                    <Textarea placeholder="Enter your comment..." />
                    <Button size="sm">Add Comment</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Receipt
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Generate Report
                </Button>
                {selectedTransaction.status === 'Failed' && (
                  <Button variant="outline" className="flex items-center gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Retry Transaction
                  </Button>
                )}
                <Button variant="outline" className="flex items-center gap-2">
                  <Edit className="h-4 w-4" />
                  Edit Details
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}