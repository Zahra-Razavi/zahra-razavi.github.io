import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { ResponsiveTable } from '../ui/responsive-table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { Search, Eye, Calculator, MessageSquare, Calendar, ExternalLink, FileText, Shield, ThumbsUp, ThumbsDown, MoreHorizontal, Clock } from 'lucide-react';
import { TableActionsMenu, TableActionItem } from '../ui/table-actions-menu';

const underwritingData = [
  {
    id: 'UW001',
    dealId: 'D001',
    brokerName: 'John Smith',
    companyName: 'ABC Electronics',
    dealSize: '$250,000',
    underwriter: 'John Smith',
    status: 'Pending',
    riskScore: 78,
    creditScore: 720,
    submissionDate: '2024-01-15',
    industry: 'Electronics',
    timeInBusiness: '5 years',
    annualRevenue: '$2.5M',
    requestedUse: 'Inventory Purchase',
    documentsComplete: 85,
    priority: 'Medium'
  },
  {
    id: 'UW002',
    dealId: 'D002',
    brokerName: 'Sarah Johnson',
    companyName: 'Metro Restaurant',
    dealSize: '$180,000',
    underwriter: 'Emily Davis',
    status: 'Under Review',
    riskScore: 82,
    creditScore: 695,
    submissionDate: '2024-01-14',
    industry: 'Food Service',
    timeInBusiness: '3 years',
    annualRevenue: '$1.8M',
    requestedUse: 'Equipment Purchase',
    documentsComplete: 92,
    priority: 'High'
  },
  {
    id: 'UW003',
    dealId: 'D003',
    brokerName: 'Mike Wilson',
    companyName: 'Tech Solutions Inc',
    dealSize: '$320,000',
    underwriter: 'Michael Brown',
    status: 'Approved',
    riskScore: 85,
    creditScore: 740,
    submissionDate: '2024-01-13',
    industry: 'Technology',
    timeInBusiness: '7 years',
    annualRevenue: '$4.2M',
    requestedUse: 'Working Capital',
    documentsComplete: 100,
    priority: 'Medium'
  },
  {
    id: 'UW004',
    dealId: 'D004',
    brokerName: 'Lisa Chen',
    companyName: 'Downtown Auto',
    dealSize: '$150,000',
    underwriter: 'Sarah Wilson',
    status: 'Rejected',
    riskScore: 45,
    creditScore: 580,
    submissionDate: '2024-01-12',
    industry: 'Automotive',
    timeInBusiness: '2 years',
    annualRevenue: '$900K',
    requestedUse: 'Debt Consolidation',
    documentsComplete: 65,
    priority: 'Low'
  },
];

