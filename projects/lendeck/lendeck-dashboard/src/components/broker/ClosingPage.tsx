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
import { Search, Eye, Edit, Upload, FileText, Send, CheckCircle, Copy, ExternalLink, MessageCircle } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { TableActionsMenu, TableActionItem } from '../ui/table-actions-menu';

const mockClosingDeals = [
  {
    id: 'C001',
    dealId: 'D001',
    company: 'Tech Solutions Inc',
    rep: 'John Smith',
    dealSize: '$150,000',
    stage: 'Contracts Sent',
    status: 'Active',
    lender: 'Capital Lending',
    documentsReceived: true,
    contractsSigned: false,
    lenderRequests: [
      { type: 'Bank Login', description: 'Provide online banking credentials', status: 'pending', link: 'https://secure.lendeck.com/bank-login/d001' },
      { type: 'Accounting Software', description: 'QuickBooks access required', status: 'completed', link: 'https://secure.lendeck.com/qb-connect/d001' }
    ]
  },
  {
    id: 'C002', 
    dealId: 'D002',
    company: 'Green Energy Co',
    rep: 'Sarah Johnson',
    dealSize: '$200,000',
    stage: 'Documents Submitted Pending Response',
    status: 'Active',
    lender: 'Business Finance Co',
    documentsReceived: false,
    contractsSigned: false,
    lenderRequests: []
  },
  {
    id: 'C003',
    dealId: 'D003',
    company: 'Retail Plus LLC',
    rep: 'Mike Davis',
    dealSize: '$75,000',
    stage: 'Contracts Signed',
    status: 'Active',
    lender: 'Quick Capital',
    documentsReceived: true,
    contractsSigned: true,
    lenderRequests: []
  }
];

