import { useParams, Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ArrowLeft, MessageSquare, Clock, FileText, DollarSign, Building, Calendar, Download, Upload, AlertCircle, CheckCircle, XCircle, RefreshCw, CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Separator } from '../ui/separator';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const mockACHTransactions = [
  {
    id: 'ACH001',
    type: 'disbursement',
    dealId: 'FD001',
    company: 'Tech Solutions Inc',
    amount: '$150,000',
    status: 'Completed',
    processedDate: '2024-01-25',
    initiatedDate: '2024-01-25',
    bankAccount: '****1234',
    bankName: 'Chase Business Bank',
    routingNumber: '021000021',
    reference: 'LOAN-DISBURSEMENT-001',
    confirmationNumber: 'CNF789456123',
    processingTime: '2 hours',
    fee: '$15.00',
    description: 'Loan disbursement for equipment financing'
  },
  {
    id: 'ACH002',
    type: 'commission',
    dealId: 'FD001',
    company: 'Lendeck Commission',
    amount: '$5,250',
    status: 'Completed',
    processedDate: '2024-01-26',
    initiatedDate: '2024-01-26',
    bankAccount: '****5678',
    bankName: 'Wells Fargo Business',
    routingNumber: '121000248',
    reference: 'COMMISSION-PAYMENT-001',
    confirmationNumber: 'CNF789456124',
    processingTime: '1 hour',
    fee: '$2.50',
    description: 'Commission payment for deal FD001'
  },
  {
    id: 'ACH003',
    type: 'disbursement',
    dealId: 'FD002',
    company: 'Green Energy Co',
    amount: '$200,000',
    status: 'Completed',
    processedDate: '2024-01-22',
    initiatedDate: '2024-01-22',
    bankAccount: '****9876',
    bankName: 'Bank of America Business',
    routingNumber: '021000021',
    reference: 'LOAN-DISBURSEMENT-002',
    confirmationNumber: 'CNF789456125',
    processingTime: '3 hours',
    fee: '$20.00',
    description: 'Loan disbursement for working capital'
  },
  {
    id: 'ACH004',
    type: 'disbursement',
    dealId: 'FD003',
    company: 'Retail Plus LLC',
    amount: '$75,000',
    status: 'Processing',
    processedDate: null,
    initiatedDate: '2024-01-24',
    bankAccount: '****3456',
    bankName: 'PNC Business Banking',
    routingNumber: '043000096',
    reference: 'LOAN-DISBURSEMENT-003',
    confirmationNumber: 'CNF789456126',
    processingTime: 'In progress',
    fee: '$12.50',
    description: 'Loan disbursement for inventory expansion'
  }
];

const mockTransactionDetails = [
  { label: 'Transaction ID', value: 'ACH001' },
  { label: 'Type', value: 'Disbursement' },
  { label: 'Amount', value: '$150,000' },
  { label: 'Status', value: 'Completed' },
  { label: 'Initiated Date', value: '2024-01-25 10:30 AM' },
  { label: 'Processed Date', value: '2024-01-25 12:45 PM' },
  { label: 'Processing Time', value: '2 hours 15 minutes' },
  { label: 'Confirmation Number', value: 'CNF789456123' },
  { label: 'Reference', value: 'LOAN-DISBURSEMENT-001' }
];

const mockBankDetails = [
  { label: 'Bank Name', value: 'Chase Business Bank' },
  { label: 'Account Number', value: '****1234' },
  { label: 'Routing Number', value: '021000021' },
  { label: 'Account Type', value: 'Business Checking' },
  { label: 'Account Holder', value: 'Tech Solutions Inc' }
];

const mockStatusHistory = [
  { status: 'Initiated', date: '2024-01-25 10:30 AM', description: 'ACH transaction initiated by system' },
  { status: 'Submitted', date: '2024-01-25 10:32 AM', description: 'Transaction submitted to ACH network' },
  { status: 'Processing', date: '2024-01-25 11:00 AM', description: 'Transaction being processed by receiving bank' },
  { status: 'Completed', date: '2024-01-25 12:45 PM', description: 'Funds successfully transferred to recipient account' }
];

const mockRelatedTransactions = [
  { id: 'ACH002', type: 'Commission', amount: '$5,250', date: '2024-01-26', status: 'Completed' },
  { id: 'ACH003', type: 'Fee', amount: '$15.00', date: '2024-01-25', status: 'Completed' }
];

