import { useParams, Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ArrowLeft, Share, FileText, Upload, Download, MessageSquare, Clock, User, Building, DollarSign, Calendar, AlertCircle, CheckCircle, XCircle, Eye, MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
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
    collateral: 'Equipment & Inventory',
    owner: 'David Chen',
    ownershipPct: '100%',
    entityType: 'S-Corporation',
    businessAddress: '4200 Innovation Way, Austin, TX 78759'
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
    collateral: 'Accounts Receivable',
    owner: 'Maria Alvarez',
    ownershipPct: '60%',
    entityType: 'LLC',
    businessAddress: '880 Solar Park Dr, Phoenix, AZ 85004'
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
    collateral: 'Inventory',
    owner: 'James Porter',
    ownershipPct: '50%',
    entityType: 'LLC (two members)',
    businessAddress: '1530 Market St, Columbus, OH 43215'
  }
];

const dealDocuments: Record<string, { name: string; status: string; uploadDate: string | null }[]> = {
  D001: [
    { name: 'Bank Statements (3 months)', status: 'completed', uploadDate: '2024-01-15' },
    { name: 'Equipment Purchase Quote', status: 'pending', uploadDate: null },
    { name: 'Tax Returns (2 years)', status: 'pending', uploadDate: null },
    { name: 'Business License', status: 'completed', uploadDate: '2024-01-14' },
    { name: 'Financial Statements (YTD)', status: 'in-review', uploadDate: '2024-01-13' },
    { name: 'Voided Check', status: 'completed', uploadDate: '2024-01-15' }
  ],
  D002: [
    { name: 'Bank Statements (6 months)', status: 'completed', uploadDate: '2024-01-12' },
    { name: 'Tax Returns (2 years)', status: 'completed', uploadDate: '2024-01-12' },
    { name: 'A/R Aging Report', status: 'completed', uploadDate: '2024-01-13' },
    { name: 'Business Debt Schedule', status: 'completed', uploadDate: '2024-01-13' },
    { name: "Owner's Driver License", status: 'completed', uploadDate: '2024-01-11' },
    { name: 'Voided Check', status: 'completed', uploadDate: '2024-01-11' }
  ],
  D003: [
    { name: 'Bank Statements (3 months)', status: 'completed', uploadDate: '2024-01-10' },
    { name: 'Sales Tax Returns (4 quarters)', status: 'in-review', uploadDate: '2024-01-11' },
    { name: 'Inventory Valuation Report', status: 'in-review', uploadDate: '2024-01-11' },
    { name: 'Store Lease Agreement', status: 'completed', uploadDate: '2024-01-10' },
    { name: 'Tax Returns (2 years)', status: 'pending', uploadDate: null }
  ]
};

const dealNotes: Record<string, { id: number; author: string; date: string; note: string; type: string }[]> = {
  D001: [
    {
      id: 1,
      author: 'John Smith',
      date: '2024-01-15 10:30 AM',
      note: 'Client is very responsive and has provided all initial documentation. Strong credit profile — 720 FICO. Waiting on the equipment vendor quote before we can finalize the package.',
      type: 'internal'
    },
    {
      id: 2,
      author: 'System',
      date: '2024-01-15 9:15 AM',
      note: 'Document upload completed: Bank Statements (3 months)',
      type: 'system'
    },
    {
      id: 3,
      author: 'John Smith',
      date: '2024-01-14 4:45 PM',
      note: 'Spoke with client about timeline. They need funding within 30 days for a CNC machine purchase. Vendor is holding the price until end of month.',
      type: 'client'
    }
  ],
  D002: [
    {
      id: 1,
      author: 'Sarah Johnson',
      date: '2024-01-16 2:20 PM',
      note: 'Full document package verified. A/R aging looks healthy — 85% of receivables under 60 days. Deal is ready to submit; client confirmed they want offers ASAP.',
      type: 'internal'
    },
    {
      id: 2,
      author: 'System',
      date: '2024-01-16 11:05 AM',
      note: 'All required documents received. Deal status changed to Ready to Submit.',
      type: 'system'
    },
    {
      id: 3,
      author: 'Sarah Johnson',
      date: '2024-01-15 3:30 PM',
      note: 'Client call: working capital needed to bridge a utility-scale solar install contract. Existing funding position with OnDeck will be paid off at closing.',
      type: 'client'
    },
    {
      id: 4,
      author: 'System',
      date: '2024-01-14 9:00 AM',
      note: 'Document upload completed: Business Debt Schedule',
      type: 'system'
    }
  ],
  D003: [
    {
      id: 1,
      author: 'Mike Davis',
      date: '2024-01-14 1:15 PM',
      note: 'Credit score (650) is below prime threshold — flagged for manual review. Inventory valuation report sent to underwriting for verification.',
      type: 'internal'
    },
    {
      id: 2,
      author: 'System',
      date: '2024-01-13 10:40 AM',
      note: 'Deal status changed to Under Review.',
      type: 'system'
    },
    {
      id: 3,
      author: 'Mike Davis',
      date: '2024-01-12 5:00 PM',
      note: 'Client expanding to a second location before the spring season. Landlord reference confirmed 5 years of on-time rent payments at current store.',
      type: 'client'
    }
  ]
};