export function ClosingPage() {
  const [selectedDeal, setSelectedDeal] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [stageFilter, setStageFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Initial Request': return 'bg-[#FF5F0C] text-white';
      case 'Documents Submitted Pending Response': return 'bg-[#4E0F60] text-white';
      case 'Contracts Sent': return 'bg-[#ED1E59] text-white';
      case 'Contracts Signed': return 'bg-[#25A900] text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getRequestStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-[#FF5F0C] text-white';
      case 'completed': return 'bg-[#25A900] text-white';
      case 'in-progress': return 'bg-[#4E0F60] text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6">


      {/* Closing Deals Table */}
      <Card>
        <CardContent className="p-0">
                {/* Header and Filters */}
      <div className="space-y-4 p-4">
        <div>
          <h1 className="text-2xl font-bold">Closing list</h1>
          <p className="text-muted-foreground">Finalize Your Deals and Prepare for Funding</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-3">
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
          
          <div className="flex gap-3">
            <Select value={stageFilter} onValueChange={setStageFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stages</SelectItem>
                <SelectItem value="initial">Initial Request</SelectItem>
                <SelectItem value="pending">Documents Submitted</SelectItem>
                <SelectItem value="contracts-sent">Contracts Sent</SelectItem>
                <SelectItem value="contracts-signed">Contracts Signed</SelectItem>
              </SelectContent>
            </Select>
            
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
                <TableHead>Stage</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Documents</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockClosingDeals.map((deal) => (
                <TableRow key={deal.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium">{deal.dealId}</TableCell>
                  <TableCell>{deal.company}</TableCell>
                  <TableCell>{deal.rep}</TableCell>
                  <TableCell>{deal.dealSize}</TableCell>
                  <TableCell>
                    <Badge className={getStageColor(deal.stage)}>
                      {deal.stage}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={deal.status === 'Active' ? 'default' : 'secondary'}>
                      {deal.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <CheckCircle className={`h-4 w-4 ${deal.documentsReceived ? 'text-[#25A900]' : 'text-gray-400'}`} />
                      <span className="text-sm">
                        {deal.documentsReceived ? 'Complete' : 'Pending'}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <TableActionsMenu label={`Actions for deal ${deal.dealId}`}>
                      <TableActionItem
                        asChild
                        icon={<Eye className="h-4 w-4" />}
                        label="View Deal"
                      >
                        <Link to={`/broker/deals/${deal.dealId}`} className="flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          View Deal
                        </Link>
                      </TableActionItem>
                      <TableActionItem
                        onClick={() => {/* Handle edit action */}}
                        icon={<Edit className="h-4 w-4" />}
                        label="Edit Deal"
                      />
                      <TableActionItem
                        onClick={() => {/* Handle upload action */}}
                        icon={<Upload className="h-4 w-4" />}
                        label="Upload Documents"
                      />
                      <TableActionItem
                        onClick={() => {/* Handle send action */}}
                        icon={<Send className="h-4 w-4" />}
                        label="Send to Lender"
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
        <DialogContent className="max-w-6xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Closing Details - {selectedDeal?.dealId}</DialogTitle>
            <DialogDescription>{selectedDeal?.company}</DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="requests">Lender Requests</TabsTrigger>
              <TabsTrigger value="contracts">Contracts</TabsTrigger>
              <TabsTrigger value="communications">Communications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Deal Information</CardTitle>
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
                      <span className="text-muted-foreground">Lender:</span>
                      <span className="font-medium">{selectedDeal?.lender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deal Size:</span>
                      <span className="font-medium">{selectedDeal?.dealSize}</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Closing Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Stage:</span>
                      <Badge className={getStageColor(selectedDeal?.stage || '')}>
                        {selectedDeal?.stage}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Documents Received:</span>
                      <CheckCircle className={`h-5 w-5 ${selectedDeal?.documentsReceived ? 'text-[#25A900]' : 'text-gray-400'}`} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Contracts Signed:</span>
                      <CheckCircle className={`h-5 w-5 ${selectedDeal?.contractsSigned ? 'text-[#25A900]' : 'text-gray-400'}`} />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { date: '2024-01-15', event: 'Deal accepted by lender', status: 'completed' },
                      { date: '2024-01-16', event: 'Initial documents requested', status: 'completed' },
                      { date: '2024-01-18', event: 'Documents submitted', status: 'completed' },
                      { date: '2024-01-20', event: 'Contracts generated and sent', status: 'completed' },
                      { date: 'Pending', event: 'Awaiting contract signatures', status: 'pending' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${item.status === 'completed' ? 'bg-[#25A900]' : 'bg-[#FF5F0C]'}`} />
                        <div className="flex-1">
                          <span className="font-medium">{item.event}</span>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Required Documents</CardTitle>
                  <CardDescription>Track document collection and submission status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: 'Signed Application', status: 'received', required: true },
                      { name: 'Bank Statements (3 months)', status: 'received', required: true },
                      { name: 'Tax Returns', status: 'received', required: true },
                      { name: 'Business License', status: 'pending', required: true },
                      { name: 'Insurance Certificate', status: 'received', required: false },
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4" />
                          <span className="font-medium">{doc.name}</span>
                          {doc.required && <Badge variant="outline">Required</Badge>}
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={doc.status === 'received' ? 'bg-[#25A900] text-white' : 'bg-[#FF5F0C] text-white'}>
                            {doc.status}
                          </Badge>
                          {doc.status === 'pending' && (
                            <Button size="sm" variant="outline">
                              <Upload className="h-3 w-3" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="requests" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Lender Requests</CardTitle>
                  <CardDescription>Manage specific requests from the lender</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedDeal?.lenderRequests?.length > 0 ? (
                      selectedDeal.lenderRequests.map((request: any, index: number) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h4 className="font-semibold">{request.type}</h4>
                                <p className="text-sm text-muted-foreground">{request.description}</p>
                              </div>
                              <Badge className={getRequestStatusColor(request.status)}>
                                {request.status}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <Input value={request.link} readOnly className="text-sm" />
                              <Button variant="outline" size="sm">
                                <Copy className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        No specific requests from lender
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="contracts" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contract Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold">Funding Agreement</h4>
                        <Badge className={selectedDeal?.contractsSigned ? 'bg-[#25A900] text-white' : 'bg-[#FF5F0C] text-white'}>
                          {selectedDeal?.contractsSigned ? 'Signed' : 'Pending'}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Main funding contract requiring merchant signature
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-2" />
                          View Contract
                        </Button>
                        <Button variant="outline" size="sm">
                          <Send className="h-4 w-4 mr-2" />
                          Forward to Merchant
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold">ACH Authorization</h4>
                        <Badge className="bg-[#4E0F60] text-white">
                          PSF Allowed
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Authorization for broker fee collections
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Copy className="h-4 w-4 mr-2" />
                          Copy ACH Link
                        </Button>
                        <Button variant="outline" size="sm">
                          <Send className="h-4 w-4 mr-2" />
                          Send to Merchant
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Contract Status Summary</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-[#F9F8FD] rounded-lg">
                        <p className="text-sm text-muted-foreground">Contracts Sent</p>
                        <p className="font-bold">2024-01-20</p>
                      </div>
                      <div className="p-3 bg-[#F9F8FD] rounded-lg">
                        <p className="text-sm text-muted-foreground">Expected Signature</p>
                        <p className="font-bold">2024-01-25</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="communications" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Communication Log</h3>
                <Button size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Add Entry
                </Button>
              </div>
              
              <div className="space-y-4">
                {[
                  { date: '2024-01-20 11:30 AM', user: 'John Smith', type: 'Email', message: 'Forwarded funding agreement to merchant for signature' },
                  { date: '2024-01-19 03:45 PM', user: 'Lender System', type: 'System', message: 'Contracts generated and ready for distribution' },
                  { date: '2024-01-18 10:15 AM', user: 'Sarah Johnson', type: 'Phone', message: 'Confirmed all documents received by lender' },
                ].map((comm, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="h-4 w-4 text-[#4E0F60]" />
                          <span className="font-medium">{comm.user}</span>
                          <Badge variant="outline">{comm.type}</Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">{comm.date}</span>
                      </div>
                      <p className="text-sm">{comm.message}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Add New Communication</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Communication type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="meeting">Meeting</SelectItem>
                      <SelectItem value="note">Internal Note</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Enter communication details..." />
                  <Button size="sm" className="bg-[#4E0F60] hover:bg-[#4E0F60]/90">
                    Add Entry
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline">
              <Send className="h-4 w-4 mr-2" />
              Submit to Lender
            </Button>
            <Button className="bg-[#25A900] hover:bg-[#25A900]/90">
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark as Funded
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}