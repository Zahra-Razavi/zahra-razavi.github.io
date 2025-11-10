import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Progress } from '../ui/progress';
import { Search, Eye, Edit, FileText, Mail, UserX, CreditCard, TrendingUp, DollarSign, Clock, Calendar } from 'lucide-react';
import { TableActionsMenu, TableActionItem } from '../ui/table-actions-menu';

const advancesData = [
  {
    id: 'CA001',
    merchantId: 'M001',
    merchantName: 'ABC Electronics',
    advanceAmount: '$250,000',
    paybackAmount: '$312,500',
    factorRate: 1.25,
    term: '12 months',
    dailyPayment: '$2,100',
    remainingBalance: '$125,000',
    startDate: '2023-06-15',
    expectedEndDate: '2024-06-15',
    status: 'Active',
    paymentStatus: 'Current',
    percentComplete: 60,
    daysRemaining: 142,
    lastPayment: '2024-01-16',
    totalPaid: '$187,500',
    avgDailyCollection: '$2,100'
  },
  {
    id: 'CA002',
    merchantId: 'M002',
    merchantName: 'Metro Restaurant Group',
    advanceAmount: '$180,000',
    paybackAmount: '$224,400',
    factorRate: 1.24,
    term: '10 months',
    dailyPayment: '$1,800',
    remainingBalance: '$45,000',
    startDate: '2023-08-10',
    expectedEndDate: '2024-06-10',
    status: 'Active',
    paymentStatus: 'Current',
    percentComplete: 80,
    daysRemaining: 95,
    lastPayment: '2024-01-16',
    totalPaid: '$179,400',
    avgDailyCollection: '$1,800'
  },
  {
    id: 'CA003',
    merchantId: 'M003',
    merchantName: 'Tech Solutions Inc',
    advanceAmount: '$320,000',
    paybackAmount: '$409,600',
    factorRate: 1.28,
    term: '15 months',
    dailyPayment: '$1,800',
    remainingBalance: '$180,000',
    startDate: '2023-09-01',
    expectedEndDate: '2024-12-01',
    status: 'Active',
    paymentStatus: 'Current',
    percentComplete: 56,
    daysRemaining: 289,
    lastPayment: '2024-01-15',
    totalPaid: '$229,600',
    avgDailyCollection: '$1,750'
  },
  {
    id: 'CA004',
    merchantId: 'M004',
    merchantName: 'Downtown Auto Repair',
    advanceAmount: '$150,000',
    paybackAmount: '$202,500',
    factorRate: 1.35,
    term: '8 months',
    dailyPayment: '$1,200',
    remainingBalance: '$95,000',
    startDate: '2023-07-20',
    expectedEndDate: '2024-03-20',
    status: 'Active',
    paymentStatus: 'Past Due',
    percentComplete: 53,
    daysRemaining: 45,
    lastPayment: '2024-01-10',
    totalPaid: '$107,500',
    avgDailyCollection: '$980'
  },
];