export function ACHDetailPage() {
  const { id } = useParams();
  const transaction = mockACHTransactions.find(t => t.id === id);

  if (!transaction) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/broker/ach-management">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to ACH Management
            </Button>
          </Link>
        </div>
        <Card>
          <CardContent className="p-8 text-center">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Transaction Not Found</h3>
            <p className="text-muted-foreground">The ACH transaction you're looking for doesn't exist or has been removed.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'Processing': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Failed': return 'bg-red-100 text-red-800 border-red-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Cancelled': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'disbursement': return <ArrowUpRight className="h-5 w-5 text-green-600" />;
      case 'commission': return <ArrowDownRight className="h-5 w-5 text-blue-600" />;
      default: return <CreditCard className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Processing': return <RefreshCw className="h-4 w-4 text-blue-600 animate-spin" />;
      case 'Failed': return <XCircle className="h-4 w-4 text-red-600" />;
      case 'Pending': return <Clock className="h-4 w-4 text-yellow-600" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/broker/ach-management">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to ACH Management
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">ACH Transaction {transaction.id}</h1>
            <p className="text-muted-foreground">{transaction.company} - {transaction.type}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={getStatusColor(transaction.status)}>
            {transaction.status}
          </Badge>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download Receipt
          </Button>
          <Button variant="outline" size="sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact Support
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="bank-details">Bank Details</TabsTrigger>
          <TabsTrigger value="status-history">Status History</TabsTrigger>
          <TabsTrigger value="related">Related Transactions</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Transaction Summary */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {getTypeIcon(transaction.type)}
                  Transaction Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    {mockTransactionDetails.slice(0, 5).map((detail, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-muted-foreground">{detail.label}:</span>
                        <span className="font-medium">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {mockTransactionDetails.slice(5).map((detail, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-muted-foreground">{detail.label}:</span>
                        <span className="font-medium">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Description</label>
                  <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded">
                    {transaction.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Status Card */}
            <Card>
              <CardHeader>
                <CardTitle>Current Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    {getStatusIcon(transaction.status)}
                  </div>
                  <h3 className="font-semibold text-green-600">{transaction.status}</h3>
                  <p className="text-sm text-muted-foreground">Transaction completed successfully</p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Processing Fee:</span>
                    <span className="font-medium">{transaction.fee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Processing Time:</span>
                    <span className="font-medium">{transaction.processingTime}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Download Receipt
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    View Deal Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Transaction Amount */}
          <Card>
            <CardHeader>
              <CardTitle>Transaction Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 border rounded-lg">
                  <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-600" />
                  <h3 className="font-semibold mb-2">Transaction Amount</h3>
                  <p className="text-3xl font-bold text-green-600">{transaction.amount}</p>
                </div>
                
                <div className="text-center p-6 border rounded-lg">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">Processing Time</h3>
                  <p className="text-3xl font-bold">{transaction.processingTime}</p>
                </div>
                
                <div className="text-center p-6 border rounded-lg">
                  <CreditCard className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                  <h3 className="font-semibold mb-2">Processing Fee</h3>
                  <p className="text-3xl font-bold">{transaction.fee}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bank-details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Bank Account Information</CardTitle>
              <CardDescription>Details of the bank account involved in this transaction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {mockBankDetails.map((detail, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-muted-foreground">{detail.label}:</span>
                      <span className="font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Verification Status</h4>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Account verified</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Last Verification</h4>
                    <p className="text-sm text-muted-foreground">January 20, 2024</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Transaction Limits</h4>
                    <p className="text-sm text-muted-foreground">Daily: $500,000</p>
                    <p className="text-sm text-muted-foreground">Monthly: $2,000,000</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ACH Network Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">NACHA File ID</label>
                    <Input value="NAC20240125001567" readOnly />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Batch Number</label>
                    <Input value="BTH240125789" readOnly />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Settlement Date</label>
                    <Input value="2024-01-25" readOnly />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Trace Number</label>
                    <Input value="021000021234567890" readOnly />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="status-history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Transaction Status History</CardTitle>
              <CardDescription>Detailed timeline of transaction processing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mockStatusHistory.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      {index === mockStatusHistory.length - 1 ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{event.status}</p>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{event.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="related" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Related Transactions</CardTitle>
              <CardDescription>Other transactions associated with this deal</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockRelatedTransactions.map((trans) => (
                    <TableRow key={trans.id}>
                      <TableCell className="font-medium">{trans.id}</TableCell>
                      <TableCell>{trans.type}</TableCell>
                      <TableCell className="text-green-600 font-medium">{trans.amount}</TableCell>
                      <TableCell>{trans.date}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(trans.status)}>
                          {trans.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Link to={`/broker/ach-management/${trans.id}`}>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help with this transaction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Common Issues</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      Transaction Not Received
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Incorrect Amount
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Request Transaction Copy
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Dispute Transaction
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">support@lendeck.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">(555) 123-LEND</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Mon-Fri 8AM-6PM EST</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submit Support Request</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Issue Type</label>
                <select className="w-full p-2 border rounded">
                  <option>Transaction Not Received</option>
                  <option>Incorrect Amount</option>
                  <option>Processing Delay</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Description</label>
                <Textarea placeholder="Describe your issue in detail..." />
              </div>
              
              <div className="flex justify-end">
                <Button className="bg-[#4E0F60] hover:bg-[#4E0F60]/90">
                  Submit Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}