import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon, Download, Filter, Search, ArrowUpDown } from 'lucide-react';
import { format } from 'date-fns';

export function CallLogsHeaderActions() {
  return (
    <Button variant="outline" size="sm">
      <Download className="h-4 w-4 mr-2" />
      Export
    </Button>
  );
}

const callLogData = [
  {
    id: '1',
    callerNumber: '+1 (555) 123-4567',
    insideNumber: '101',
    extensionNumber: 'Reception',
    callType: 'incoming',
    callStatus: 'answered',
    duration: '00:04:32',
    timestamp: '2025-01-15 09:23:45',
    errorCode: null
  },
  {
    id: '2',
    callerNumber: '+1 (555) 987-6543',
    insideNumber: '102',
    extensionNumber: 'Sales',
    callType: 'outgoing',
    callStatus: 'answered',
    duration: '00:12:18',
    timestamp: '2025-01-15 09:45:12',
    errorCode: null
  },
  {
    id: '3',
    callerNumber: '+1 (555) 456-7890',
    insideNumber: '103',
    extensionNumber: 'Support',
    callType: 'incoming',
    callStatus: 'missed',
    duration: '00:00:00',
    timestamp: '2025-01-15 10:12:33',
    errorCode: 'NO_ANSWER'
  },
  {
    id: '4',
    callerNumber: '+1 (555) 321-0987',
    insideNumber: '101',
    extensionNumber: 'Reception',
    callType: 'incoming',
    callStatus: 'rejected',
    duration: '00:00:00',
    timestamp: '2025-01-15 10:34:56',
    errorCode: 'USER_BUSY'
  },
  {
    id: '5',
    callerNumber: '+1 (555) 654-3210',
    insideNumber: '104',
    extensionNumber: 'Manager',
    callType: 'outgoing',
    callStatus: 'answered',
    duration: '00:08:45',
    timestamp: '2025-01-15 11:02:18',
    errorCode: null
  },
  {
    id: '6',
    callerNumber: '+1 (555) 789-0123',
    insideNumber: '102',
    extensionNumber: 'Sales',
    callType: 'incoming',
    callStatus: 'answered',
    duration: '00:15:27',
    timestamp: '2025-01-15 11:30:42',
    errorCode: null
  },
  {
    id: '7',
    callerNumber: '+1 (555) 234-5678',
    insideNumber: '103',
    extensionNumber: 'Support',
    callType: 'outgoing',
    callStatus: 'missed',
    duration: '00:00:00',
    timestamp: '2025-01-15 12:15:09',
    errorCode: 'NETWORK_ERROR'
  },
  {
    id: '8',
    callerNumber: '+1 (555) 876-5432',
    insideNumber: '105',
    extensionNumber: 'HR',
    callType: 'incoming',
    callStatus: 'answered',
    duration: '00:06:33',
    timestamp: '2025-01-15 13:22:15',
    errorCode: null
  }
];

export function CallLogs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();
  const [sortField, setSortField] = useState<'timestamp' | 'duration'>('timestamp');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Filter and sort logic
  const filteredLogs = callLogData
    .filter(log => {
      const matchesSearch = 
        log.callerNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.insideNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.extensionNumber.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || log.callStatus === statusFilter;
      const matchesType = typeFilter === 'all' || log.callType === typeFilter;
      
      const logDate = new Date(log.timestamp);
      const matchesDateFrom = !dateFrom || logDate >= dateFrom;
      const matchesDateTo = !dateTo || logDate <= dateTo;
      
      return matchesSearch && matchesStatus && matchesType && matchesDateFrom && matchesDateTo;
    })
    .sort((a, b) => {
      let comparison = 0;
      
      if (sortField === 'timestamp') {
        comparison = new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
      } else if (sortField === 'duration') {
        comparison = a.duration.localeCompare(b.duration);
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });

  const handleSort = (field: 'timestamp' | 'duration') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive'> = {
      answered: 'default',
      missed: 'destructive',
      voicemail: 'secondary',
      busy: 'secondary',
      failed: 'destructive'
    };
    
    return (
      <Badge variant={variants[status] || 'secondary'}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getTypeBadge = (type: string) => {
    return (
      <Badge variant="outline" className={type === 'incoming' ? 'text-teal border-teal' : ''}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="p-6 space-y-6 w-full">
      {/* Filters Card */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
          <CardDescription>
            Filter call logs by search term, status, type, and date range
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="space-y-2">
              <label className="text-sm">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Phone number, extension..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div className="space-y-2">
              <label className="text-sm">Status</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="answered">Answered</SelectItem>
                  <SelectItem value="missed">Missed</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Type Filter */}
            <div className="space-y-2">
              <label className="text-sm">Call Type</label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All types</SelectItem>
                  <SelectItem value="incoming">Incoming</SelectItem>
                  <SelectItem value="outgoing">Outgoing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date Range */}
            <div className="space-y-2">
              <label className="text-sm">Date Range</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateFrom ? (
                      dateTo ? (
                        <>
                          {format(dateFrom, "LLL dd, y")} -{" "}
                          {format(dateTo, "LLL dd, y")}
                        </>
                      ) : (
                        format(dateFrom, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    selected={dateFrom ? { from: dateFrom, to: dateTo } : undefined}
                    onSelect={setDateFrom}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Call History</CardTitle>
          <CardDescription>
            Detailed log of all incoming and outgoing calls
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          <div className="overflow-x-auto px-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <span>Caller Number</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort('callerNumber')}
                        className="hover:bg-transparent p-0 h-4 w-4"
                      >
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <span>Inside Number</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort('insideNumber')}
                        className="hover:bg-transparent p-0 h-4 w-4"
                      >
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableHead>
                  <TableHead>Extension</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <span>Duration</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort('duration')}
                        className="hover:bg-transparent p-0 h-4 w-4"
                      >
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center gap-2">
                      <span>Timestamp</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSort('timestamp')}
                        className="hover:bg-transparent p-0 h-4 w-4"
                      >
                        <ArrowUpDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableHead>
                  <TableHead>Error Code</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLogs.map((call) => (
                  <TableRow key={call.id}>
                    <TableCell className="font-mono">{call.callerNumber}</TableCell>
                    <TableCell className="font-mono">{call.insideNumber}</TableCell>
                    <TableCell>{call.extensionNumber}</TableCell>
                    <TableCell>{getTypeBadge(call.callType)}</TableCell>
                    <TableCell>{getStatusBadge(call.callStatus)}</TableCell>
                    <TableCell className="font-mono">{call.duration}</TableCell>
                    <TableCell className="font-mono text-sm">{call.timestamp}</TableCell>
                    <TableCell>
                      {call.errorCode ? (
                        <Badge variant="destructive" className="text-xs">
                          {call.errorCode}
                        </Badge>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredLogs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No call logs found matching your filters.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Retention Notice */}
      <Card>
        <CardContent className="pt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h4>Data Retention Policy</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Call logs are retained for 12 months. Detailed call recordings (if enabled) are kept for 90 days for quality assurance purposes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}