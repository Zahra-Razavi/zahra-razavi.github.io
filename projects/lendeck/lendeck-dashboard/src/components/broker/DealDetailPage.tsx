import { useParams, Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ArrowLeft, Share, FileText, Upload, Download, MessageSquare, Clock, User, Building, DollarSign, Calendar, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Progress } from '../ui/progress';

const mockDeals = [
  {
    id: 'D001',
    company: 'Tech Solutions Inc',
    rep: 'John Smith',
    amount: '$150,000',
    status: 'Documents Pending',
    dateAdded: '2024-01-15',
    webformLink: 'https://forms.lendeck.com/d001',
    email: 'contact@techsolutions.com',
    phone: '(555) 123-4567',
    industry: 'Technology',
    yearsInBusiness: '8',
    creditScore: '720',
    monthlyRevenue: '$45,000',
    loanPurpose: 'Equipment Financing',
    timeline: 'Within 30 days',
    collateral: 'Equipment & Inventory'
  },
  {
    id: 'D002', 
    company: 'Green Energy Co',
    rep: 'Sarah Johnson',
    amount: '$200,000',
    status: 'Ready to Submit',
    dateAdded: '2024-01-14',
    webformLink: 'https://forms.lendeck.com/d002',
    email: 'info@greenenergy.com',
    phone: '(555) 987-6543',
    industry: 'Energy',
    yearsInBusiness: '12',
    creditScore: '685',
    monthlyRevenue: '$67,000',
    loanPurpose: 'Working Capital',
    timeline: 'ASAP',
    collateral: 'Accounts Receivable'
  },
  {
    id: 'D003',
    company: 'Retail Plus LLC', 
    rep: 'Mike Davis',
    amount: '$75,000',
    status: 'Under Review',
    dateAdded: '2024-01-12',
    webformLink: 'https://forms.lendeck.com/d003',
    email: 'sales@retailplus.com',
    phone: '(555) 456-7890',
    industry: 'Retail',
    yearsInBusiness: '5',
    creditScore: '650',
    monthlyRevenue: '$28,000',
    loanPurpose: 'Inventory Expansion',
    timeline: 'Within 60 days',
    collateral: 'Inventory'
  }
];

const mockDocuments = [
  { name: 'Bank Statements (3 months)', status: 'completed', uploadDate: '2024-01-15' },
  { name: 'Tax Returns (2 years)', status: 'pending', uploadDate: null },
  { name: 'Business License', status: 'completed', uploadDate: '2024-01-14' },
  { name: 'Financial Statements', status: 'in-review', uploadDate: '2024-01-13' },
  { name: 'Voided Check', status: 'completed', uploadDate: '2024-01-15' }
];

const mockNotes = [
  {
    id: 1,
    author: 'John Smith',
    date: '2024-01-15 10:30 AM',
    note: 'Client is very responsive and has provided all initial documentation. Strong credit profile.',
    type: 'internal'
  },
  {
    id: 2,
    author: 'System',
    date: '2024-01-15 9:15 AM',
    note: 'Document upload completed: Bank Statements',
    type: 'system'
  },
  {
    id: 3,
    author: 'Sarah Johnson',
    date: '2024-01-14 4:45 PM',
    note: 'Spoke with client about timeline. They need funding within 30 days for equipment purchase.',
    type: 'client'
  }
];

