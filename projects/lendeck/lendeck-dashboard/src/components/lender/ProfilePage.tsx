import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { User, Mail, Phone, Building2, CreditCard, Plus, Edit, ExternalLink } from 'lucide-react';

const profileData = {
  basicInfo: {
    name: 'John Smith',
    title: 'Senior Underwriter',
    email: 'john.smith@lendeck.com',
    phone: '(555) 123-4567',
    address: '123 Financial District, New York, NY 10013',
    department: 'Underwriting',
    employeeId: 'LD001',
    joinDate: '2022-03-15',
    lastLogin: '2024-01-16 09:30 AM'
  },
  bankAccounts: [
    {
      id: 'BA001',
      bankName: 'Chase Business',
      accountType: 'Operating',
      accountNumber: '****1234',
      routingNumber: '021000021',
      status: 'Active',
      addedDate: '2022-03-20'
    },
    {
      id: 'BA002',
      bankName: 'Wells Fargo Business',
      accountType: 'Reserve',
      accountNumber: '****5678',
      routingNumber: '121000248',
      status: 'Active',
      addedDate: '2023-01-15'
    }
  ],
  achAccounts: [
    {
      id: 'ACH001',
      accountName: 'Primary Operating Account',
      bankName: 'Chase Business',
      accountNumber: '****1234',
      status: 'Active',
      lastTransaction: '2024-01-16',
      monthlyVolume: '$2,450,000',
      transactionCount: 156
    },
    {
      id: 'ACH002',
      accountName: 'Secondary Reserve Account',
      bankName: 'Wells Fargo Business',
      accountNumber: '****5678',
      status: 'Active',
      lastTransaction: '2024-01-15',
      monthlyVolume: '$850,000',
      transactionCount: 42
    }
  ],
  recentTransactions: [
    {
      id: 'TXN001',
      date: '2024-01-16',
      type: 'ACH Debit',
      amount: '$2,100',
      merchant: 'ABC Electronics',
      status: 'Completed',
      account: '****1234'
    },
    {
      id: 'TXN002',
      date: '2024-01-16',
      type: 'ACH Credit',
      amount: '$125,000',
      merchant: 'Metro Restaurant Group',
      status: 'Completed',
      account: '****1234'
    },
    {
      id: 'TXN003',
      date: '2024-01-15',
      type: 'ACH Debit',
      amount: '$1,800',
      merchant: 'Tech Solutions Inc',
      status: 'Completed',
      account: '****5678'
    }
  ]
};

export function ProfilePage() {
  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 
           status === 'Completed' ? 'bg-green-100 text-green-800' :
           'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Profile Management</h1>
          <p className="text-muted-foreground">Centralized profile management for lenders</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="banking">Banking</TabsTrigger>
              <TabsTrigger value="ach">ACH Accounts</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basic" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Basic Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input value={profileData.basicInfo.name} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="title">Title</Label>
                      <Input value={profileData.basicInfo.title} readOnly />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input value={profileData.basicInfo.email} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input value={profileData.basicInfo.phone} readOnly />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input value={profileData.basicInfo.address} readOnly />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Input value={profileData.basicInfo.department} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="employeeId">Employee ID</Label>
                      <Input value={profileData.basicInfo.employeeId} readOnly />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="joinDate">Join Date</Label>
                      <Input value={profileData.basicInfo.joinDate} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="lastLogin">Last Login</Label>
                      <Input value={profileData.basicInfo.lastLogin} readOnly />
                    </div>
                  </div>
                  
                  <div className="border-t pt-6 mt-6">
                    <Label className="mb-4 block">Profile Picture</Label>
                    <div className="flex items-center gap-6">
                      <div className="h-20 w-20 rounded-full bg-lendeck-primary/10 flex items-center justify-center">
                        <User className="h-10 w-10 text-lendeck-primary" />
                      </div>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm">Upload New Picture</Button>
                        <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max size 2MB.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="banking" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Bank Accounts
                    </div>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Account
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Bank Name</TableHead>
                        <TableHead>Account Type</TableHead>
                        <TableHead>Account Number</TableHead>
                        <TableHead>Routing Number</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {profileData.bankAccounts.map((account) => (
                        <TableRow key={account.id}>
                          <TableCell className="font-medium">{account.bankName}</TableCell>
                          <TableCell>{account.accountType}</TableCell>
                          <TableCell>{account.accountNumber}</TableCell>
                          <TableCell>{account.routingNumber}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(account.status)}>{account.status}</Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ach" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      ACH Accounts
                    </div>
                    <Button size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View ACH Transactions
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Account Name</TableHead>
                        <TableHead>Bank Name</TableHead>
                        <TableHead>Account Number</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Monthly Volume</TableHead>
                        <TableHead>Transaction Count</TableHead>
                        <TableHead>Last Transaction</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {profileData.achAccounts.map((account) => (
                        <TableRow key={account.id}>
                          <TableCell className="font-medium">{account.accountName}</TableCell>
                          <TableCell>{account.bankName}</TableCell>
                          <TableCell>{account.accountNumber}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(account.status)}>{account.status}</Badge>
                          </TableCell>
                          <TableCell className="font-semibold">{account.monthlyVolume}</TableCell>
                          <TableCell>{account.transactionCount}</TableCell>
                          <TableCell>{account.lastTransaction}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="transactions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ExternalLink className="h-5 w-5" />
                    Recent Transactions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Merchant</TableHead>
                        <TableHead>Account</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {profileData.recentTransactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>{transaction.type}</TableCell>
                          <TableCell className="font-semibold">{transaction.amount}</TableCell>
                          <TableCell>{transaction.merchant}</TableCell>
                          <TableCell>{transaction.account}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(transaction.status)}>{transaction.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Profile Summary Sidebar */}
        <div className="space-y-6">
          {/* Profile Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  JS
                </div>
                <div>
                  <div className="font-semibold">{profileData.basicInfo.name}</div>
                  <div className="text-sm text-muted-foreground">{profileData.basicInfo.title}</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  {profileData.basicInfo.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  {profileData.basicInfo.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  {profileData.basicInfo.department}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}