import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { ArrowLeft, MessageSquare, Clock, FileText, DollarSign, Building, Calendar, Download, TrendingUp, AlertCircle, CheckCircle, CreditCard, Phone, Mail, Plus, ExternalLink, BarChart3, FileCheck, FileX } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Progress } from '../ui/progress';
import { Separator } from '../ui/separator';

// Mock data for the funded deal
const mockFundedDeals = [
  {
    id: 'F001',
    dealId: 'D001',
    company: 'Tech Solutions Inc',
    repName: 'John Smith',
    dealSize: '$150,000',
    fundedAmount: '$140,000',
    commissionFromLender: '$7,000',
    splitWithBrokeringCompany: '40%',
    commissionEarned: '$4,200',
    totalPayout: '$4,200',
    status: 'Active',
    fundedDate: '2024-01-20',
    lender: 'Capital Lending',
    interestRate: '8.5%',
    term: '24 months',
    paymentFrequency: 'Daily',
    repaymentSchedule: 'ACH Daily $292',
    timeline: [
      { date: '2024-01-10', activity: 'Deal submitted to lender', type: 'submission' },
      { date: '2024-01-12', activity: 'Lender requested additional documents', type: 'communication' },
      { date: '2024-01-15', activity: 'All documents provided', type: 'submission' },
      { date: '2024-01-18', activity: 'Status changed to Approved', type: 'status_change' },
      { date: '2024-01-20', activity: 'Deal funded successfully', type: 'status_change' }
    ],
    documents: [
      { name: 'Funding Agreement', type: 'PDF', size: '245 KB', date: '2024-01-20', category: 'Agreement' },
      { name: 'Commission Statement', type: 'PDF', size: '123 KB', date: '2024-01-20', category: 'Commission' },
      { name: 'Merchant Application', type: 'PDF', size: '789 KB', date: '2024-01-10', category: 'Application' },
      { name: 'Bank Statements', type: 'ZIP', size: '2.1 MB', date: '2024-01-08', category: 'Financial' },
      { name: 'UCC Filing', type: 'PDF', size: '67 KB', date: '2024-01-22', category: 'Legal' },
      { name: 'Insurance Certificate', type: 'PDF', size: '1.2 MB', date: '2024-01-20', category: 'Insurance' }
    ],
    paymentHistory: [
      { date: '2024-01-20', amount: '$4,200', type: 'Initial Commission', status: 'Paid', method: 'ACH' }
    ],
    commissionBreakdown: {
      totalFromLender: '$7,000',
      brokeringCompanySplit: '40%',
      brokeringCompanyAmount: '$2,800',
      brokerSplit: '60%',
      brokerAmount: '$4,200'
    },
    communications: [
      { date: '2024-01-12', type: 'Email', from: 'Capital Lending', to: 'John Smith', subject: 'Additional documentation required', message: 'Please provide updated bank statements for the last 3 months.' },
      { date: '2024-01-15', type: 'Phone', from: 'John Smith', to: 'Capital Lending', subject: 'Document submission confirmation', message: 'Confirmed receipt of all requested documents via phone call.' },
      { date: '2024-01-18', type: 'Email', from: 'Capital Lending', to: 'John Smith', subject: 'Deal Approval', message: 'Congratulations! Your deal has been approved and will fund on 01/20/2024.' }
    ],
    backgroundReports: [
      { type: 'Credit Report', provider: 'Experian', date: '2024-01-08', score: '720', status: 'Approved' },
      { type: 'UCC Search', provider: 'CSC', date: '2024-01-09', findings: 'No liens found', status: 'Clear' },
      { type: 'Bank Analysis', provider: 'Internal', date: '2024-01-10', avgBalance: '$45,000', status: 'Approved' }
    ],
    comments: [
      { date: '2024-01-20', author: 'John Smith', comment: 'Client was very satisfied with the funding speed and process.' },
      { date: '2024-01-22', author: 'Sarah Manager', comment: 'UCC filing completed successfully. All documentation in order.' }
    ]
  }
];