export function AdvancesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [paymentFilter, setPaymentFilter] = useState('all');
  const [selectedAdvance, setSelectedAdvance] = useState<any>(null);

  const filteredAdvances = advancesData.filter(advance => {
    const matchesSearch = advance.merchantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         advance.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         advance.merchantId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || statusFilter === 'all' || advance.status === statusFilter;
    const matchesPayment = !paymentFilter || paymentFilter === 'all' || advance.paymentStatus === paymentFilter;
    return matchesSearch && matchesStatus && matchesPayment;
  });

  const getStatusColor = (status: string) => {
    const colors = {
      'Active': 'bg-lendeck-success/10 text-lendeck-success border-lendeck-success/20',
      'Completed': 'bg-lendeck-blue/10 text-lendeck-blue border-lendeck-blue/20',
      'Default': 'bg-lendeck-error/10 text-lendeck-error border-lendeck-error/20',
      'Suspended': 'bg-lendeck-gray/10 text-lendeck-gray-dark border-lendeck-gray/20'
    };
    return colors[status as keyof typeof colors] || 'bg-lendeck-gray/10 text-lendeck-gray-dark border-lendeck-gray/20';
  };

  const getPaymentStatusColor = (status: string) => {
    const colors = {
      'Current': 'bg-lendeck-success/10 text-lendeck-success border-lendeck-success/20',
      'Past Due': 'bg-lendeck-error/10 text-lendeck-error border-lendeck-error/20',
      'Late': 'bg-lendeck-yellow/10 text-lendeck-yellow border-lendeck-yellow/20'
    };
    return colors[status as keyof typeof colors] || 'bg-lendeck-gray/10 text-lendeck-gray-dark border-lendeck-gray/20';
  };

  const handleViewAdvance = (advance: any) => {
    setSelectedAdvance(advance);
  };

  return (
    <div className="space-y-6">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-blue/10 rounded-lg flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-lendeck-blue" />
              </div>
              <div>
                <div className="text-xl">127</div>
                <div className="text-sm text-muted-foreground">Active Advances</div>
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
                <div className="text-xl">115</div>
                <div className="text-sm text-muted-foreground">Current Payments</div>
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
                <div className="text-xl">$8.2M</div>
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
                <div className="text-xl">12</div>
                <div className="text-sm text-muted-foreground">Past Due</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advances List */}
      <Card>
        <div className="space-y-4 p-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Cash Advances</h1>
            <p className="text-muted-foreground text-sm sm:text-base">Monitor active cash advances and payment performance</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 min-w-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search advances, merchant names, or IDs..."
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
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Default">Default</SelectItem>
                  <SelectItem value="Suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={paymentFilter} onValueChange={setPaymentFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Payment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Payments</SelectItem>
                  <SelectItem value="Current">Current</SelectItem>
                  <SelectItem value="Past Due">Past Due</SelectItem>
                  <SelectItem value="Late">Late</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Advance ID</TableHead>
                <TableHead>Merchant</TableHead>
                <TableHead>Advance Amount</TableHead>
                <TableHead>Remaining Balance</TableHead>
                <TableHead>Daily Payment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Days Remaining</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAdvances.map((advance) => (
                <TableRow key={advance.id}>
                  <TableCell className="font-mono">{advance.id}</TableCell>
                  <TableCell>{advance.merchantName}</TableCell>
                  <TableCell>{advance.advanceAmount}</TableCell>
                  <TableCell>{advance.remainingBalance}</TableCell>
                  <TableCell>{advance.dailyPayment}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(advance.status)}>
                      {advance.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getPaymentStatusColor(advance.paymentStatus)}>
                      {advance.paymentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 min-w-0 w-32">
                      <Progress value={advance.percentComplete} className="flex-1 h-2" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{advance.percentComplete}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{advance.daysRemaining}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewAdvance(advance)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>Advance Details - {advance.id}</DialogTitle>
                          <DialogDescription>
                            Comprehensive overview of cash advance for {advance.merchantName}
                          </DialogDescription>
                        </DialogHeader>
                        {selectedAdvance && (
                          <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid w-full grid-cols-4">
                              <TabsTrigger value="overview">Overview</TabsTrigger>
                              <TabsTrigger value="payments">Payments</TabsTrigger>
                              <TabsTrigger value="performance">Performance</TabsTrigger>
                              <TabsTrigger value="documents">Documents</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="overview" className="space-y-4">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="mb-2">Advance Information</h4>
                                  <div className="space-y-2 text-sm">
                                    <div><strong>Advance ID:</strong> {selectedAdvance.id}</div>
                                    <div><strong>Merchant:</strong> {selectedAdvance.merchantName}</div>
                                    <div><strong>Advance Amount:</strong> {selectedAdvance.advanceAmount}</div>
                                    <div><strong>Payback Amount:</strong> {selectedAdvance.paybackAmount}</div>
                                    <div><strong>Factor Rate:</strong> {selectedAdvance.factorRate}</div>
                                    <div><strong>Term:</strong> {selectedAdvance.term}</div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="mb-2">Payment Details</h4>
                                  <div className="space-y-2 text-sm">
                                    <div><strong>Daily Payment:</strong> {selectedAdvance.dailyPayment}</div>
                                    <div><strong>Remaining Balance:</strong> {selectedAdvance.remainingBalance}</div>
                                    <div><strong>Total Paid:</strong> {selectedAdvance.totalPaid}</div>
                                    <div><strong>Last Payment:</strong> {selectedAdvance.lastPayment}</div>
                                    <div><strong>Payment Status:</strong> {selectedAdvance.paymentStatus}</div>
                                    <div><strong>Progress:</strong> {selectedAdvance.percentComplete}%</div>
                                  </div>
                                </div>
                              </div>
                            </TabsContent>

                            <TabsContent value="payments" className="space-y-4">
                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <Card>
                                  <CardContent className="p-4">
                                    <div className="text-2xl">{selectedAdvance.totalPaid}</div>
                                    <div className="text-sm text-muted-foreground">Total Paid</div>
                                  </CardContent>
                                </Card>
                                <Card>
                                  <CardContent className="p-4">
                                    <div className="text-2xl">{selectedAdvance.avgDailyCollection}</div>
                                    <div className="text-sm text-muted-foreground">Avg Daily Collection</div>
                                  </CardContent>
                                </Card>
                                <Card>
                                  <CardContent className="p-4">
                                    <div className="text-2xl">{selectedAdvance.lastPayment}</div>
                                    <div className="text-sm text-muted-foreground">Last Payment Date</div>
                                  </CardContent>
                                </Card>
                              </div>
                            </TabsContent>

                            <TabsContent value="performance" className="space-y-4">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="mb-2">Performance Metrics</h4>
                                  <div className="space-y-2 text-sm">
                                    <div><strong>Completion:</strong> {selectedAdvance.percentComplete}%</div>
                                    <div><strong>Days Remaining:</strong> {selectedAdvance.daysRemaining}</div>
                                    <div><strong>Expected End Date:</strong> {selectedAdvance.expectedEndDate}</div>
                                    <div><strong>Start Date:</strong> {selectedAdvance.startDate}</div>
                                  </div>
                                </div>
                                <div>
                                  <h4 className="mb-2">Progress</h4>
                                  <div className="space-y-3">
                                    <div>
                                      <div className="flex justify-between text-sm mb-1">
                                        <span>Completion Progress</span>
                                        <span>{selectedAdvance.percentComplete}%</span>
                                      </div>
                                      <Progress value={selectedAdvance.percentComplete} className="h-2" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </TabsContent>

                            <TabsContent value="documents" className="space-y-4">
                              <div>
                                <h4 className="mb-2">Advance Documents</h4>
                                <p className="text-sm text-muted-foreground">Advance contracts and payment records would be displayed here.</p>
                              </div>
                            </TabsContent>
                          </Tabs>
                        )}
                      </DialogContent>
                    </Dialog>
                    
                    <TableActionsMenu label="Advance Actions">
                      <TableActionItem 
                        icon={<Edit className="h-4 w-4" />} 
                        label="Edit Advance"
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
                        label="Suspend Advance"
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