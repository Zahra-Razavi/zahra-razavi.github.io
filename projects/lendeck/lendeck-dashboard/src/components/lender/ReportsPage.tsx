import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import { BarChart3, Download, Filter, Calendar, FileText, TrendingUp, DollarSign, Users, AlertTriangle } from 'lucide-react';

const predefinedReports = [
  {
    id: 'deal-activity',
    name: 'Deal Activity Report',
    description: 'Comprehensive overview of deal submissions, approvals, and funding',
    category: 'Operations',
    lastGenerated: '2024-01-16',
    frequency: 'Daily'
  },
  {
    id: 'underwriting-performance',
    name: 'Underwriting Performance Report',
    description: 'Analysis of underwriting efficiency and approval rates',
    category: 'Performance',
    lastGenerated: '2024-01-15',
    frequency: 'Weekly'
  },
  {
    id: 'background-check',
    name: 'Background Check Report',
    description: 'Summary of background checks and risk assessments',
    category: 'Risk',
    lastGenerated: '2024-01-16',
    frequency: 'Daily'
  },
  {
    id: 'financial-summary',
    name: 'Financial Summary Report',
    description: 'Overall financial performance and portfolio metrics',
    category: 'Financial',
    lastGenerated: '2024-01-16',
    frequency: 'Daily'
  },
  {
    id: 'merchant-payment',
    name: 'Merchant Payment Report',
    description: 'Detailed merchant payment history and trends',
    category: 'Collections',
    lastGenerated: '2024-01-15',
    frequency: 'Weekly'
  },
  {
    id: 'syndicator-earnings',
    name: 'Syndicator Earnings Report',
    description: 'Syndicator performance and earnings breakdown',
    category: 'Partners',
    lastGenerated: '2024-01-14',
    frequency: 'Monthly'
  },
  {
    id: 'syndicator-payments',
    name: 'Syndicator Payments Report',
    description: 'Payment history and outstanding amounts to syndicators',
    category: 'Partners',
    lastGenerated: '2024-01-14',
    frequency: 'Monthly'
  },
  {
    id: 'merchant-fees',
    name: 'Merchant Fees Report',
    description: 'Analysis of merchant fees and revenue streams',
    category: 'Revenue',
    lastGenerated: '2024-01-15',
    frequency: 'Weekly'
  },
  {
    id: 'syndicator-invoices',
    name: 'Syndicator Invoices Report',
    description: 'Invoice tracking and payment status for syndicators',
    category: 'Accounting',
    lastGenerated: '2024-01-13',
    frequency: 'Monthly'
  },
  {
    id: 'periodic-income',
    name: 'Periodic Income Report',
    description: 'Periodic income analysis and trends',
    category: 'Financial',
    lastGenerated: '2024-01-16',
    frequency: 'Daily'
  },
  {
    id: 'ach-returns',
    name: 'ACH Returns Report',
    description: 'ACH return analysis and failed transaction tracking',
    category: 'Collections',
    lastGenerated: '2024-01-16',
    frequency: 'Daily'
  },
  {
    id: 'ach-transactions',
    name: 'View ACH Transactions Report',
    description: 'Complete ACH transaction history and status',
    category: 'Collections',
    lastGenerated: '2024-01-16',
    frequency: 'Daily'
  }
];

const recentReports = [
  {
    id: 'custom-001',
    name: 'Q4 Performance Analysis',
    type: 'Custom',
    generatedDate: '2024-01-15',
    generatedBy: 'John Smith',
    status: 'Completed'
  },
  {
    id: 'deal-activity-001',
    name: 'Deal Activity Report',
    type: 'Predefined',
    generatedDate: '2024-01-16',
    generatedBy: 'System',
    status: 'Completed'
  },
  {
    id: 'financial-summary-001',
    name: 'Financial Summary Report',
    type: 'Predefined',
    generatedDate: '2024-01-16',
    generatedBy: 'System',
    status: 'Completed'
  }
];

