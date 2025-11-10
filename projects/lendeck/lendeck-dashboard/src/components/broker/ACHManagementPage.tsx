import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  TableActionsMenu,
  TableActionItem,
} from "../ui/table-actions-menu";
import {
  Search,
  Filter,
  Eye,
  Edit,
  RotateCcw,
  FolderOpen,
  Plus,
  Download,
  Calendar,
  DollarSign,
  Building2,
  FileText,
  MessageSquare,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Banknote,
  TrendingUp,
  Clock,
} from "lucide-react";

// Mock data for ACH transactions
const mockTransactions = [
  {
    id: '1',
    transactionId: 'ACH001',
    company: 'Tech Solutions Inc',
    dealId: 'D001',
    type: 'Manual',
    amount: '$50,000',
    splitAmount: '$47,500',
    status: 'Completed',
    date: '2024-01-20',
    lender: 'Business Finance Co'
  },
  {
    id: '2',
    transactionId: 'ACH002',
    company: 'Green Energy LLC',
    dealId: 'D002',
    type: 'Correlated',
    amount: '$75,000',
    splitAmount: '$71,250',
    status: 'Pending',
    date: '2024-01-19',
    lender: 'Capital Partners'
  },
  {
    id: '3',
    transactionId: 'ACH003',
    company: 'Retail Plus LLC',
    dealId: 'D003',
    type: 'Manual',
    amount: '$30,000',
    splitAmount: '$28,500',
    status: 'Failed',
    date: '2024-01-18',
    lender: 'Quick Capital'
  }
];

// Mock data for disbursements
const mockDisbursements = [
  {
    id: '1',
    disbursementId: 'DIS001',
    company: 'Tech Solutions Inc',
    dealId: 'D001',
    amount: '$50,000',
    splitAmount: '$47,500',
    date: '2024-01-20',
    status: 'Completed'
  },
  {
    id: '2',
    disbursementId: 'DIS002',
    company: 'Green Energy LLC',
    dealId: 'D002',
    amount: '$75,000',
    splitAmount: '$71,250',
    date: '2024-01-19',
    status: 'Pending'
  }
];

// Mock companies and deals for dropdowns
const mockCompanies = [
  { id: "1", name: "Tech Solutions Inc" },
  { id: "2", name: "Green Energy LLC" },
  { id: "3", name: "Retail Plus LLC" },
];

const mockDeals = [
  { id: "1", name: "D001 - Tech Solutions Inc" },
  { id: "2", name: "D002 - Green Energy LLC" },
  { id: "3", name: "D003 - Retail Plus LLC" },
];

