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
import { Checkbox } from '../ui/checkbox';
import { Search, Filter, Eye, FileText, ThumbsUp, ThumbsDown, UserPlus, Shield, MoreHorizontal, ExternalLink } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { TableActionsMenu, TableActionItem } from '../ui/table-actions-menu';
import { ResponsiveTable } from '../ui/responsive-table';

const dealsData = [
  {
    id: 'D001',
    source: 'Marketplace',
    brokerName: 'Sarah Johnson',
    companyName: 'ABC Electronics',
    dealSize: '$250,000',
    stage: 'Review',
    status: 'Active',
    submittedDate: '2024-01-15',
    lastActivity: '2024-01-16',
    documents: ['Application', 'Bank Statements', 'Tax Returns'],
    riskScore: 'Medium'
  },
  {
    id: 'D002',
    source: 'Direct Submission',
    brokerName: 'Mike Chen',
    companyName: 'Tech Solutions Inc',
    dealSize: '$180,000',
    stage: 'Underwriting',
    status: 'Active',
    submittedDate: '2024-01-14',
    lastActivity: '2024-01-16',
    documents: ['Application', 'Bank Statements', 'Financial Reports'],
    riskScore: 'Low'
  },
  {
    id: 'D003',
    source: 'API',
    brokerName: 'Lisa Rodriguez',
    companyName: 'Metro Restaurant Group',
    dealSize: '$320,000',
    stage: 'Funded',
    status: 'Active',
    submittedDate: '2024-01-10',
    lastActivity: '2024-01-15',
    documents: ['Application', 'Bank Statements', 'Tax Returns', 'Legal Documents'],
    riskScore: 'Low'
  },
  {
    id: 'D004',
    source: 'Marketplace',
    brokerName: 'David Kim',
    companyName: 'Fashion Boutique',
    dealSize: '$120,000',
    stage: 'Review',
    status: 'Inactive',
    submittedDate: '2024-01-12',
    lastActivity: '2024-01-14',
    documents: ['Application', 'Bank Statements'],
    riskScore: 'High'
  },
];

