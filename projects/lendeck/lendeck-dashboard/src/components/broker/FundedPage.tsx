import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Search, Eye, Download, DollarSign, TrendingUp, Calendar, FileText } from 'lucide-react';
import { Progress } from '../ui/progress';

const mockFundedDeals = [
  {
    id: 'F001',
    dealId: 'D001',
    company: 'Tech Solutions Inc',
    rep: 'John Smith',
    dealSize: '$150,000',
    fundedAmount: '$140,000',
    commissionFromLender: '$7,000',
    splitPercentage: '60%',
    commissionEarned: '$4,200',
    totalPayout: '$4,200',
    status: 'Active',
    fundedDate: '2024-01-20',
    lender: 'Capital Lending',
    paymentHistory: [
      { date: '2024-01-20', amount: '$4,200', type: 'Initial Commission', status: 'Paid' }
    ]
  },
  {
    id: 'F002',
    dealId: 'D002', 
    company: 'Green Energy Co',
    rep: 'Sarah Johnson',
    dealSize: '$200,000',
    fundedAmount: '$190,000',
    commissionFromLender: '$9,500',
    splitPercentage: '65%',
    commissionEarned: '$6,175',
    totalPayout: '$6,175',
    status: 'Active',
    fundedDate: '2024-01-18',
    lender: 'Business Finance Co',
    paymentHistory: [
      { date: '2024-01-18', amount: '$3,000', type: 'Initial Payment', status: 'Paid' },
      { date: '2024-01-25', amount: '$3,175', type: 'Final Payment', status: 'Paid' }
    ]
  },
  {
    id: 'F003',
    dealId: 'D003',
    company: 'Retail Plus LLC',
    rep: 'Mike Davis', 
    dealSize: '$75,000',
    fundedAmount: '$70,000',
    commissionFromLender: '$3,500',
    splitPercentage: '55%',
    commissionEarned: '$1,925',
    totalPayout: '$1,925',
    status: 'Closed',
    fundedDate: '2024-01-15',
    lender: 'Quick Capital',
    paymentHistory: [
      { date: '2024-01-15', amount: '$1,925', type: 'Full Commission', status: 'Paid' }
    ]
  }
];