export function FundedDealDetailPage() {
  const { id } = useParams();
  const [newComment, setNewComment] = useState('');
  const [newCommunication, setNewCommunication] = useState({
    type: 'Email',
    subject: '',
    message: ''
  });
  const [showNewCommunicationDialog, setShowNewCommunicationDialog] = useState(false);
  
  const deal = mockFundedDeals.find(d => d.id === id);

  if (!deal) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/broker/funded">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Funded Deals
            </Button>
          </Link>
        </div>
        <Card>
          <CardContent className="p-8 text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Funded Deal Not Found</h3>
            <p className="text-muted-foreground">The funded deal you're looking for doesn't exist or has been removed.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      // In a real app, this would make an API call
      console.log('Adding comment:', newComment);
      setNewComment('');
    }
  };

  const handleAddCommunication = () => {
    if (newCommunication.subject.trim() && newCommunication.message.trim()) {
      // In a real app, this would make an API call
      console.log('Adding communication:', newCommunication);
      setNewCommunication({ type: 'Email', subject: '', message: '' });
      setShowNewCommunicationDialog(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/broker/funded">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Funded Deals
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Funded Deal {deal.dealId}</h1>
            <p className="text-muted-foreground">{deal.company} - {deal.lender}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={deal.status === 'Active' ? 'default' : 'secondary'} className="bg-[#25A900] text-white">
            {deal.status}
          </Badge>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button variant="outline" size="sm">
            <BarChart3 className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="commission">Commission</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="communications">Communications</TabsTrigger>
          <TabsTrigger value="background">Background</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
        </TabsList>

        {/* Deal Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Deal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Deal Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deal ID:</span>
                      <span className="font-medium">{deal.dealId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company Name:</span>
                      <span className="font-medium">{deal.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rep Name:</span>
                      <span className="font-medium">{deal.repName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deal Size:</span>
                      <span className="font-medium">{deal.dealSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Funded Amount:</span>
                      <span className="font-medium text-[#25A900]">{deal.fundedAmount}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Commission from Lender:</span>
                      <span className="font-medium">{deal.commissionFromLender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Split with Company:</span>
                      <span className="font-medium">{deal.splitWithBrokeringCompany}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Commission Earned:</span>
                      <span className="font-medium text-[#4E0F60]">{deal.commissionEarned}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Payout:</span>
                      <span className="font-medium text-[#25A900]">{deal.totalPayout}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <Badge variant="default" className="bg-[#25A900] text-white">
                        {deal.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Loan Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Loan Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate:</span>
                    <span className="font-medium">{deal.interestRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Term:</span>
                    <span className="font-medium">{deal.term}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Payment Frequency:</span>
                    <span className="font-medium">{deal.paymentFrequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Repayment Schedule:</span>
                    <span className="font-medium">{deal.repaymentSchedule}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lender:</span>
                    <span className="font-medium">{deal.lender}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Funded Date:</span>
                    <span className="font-medium">{deal.fundedDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-lendeck-success/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-lendeck-success" />
                  </div>
                  <div>
                    <div className="text-xl">93.3%</div>
                    <div className="text-sm text-muted-foreground">Funding Rate</div>
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
                    <div className="text-xl">4.67%</div>
                    <div className="text-sm text-muted-foreground">Commission Rate</div>
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
                    <div className="text-xl">10 days</div>
                    <div className="text-sm text-muted-foreground">Processing Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-lendeck-pink/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-lendeck-pink" />
                  </div>
                  <div>
                    <div className="text-xl">{deal.documents.length}</div>
                    <div className="text-sm text-muted-foreground">Documents</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Deal Timeline
              </CardTitle>
              <CardDescription>Activities, submissions, communications, and status changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {deal.timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.type === 'submission' ? 'bg-[#4E0F60] text-white' :
                      item.type === 'communication' ? 'bg-[#FF5F0C] text-white' :
                      'bg-[#25A900] text-white'
                    }`}>
                      {item.type === 'submission' ? <FileText className="h-4 w-4" /> :
                       item.type === 'communication' ? <MessageSquare className="h-4 w-4" /> :
                       <CheckCircle className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{item.activity}</p>
                          <p className="text-sm text-muted-foreground capitalize">{item.type.replace('_', ' ')}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Deal Documents
              </CardTitle>
              <CardDescription>All documents submitted and generated for this deal</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deal.documents.map((doc, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{doc.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{doc.category}</Badge>
                      </TableCell>
                      <TableCell>{doc.type}</TableCell>
                      <TableCell>{doc.size}</TableCell>
                      <TableCell>{doc.date}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="mt-6 flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download All Documents
                </Button>
                <Button variant="outline" className="flex-1">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Document Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Commission Details Tab */}
        <TabsContent value="commission" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Commission Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-[#F9F8FD] rounded-lg">
                    <span className="font-medium">Total Commission from Lender</span>
                    <span className="font-bold text-lg">{deal.commissionBreakdown.totalFromLender}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <span>Brokering Company Split ({deal.commissionBreakdown.brokeringCompanySplit})</span>
                      <span className="font-medium">{deal.commissionBreakdown.brokeringCompanyAmount}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-[#4E0F60] text-white rounded-lg">
                      <span>Your Commission ({deal.commissionBreakdown.brokerSplit})</span>
                      <span className="font-bold text-lg">{deal.commissionBreakdown.brokerAmount}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Commission Split Visualization</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Your Share ({deal.commissionBreakdown.brokerSplit})</span>
                        <span>{deal.commissionBreakdown.brokerAmount}</span>
                      </div>
                      <Progress value={60} className="h-3" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Company Share ({deal.commissionBreakdown.brokeringCompanySplit})</span>
                        <span>{deal.commissionBreakdown.brokeringCompanyAmount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Commission Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-6 bg-[#25A900]/10 rounded-lg">
                  <div className="text-3xl font-bold text-[#25A900] mb-2">{deal.commissionEarned}</div>
                  <p className="text-sm text-muted-foreground">Total Commission Earned</p>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Commission Rate:</span>
                    <span className="font-medium">4.67%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Deal Amount:</span>
                    <span className="font-medium">{deal.fundedAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Payment Status:</span>
                    <Badge className="bg-[#25A900] text-white">Paid</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Payment History Tab */}
        <TabsContent value="payments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment History
              </CardTitle>
              <CardDescription>All payments received for this deal</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deal.paymentHistory.map((payment, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{payment.date}</TableCell>
                      <TableCell className="font-medium text-[#25A900]">{payment.amount}</TableCell>
                      <TableCell>{payment.type}</TableCell>
                      <TableCell>{payment.method}</TableCell>
                      <TableCell>
                        <Badge className="bg-[#25A900] text-white">
                          {payment.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="mt-6 p-4 bg-[#F9F8FD] rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Payments Received</span>
                  <span className="font-bold text-lg text-[#25A900]">{deal.totalPayout}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Communications Tab */}
        <TabsContent value="communications" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Communication Logs
                </CardTitle>
                <CardDescription>All communications related to this deal</CardDescription>
              </div>
              <Dialog open={showNewCommunicationDialog} onOpenChange={setShowNewCommunicationDialog}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Communication
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Communication</DialogTitle>
                    <DialogDescription>Record a new communication entry for this deal</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Type</label>
                      <select
                        className="w-full mt-1 p-2 border rounded-md"
                        value={newCommunication.type}
                        onChange={(e) => setNewCommunication({ ...newCommunication, type: e.target.value })}
                      >
                        <option value="Email">Email</option>
                        <option value="Phone">Phone Call</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Text">Text Message</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Subject</label>
                      <Input
                        value={newCommunication.subject}
                        onChange={(e) => setNewCommunication({ ...newCommunication, subject: e.target.value })}
                        placeholder="Communication subject"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Message</label>
                      <Textarea
                        value={newCommunication.message}
                        onChange={(e) => setNewCommunication({ ...newCommunication, message: e.target.value })}
                        placeholder="Communication details"
                        rows={4}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleAddCommunication} className="flex-1">Add Communication</Button>
                      <Button variant="outline" onClick={() => setShowNewCommunicationDialog(false)} className="flex-1">Cancel</Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deal.communications.map((comm, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{comm.type}</Badge>
                        <span className="font-medium">{comm.subject}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{comm.date}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">From: {comm.from}</span>
                      <span className="text-sm text-muted-foreground">To: {comm.to}</span>
                    </div>
                    <p className="text-sm">{comm.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Background Reports Tab */}
        <TabsContent value="background" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-5 w-5" />
                Background Reports Summary
              </CardTitle>
              <CardDescription>Summary of all background reports pulled for this deal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {deal.backgroundReports.map((report, index) => (
                  <Card key={index} className="border-l-4 border-l-[#4E0F60]">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">{report.type}</CardTitle>
                      <CardDescription>Provider: {report.provider}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Date:</span>
                          <span className="text-sm font-medium">{report.date}</span>
                        </div>
                        {report.score && (
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Score:</span>
                            <span className="text-sm font-medium">{report.score}</span>
                          </div>
                        )}
                        {report.findings && (
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Findings:</span>
                            <span className="text-sm font-medium">{report.findings}</span>
                          </div>
                        )}
                        {report.avgBalance && (
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Avg Balance:</span>
                            <span className="text-sm font-medium">{report.avgBalance}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Status:</span>
                          <Badge className={report.status === 'Approved' || report.status === 'Clear' ? 'bg-[#25A900] text-white' : 'bg-[#FF5F0C] text-white'}>
                            {report.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Comments Tab */}
        <TabsContent value="comments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Internal Comments & Notes
              </CardTitle>
              <CardDescription>Internal comments and notes about this deal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Add new comment */}
                <div className="border rounded-lg p-4 bg-[#F9F8FD]">
                  <h4 className="font-medium mb-3">Add New Comment</h4>
                  <div className="space-y-3">
                    <Textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Add your internal comment or note here..."
                      rows={3}
                    />
                    <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Comment
                    </Button>
                  </div>
                </div>

                {/* Existing comments */}
                <div className="space-y-3">
                  {deal.comments.map((comment, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-sm text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-sm">{comment.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}