export function DealsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [stageFilter, setStageFilter] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');
  const [selectedDeal, setSelectedDeal] = useState(null);
  const [softOfferDialog, setSoftOfferDialog] = useState(false);
  const [backgroundCheckDialog, setBackgroundCheckDialog] = useState(false);

  const filteredDeals = dealsData.filter(deal => {
    const matchesSearch = deal.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deal.brokerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deal.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = !stageFilter || stageFilter === 'all' || deal.stage === stageFilter;
    const matchesSource = !sourceFilter || sourceFilter === 'all' || deal.source === sourceFilter;
    return matchesSearch && matchesStage && matchesSource;
  });

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Review': return 'bg-yellow-100 text-yellow-800';
      case 'Underwriting': return 'bg-blue-100 text-blue-800';
      case 'Funded': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleQuickView = (deal) => {
    setSelectedDeal(deal);
  };

  return (
    <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-x-hidden">

      {/* Deals Table */}
      <Card className="w-full max-w-full overflow-hidden">
        <div className="space-y-4 p-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Deal Submissions</h1>
            <p className="text-muted-foreground text-sm sm:text-base">Review and manage incoming deal submissions</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 min-w-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search deals..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <Select value={stageFilter} onValueChange={setStageFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stages</SelectItem>
                  <SelectItem value="Review">Review</SelectItem>
                  <SelectItem value="Underwriting">Underwriting</SelectItem>
                  <SelectItem value="Funded">Funded</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sourceFilter} onValueChange={setSourceFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="Marketplace">Marketplace</SelectItem>
                  <SelectItem value="Direct Submission">Direct Submission</SelectItem>
                  <SelectItem value="API">API</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <CardContent className="p-0">
          {/* Desktop Table View */}
          <div className="hidden xl:block">
            <ResponsiveTable>
            <TableHeader>
              <TableRow>
                <TableHead>Deal ID</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Broker Name</TableHead>
                <TableHead>Company Name</TableHead>
                <TableHead>Deal Size</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Risk Score</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDeals.map((deal) => (
                <TableRow key={deal.id}>
                  <TableCell className="font-medium">{deal.id}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{deal.source}</Badge>
                  </TableCell>
                  <TableCell>{deal.brokerName}</TableCell>
                  <TableCell>{deal.companyName}</TableCell>
                  <TableCell className="font-semibold">{deal.dealSize}</TableCell>
                  <TableCell>
                    <Badge className={getStageColor(deal.stage)}>{deal.stage}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(deal.status)}>{deal.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getRiskColor(deal.riskScore)}>{deal.riskScore}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleQuickView(deal)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>Deal QuickView - {deal.id}</DialogTitle>
                            <DialogDescription>
                              Quick overview of {deal.companyName} deal submission
                            </DialogDescription>
                          </DialogHeader>
                          {selectedDeal && (
                            <div className="grid grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <div>
                                  <Label>Company Information</Label>
                                  <div className="mt-2 space-y-2">
                                    <div><strong>Company:</strong> {selectedDeal.companyName}</div>
                                    <div><strong>Deal Size:</strong> {selectedDeal.dealSize}</div>
                                    <div><strong>Source:</strong> {selectedDeal.source}</div>
                                    <div><strong>Broker:</strong> {selectedDeal.brokerName}</div>
                                  </div>
                                </div>
                                <div>
                                  <Label>Current Status</Label>
                                  <div className="mt-2 space-y-2">
                                    <div><strong>Stage:</strong> {selectedDeal.stage}</div>
                                    <div><strong>Status:</strong> {selectedDeal.status}</div>
                                    <div><strong>Risk Score:</strong> {selectedDeal.riskScore}</div>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <Label>Timeline</Label>
                                  <div className="mt-2 space-y-2">
                                    <div><strong>Submitted:</strong> {selectedDeal.submittedDate}</div>
                                    <div><strong>Last Activity:</strong> {selectedDeal.lastActivity}</div>
                                  </div>
                                </div>
                                <div>
                                  <Label>Documents Submitted</Label>
                                  <div className="mt-2">
                                    {selectedDeal.documents.map((doc, index) => (
                                      <Badge key={index} variant="outline" className="mr-2 mb-2">
                                        {doc}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <FileText className="h-4 w-4 mr-2" />
                            Review Documents
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSoftOfferDialog(true)}>
                            <ThumbsUp className="h-4 w-4 mr-2" />
                            Give Soft Offer
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ThumbsDown className="h-4 w-4 mr-2" />
                            Reject Deal
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <UserPlus className="h-4 w-4 mr-2" />
                            Assign Underwriter
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setBackgroundCheckDialog(true)}>
                            <Shield className="h-4 w-4 mr-2" />
                            Request Background Check
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </ResponsiveTable>
          </div>

          {/* Mobile Card View */}
          <div className="xl:hidden p-4 space-y-4">
            {filteredDeals.map((deal) => (
              <Card key={deal.id} className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">Deal ID</div>
                      <div className="font-bold">{deal.id}</div>
                    </div>
                    <div className="text-right space-y-1">
                      <Badge className={getStageColor(deal.stage)}>{deal.stage}</Badge>
                      <div>
                        <Badge className={getStatusColor(deal.status)} variant="outline">{deal.status}</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-sm text-muted-foreground">Company</div>
                    <div className="font-medium">{deal.companyName}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">Broker</div>
                      <div className="text-sm">{deal.brokerName}</div>
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">Deal Size</div>
                      <div className="text-sm font-medium">{deal.dealSize}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">Source</div>
                      <Badge variant="outline">{deal.source}</Badge>
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">Risk Score</div>
                      <Badge className={getRiskColor(deal.riskScore)}>{deal.riskScore}</Badge>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2 border-t">
                    <span className="text-sm font-medium">Actions</span>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleQuickView(deal)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] max-h-[95vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Deal QuickView - {deal.id}</DialogTitle>
                            <DialogDescription>
                              Quick overview of {deal.companyName} deal submission
                            </DialogDescription>
                          </DialogHeader>
                          {selectedDeal && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div className="space-y-4">
                                <div>
                                  <Label>Company Information</Label>
                                  <div className="mt-2 space-y-2">
                                    <div><strong>Company:</strong> {selectedDeal.companyName}</div>
                                    <div><strong>Deal Size:</strong> {selectedDeal.dealSize}</div>
                                    <div><strong>Source:</strong> {selectedDeal.source}</div>
                                    <div><strong>Broker:</strong> {selectedDeal.brokerName}</div>
                                  </div>
                                </div>
                                <div>
                                  <Label>Current Status</Label>
                                  <div className="mt-2 space-y-2">
                                    <div><strong>Stage:</strong> {selectedDeal.stage}</div>
                                    <div><strong>Status:</strong> {selectedDeal.status}</div>
                                    <div><strong>Risk Score:</strong> {selectedDeal.riskScore}</div>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-4">
                                <div>
                                  <Label>Timeline</Label>
                                  <div className="mt-2 space-y-2">
                                    <div><strong>Submitted:</strong> {selectedDeal.submittedDate}</div>
                                    <div><strong>Last Activity:</strong> {selectedDeal.lastActivity}</div>
                                  </div>
                                </div>
                                <div>
                                  <Label>Documents Submitted</Label>
                                  <div className="mt-2">
                                    {selectedDeal.documents.map((doc, index) => (
                                      <Badge key={index} variant="outline" className="mr-2 mb-2">
                                        {doc}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <FileText className="h-4 w-4 mr-2" />
                            Review Documents
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setSoftOfferDialog(true)}>
                            <ThumbsUp className="h-4 w-4 mr-2" />
                            Give Soft Offer
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ThumbsDown className="h-4 w-4 mr-2" />
                            Reject Deal
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <UserPlus className="h-4 w-4 mr-2" />
                            Assign Underwriter
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setBackgroundCheckDialog(true)}>
                            <Shield className="h-4 w-4 mr-2" />
                            Request Background Check
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Soft Offer Dialog */}
      <Dialog open={softOfferDialog} onOpenChange={setSoftOfferDialog}>
        <DialogContent className="max-w-2xl w-[95vw] max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Give Soft Offer</DialogTitle>
            <DialogDescription>
              Provide a preliminary offer for this deal
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="loanType">Loan Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select loan type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mca">Merchant Cash Advance</SelectItem>
                    <SelectItem value="term">Term Loan</SelectItem>
                    <SelectItem value="line">Line of Credit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="term">Term (Months)</Label>
                <Input type="number" placeholder="12" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="amount">Loan Amount</Label>
                <Input placeholder="$250,000" />
              </div>
              <div>
                <Label htmlFor="price">Price/Factor Rate</Label>
                <Input placeholder="1.25" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="commission">Broker Commission</Label>
                <Input placeholder="3%" />
              </div>
              <div>
                <Label htmlFor="psf">PSF Allowance</Label>
                <Input placeholder="$2,500" />
              </div>
            </div>
            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea placeholder="Enter any additional terms or conditions..." />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setSoftOfferDialog(false)}>
                Cancel
              </Button>
              <Button onClick={() => setSoftOfferDialog(false)}>
                Send Soft Offer
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Background Check Dialog */}
      <Dialog open={backgroundCheckDialog} onOpenChange={setBackgroundCheckDialog}>
        <DialogContent className="max-w-md w-[95vw] max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Request Background Check</DialogTitle>
            <DialogDescription>
              Select the background check options you need
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="credit" />
                <Label htmlFor="credit">Credit Report</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="ucc" />
                <Label htmlFor="ucc">UCC Lookup</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="court" />
                <Label htmlFor="court">Court Lookup</Label>
              </div>
            </div>
            <div>
              <Label htmlFor="priority">Priority Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard (3-5 days)</SelectItem>
                  <SelectItem value="expedited">Expedited (1-2 days)</SelectItem>
                  <SelectItem value="rush">Rush (Same day)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setBackgroundCheckDialog(false)}>
                Cancel
              </Button>
              <Button onClick={() => setBackgroundCheckDialog(false)}>
                Request Background Check
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}