export function UnderwritingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [underwriterFilter, setUnderwriterFilter] = useState('all');
  const [selectedDeal, setSelectedDeal] = useState<any>(null);
  const [requestInfoDialog, setRequestInfoDialog] = useState(false);
  const [sendLinksDialog, setSendLinksDialog] = useState(false);

  const filteredDeals = underwritingData.filter(deal => {
    const matchesSearch = deal.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deal.brokerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deal.dealId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || statusFilter === 'all' || deal.status === statusFilter;
    const matchesUnderwriter = !underwriterFilter || underwriterFilter === 'all' || deal.underwriter === underwriterFilter;
    return matchesSearch && matchesStatus && matchesUnderwriter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'bg-lendeck-yellow/10 text-lendeck-yellow border-lendeck-yellow/20';
      case 'Under Review': return 'bg-lendeck-blue/10 text-lendeck-blue border-lendeck-blue/20';
      case 'Approved': return 'bg-lendeck-success/10 text-lendeck-success border-lendeck-success/20';
      case 'Rejected': return 'bg-lendeck-error/10 text-lendeck-error border-lendeck-error/20';
      default: return 'bg-lendeck-gray/10 text-lendeck-gray-dark border-lendeck-gray/20';
    }
  };

  const getRiskScoreColor = (score: number) => {
    if (score >= 80) return 'text-lendeck-success';
    if (score >= 60) return 'text-lendeck-yellow';
    return 'text-lendeck-error';
  };

  const handleQuickView = (deal: any) => {
    setSelectedDeal(deal);
  };

  return (
    <div className="space-y-6">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-yellow/10 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-lendeck-yellow" />
              </div>
              <div>
                <div className="text-xl">23</div>
                <div className="text-sm text-muted-foreground">Pending Review</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-blue/10 rounded-lg flex items-center justify-center">
                <Eye className="h-5 w-5 text-lendeck-blue" />
              </div>
              <div>
                <div className="text-xl">15</div>
                <div className="text-sm text-muted-foreground">Under Review</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-success/10 rounded-lg flex items-center justify-center">
                <ThumbsUp className="h-5 w-5 text-lendeck-success" />
              </div>
              <div>
                <div className="text-xl">8</div>
                <div className="text-sm text-muted-foreground">Approved Today</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-primary/10 rounded-lg flex items-center justify-center">
                <Calculator className="h-5 w-5 text-lendeck-primary" />
              </div>
              <div>
                <div className="text-xl">$2.4M</div>
                <div className="text-sm text-muted-foreground">Volume Today</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Underwriting List */}
      <Card>
        <div className="space-y-4 p-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Deals in Underwriting</h1>
            <p className="text-muted-foreground text-sm sm:text-base">Review and process deal applications</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 min-w-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search deals, companies, or brokers..."
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
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Under Review">Under Review</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={underwriterFilter} onValueChange={setUnderwriterFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Underwriter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Underwriters</SelectItem>
                  <SelectItem value="John Smith">John Smith</SelectItem>
                  <SelectItem value="Emily Davis">Emily Davis</SelectItem>
                  <SelectItem value="Michael Brown">Michael Brown</SelectItem>
                  <SelectItem value="Sarah Wilson">Sarah Wilson</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Deal ID</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Broker</TableHead>
                <TableHead>Deal Size</TableHead>
                <TableHead>Underwriter</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Risk Score</TableHead>
                <TableHead>Industry</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDeals.map((deal) => (
                <TableRow key={deal.id}>
                  <TableCell className="font-mono">{deal.dealId}</TableCell>
                  <TableCell>{deal.companyName}</TableCell>
                  <TableCell>{deal.brokerName}</TableCell>
                  <TableCell>{deal.dealSize}</TableCell>
                  <TableCell>{deal.underwriter}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(deal.status)}>
                      {deal.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className={getRiskScoreColor(deal.riskScore)}>
                      {deal.riskScore}
                    </span>
                  </TableCell>
                  <TableCell>{deal.industry}</TableCell>
                  <TableCell>{deal.submissionDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuickView(deal)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>Deal Details - {deal.dealId}</DialogTitle>
                            <DialogDescription>
                              Comprehensive underwriting review for {deal.companyName}
                            </DialogDescription>
                          </DialogHeader>
                          {selectedDeal && (
                            <Tabs defaultValue="overview" className="w-full">
                              <TabsList className="grid w-full grid-cols-4">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="financials">Financials</TabsTrigger>
                                <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
                                <TabsTrigger value="documents">Documents</TabsTrigger>
                              </TabsList>
                              
                              <TabsContent value="overview" className="space-y-4">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="mb-2">Business Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <div><strong>Company:</strong> {selectedDeal.companyName}</div>
                                      <div><strong>Industry:</strong> {selectedDeal.industry}</div>
                                      <div><strong>Time in Business:</strong> {selectedDeal.timeInBusiness}</div>
                                      <div><strong>Annual Revenue:</strong> {selectedDeal.annualRevenue}</div>
                                      <div><strong>Requested Use:</strong> {selectedDeal.requestedUse}</div>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="mb-2">Deal Details</h4>
                                    <div className="space-y-2 text-sm">
                                      <div><strong>Deal Size:</strong> {selectedDeal.dealSize}</div>
                                      <div><strong>Broker:</strong> {selectedDeal.brokerName}</div>
                                      <div><strong>Underwriter:</strong> {selectedDeal.underwriter}</div>
                                      <div><strong>Status:</strong> {selectedDeal.status}</div>
                                      <div><strong>Priority:</strong> {selectedDeal.priority}</div>
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="financials" className="space-y-4">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 bg-lendeck-success/10 rounded-lg flex items-center justify-center">
                                          <DollarSign className="h-5 w-5 text-lendeck-success" />
                                        </div>
                                        <div>
                                          <div className="text-xl">{selectedDeal.annualRevenue}</div>
                                          <div className="text-sm text-muted-foreground">Annual Revenue</div>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 bg-lendeck-blue/10 rounded-lg flex items-center justify-center">
                                          <TrendingUp className="h-5 w-5 text-lendeck-blue" />
                                        </div>
                                        <div>
                                          <div className="text-xl">{selectedDeal.creditScore}</div>
                                          <div className="text-sm text-muted-foreground">Credit Score</div>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                  <Card>
                                    <CardContent className="p-4">
                                      <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 bg-lendeck-orange/10 rounded-lg flex items-center justify-center">
                                          <Calendar className="h-5 w-5 text-lendeck-orange" />
                                        </div>
                                        <div>
                                          <div className="text-xl">{selectedDeal.timeInBusiness}</div>
                                          <div className="text-sm text-muted-foreground">Time in Business</div>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>
                              </TabsContent>

                              <TabsContent value="risk" className="space-y-4">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                  <div>
                                    <h4 className="mb-2">Risk Assessment</h4>
                                    <div className="space-y-2 text-sm">
                                      <div><strong>Risk Score:</strong> <span className={getRiskScoreColor(selectedDeal.riskScore)}>{selectedDeal.riskScore}</span></div>
                                      <div><strong>Credit Score:</strong> {selectedDeal.creditScore}</div>
                                      <div><strong>Industry Risk:</strong> {selectedDeal.industry}</div>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="mb-2">Documentation</h4>
                                    <div className="space-y-2 text-sm">
                                      <div><strong>Documents Complete:</strong> {selectedDeal.documentsComplete}%</div>
                                      <div><strong>Submission Date:</strong> {selectedDeal.submissionDate}</div>
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>

                              <TabsContent value="documents" className="space-y-4">
                                <div>
                                  <h4 className="mb-2">Required Documents</h4>
                                  <p className="text-sm text-muted-foreground">Document review and management interface would be displayed here.</p>
                                </div>
                              </TabsContent>
                            </Tabs>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <TableActionsMenu label="Underwriting Actions">
                        <TableActionItem
                          onClick={() => setRequestInfoDialog(true)}
                          icon={<MessageSquare className="h-4 w-4" />}
                          label="Request Info"
                        />
                        <TableActionItem
                          onClick={() => console.log('Calculate deal', deal.id)}
                          icon={<Calculator className="h-4 w-4" />}
                          label="Calculate Deal"
                        />
                        <TableActionItem
                          onClick={() => console.log('Schedule call', deal.id)}
                          icon={<Calendar className="h-4 w-4" />}
                          label="Schedule Call"
                        />
                        <TableActionItem
                          onClick={() => setSendLinksDialog(true)}
                          icon={<ExternalLink className="h-4 w-4" />}
                          label="Send Links"
                        />
                        <TableActionItem
                          onClick={() => console.log('Request documents', deal.id)}
                          icon={<FileText className="h-4 w-4" />}
                          label="Request Documents"
                        />
                        <TableActionItem
                          onClick={() => console.log('Background check', deal.id)}
                          icon={<Shield className="h-4 w-4" />}
                          label="Background Check"
                        />
                        <TableActionItem
                          onClick={() => console.log('Approve deal', deal.id)}
                          icon={<ThumbsUp className="h-4 w-4" />}
                          label="Approve Deal"
                        />
                        <TableActionItem
                          onClick={() => console.log('Reject deal', deal.id)}
                          icon={<ThumbsDown className="h-4 w-4" />}
                          label="Reject Deal"
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

      {/* Request Additional Information Dialog */}
      <Dialog open={requestInfoDialog} onOpenChange={setRequestInfoDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Request Additional Information</DialogTitle>
            <DialogDescription>
              Send a request to the broker for more information
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="infoType">Information Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select information type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="financial">Financial Documents</SelectItem>
                  <SelectItem value="legal">Legal Documents</SelectItem>
                  <SelectItem value="personal">Personal Information</SelectItem>
                  <SelectItem value="business">Business Information</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Message to Broker</Label>
              <Textarea placeholder="Please provide additional details..." />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="urgent" />
              <Label htmlFor="urgent">Mark as urgent</Label>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setRequestInfoDialog(false)}>
                Cancel
              </Button>
              <Button onClick={() => setRequestInfoDialog(false)}>
                Send Request
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Send Links Dialog */}
      <Dialog open={sendLinksDialog} onOpenChange={setSendLinksDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Send Application Links</DialogTitle>
            <DialogDescription>
              Send secure application links to the merchant
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="linkType">Link Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select link type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="application">Full Application</SelectItem>
                  <SelectItem value="banking">Banking Information</SelectItem>
                  <SelectItem value="financial">Financial Documents</SelectItem>
                  <SelectItem value="verification">Identity Verification</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="email">Send to Email</Label>
              <Input type="email" placeholder="merchant@company.com" />
            </div>
            <div>
              <Label htmlFor="message">Custom Message</Label>
              <Textarea placeholder="Please complete the following application..." />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setSendLinksDialog(false)}>
                Cancel
              </Button>
              <Button onClick={() => setSendLinksDialog(false)}>
                Send Links
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}