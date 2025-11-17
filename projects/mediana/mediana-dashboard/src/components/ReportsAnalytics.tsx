import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Phone, PhoneCall, AlertTriangle, TrendingUp } from 'lucide-react';
import { Badge } from './ui/badge';

const dailyCallData = [
  { date: 'Mon', calls: 45, incidents: 2 },
  { date: 'Tue', calls: 52, incidents: 1 },
  { date: 'Wed', calls: 38, incidents: 3 },
  { date: 'Thu', calls: 61, incidents: 0 },
  { date: 'Fri', calls: 73, incidents: 1 },
  { date: 'Sat', calls: 29, incidents: 1 },
  { date: 'Sun', calls: 18, incidents: 0 }
];

const weeklyCallData = [
  { week: 'Week 1', calls: 342, incidents: 8 },
  { week: 'Week 2', calls: 398, incidents: 5 },
  { week: 'Week 3', calls: 421, incidents: 7 },
  { week: 'Week 4', calls: 378, incidents: 3 }
];

const monthlyCallData = [
  { month: 'Jan', calls: 1456, incidents: 23 },
  { month: 'Feb', calls: 1523, incidents: 18 },
  { month: 'Mar', calls: 1687, incidents: 21 },
  { month: 'Apr', calls: 1542, incidents: 15 },
  { month: 'May', calls: 1798, incidents: 19 },
  { month: 'Jun', calls: 1634, incidents: 12 }
];

// Chart colors mapped to design tokens:
// #4A8B82 = tokens.colors.brand.teal.600 (accessible teal for charts)
// #262626 = tokens.colors.brand.darkGray (dark gray for contrast)
const callTypeData = [
  { name: 'Incoming', value: 65, color: '#4A8B82' },
  { name: 'Outgoing', value: 35, color: '#262626' }
];

const customReportData = [
  { metric: 'Peak Hours', value: '2-4 PM', change: '+12%' },
  { metric: 'Avg Call Duration', value: '4:32', change: '+8%' },
  { metric: 'Call Success Rate', value: '97.2%', change: '+2.1%' },
  { metric: 'Customer Satisfaction', value: '4.6/5', change: '+0.3' }
];

export function ReportsAnalytics() {
  return (
    <div className="p-6 space-y-6 w-full min-w-0">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full min-w-0">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <Phone className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-muted-foreground">Active Lines</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              +2 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <PhoneCall className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">7</p>
                <p className="text-sm text-muted-foreground">Ongoing Calls</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              3 incoming, 4 outgoing
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-muted-foreground">Today's Incidents</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              -2 from yesterday
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-teal-subtle flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-teal" />
              </div>
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-muted-foreground">Call Volume</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              +12% from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full min-w-0">
        {/* Daily Call Volume */}
        <Card className="min-w-0">
          <CardHeader>
            <CardTitle>Daily Call Volume</CardTitle>
            <CardDescription>
              Calls and incidents over the past week
            </CardDescription>
          </CardHeader>
          <CardContent className="min-w-0">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyCallData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="calls" fill="#4A8B82" name="Calls" />
                <Bar dataKey="incidents" fill="#dc2626" name="Incidents" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Call Type Distribution */}
        <Card className="min-w-0">
          <CardHeader>
            <CardTitle>Call Type Distribution</CardTitle>
            <CardDescription>
              Breakdown of incoming vs outgoing calls
            </CardDescription>
          </CardHeader>
          <CardContent className="min-w-0">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={callTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#4A8B82"
                  dataKey="value"
                >
                  {callTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Weekly Trends */}
        <Card className="min-w-0">
          <CardHeader>
            <CardTitle>Weekly Trends</CardTitle>
            <CardDescription>
              Call volume trends over the past month
            </CardDescription>
          </CardHeader>
          <CardContent className="min-w-0">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyCallData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="calls" stroke="#4A8B82" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly Overview */}
        <Card className="min-w-0">
          <CardHeader>
            <CardTitle>Monthly Overview</CardTitle>
            <CardDescription>
              6-month call volume and incident tracking
            </CardDescription>
          </CardHeader>
          <CardContent className="min-w-0">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyCallData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="calls" fill="#4A8B82" name="Calls" />
                <Bar dataKey="incidents" fill="#dc2626" name="Incidents" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Custom Reports */}
      <Card className="min-w-0">
        <CardHeader>
          <CardTitle>Custom Report Metrics</CardTitle>
          <CardDescription>
            Key performance indicators and business insights
          </CardDescription>
        </CardHeader>
        <CardContent className="min-w-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-w-0">
            {customReportData.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between">
                  <p className="text-muted-foreground">{item.metric}</p>
                  <Badge variant={item.change.startsWith('+') ? 'default' : 'secondary'} className={item.change.startsWith('+') ? 'bg-success text-white' : ''}>
                    {item.change}
                  </Badge>
                </div>
                <p className="text-xl font-semibold mt-1 text-dark-gray">{item.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}