export function ReportsPage() {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [customReportDialog, setCustomReportDialog] = useState(false);

  const filteredReports = predefinedReports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || categoryFilter === 'all' || report.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'Operations': 'bg-blue-100 text-blue-800',
      'Performance': 'bg-green-100 text-green-800',
      'Risk': 'bg-red-100 text-red-800',
      'Financial': 'bg-purple-100 text-purple-800',
      'Collections': 'bg-orange-100 text-orange-800',
      'Partners': 'bg-teal-100 text-teal-800',
      'Revenue': 'bg-emerald-100 text-emerald-800',
      'Accounting': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reports</h1>
          <p className="text-muted-foreground">Access detailed reports on deal activities, performance, and financials</p>
        </div>
        <Dialog open={customReportDialog} onOpenChange={setCustomReportDialog}>
          <DialogTrigger asChild>
            <Button>
              <BarChart3 className="h-4 w-4 mr-2" />
              Create Custom Report
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create Custom Report</DialogTitle>
              <DialogDescription>
                Build a custom report based on your specific parameters
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              <div>
                <Label htmlFor="reportName">Report Name</Label>
                <Input placeholder="Enter report name..." />
              </div>
              
              <div>
                <Label>Report Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="deal-analysis">Deal Analysis</SelectItem>
                    <SelectItem value="financial-performance">Financial Performance</SelectItem>
                    <SelectItem value="risk-assessment">Risk Assessment</SelectItem>
                    <SelectItem value="partner-performance">Partner Performance</SelectItem>
                    <SelectItem value="collection-analysis">Collection Analysis</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label htmlFor="endDate">End Date</Label>
                  <Input type="date" />
                </div>
              </div>

              <div>
                <Label>Data Sources</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="deals" />
                    <Label htmlFor="deals">Deal Data</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="merchants" />
                    <Label htmlFor="merchants">Merchant Data</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="payments" />
                    <Label htmlFor="payments">Payment Data</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="partners" />
                    <Label htmlFor="partners">Partner Data</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="ach" />
                    <Label htmlFor="ach">ACH Transactions</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="risk" />
                    <Label htmlFor="risk">Risk Assessments</Label>
                  </div>
                </div>
              </div>

              <div>
                <Label>Output Format</Label>
                <div className="flex gap-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="csv" />
                    <Label htmlFor="csv">CSV</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="pdf" />
                    <Label htmlFor="pdf">PDF</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="excel" />
                    <Label htmlFor="excel">Excel</Label>
                  </div>
                </div>
              </div>

              <div>
                <Label>Schedule (Optional)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one-time">One-time</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setCustomReportDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setCustomReportDialog(false)}>
                  Generate Report
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-blue/10 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-lendeck-blue" />
              </div>
              <div>
                <div className="text-xl">127</div>
                <div className="text-sm text-muted-foreground">Reports Generated</div>
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
                <div className="text-xl">24</div>
                <div className="text-sm text-muted-foreground">This Month</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-lendeck-primary" />
              </div>
              <div>
                <div className="text-xl">8</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-orange/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-lendeck-orange" />
              </div>
              <div>
                <div className="text-xl">3</div>
                <div className="text-sm text-muted-foreground">Scheduled Reports</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Operations">Operations</SelectItem>
                <SelectItem value="Performance">Performance</SelectItem>
                <SelectItem value="Risk">Risk</SelectItem>
                <SelectItem value="Financial">Financial</SelectItem>
                <SelectItem value="Collections">Collections</SelectItem>
                <SelectItem value="Partners">Partners</SelectItem>
                <SelectItem value="Revenue">Revenue</SelectItem>
                <SelectItem value="Accounting">Accounting</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {/* Predefined Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Predefined Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{report.name}</h4>
                      <Badge className={getCategoryColor(report.category)} variant="secondary">
                        {report.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{report.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Last: {report.lastGenerated}</span>
                      <span>Frequency: {report.frequency}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Generate
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{report.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {report.generatedDate} by {report.generatedBy}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{report.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>


    </div>
  );
}