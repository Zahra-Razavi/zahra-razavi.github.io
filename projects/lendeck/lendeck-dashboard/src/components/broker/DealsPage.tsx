import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Plus, Search, Eye, Edit, Upload, FileText, Share, Shield, Send } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';

const mockDeals = [
  {
    id: 'D001',
    company: 'Tech Solutions Inc',
    rep: 'John Smith',
    amount: '$150,000',
    status: 'Documents Pending',
    dateAdded: '2024-01-15',
    webformLink: 'https://forms.lendeck.com/d001'
  },
  {
    id: 'D002', 
    company: 'Green Energy Co',
    rep: 'Sarah Johnson',
    amount: '$200,000',
    status: 'Ready to Submit',
    dateAdded: '2024-01-14',
    webformLink: 'https://forms.lendeck.com/d002'
  },
  {
    id: 'D003',
    company: 'Retail Plus LLC', 
    rep: 'Mike Davis',
    amount: '$75,000',
    status: 'Under Review',
    dateAdded: '2024-01-12',
    webformLink: 'https://forms.lendeck.com/d003'
  }
];

export function DealsPage() {
  const [selectedDeal, setSelectedDeal] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddDeal, setShowAddDeal] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Documents Pending': return 'bg-[#FF5F0C] text-white';
      case 'Ready to Submit': return 'bg-[#25A900] text-white';
      case 'Under Review': return 'bg-[#4E0F60] text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
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
        <Button 
          onClick={() => setShowAddDeal(true)}
          className="bg-[#4E0F60] hover:bg-[#4E0F60]/90"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Deal
        </Button>
      </div>

      {/* Deals Table */}
      <Card>
        <CardHeader>
          <CardTitle>Deal Management</CardTitle>
          <CardDescription>Track and manage your deals efficiently</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Deal ID</TableHead>
                <TableHead>Company Name</TableHead>
                <TableHead>Rep Name</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Added</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockDeals.map((deal) => (
                <TableRow key={deal.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-medium">{deal.id}</TableCell>
                  <TableCell>{deal.company}</TableCell>
                  <TableCell>{deal.rep}</TableCell>
                  <TableCell>{deal.amount}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(deal.status)}>
                      {deal.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{deal.dateAdded}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedDeal(deal)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Deal Dialog */}
      <Dialog open={showAddDeal} onOpenChange={setShowAddDeal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Deal</DialogTitle>
            <DialogDescription>
              Create a new deal file and generate a webform link
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Company Name</label>
                <Input placeholder="Enter company name" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Rep Name</label>
                <Input placeholder="Enter representative name" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Deal Amount</label>
                <Input placeholder="$0" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Funding Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select funding type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="term-loan">Term Loan</SelectItem>
                    <SelectItem value="equipment">Equipment Financing</SelectItem>
                    <SelectItem value="working-capital">Working Capital</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Notes</label>
              <Textarea placeholder="Add any additional notes..." />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowAddDeal(false)}>
                Cancel
              </Button>
              <Button className="bg-[#4E0F60] hover:bg-[#4E0F60]/90">
                Create Deal
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Deal Detail Dialog */}
      <Dialog open={!!selectedDeal} onOpenChange={() => setSelectedDeal(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Deal Details - {selectedDeal?.id}</DialogTitle>
            <DialogDescription>{selectedDeal?.company}</DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="background">Background</TabsTrigger>
              <TabsTrigger value="submit">Submit</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Deal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deal ID:</span>
                      <span className="font-medium">{selectedDeal?.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Company:</span>
                      <span className="font-medium">{selectedDeal?.company}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-medium">{selectedDeal?.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rep:</span>
                      <span className="font-medium">{selectedDeal?.rep}</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Webform Link</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Input 
                        value={selectedDeal?.webformLink || ''} 
                        readOnly 
                        className="text-sm"
                      />
                      <Button variant="outline" size="sm">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Internal Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea placeholder="Add internal notes for this deal..." />
                  <Button className="mt-2" size="sm">Save Notes</Button>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Required Documents</CardTitle>
                  <CardDescription>Track document collection progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: '3 Months Bank Statements', status: 'received', required: true },
                      { name: 'Signed Consent Form', status: 'pending', required: true },
                      { name: 'Account Statements', status: 'received', required: true },
                      { name: 'Tax Returns', status: 'pending', required: false },
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4" />
                          <span className="font-medium">{doc.name}</span>
                          {doc.required && <Badge variant="outline">Required</Badge>}
                        </div>
                        <Badge className={doc.status === 'received' ? 'bg-[#25A900] text-white' : 'bg-[#FF5F0C] text-white'}>
                          {doc.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="background" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Background Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Pull all BG reports by default</label>
                      <Checkbox defaultChecked />
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      {[
                        { name: 'DataMerch Report', provider: 'DataMerch' },
                        { name: 'Credit Report', provider: 'Credit Bureau' },
                        { name: 'UCC Lookup', provider: 'LexisNexis/SOS' },
                        { name: 'Court Lookup', provider: 'LexisNexis/SOS' },
                      ].map((report, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Checkbox defaultChecked />
                          <div>
                            <span className="font-medium">{report.name}</span>
                            <p className="text-sm text-muted-foreground">{report.provider}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full bg-[#4E0F60] hover:bg-[#4E0F60]/90">
                      Request Background Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="submit" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Submit Deal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Submission Option</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select submission method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="direct">Submit to Direct Lender</SelectItem>
                          <SelectItem value="marketplace">Submit to Marketplace</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox />
                      <label className="text-sm">Redact PII (Personal Identifying Information)</label>
                    </div>
                    
                    <Button className="w-full bg-[#25A900] hover:bg-[#25A900]/90">
                      Preview & Submit
                    </Button>
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