export function ACHManagementPage() {
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(false);
  const [typeFilter, setTypeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  
  // Disbursement History filters
  const [disbursementSearchTerm, setDisbursementSearchTerm] = useState('');
  const [disbursementStatusFilter, setDisbursementStatusFilter] = useState('all');

  const filteredTransactions = mockTransactions.filter(transaction => {
    const matchesSearch = 
      transaction.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.dealId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter === 'all' || transaction.type.toLowerCase() === typeFilter;
    const matchesStatus = statusFilter === 'all' || transaction.status.toLowerCase() === statusFilter;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const filteredDisbursements = mockDisbursements.filter(disbursement => {
    const matchesSearch = 
      disbursement.disbursementId.toLowerCase().includes(disbursementSearchTerm.toLowerCase()) ||
      disbursement.company.toLowerCase().includes(disbursementSearchTerm.toLowerCase()) ||
      disbursement.dealId.toLowerCase().includes(disbursementSearchTerm.toLowerCase());
    
    const matchesStatus = disbursementStatusFilter === 'all' || disbursement.status.toLowerCase() === disbursementStatusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedTransactions(filteredTransactions.map(t => t.id));
    } else {
      setSelectedTransactions([]);
    }
  };

  const handleSelectTransaction = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedTransactions([...selectedTransactions, id]);
    } else {
      setSelectedTransactions(selectedTransactions.filter(t => t !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">ACH Management</h1>
        <p className="text-muted-foreground">Manage your ACH transactions and disbursements</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-primary/10 rounded-lg flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-lendeck-primary" />
              </div>
              <div>
                <div className="text-xl">127</div>
                <div className="text-sm text-muted-foreground">Total Transactions</div>
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
                <div className="text-xl">$2.4M</div>
                <div className="text-sm text-muted-foreground">Total Volume</div>
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
                <div className="text-xl">8</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-pink/10 rounded-lg flex items-center justify-center">
                <Banknote className="h-5 w-5 text-lendeck-pink" />
              </div>
              <div>
                <div className="text-xl">$228K</div>
                <div className="text-sm text-muted-foreground">Split Earnings</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      

      {/* ACH Transactions Section */}
      <Card>
        <div className="space-y-4 p-4">
          <div>
            <h2 className="text-xl font-semibold">ACH Transactions</h2>
            <p className="text-muted-foreground">View and manage all ACH transactions</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 min-w-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by Deal ID, Company Name, Rep Name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Select
                value={typeFilter}
                onValueChange={setTypeFilter}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="manual">Manual Pull</SelectItem>
                  <SelectItem value="correlated">Correlated Pull</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={statusFilter}
                onValueChange={setStatusFilter}
              >
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={() => setIsFiltersExpanded(!isFiltersExpanded)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                More
                {isFiltersExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {isFiltersExpanded && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
              <div>
                <Label>Date Range</Label>
                <Select defaultValue="30">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">Last 7 days</SelectItem>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="90">Last 90 days</SelectItem>
                    <SelectItem value="custom">Custom Range</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Deal Size Range</Label>
                <div className="flex items-center space-x-2">
                  <Input placeholder="Min" className="w-20" />
                  <span>-</span>
                  <Input placeholder="Max" className="w-20" />
                </div>
              </div>

              <div>
                <Label>Amount Range</Label>
                <div className="flex items-center space-x-2">
                  <Input placeholder="Min" className="w-20" />
                  <span>-</span>
                  <Input placeholder="Max" className="w-20" />
                </div>
              </div>
            </div>
          )}
        </div>

        <CardContent className="p-0">
          {selectedTransactions.length > 0 && (
            <div className="flex items-center space-x-2 mb-4 p-3 bg-muted rounded-lg mx-4 mt-4">
              <span className="text-sm">
                {selectedTransactions.length} transaction(s) selected
              </span>
              <Button size="sm" variant="outline">
                <RotateCcw className="h-4 w-4 mr-1" />
                Retry Selected
              </Button>
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-1" />
                Export Selected
              </Button>
            </div>
          )}

          <Table>
            <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={
                        selectedTransactions.length ===
                        filteredTransactions.length
                      }
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Deal ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Split Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedTransactions.includes(
                          transaction.id
                        )}
                        onCheckedChange={(checked) =>
                          handleSelectTransaction(
                            transaction.id,
                            checked as boolean
                          )
                        }
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {transaction.transactionId}
                    </TableCell>
                    <TableCell>{transaction.company}</TableCell>
                    <TableCell>{transaction.dealId}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          transaction.type === "Manual"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {transaction.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>{transaction.splitAmount}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          transaction.status === "Completed"
                            ? "bg-[#25A900] text-white"
                            : transaction.status === "Pending"
                            ? "bg-[#FF5F0C] text-white"
                            : "bg-[#DD003F] text-white"
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <TableActionsMenu>
                        <TableActionItem
                          onClick={() => {
                            setSelectedTransaction(transaction);
                            setIsDetailOpen(true);
                          }}
                          icon={<Eye className="h-4 w-4" />}
                          label="View Details"
                        />
                        {transaction.status === "Failed" && (
                          <TableActionItem
                            onClick={() => {
                              /* Handle retry action */
                            }}
                            icon={
                              <RotateCcw className="h-4 w-4" />
                            }
                            label="Retry Transaction"
                          />
                        )}
                        <TableActionItem
                          onClick={() => {
                            /* Handle folder action */
                          }}
                          icon={
                            <FolderOpen className="h-4 w-4" />
                          }
                          label="View Folder"
                        />
                      </TableActionsMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

      {/* Manual ACH Pull Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Manual ACH Pull</h2>
          <p className="text-muted-foreground">Initiate manual and correlated ACH pulls</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Manual Pull Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Manual ACH Pull
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="company">Company</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select company" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockCompanies.map((company) => (
                      <SelectItem key={company.id} value={company.id}>
                        {company.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="deal">Deal</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select deal" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockDeals.map((deal) => (
                      <SelectItem key={deal.id} value={deal.id}>
                        {deal.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                />
              </div>

              <div>
                <Label htmlFor="split-amount">
                  Split Amount (Auto-calculated)
                </Label>
                <Input
                  id="split-amount"
                  placeholder="$0.00"
                  disabled
                />
              </div>

              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Additional notes or comments"
                  rows={3}
                />
              </div>

              <Button className="w-full">
                Initiate Manual ACH Pull
              </Button>
            </CardContent>
          </Card>

          {/* Correlated Pull Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Correlated ACH Pull
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="routing">
                  Routing Number
                </Label>
                <Input
                  id="routing"
                  placeholder="Routing number"
                />
              </div>

              <div>
                <Label htmlFor="amount-corr">Amount</Label>
                <Input
                  id="amount-corr"
                  type="number"
                  placeholder="Enter amount"
                />
              </div>

              <div>
                <Label htmlFor="split-amount-corr">
                  Split Amount (Auto-calculated)
                </Label>
                <Input
                  id="split-amount-corr"
                  placeholder="$0.00"
                  disabled
                />
              </div>

              <div>
                <Label htmlFor="notes-corr">Notes</Label>
                <Textarea
                  id="notes-corr"
                  placeholder="Additional notes or comments"
                  rows={3}
                />
              </div>

              <Button className="w-full">
                Initiate Correlated ACH Pull
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Disbursement History Section */}
      <Card>
        <div className="space-y-4 p-4">
          <div>
            <h2 className="text-xl font-semibold">Disbursement History</h2>
            <p className="text-muted-foreground">View historical disbursement records</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 min-w-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search disbursements..."
                  value={disbursementSearchTerm}
                  onChange={(e) => setDisbursementSearchTerm(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Select
                value={disbursementStatusFilter}
                onValueChange={setDisbursementStatusFilter}
              >
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Disbursement ID</TableHead>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Deal ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Split Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDisbursements.map((disbursement) => (
                  <TableRow key={disbursement.id}>
                    <TableCell className="font-medium">
                      {disbursement.disbursementId}
                    </TableCell>
                    <TableCell>{disbursement.company}</TableCell>
                    <TableCell>
                      <Link
                        to={`/broker/deals/${disbursement.dealId}`}
                        className="cursor-pointer hover:text-primary font-medium"
                      >
                        {disbursement.dealId}
                      </Link>
                    </TableCell>
                    <TableCell>{disbursement.amount}</TableCell>
                    <TableCell>{disbursement.splitAmount}</TableCell>
                    <TableCell>{disbursement.date}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          disbursement.status === "Completed"
                            ? "bg-[#25A900] text-white"
                            : disbursement.status === "Pending"
                            ? "bg-[#FF5F0C] text-white"
                            : "bg-[#DD003F] text-white"
                        }
                      >
                        {disbursement.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <TableActionsMenu>
                        <TableActionItem
                          onClick={() => {
                            /* Handle view action */
                          }}
                          icon={<Eye className="h-4 w-4" />}
                          label="View Details"
                        />
                        <TableActionItem
                          onClick={() => {
                            /* Handle folder action */
                          }}
                          icon={<FolderOpen className="h-4 w-4" />}
                          label="View Folder"
                        />
                        <TableActionItem
                          onClick={() => {
                            /* Handle download action */
                          }}
                          icon={<Download className="h-4 w-4" />}
                          label="Download Report"
                        />
                      </TableActionsMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

      {/* Transaction Detail Dialog */}
      <Dialog
        open={isDetailOpen}
        onOpenChange={setIsDetailOpen}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Transaction Details
            </DialogTitle>
            <DialogDescription>
              View comprehensive details for this ACH transaction
            </DialogDescription>
          </DialogHeader>

          {selectedTransaction && (
            <div className="space-y-6">
              {/* Transaction Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Transaction Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Transaction ID:
                      </span>
                      <span className="font-medium">
                        {selectedTransaction.transactionId}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Company:
                      </span>
                      <span className="font-medium">
                        {selectedTransaction.company}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Deal ID:
                      </span>
                      <span className="font-medium">
                        {selectedTransaction.dealId}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Type:
                      </span>
                      <Badge
                        variant={
                          selectedTransaction.type === "Manual"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {selectedTransaction.type}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Status:
                      </span>
                      <Badge
                        className={
                          selectedTransaction.status === "Completed"
                            ? "bg-[#25A900] text-white"
                            : selectedTransaction.status === "Pending"
                            ? "bg-[#FF5F0C] text-white"
                            : "bg-[#DD003F] text-white"
                        }
                      >
                        {selectedTransaction.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Financial Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Amount:
                      </span>
                      <span className="font-medium">
                        {selectedTransaction.amount}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Split Amount:
                      </span>
                      <span className="font-medium">
                        {selectedTransaction.splitAmount}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Processing Fee:
                      </span>
                      <span className="font-medium">$25.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Commission:
                      </span>
                      <span className="font-medium text-[#25A900]">
                        $1,200.00
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Receipt
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Generate Report
                </Button>
                {selectedTransaction.status === "Failed" && (
                  <Button
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Retry Transaction
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Edit className="h-4 w-4" />
                  Edit Details
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}