export function DealDetailPage() {
  const { id } = useParams();
  const deal = mockDeals.find(d => d.id === id);

  if (!deal) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/broker/deals">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Deals
            </Button>
          </Link>
        </div>
        <Card>
          <CardContent className="p-8 text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Deal Not Found</h3>
            <p className="text-muted-foreground">The deal you're looking for doesn't exist or has been removed.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Documents Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Ready to Submit': return 'bg-green-100 text-green-800 border-green-200';
      case 'Under Review': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDocumentStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pending': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'in-review': return <AlertCircle className="h-4 w-4 text-blue-600" />;
      default: return <XCircle className="h-4 w-4 text-red-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/broker/deals">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Deals
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Deal {deal.id}</h1>
            <p className="text-muted-foreground">{deal.company}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={getStatusColor(deal.status)}>
            {deal.status}
          </Badge>
          <Button variant="outline" size="sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            Add Note
          </Button>
          <Button className="bg-[#4E0F60] hover:bg-[#4E0F60]/90">
            <Upload className="h-4 w-4 mr-2" />
            Submit Deal
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="background">Background</TabsTrigger>
          <TabsTrigger value="submit">Submit</TabsTrigger>
          <TabsTrigger value="notes">Notes & Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Deal Information */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Deal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deal ID:</span>
                      <span className="font-medium">{deal.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company:</span>
                      <span className="font-medium">{deal.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-medium text-green-600">{deal.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rep:</span>
                      <span className="font-medium">{deal.rep}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date Added:</span>
                      <span className="font-medium">{deal.dateAdded}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email:</span>
                      <span className="font-medium">{deal.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Phone:</span>
                      <span className="font-medium">{deal.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Industry:</span>
                      <span className="font-medium">{deal.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Credit Score:</span>
                      <span className="font-medium">{deal.creditScore}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">{deal.timeline}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-sm font-medium mb-2 block">Webform Link</label>
                  <div className="flex items-center gap-2">
                    <Input 
                      value={deal.webformLink} 
                      readOnly 
                      className="text-sm"
                    />
                    <Button variant="outline" size="sm">
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Application
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Download Summary
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Contact Client
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Tracking */}
          <Card>
            <CardHeader>
              <CardTitle>Deal Progress</CardTitle>
              <CardDescription>Track the current stage of this deal</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Documents Collection</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2" />
                <div className="grid grid-cols-4 gap-4 text-center text-sm">
                  <div className="space-y-2">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span>Initial Info</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <Clock className="h-4 w-4" />
                    </div>
                    <span>Documents</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto">
                      <AlertCircle className="h-4 w-4" />
                    </div>
                    <span>Review</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto">
                      <Upload className="h-4 w-4" />
                    </div>
                    <span>Submit</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Document Checklist</CardTitle>
              <CardDescription>Required documents for loan application</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Upload Date</TableHead>
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
                      <TableCell>{doc.uploadDate || 'Not uploaded'}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Upload className="h-4 w-4" />
                          </Button>
                          {doc.uploadDate && (
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
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

        <TabsContent value="background" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Years in Business:</span>
                    <span className="font-medium">{deal.yearsInBusiness} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monthly Revenue:</span>
                    <span className="font-medium">{deal.monthlyRevenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="font-medium">{deal.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Credit Score:</span>
                    <span className="font-medium">{deal.creditScore}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loan Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Purpose:</span>
                    <span className="font-medium">{deal.loanPurpose}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount Requested:</span>
                    <span className="font-medium text-green-600">{deal.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Timeline:</span>
                    <span className="font-medium">{deal.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Collateral:</span>
                    <span className="font-medium">{deal.collateral}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="submit" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Submit to Lenders</CardTitle>
              <CardDescription>Review and submit this deal to selected lenders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Select Lenders</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lender1" />
                      <label htmlFor="lender1" className="text-sm">Capital One Business</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lender2" />
                      <label htmlFor="lender2" className="text-sm">Wells Fargo Equipment Finance</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lender3" />
                      <label htmlFor="lender3" className="text-sm">Alternative Lending Solutions</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Additional Notes</label>
                  <Textarea placeholder="Add any additional information for lenders..." />
                </div>
              </div>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline">Save Draft</Button>
                <Button className="bg-[#4E0F60] hover:bg-[#4E0F60]/90">
                  Submit to Lenders
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notes & Activity</CardTitle>
              <CardDescription>Communication log and deal activity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Textarea placeholder="Add a new note..." />
                  <div className="flex justify-end mt-2">
                    <Button size="sm" className="bg-[#4E0F60] hover:bg-[#4E0F60]/90">
                      Add Note
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  {mockNotes.map((note) => (
                    <div key={note.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{note.author}</span>
                          <Badge variant="outline" className="text-xs">
                            {note.type}
                          </Badge>
                        </div>
                        <span className="text-sm text-muted-foreground">{note.date}</span>
                      </div>
                      <p className="text-sm">{note.note}</p>
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