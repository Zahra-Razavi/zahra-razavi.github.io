import { useParams, Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ArrowLeft, MessageSquare, Clock, FileText, DollarSign, Building, Calendar, TrendingUp, AlertCircle, CheckCircle, XCircle, Download, Eye } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Progress } from '../ui/progress';
import { Separator } from '../ui/separator';
import { Textarea } from '../ui/textarea';

const mockSubmissions = [
  {
    id: 'SUB001',
    dealId: 'D001',
    company: 'Tech Solutions Inc',
    amount: '$150,000',
    status: 'Under Review',
    submittedDate: '2024-01-16',
    lender: 'Capital One Business',
    expectedDecision: '2024-01-23',
    submittedBy: 'John Smith',
    priority: 'high',
    lenderContact: 'Sarah Miller',
    lenderEmail: 'sarah.miller@capitalone.com',
    applicationId: 'CO-2024-001567'
  },
  {
    id: 'SUB002', 
    dealId: 'D002',
    company: 'Green Energy Co',
    amount: '$200,000',
    status: 'Approved',
    submittedDate: '2024-01-15',
    lender: 'Wells Fargo Equipment',
    expectedDecision: '2024-01-22',
    submittedBy: 'Sarah Johnson',
    priority: 'medium',
    lenderContact: 'Mike Johnson',
    lenderEmail: 'mike.johnson@wellsfargo.com',
    applicationId: 'WF-2024-002891'
  },
  {
    id: 'SUB003',
    dealId: 'D003',
    company: 'Retail Plus LLC',
    amount: '$75,000',
    status: 'Pending Documents',
    submittedDate: '2024-01-14',
    lender: 'Alternative Lending Solutions',
    expectedDecision: '2024-01-28',
    submittedBy: 'Mike Davis',
    priority: 'medium',
    lenderContact: 'Jennifer Lee',
    lenderEmail: 'jennifer.lee@altlending.com',
    applicationId: 'ALS-2024-003421'
  }
];

const mockOffers = [
  {
    id: 1,
    lender: 'Capital One Business',
    amount: '$150,000',
    rate: '8.5%',
    term: '60 months',
    payment: '$3,045',
    conditions: 'Personal guarantee required',
    expires: '2024-01-30',
    status: 'pending'
  },
  {
    id: 2,
    lender: 'Alternative Lending Solutions',
    amount: '$135,000',
    rate: '12.2%',
    term: '48 months',
    payment: '$3,567',
    conditions: 'Equipment as collateral',
    expires: '2024-01-28',
    status: 'declined'
  }
];

const mockTimeline = [
  { date: '2024-01-16 10:30 AM', event: 'Application submitted to Capital One Business', type: 'submission' },
  { date: '2024-01-16 11:15 AM', event: 'Application received and assigned case #CO-2024-001567', type: 'system' },
  { date: '2024-01-17 2:30 PM', event: 'Initial underwriting review completed', type: 'lender' },
  { date: '2024-01-18 9:00 AM', event: 'Additional documentation requested', type: 'lender' },
  { date: '2024-01-18 3:45 PM', event: 'Documentation provided by client', type: 'client' },
  { date: '2024-01-19 11:20 AM', event: 'Credit verification completed', type: 'system' }
];

