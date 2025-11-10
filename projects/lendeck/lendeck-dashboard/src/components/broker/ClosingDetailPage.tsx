import { useParams, Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ArrowLeft, MessageSquare, Clock, FileText, DollarSign, Building, Calendar, Download, Upload, Eye, CheckCircle, XCircle, AlertTriangle, Phone, Mail } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Progress } from '../ui/progress';
import { Separator } from '../ui/separator';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';

const mockClosingDeals = [
  {
    id: 'CL001',
    dealId: 'D001',
    submissionId: 'SUB001',
    company: 'Tech Solutions Inc',
    amount: '$150,000',
    status: 'Pending Signatures',
    approvedDate: '2024-01-20',
    expectedClosing: '2024-01-25',
    lender: 'Capital One Business',
    rate: '8.5%',
    term: '60 months',
    monthlyPayment: '$3,045',
    closingManager: 'Jennifer Adams',
    closingEmail: 'jennifer.adams@capitalone.com',
    closingPhone: '(555) 123-9876',
    commissionRate: '3.5%',
    expectedCommission: '$5,250'
  },
  {
    id: 'CL002',
    dealId: 'D002',
    submissionId: 'SUB002',
    company: 'Green Energy Co',
    amount: '$200,000',
    status: 'Ready to Fund',
    approvedDate: '2024-01-18',
    expectedClosing: '2024-01-22',
    lender: 'Wells Fargo Equipment',
    rate: '7.2%',
    term: '72 months',
    monthlyPayment: '$3,245',
    closingManager: 'Robert Chen',
    closingEmail: 'robert.chen@wellsfargo.com',
    closingPhone: '(555) 987-6543',
    commissionRate: '3.0%',
    expectedCommission: '$6,000'
  },
  {
    id: 'CL003',
    dealId: 'D003',
    submissionId: 'SUB003',
    company: 'Retail Plus LLC',
    amount: '$75,000',
    status: 'Documents Pending',
    approvedDate: '2024-01-17',
    expectedClosing: '2024-01-24',
    lender: 'Alternative Lending Solutions',
    rate: '10.5%',
    term: '48 months',
    monthlyPayment: '$1,895',
    closingManager: 'Lisa Rodriguez',
    closingEmail: 'lisa.rodriguez@altlending.com',
    closingPhone: '(555) 456-7890',
    commissionRate: '4.0%',
    expectedCommission: '$3,000'
  }
];

const mockDocuments = [
  { name: 'Loan Agreement', status: 'signed', required: true, dueDate: '2024-01-24', uploadDate: '2024-01-23' },
  { name: 'Personal Guarantee', status: 'pending', required: true, dueDate: '2024-01-25', uploadDate: null },
  { name: 'Insurance Certificate', status: 'uploaded', required: true, dueDate: '2024-01-26', uploadDate: '2024-01-22' },
  { name: 'UCC Filing', status: 'complete', required: true, dueDate: '2024-01-24', uploadDate: '2024-01-23' },
  { name: 'ACH Authorization', status: 'pending', required: true, dueDate: '2024-01-25', uploadDate: null },
  { name: 'Collateral Agreement', status: 'uploaded', required: false, dueDate: '2024-01-27', uploadDate: '2024-01-22' }
];

const mockMilestones = [
  { milestone: 'Loan Approved', status: 'complete', date: '2024-01-20', description: 'Final approval received from lender' },
  { milestone: 'Documents Sent', status: 'complete', date: '2024-01-21', description: 'Closing documents sent to client' },
  { milestone: 'Initial Signatures', status: 'complete', date: '2024-01-23', description: 'Client signed loan agreement' },
  { milestone: 'Final Documentation', status: 'in-progress', date: null, description: 'Remaining documents pending' },
  { milestone: 'Funding Authorized', status: 'pending', date: null, description: 'Final authorization for funding' },
  { milestone: 'Deal Closed', status: 'pending', date: null, description: 'Funds disbursed to client' }
];

const mockMessages = [
  {
    id: 1,
    from: 'Jennifer Adams',
    type: 'lender',
    date: '2024-01-23 2:30 PM',
    message: 'Personal guarantee document needs to be re-signed with witnessed signature. Please coordinate with client.',
    urgent: true
  },
  {
    id: 2,
    from: 'John Smith',
    type: 'broker',
    date: '2024-01-23 10:15 AM',
    message: 'Client confirmed they can complete remaining signatures by end of day tomorrow.',
    urgent: false
  },
  {
    id: 3,
    from: 'System',
    type: 'system',
    date: '2024-01-23 9:00 AM',
    message: 'Insurance certificate uploaded and verified.',
    urgent: false
  }
];

