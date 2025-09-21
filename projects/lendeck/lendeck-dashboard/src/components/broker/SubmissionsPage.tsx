import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Search, Eye, Edit, Upload, MessageCircle, CheckCircle, X, Handshake } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Textarea } from '../ui/textarea';

const mockSubmissions = [
  {
    id: 'S001',
    dealId: 'D001',
    company: 'Tech Solutions Inc',
    rep: 'John Smith',
    dealSize: '$150,000',
    stage: 'Pending Offer',
    status: 'Active',
    submittedDate: '2024-01-10',
    offers: [
      { lender: 'Capital Lending', amount: '$140,000', rate: '8.5%', term: '24 months', status: 'pending' }
    ]
  },
  {
    id: 'S002', 
    dealId: 'D002',
    company: 'Green Energy Co',
    rep: 'Sarah Johnson',
    dealSize: '$200,000',
    stage: 'Counter Offer Pending',
    status: 'Active',
    submittedDate: '2024-01-08',
    offers: [
      { lender: 'Business Finance Co', amount: '$180,000', rate: '7.2%', term: '36 months', status: 'countered' },
      { lender: 'Quick Capital', amount: '$190,000', rate: '9.1%', term: '18 months', status: 'pending' }
    ]
  },
  {
    id: 'S003',
    dealId: 'D003',
    company: 'Retail Plus LLC', 
    rep: 'Mike Davis',
    dealSize: '$75,000',
    stage: 'Under Review',
    status: 'Active',
    submittedDate: '2024-01-12',
    offers: []
  }
];

export function SubmissionsPage() {
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [stageFilter, setStageFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Under Review': return 'bg-[#FF5F0C] text-white';
      case 'Pending Offer': return 'bg-[#4E0F60] text-white';
      case 'Counter Offer Pending': return 'bg-[#ED1E59] text-white';
      case 'Accepted': return 'bg-[#25A900] text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getOfferStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-[#FF5F0C] text-white';
      case 'countered': return 'bg-[#ED1E59] text-white';
      case 'accepted': return 'bg-[#25A900] text-white';
      case 'declined': return 'bg-gray-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header and Filters */}
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold">Submissions</h1>
          <p className="text-muted-foreground">Manage Your Submitted Deals and Offers</p>
        </div>
        
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
            <Select value={stageFilter} onValueChange={setStageFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stages</SelectItem>
                <SelectItem value="under-review">Under Review</SelectItem>
                <SelectItem value="pending-offer">Pending Offer</SelectItem>
                <SelectItem value="counter-offer">Counter Offer</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
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

      {/* Submissions Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Deal ID</TableHead>
                <TableHead>Company Name</TableHead>
                <TableHead>Rep Name</TableHead>
                <TableHead>Deal Size</TableHead>
                <TableHead>Submission Stage</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockSubmissions.map((submission) => (
                <TableRow key={submission.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium">{submission.dealId}</TableCell>
                  <TableCell>{submission.company}</TableCell>
                  <TableCell>{submission.rep}</TableCell>
                  <TableCell>{submission.dealSize}</TableCell>
                  <TableCell>
                    <Badge className={getStageColor(submission.stage)}>
                      {submission.stage}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={submission.status === 'Active' ? 'default' : 'secondary'}>
                      {submission.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedSubmission(submission)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Upload className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Handshake className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Submission Detail Dialog */}
      <Dialog open={!!selectedSubmission} onOpenChange={() => setSelectedSubmission(null)}>
        <DialogContent className="max-w-6xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Submission Details - {selectedSubmission?.dealId}</DialogTitle>
            <DialogDescription>{selectedSubmission?.company}</DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="offers">Offers</TabsTrigger>
              <TabsTrigger value="communications">Communications</TabsTrigger>
              <TabsTrigger value="background">Background</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Submission Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deal ID:</span>
                      <span className="font-medium">{selectedSubmission?.dealId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company:</span>
                      <span className="font-medium">{selectedSubmission?.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deal Size:</span>
                      <span className="font-medium">{selectedSubmission?.dealSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Submitted:</span>
                      <span className="font-medium">{selectedSubmission?.submittedDate}</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Current Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Stage:</span>
                      <Badge className={getStageColor(selectedSubmission?.stage || '')}>
                        {selectedSubmission?.stage}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Status:</span>
                      <Badge variant={selectedSubmission?.status === 'Active' ? 'default' : 'secondary'}>
                        {selectedSubmission?.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Offers Received:</span>
                      <span className="font-medium">{selectedSubmission?.offers?.length || 0}</span>
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
                      { date: '2024-01-10', event: 'Submission created', status: 'completed' },
                      { date: '2024-01-11', event: 'Documents verified', status: 'completed' },
                      { date: '2024-01-12', event: 'Sent to lenders', status: 'completed' },
                      { date: '2024-01-15', event: 'First offer received', status: 'completed' },
                      { date: 'Pending', event: 'Awaiting response', status: 'pending' },
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
            
            <TabsContent value="offers" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Received Offers</h3>
                <Badge variant="outline">{selectedSubmission?.offers?.length || 0} Offers</Badge>
              </div>
              
              <div className="space-y-4">
                {selectedSubmission?.offers?.map((offer: any, index: number) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-semibold">{offer.lender}</h4>
                          <p className="text-sm text-muted-foreground">Funding Amount: {offer.amount}</p>
                        </div>
                        <Badge className={getOfferStatusColor(offer.status)}>
                          {offer.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-sm text-muted-foreground">Rate:</span>
                          <p className="font-medium">{offer.rate}</p>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Term:</span>
                          <p className="font-medium">{offer.term}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-[#25A900] hover:bg-[#25A900]/90">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Accept
                        </Button>
                        <Button size="sm" variant="outline" className="border-[#ED1E59] text-[#ED1E59]">
                          <X className="h-4 w-4 mr-2" />
                          Decline
                        </Button>
                        <Button size="sm" variant="outline" className="border-[#4E0F60] text-[#4E0F60]">
                          <Handshake className="h-4 w-4 mr-2" />
                          Counter
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )) || (
                  <div className="text-center py-8 text-muted-foreground">
                    No offers received yet
                  </div>
                )}
              </div>
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
                  { date: '2024-01-15 10:30 AM', user: 'John Smith', type: 'Email', message: 'Sent follow-up to Capital Lending regarding offer response' },
                  { date: '2024-01-14 02:15 PM', user: 'Sarah Johnson', type: 'Phone', message: 'Called merchant to update on submission status' },
                  { date: '2024-01-12 09:45 AM', user: 'System', type: 'System', message: 'Submission automatically sent to marketplace' },
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
            
            <TabsContent value="background" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Background Report Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Credit Score', value: '720', status: 'Good' },
                      { name: 'Time in Business', value: '5 years', status: 'Established' },
                      { name: 'UCC Filings', value: '2 Active', status: 'Review' },
                      { name: 'Court Records', value: 'None Found', status: 'Clear' },
                    ].map((item, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-lg font-bold">{item.value}</p>
                        <Badge 
                          className={
                            item.status === 'Good' || item.status === 'Clear' || item.status === 'Established' 
                              ? 'bg-[#25A900] text-white' 
                              : 'bg-[#FF5F0C] text-white'
                          }
                        >
                          {item.status}
                        </Badge>
                      </div>
                    ))}
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