const dealProgress: Record<string, { percent: number; stages: { label: string; status: 'complete' | 'active' | 'pending' }[] }> = {
  D001: {
    percent: 60,
    stages: [
      { label: 'Initial Info', status: 'complete' },
      { label: 'Documents', status: 'active' },
      { label: 'Review', status: 'pending' },
      { label: 'Submit', status: 'pending' }
    ]
  },
  D002: {
    percent: 100,
    stages: [
      { label: 'Initial Info', status: 'complete' },
      { label: 'Documents', status: 'complete' },
      { label: 'Review', status: 'complete' },
      { label: 'Submit', status: 'active' }
    ]
  },
  D003: {
    percent: 80,
    stages: [
      { label: 'Initial Info', status: 'complete' },
      { label: 'Documents', status: 'complete' },
      { label: 'Review', status: 'active' },
      { label: 'Submit', status: 'pending' }
    ]
  }
};

const dealLenders: Record<string, string[]> = {
  D001: ['Wells Fargo Equipment Finance', 'CIT Equipment Leasing', 'Balboa Capital'],
  D002: ['Capital One Business', 'Rapid Finance', 'Credibly Working Capital'],
  D003: ['Alternative Lending Solutions', 'Fora Financial', 'Reliant Funding']
};

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

  const documents = dealDocuments[deal.id] ?? [];
  const notes = dealNotes[deal.id] ?? [];
  const progress = dealProgress[deal.id] ?? { percent: 0, stages: [] };
  const lenders = dealLenders[deal.id] ?? [];

  const getStageClasses = (status: 'complete' | 'active' | 'pending') => {
    switch (status) {
      case 'complete': return 'bg-green-100 text-green-600';
      case 'active': return 'bg-[#FF5F0C]/10 text-[#FF5F0C]';
      default: return 'bg-gray-100 text-gray-400';
    }
  };

  const getStageIcon = (status: 'complete' | 'active' | 'pending') => {
    switch (status) {
      case 'complete': return <CheckCircle className="h-4 w-4" />;
      case 'active': return <Clock className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
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
            <h1 className="text-2xl font-bold">{deal.id} — {deal.company} Deal Detail</h1>
            <p className="text-muted-foreground">{deal.industry} • Rep: {deal.rep}</p>
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
          <Button className="bg-[#FF5F0C] hover:bg-[#FF5F0C]/90">
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
                  <span>{progress.percent}%</span>
                </div>
                <Progress value={progress.percent} className="h-2" />
                <div className="grid grid-cols-4 gap-4 text-center text-sm">
                  {progress.stages.map((stage) => (
                    <div key={stage.label} className="space-y-2">
                      <div className={`w-8 h-8 ${getStageClasses(stage.status)} rounded-full flex items-center justify-center mx-auto`}>
                        {getStageIcon(stage.status)}
                      </div>
                      <span>{stage.label}</span>
                    </div>
                  ))}
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
                  {documents.map((doc, index) => (
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
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Upload className="h-4 w-4 mr-2" />
                                Upload
                              </DropdownMenuItem>
                              {doc.uploadDate && (
                                <DropdownMenuItem>
                                  <Download className="h-4 w-4 mr-2" />
                                  Download
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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

            <Card>
              <CardHeader>
                <CardTitle>Owner Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Owner:</span>
                    <span className="font-medium">{deal.owner}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ownership:</span>
                    <span className="font-medium">{deal.ownershipPct}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Entity Type:</span>
                    <span className="font-medium">{deal.entityType}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-muted-foreground shrink-0">Address:</span>
                    <span className="font-medium text-right">{deal.businessAddress}</span>
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
                  <p className="text-sm text-muted-foreground mb-2">Recommended for {deal.loanPurpose.toLowerCase()}</p>
                  <div className="space-y-2">
                    {lenders.map((lender, index) => (
                      <div key={lender} className="flex items-center space-x-2">
                        <Checkbox id={`lender${index + 1}`} />
                        <label htmlFor={`lender${index + 1}`} className="text-sm">{lender}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Additional Notes</label>
                  <Textarea placeholder="Add any additional information for lenders..." />
                </div>
              </div>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline">Save Draft</Button>
                <Button className="bg-[#FF5F0C] hover:bg-[#FF5F0C]/90">
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
                    <Button size="sm" className="bg-[#FF5F0C] hover:bg-[#FF5F0C]/90">
                      Add Note
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  {notes.map((note) => (
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