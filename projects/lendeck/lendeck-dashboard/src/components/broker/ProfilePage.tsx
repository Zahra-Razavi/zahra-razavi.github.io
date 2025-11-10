import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { User, Mail, Phone, Building2, CreditCard, Plus, Edit, ExternalLink, FileText, DollarSign } from 'lucide-react';

const profileData = {
  basicInfo: {
    name: 'Sara Smith',
    title: 'Senior Broker',
    email: 'sara.smith@brokerage.com',
    phone: '(555) 987-6543',
    address: '456 Business Plaza, Chicago, IL 60601',
    company: 'Premier Business Lending',
    brokerId: 'BR001',
    joinDate: '2021-06-20',
    lastLogin: '2024-01-16 10:15 AM'
  },
  bankAccounts: [
    {
      id: 'BA001',
      bankName: 'Bank of America Business',
      accountType: 'Commission Account',
      accountNumber: '****4567',
      routingNumber: '026009593',
      status: 'Active',
      addedDate: '2021-06-25'
    },
    {
      id: 'BA002',
      bankName: 'Chase Business Banking',
      accountType: 'Operating',
      accountNumber: '****8901',
      routingNumber: '021000021',
      status: 'Active',
      addedDate: '2022-08-10'
    }
  ],
  commissionHistory: [
    {
      id: 'COM001',
      date: '2024-01-15',
      dealId: 'D-2024-045',
      merchant: 'Green Valley Market',
      amount: '$12,500',
      status: 'Paid',
      paymentDate: '2024-01-15'
    },
    {
      id: 'COM002',
      date: '2024-01-10',
      dealId: 'D-2024-038',
      merchant: 'Tech Solutions LLC',
      amount: '$18,750',
      status: 'Paid',
      paymentDate: '2024-01-10'
    },
    {
      id: 'COM003',
      date: '2024-01-05',
      dealId: 'D-2024-029',
      merchant: 'Metro Restaurant',
      amount: '$9,200',
      status: 'Paid',
      paymentDate: '2024-01-05'
    },
    {
      id: 'COM004',
      date: '2024-01-02',
      dealId: 'D-2023-287',
      merchant: 'Urban Fitness Center',
      amount: '$15,300',
      status: 'Processing',
      paymentDate: 'Pending'
    }
  ],
  recentDeals: [
    {
      id: 'D-2024-045',
      merchant: 'Green Valley Market',
      amount: '$250,000',
      status: 'Funded',
      fundedDate: '2024-01-12',
      commission: '$12,500'
    },
    {
      id: 'D-2024-042',
      merchant: 'City Auto Repair',
      amount: '$180,000',
      status: 'In Closing',
      submittedDate: '2024-01-08',
      commission: '$9,000'
    },
    {
      id: 'D-2024-038',
      merchant: 'Tech Solutions LLC',
      amount: '$375,000',
      status: 'Funded',
      fundedDate: '2024-01-05',
      commission: '$18,750'
    }
  ]
};

export function ProfilePage() {
  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 
           status === 'Paid' ? 'bg-green-100 text-green-800' :
           status === 'Funded' ? 'bg-green-100 text-green-800' :
           status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
           status === 'In Closing' ? 'bg-blue-100 text-blue-800' :
           'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Profile Management</h1>
          <p className="text-muted-foreground">Manage your broker profile and view performance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="banking">Banking</TabsTrigger>
              <TabsTrigger value="commissions">Commissions</TabsTrigger>
              <TabsTrigger value="deals">Recent Deals</TabsTrigger>
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
                      <Label htmlFor="company">Company</Label>
                      <Input value={profileData.basicInfo.company} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="brokerId">Broker ID</Label>
                      <Input value={profileData.basicInfo.brokerId} readOnly />
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

            <TabsContent value="commissions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5" />
                      Commission History
                    </div>
                    <Button size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Report
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Deal ID</TableHead>
                        <TableHead>Merchant</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Payment Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {profileData.commissionHistory.map((commission) => (
                        <TableRow key={commission.id}>
                          <TableCell>{commission.date}</TableCell>
                          <TableCell className="font-medium">{commission.dealId}</TableCell>
                          <TableCell>{commission.merchant}</TableCell>
                          <TableCell className="font-semibold">{commission.amount}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(commission.status)}>{commission.status}</Badge>
                          </TableCell>
                          <TableCell>{commission.paymentDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="deals" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Recent Deals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Deal ID</TableHead>
                        <TableHead>Merchant</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Commission</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {profileData.recentDeals.map((deal) => (
                        <TableRow key={deal.id}>
                          <TableCell className="font-medium">{deal.id}</TableCell>
                          <TableCell>{deal.merchant}</TableCell>
                          <TableCell className="font-semibold">{deal.amount}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(deal.status)}>{deal.status}</Badge>
                          </TableCell>
                          <TableCell>
                            {deal.status === 'Funded' ? deal.fundedDate : deal.submittedDate}
                          </TableCell>
                          <TableCell className="font-semibold">{deal.commission}</TableCell>
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
                  SS
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
                  {profileData.basicInfo.company}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
