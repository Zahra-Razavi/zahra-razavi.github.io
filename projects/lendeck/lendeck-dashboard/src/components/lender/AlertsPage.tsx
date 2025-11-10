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
import { AlertTriangle, Search, Filter, Plus, Bell, Clock, DollarSign, TrendingDown } from 'lucide-react';

const alertsData = [
  {
    id: 'A001',
    mid: 'M001',
    dba: 'ABC Electronics',
    alertType: 'Payment Delay',
    severity: 'Medium',
    lastPaymentDate: '2024-01-14',
    balance: '$125,000',
    daysOverdue: 2,
    description: 'Payment is 2 days overdue',
    status: 'Active',
    createdDate: '2024-01-16',
    triggeredBy: 'Auto System'
  },
  {
    id: 'A002',
    mid: 'M004',
    dba: 'Corner Deli',
    alertType: 'Past Due',
    severity: 'High',
    lastPaymentDate: '2024-01-01',
    balance: '$65,000',
    daysOverdue: 15,
    description: 'Payment is 15 days overdue - requires immediate attention',
    status: 'Active',
    createdDate: '2024-01-16',
    triggeredBy: 'Auto System'
  },
  {
    id: 'A003',
    mid: 'M002',
    dba: 'Metro Restaurant Group',
    alertType: 'Low Daily Collection',
    severity: 'Low',
    lastPaymentDate: '2024-01-16',
    balance: '$85,000',
    daysOverdue: 0,
    description: 'Daily collection below expected threshold',
    status: 'Active',
    createdDate: '2024-01-15',
    triggeredBy: 'Auto System'
  },
  {
    id: 'A004',
    mid: 'M005',
    dba: 'Fashion Boutique',
    alertType: 'Risk Score Change',
    severity: 'Medium',
    lastPaymentDate: '2024-01-15',
    balance: '$45,000',
    daysOverdue: 1,
    description: 'Credit risk score decreased significantly',
    status: 'Acknowledged',
    createdDate: '2024-01-14',
    triggeredBy: 'Risk Engine'
  },
];

const alertTriggersData = [
  {
    id: 'T001',
    name: 'Payment Overdue (> 3 days)',
    type: 'Payment',
    status: 'Active',
    threshold: '3 days',
    severity: 'High',
    action: 'Send notification, Flag for review'
  },
  {
    id: 'T002',
    name: 'Low Daily Collection',
    type: 'Collection',
    status: 'Active',
    threshold: '< 70% of expected',
    severity: 'Medium',
    action: 'Send notification'
  },
  {
    id: 'T003',
    name: 'Risk Score Deterioration',
    type: 'Risk',
    status: 'Active',
    threshold: '> 10 point decrease',
    severity: 'Medium',
    action: 'Send notification, Request review'
  },
  {
    id: 'T004',
    name: 'NSF Frequency',
    type: 'Banking',
    status: 'Active',
    threshold: '> 3 NSF in 7 days',
    severity: 'High',
    action: 'Send notification, Flag for immediate review'
  },
];

export function AlertsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [severityFilter, setSeverityFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [addTriggerDialog, setAddTriggerDialog] = useState(false);

  const filteredAlerts = alertsData.filter(alert => {
    const matchesSearch = alert.dba.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.mid.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = !severityFilter || severityFilter === 'all' || alert.severity === severityFilter;
    const matchesType = !typeFilter || typeFilter === 'all' || alert.alertType === typeFilter;
    const matchesStatus = !statusFilter || statusFilter === 'all' || alert.status === statusFilter;
    return matchesSearch && matchesSeverity && matchesType && matchesStatus;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-red-100 text-red-800';
      case 'Acknowledged': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTriggerStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Alerts Management</h1>
          <p className="text-muted-foreground">Monitor and manage system alerts and triggers</p>
        </div>
        <Dialog open={addTriggerDialog} onOpenChange={setAddTriggerDialog}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Alert Trigger
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add Alert Trigger</DialogTitle>
              <DialogDescription>
                Create a new alert trigger to monitor specific conditions
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="triggerName">Trigger Name</Label>
                <Input placeholder="Enter trigger name..." />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="triggerType">Trigger Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select trigger type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="payment">Payment</SelectItem>
                      <SelectItem value="collection">Collection</SelectItem>
                      <SelectItem value="risk">Risk</SelectItem>
                      <SelectItem value="banking">Banking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="severity">Severity</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="threshold">Threshold Condition</Label>
                <Input placeholder="e.g., > 3 days overdue" />
              </div>

              <div>
                <Label>Notification Settings</Label>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="emailNotification" />
                    <Label htmlFor="emailNotification">Send email notification</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="smsNotification" />
                    <Label htmlFor="smsNotification">Send SMS notification</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="dashboardAlert" />
                    <Label htmlFor="dashboardAlert">Show dashboard alert</Label>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="recipients">Recipients</Label>
                <Input placeholder="Enter email addresses separated by commas..." />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setAddTriggerDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setAddTriggerDialog(false)}>
                  Create Trigger
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-error/10 rounded-lg flex items-center justify-center">
                <Bell className="h-5 w-5 text-lendeck-error" />
              </div>
              <div>
                <div className="text-xl">15</div>
                <div className="text-sm text-muted-foreground">Active Alerts</div>
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
                <div className="text-xl">8</div>
                <div className="text-sm text-muted-foreground">High Severity</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-yellow/10 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-lendeck-yellow" />
              </div>
              <div>
                <div className="text-xl">12</div>
                <div className="text-sm text-muted-foreground">Acknowledged</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-blue/10 rounded-lg flex items-center justify-center">
                <TrendingDown className="h-5 w-5 text-lendeck-blue" />
              </div>
              <div>
                <div className="text-xl">7</div>
                <div className="text-sm text-muted-foreground">Active Triggers</div>
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
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search alerts by merchant, MID, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={severityFilter} onValueChange={setSeverityFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Filter by Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Severities</SelectItem>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Payment Delay">Payment Delay</SelectItem>
                <SelectItem value="Past Due">Past Due</SelectItem>
                <SelectItem value="Low Daily Collection">Low Daily Collection</SelectItem>
                <SelectItem value="Risk Score Change">Risk Score Change</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Acknowledged">Acknowledged</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {/* Alert Listing */}
        <Card>
          <CardHeader>
            <CardTitle>Active Alerts</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>MID</TableHead>
                  <TableHead>DBA</TableHead>
                  <TableHead>Alert Type</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Last Payment</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAlerts.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell className="font-medium">{alert.mid}</TableCell>
                    <TableCell>{alert.dba}</TableCell>
                    <TableCell>{alert.alertType}</TableCell>
                    <TableCell>
                      <Badge className={getSeverityColor(alert.severity)}>{alert.severity}</Badge>
                    </TableCell>
                    <TableCell>{alert.lastPaymentDate}</TableCell>
                    <TableCell className="font-semibold">{alert.balance}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(alert.status)}>{alert.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                        <Button variant="ghost" size="sm">
                          Acknowledge
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Alert Triggers */}
        <Card>
          <CardHeader>
            <CardTitle>Alert Triggers</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Trigger Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Threshold</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alertTriggersData.map((trigger) => (
                  <TableRow key={trigger.id}>
                    <TableCell className="font-medium">{trigger.name}</TableCell>
                    <TableCell>{trigger.type}</TableCell>
                    <TableCell>{trigger.threshold}</TableCell>
                    <TableCell>
                      <Badge className={getSeverityColor(trigger.severity)}>{trigger.severity}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getTriggerStatusColor(trigger.status)}>{trigger.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Disable
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