export function ClosingDetailPage() {
  const { id } = useParams();
  const closing = mockClosingDeals.find(c => c.id === id);

  if (!closing) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/broker/closing">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Closing
            </Button>
          </Link>
        </div>
        <Card>
          <CardContent className="p-8 text-center">
            <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Closing Not Found</h3>
            <p className="text-muted-foreground">The closing record you're looking for doesn't exist or has been removed.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending Signatures': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Ready to Fund': return 'bg-green-100 text-green-800 border-green-200';
      case 'Funding Pending': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Closed': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDocumentStatusIcon = (status: string) => {
    switch (status) {
      case 'complete':
      case 'signed': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'uploaded': return <FileText className="h-4 w-4 text-blue-600" />;
      case 'pending': return <Clock className="h-4 w-4 text-yellow-600" />;
      default: return <XCircle className="h-4 w-4 text-red-600" />;
    }
  };

  const getMilestoneStatusIcon = (status: string) => {
    switch (status) {
      case 'complete': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'in-progress': return <Clock className="h-5 w-5 text-blue-600" />;
      case 'pending': return <div className="w-5 h-5 bg-gray-300 rounded-full" />;
      default: return <XCircle className="h-5 w-5 text-red-600" />;
    }
  };

  const completedDocs = mockDocuments.filter(doc => doc.status === 'complete' || doc.status === 'signed').length;
  const totalDocs = mockDocuments.filter(doc => doc.required).length;
  const progressPercentage = Math.round((completedDocs / totalDocs) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/broker/closing">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Closing
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Closing {closing.id}</h1>
            <p className="text-muted-foreground">{closing.company} - {closing.lender}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={getStatusColor(closing.status)}>
            {closing.status}
          </Badge>
          <Button variant="outline" size="sm">
            <Phone className="h-4 w-4 mr-2" />
            Call Lender
          </Button>
          <Button className="bg-[#4E0F60] hover:bg-[#4E0F60]/90">
            <MessageSquare className="h-4 w-4 mr-2" />
            Send Update
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="commission">Commission</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Deal Information */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Closing Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Closing ID:</span>
                      <span className="font-medium">{closing.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deal ID:</span>
                      <Link to={`/broker/deals/${closing.dealId}`} className="font-medium text-blue-600 hover:underline">
                        {closing.dealId}
                      </Link>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company:</span>
                      <span className="font-medium">{closing.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Loan Amount:</span>
                      <span className="font-medium text-green-600">{closing.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Interest Rate:</span>
                      <span className="font-medium">{closing.rate}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lender:</span>
                      <span className="font-medium">{closing.lender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Term:</span>
                      <span className="font-medium">{closing.term}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly Payment:</span>
                      <span className="font-medium">{closing.monthlyPayment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Approved Date:</span>
                      <span className="font-medium">{closing.approvedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected Closing:</span>
                      <span className="font-medium">{closing.expectedClosing}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Closing Manager & Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Closing Manager</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold">{closing.closingManager}</h3>
                  <p className="text-sm text-muted-foreground">{closing.lender}</p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    {closing.closingPhone}
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Completion</span>
                    <span>{progressPercentage}%</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {completedDocs} of {totalDocs} required documents complete
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-lendeck-blue/10 rounded-lg flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-lendeck-blue" />
                  </div>
                  <div>
                    <div className="text-xl">2</div>
                    <div className="text-sm text-muted-foreground">Days to Closing</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-lendeck-yellow/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-lendeck-yellow" />
                  </div>
                  <div>
                    <div className="text-xl">{totalDocs - completedDocs}</div>
                    <div className="text-sm text-muted-foreground">Documents Pending</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-lendeck-success/10 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-lendeck-success" />
                  </div>
                  <div>
                    <div className="text-xl">{closing.expectedCommission}</div>
                    <div className="text-sm text-muted-foreground">Expected Commission</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-lendeck-primary/10 rounded-lg flex items-center justify-center">
                    <Percent className="h-5 w-5 text-lendeck-primary" />
                  </div>
                  <div>
                    <div className="text-xl">{closing.commissionRate}</div>
                    <div className="text-sm text-muted-foreground">Commission Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Closing Documents</CardTitle>
              <CardDescription>Track required documents for loan closing</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Required</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Completed</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockDocuments.map((doc, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{doc.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getDocumentStatusIcon(doc.status)}
                          <span className="capitalize">{doc.status.replace('-', ' ')}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {doc.required ? (
                          <Badge variant="destructive">Required</Badge>
                        ) : (
                          <Badge variant="outline">Optional</Badge>
                        )}
                      </TableCell>
                      <TableCell>{doc.dueDate}</TableCell>
                      <TableCell>{doc.uploadDate || 'Pending'}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          {doc.status === 'pending' && (
                            <Button variant="ghost" size="sm">
                              <Upload className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="milestones" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Closing Milestones</CardTitle>
              <CardDescription>Track progress through the closing process</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mockMilestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      {getMilestoneStatusIcon(milestone.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{milestone.milestone}</h4>
                          <p className="text-sm text-muted-foreground">{milestone.description}</p>
                        </div>
                        <div className="text-right">
                          {milestone.date && (
                            <p className="text-sm font-medium">{milestone.date}</p>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {milestone.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Messages & Communications</CardTitle>
              <CardDescription>Messages between broker, lender, and client</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input placeholder="Type a message..." className="flex-1" />
                  <Button className="bg-[#4E0F60] hover:bg-[#4E0F60]/90">
                    Send
                  </Button>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  {mockMessages.map((message) => (
                    <div key={message.id} className={`border rounded-lg p-4 ${message.urgent ? 'border-red-200 bg-red-50' : ''}`}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{message.from}</span>
                          <Badge variant="outline" className="text-xs">
                            {message.type}
                          </Badge>
                          {message.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">{message.date}</span>
                      </div>
                      <p className="text-sm">{message.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="commission" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Commission Calculation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Amount:</span>
                    <span className="font-medium">{closing.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Commission Rate:</span>
                    <span className="font-medium">{closing.commissionRate}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="font-medium">Expected Commission:</span>
                    <span className="font-bold text-green-600">{closing.expectedCommission}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Payment Status:</span>
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                      Pending Closing
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected Payment:</span>
                    <span className="font-medium">Upon Funding</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Payment Method:</span>
                    <span className="font-medium">ACH Transfer</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}