export function FundedPage() {
  const [selectedDeal, setSelectedDeal] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const totalFunded = mockFundedDeals.reduce((sum, deal) => sum + parseFloat(deal.fundedAmount.replace(/[\$,]/g, '')), 0);
  const totalCommission = mockFundedDeals.reduce((sum, deal) => sum + parseFloat(deal.commissionEarned.replace(/[\$,]/g, '')), 0);

  return (
    <div className="space-y-6">
      {/* Header and Summary */}
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold">Funded Deals</h1>
          <p className="text-muted-foreground">Review Your Funded Deals and Earnings</p>
        </div>
        
        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-l-4 border-l-[#25A900]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Funded</CardTitle>
              <DollarSign className="h-4 w-4 text-[#25A900]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalFunded.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">{mockFundedDeals.length} deals</p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-[#4E0F60]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Commission</CardTitle>
              <TrendingUp className="h-4 w-4 text-[#4E0F60]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalCommission.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">After splits</p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-[#ED1E59]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Commission</CardTitle>
              <Calendar className="h-4 w-4 text-[#ED1E59]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${Math.round(totalCommission / mockFundedDeals.length).toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Per deal</p>
            </CardContent>
          </Card>
          
          <Card className="border-l-4 border-l-[#FF5F0C]">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-[#FF5F0C]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">Funding rate</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by Deal ID, Company Name, Rep Name..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Funded Deals Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Deal ID</TableHead>
                <TableHead>Company Name</TableHead>
                <TableHead>Rep Name</TableHead>
                <TableHead>Deal Size</TableHead>
                <TableHead>Funded Amount</TableHead>
                <TableHead>Commission from Lender</TableHead>
                <TableHead>Split %</TableHead>
                <TableHead>Commission Earned</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockFundedDeals.map((deal) => (
                <TableRow key={deal.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium">{deal.dealId}</TableCell>
                  <TableCell>{deal.company}</TableCell>
                  <TableCell>{deal.rep}</TableCell>
                  <TableCell>{deal.dealSize}</TableCell>
                  <TableCell className="font-medium text-[#25A900]">{deal.fundedAmount}</TableCell>
                  <TableCell>{deal.commissionFromLender}</TableCell>
                  <TableCell>{deal.splitPercentage}</TableCell>
                  <TableCell className="font-medium text-[#4E0F60]">{deal.commissionEarned}</TableCell>
                  <TableCell>
                    <Badge variant={deal.status === 'Active' ? 'default' : 'secondary'}>
                      {deal.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedDeal(deal)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Deal Detail Dialog */}
      <Dialog open={!!selectedDeal} onOpenChange={() => setSelectedDeal(null)}>
        <DialogContent className="max-w-5xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Funded Deal Details - {selectedDeal?.dealId}</DialogTitle>
            <DialogDescription>{selectedDeal?.company}</DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="commission">Commission Details</TabsTrigger>
              <TabsTrigger value="payments">Payment History</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Deal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deal ID:</span>
                      <span className="font-medium">{selectedDeal?.dealId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company:</span>
                      <span className="font-medium">{selectedDeal?.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lender:</span>
                      <span className="font-medium">{selectedDeal?.lender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Funded Date:</span>
                      <span className="font-medium">{selectedDeal?.fundedDate}</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Funding Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Requested:</span>
                      <span className="font-medium">{selectedDeal?.dealSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Funded:</span>
                      <span className="font-medium text-[#25A900]">{selectedDeal?.fundedAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Funding %:</span>
                      <span className="font-medium">
                        {Math.round((parseFloat(selectedDeal?.fundedAmount?.replace(/[\$,]/g, '') || '0') / 
                                   parseFloat(selectedDeal?.dealSize?.replace(/[\$,]/g, '') || '1')) * 100)}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Loan Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-[#F9F8FD] rounded-lg">
                      <div className="text-xl font-bold">8.5%</div>
                      <p className="text-sm text-muted-foreground">Interest Rate</p>
                    </div>
                    <div className="text-center p-4 bg-[#F9F8FD] rounded-lg">
                      <div className="text-xl font-bold">24</div>
                      <p className="text-sm text-muted-foreground">Term (Months)</p>
                    </div>
                    <div className="text-center p-4 bg-[#F9F8FD] rounded-lg">
                      <div className="text-xl font-bold">Daily</div>
                      <p className="text-sm text-muted-foreground">Payment Frequency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="commission" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Commission Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-[#F9F8FD] rounded-lg">
                      <span>Total Commission from Lender</span>
                      <span className="font-bold text-lg">{selectedDeal?.commissionFromLender}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <span>Split with Brokering Company</span>
                      <span className="font-medium">{selectedDeal?.splitPercentage}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-[#4E0F60] text-white rounded-lg">
                      <span>Your Commission Earned</span>
                      <span className="font-bold text-lg">{selectedDeal?.commissionEarned}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Commission Split Visualization</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Your Share ({selectedDeal?.splitPercentage})</span>
                        <span>{selectedDeal?.commissionEarned}</span>
                      </div>
                      <Progress value={parseInt(selectedDeal?.splitPercentage?.replace('%', '') || '0')} className="h-3" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Company Share</span>
                        <span>
                          ${(parseFloat(selectedDeal?.commissionFromLender?.replace(/[\$,]/g, '') || '0') - 
                             parseFloat(selectedDeal?.commissionEarned?.replace(/[\$,]/g, '') || '0')).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="payments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payment History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {selectedDeal?.paymentHistory?.map((payment: any, index: number) => (
                      <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{payment.type}</p>
                          <p className="text-sm text-muted-foreground">{payment.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-[#25A900]">{payment.amount}</p>
                          <Badge className="bg-[#25A900] text-white">
                            {payment.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-[#F9F8FD] rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Total Payout Received</span>
                      <span className="font-bold text-lg text-[#25A900]">{selectedDeal?.totalPayout}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Deal Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: 'Funding Agreement', type: 'PDF', size: '245 KB', date: '2024-01-20' },
                      { name: 'Commission Statement', type: 'PDF', size: '123 KB', date: '2024-01-20' },
                      { name: 'Merchant Application', type: 'PDF', size: '789 KB', date: '2024-01-10' },
                      { name: 'Bank Statements', type: 'ZIP', size: '2.1 MB', date: '2024-01-08' },
                      { name: 'UCC Filing', type: 'PDF', size: '67 KB', date: '2024-01-22' },
                    ].map((doc, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-[#4E0F60]" />
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-sm text-muted-foreground">{doc.type} • {doc.size} • {doc.date}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex gap-2">
                    <Button variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download All
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}