export function SubmissionDetailPage() {
  const { id } = useParams();
  const submission = mockSubmissions.find(s => s.id === id);

  if (!submission) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/broker/submissions">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Submissions
            </Button>
          </Link>
        </div>
        <Card>
          <CardContent className="p-8 text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Submission Not Found</h3>
            <p className="text-muted-foreground">The submission you're looking for doesn't exist or has been removed.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Approved': return 'bg-green-100 text-green-800 border-green-200';
      case 'Rejected': return 'bg-red-100 text-red-800 border-red-200';
      case 'Pending Documents': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getOfferStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pending': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'declined': return <XCircle className="h-4 w-4 text-red-600" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/broker/submissions">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Submissions
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Submission {submission.id}</h1>
            <p className="text-muted-foreground">{submission.company} - {submission.lender}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={getStatusColor(submission.status)}>
            {submission.status}
          </Badge>
          <Badge className={getPriorityColor(submission.priority)}>
            {submission.priority} priority
          </Badge>
          <Button variant="outline" size="sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact Lender
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="offers">Offers</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Submission Information */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Submission Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Submission ID:</span>
                      <span className="font-medium">{submission.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deal ID:</span>
                      <Link to={`/broker/deals/${submission.dealId}`} className="font-medium text-blue-600 hover:underline">
                        {submission.dealId}
                      </Link>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company:</span>
                      <span className="font-medium">{submission.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-medium text-green-600">{submission.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Submitted By:</span>
                      <span className="font-medium">{submission.submittedBy}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lender:</span>
                      <span className="font-medium">{submission.lender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Application ID:</span>
                      <span className="font-medium">{submission.applicationId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Submitted Date:</span>
                      <span className="font-medium">{submission.submittedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected Decision:</span>
                      <span className="font-medium">{submission.expectedDecision}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lender Contact:</span>
                      <span className="font-medium">{submission.lenderContact}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Status Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Status Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-1">Under Review</h3>
                  <p className="text-sm text-muted-foreground">Lender is reviewing application</p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    Expected decision by {submission.expectedDecision}
                  </p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Download Application
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    View Original Deal
                  </Button>
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
                    <div className="text-xl">3</div>
                    <div className="text-sm text-muted-foreground">Days Since Submission</div>
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
                    <div className="text-xl">85%</div>
                    <div className="text-sm text-muted-foreground">Response Rate</div>
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
                    <div className="text-xl">7d</div>
                    <div className="text-sm text-muted-foreground">Avg. Decision Time</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-lendeck-success/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-lendeck-success" />
                  </div>
                  <div>
                    <div className="text-xl">72%</div>
                    <div className="text-sm text-muted-foreground">Approval Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="offers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Loan Offers</CardTitle>
              <CardDescription>Offers received from lenders for this submission</CardDescription>
            </CardHeader>
            <CardContent>
              {mockOffers.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Status</TableHead>
                      <TableHead>Lender</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Rate</TableHead>
                      <TableHead>Term</TableHead>
                      <TableHead>Monthly Payment</TableHead>
                      <TableHead>Expires</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockOffers.map((offer) => (
                      <TableRow key={offer.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getOfferStatusIcon(offer.status)}
                            <span className="capitalize">{offer.status}</span>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{offer.lender}</TableCell>
                        <TableCell className="text-green-600 font-medium">{offer.amount}</TableCell>
                        <TableCell>{offer.rate}</TableCell>
                        <TableCell>{offer.term}</TableCell>
                        <TableCell>{offer.payment}</TableCell>
                        <TableCell>{offer.expires}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            {offer.status === 'pending' && (
                              <>
                                <Button variant="ghost" size="sm" className="text-green-600">
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-600">
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-8">
                  <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Offers Yet</h3>
                  <p className="text-muted-foreground">Offers will appear here once lenders respond to the submission.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Submission Timeline</CardTitle>
              <CardDescription>Track all activity and updates for this submission</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockTimeline.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{event.event}</p>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Add Update</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea placeholder="Add a note about this submission..." />
              <div className="flex justify-end">
                <Button className="bg-[#4E0F60] hover:bg-[#4E0F60]/90">
                  Add Update
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Submission Documents</CardTitle>
              <CardDescription>Documents submitted to the lender</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Submitted Date</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Business Application Form</TableCell>
                    <TableCell>PDF</TableCell>
                    <TableCell>2024-01-16</TableCell>
                    <TableCell>2.3 MB</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Bank Statements (3 months)</TableCell>
                    <TableCell>PDF</TableCell>
                    <TableCell>2024-01-16</TableCell>
                    <TableCell>1.8 MB</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Tax Returns (2 years)</TableCell>
                    <TableCell>PDF</TableCell>
                    <TableCell>2024-01-16</TableCell>
                    <TableCell>4.1 MB</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}