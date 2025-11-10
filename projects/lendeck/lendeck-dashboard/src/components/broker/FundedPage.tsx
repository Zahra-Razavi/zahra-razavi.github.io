import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Search, Eye, Download, DollarSign, TrendingUp, Calendar, FileText } from 'lucide-react';
import { TableActionsMenu, TableActionItem } from '../ui/table-actions-menu';
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
    dealSize: '$100,000',
    fundedAmount: '$95,000',
    commissionFromLender: '$4,750',
    splitPercentage: '55%',
    commissionEarned: '$2,613',
    totalPayout: '$2,613',
    status: 'Inactive',
    fundedDate: '2024-01-15',
    lender: 'Quick Capital',
    paymentHistory: [
      { date: '2024-01-15', amount: '$2,613', type: 'Full Commission', status: 'Paid' }
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
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-success/10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-lendeck-success" />
              </div>
              <div>
                <div className="text-xl">${totalFunded.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Funded</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-lendeck-primary" />
              </div>
              <div>
                <div className="text-xl">${totalCommission.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Total Commission</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-pink/10 rounded-lg flex items-center justify-center">
                <Calendar className="h-5 w-5 text-lendeck-pink" />
              </div>
              <div>
                <div className="text-xl">${Math.round(totalCommission / mockFundedDeals.length).toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Average Commission</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-orange/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-lendeck-orange" />
              </div>
              <div>
                <div className="text-xl">68%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Funded Deals Table */}
      <Card>
        <CardContent className="p-0">
          {/* Header and Summary */}
          <div className="space-y-4 p-6">
            <div>
              <h1 className="text-2xl font-bold">Funded Deals List</h1>
              <p className="text-muted-foreground">Review Your Funded Deals and Earnings</p>
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
          </div>
          
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
                    <TableActionsMenu>
                      <TableActionItem
                        href={`/broker/funded/${deal.id}`}
                        icon={<Eye className="h-4 w-4" />}
                        label="View Details"
                      />
                      <TableActionItem
                        onClick={() => console.log('Download report', deal.id)}
                        icon={<Download className="h-4 w-4" />}
                        label="Download Report"
                      />
                    </TableActionsMenu>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Deal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deal ID:</span>
                      <span className="font-medium">{selectedDeal?.dealId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company:</span>
                      <span className="font-medium">{selectedDeal?.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rep:</span>
                      <span className="font-medium">{selectedDeal?.rep}</span>
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
                    <CardTitle>Financial Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deal Size:</span>
                      <span className="font-medium">{selectedDeal?.dealSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Funded Amount:</span>
                      <span className="font-medium text-[#25A900]">{selectedDeal?.fundedAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Commission from Lender:</span>
                      <span className="font-medium">{selectedDeal?.commissionFromLender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Split Percentage:</span>
                      <span className="font-medium">{selectedDeal?.splitPercentage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Commission Earned:</span>
                      <span className="font-medium text-[#4E0F60]">{selectedDeal?.commissionEarned}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="commission" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Commission Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Base Commission:</span>
                      <span>{selectedDeal?.commissionFromLender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Split Percentage:</span>
                      <span>{selectedDeal?.splitPercentage}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Your Commission:</span>
                      <span className="text-[#4E0F60]">{selectedDeal?.commissionEarned}</span>
                    </div>
                  </div>
                  <Progress value={parseInt(selectedDeal?.splitPercentage || '0')} className="w-full" />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="payments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Payment History</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedDeal?.paymentHistory?.map((payment: any, index: number) => (
                        <TableRow key={index}>
                          <TableCell>{payment.date}</TableCell>
                          <TableCell className="font-medium">{payment.amount}</TableCell>
                          <TableCell>{payment.type}</TableCell>
                          <TableCell>
                            <Badge variant={payment.status === 'Paid' ? 'default' : 'secondary'}>
                              {payment.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Related Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Commission Agreement</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>Funding Documentation</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
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