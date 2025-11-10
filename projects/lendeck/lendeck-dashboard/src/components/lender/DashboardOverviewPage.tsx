import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
// Recharts components removed to prevent timeout issues
import { TrendingUp, TrendingDown, DollarSign, Users, FileText, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const dealTrendData = [
  { name: 'Jan', deals: 65, success: 45 },
  { name: 'Feb', deals: 78, success: 62 },
  { name: 'Mar', deals: 90, success: 71 },
  { name: 'Apr', deals: 81, success: 65 },
  { name: 'May', deals: 95, success: 76 },
  { name: 'Jun', deals: 102, success: 84 },
];

const fundingData = [
  { name: 'Jan', amount: 2400000 },
  { name: 'Feb', amount: 3100000 },
  { name: 'Mar', amount: 2800000 },
  { name: 'Apr', amount: 3500000 },
  { name: 'May', amount: 4200000 },
  { name: 'Jun', amount: 3900000 },
];

const performanceData = [
  { name: 'Q1', performance: 85 },
  { name: 'Q2', performance: 78 },
  { name: 'Q3', performance: 92 },
  { name: 'Q4', performance: 88 },
];

const allocationData = [
  { name: 'Direct Deals', value: 45, color: '#4E0F60' },
  { name: 'ISO Partners', value: 30, color: '#FF5F0C' },
  { name: 'Syndicators', value: 25, color: '#ED1E59' },
];

const statusData = [
  { name: 'Active', count: 145, color: '#22C55E' },
  { name: 'Under Review', count: 28, color: '#FF5F0C' },
  { name: 'Pending', count: 12, color: '#1E59ED' },
  { name: 'Defaulted', count: 8, color: '#EF4444' },
];

const portfolioSnapshot = [
  {
    metric: 'Cash Out',
    amount: '$12,450,000',
    expected: '$15,680,000',
    balance: '$3,230,000',
    factorRate: '1.26',
    paidBack: '$9,220,000',
    returnToDate: '$2,100,000'
  }
];

const topMerchants = [
  { name: 'ABC Electronics', amount: '$450,000', paidBack: '$380,000', performance: 95, daysLeft: 45 },
  { name: 'Metro Restaurant Group', amount: '$380,000', paidBack: '$320,000', performance: 92, daysLeft: 62 },
  { name: 'Tech Solutions Inc', amount: '$320,000', paidBack: '$280,000', performance: 88, daysLeft: 38 },
  { name: 'Retail Plus LLC', amount: '$280,000', paidBack: '$240,000', performance: 85, daysLeft: 55 },
];

const bottomMerchants = [
  { name: 'XYZ Manufacturing', amount: '$200,000', paidBack: '$120,000', performance: 45, daysLeft: 180 },
  { name: 'Corner Deli', amount: '$150,000', paidBack: '$80,000', performance: 38, daysLeft: 220 },
  { name: 'Auto Parts Plus', amount: '$180,000', paidBack: '$90,000', performance: 42, daysLeft: 195 },
  { name: 'Fashion Boutique', amount: '$120,000', paidBack: '$50,000', performance: 35, daysLeft: 240 },
];

export function DashboardOverviewPage() {
  return (
    <div className="space-y-6">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-blue/10 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-lendeck-blue" />
              </div>
              <div>
                <div className="text-xl">102</div>
                <div className="text-sm text-muted-foreground">Total New Deals</div>
                <div className="text-xs text-lendeck-success flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3" />
                  +12% from last month
                </div>
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
                <div className="text-xl">28</div>
                <div className="text-sm text-muted-foreground">Deals in Underwriting</div>
                <div className="text-xs text-lendeck-orange flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3" />
                  +3 from yesterday
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-success/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-lendeck-success" />
              </div>
              <div>
                <div className="text-xl">84</div>
                <div className="text-sm font-medium text-lendeck-success">$3.9M</div>
                <div className="text-sm text-muted-foreground">Total Funded Deals</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-primary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-lendeck-primary" />
              </div>
              <div className="flex-1">
                <div className="text-xl">82.4%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
                <Progress value={82.4} className="mt-2 h-2" />
                <div className="text-xs text-muted-foreground mt-1">Underwriting to funding</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deal Review Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Deal Review Trends</CardTitle>
            <CardDescription>Monthly deal volume and success rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 p-4">
              {/* Chart Legend */}
              <div className="flex justify-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-lendeck-primary rounded"></div>
                  <span className="text-sm">Total Deals</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-lendeck-success rounded"></div>
                  <span className="text-sm">Successful</span>
                </div>
              </div>
              
              {/* Custom Bar Chart */}
              <div className="flex items-end justify-between h-48 gap-2 px-4 border-l border-b border-gray-300">
                {dealTrendData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="flex items-end gap-1 h-40">
                      {/* Total Deals Bar */}
                      <div className="relative group">
                        <div 
                          className="w-4 bg-lendeck-primary rounded-t transition-all duration-500 hover:opacity-80" 
                          style={{ height: `${(item.deals / 102) * 160}px` }}
                        ></div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {item.deals} deals
                        </div>
                      </div>
                      {/* Success Bar */}
                      <div className="relative group">
                        <div 
                          className="w-4 bg-lendeck-success rounded-t transition-all duration-500 hover:opacity-80" 
                          style={{ height: `${(item.success / 102) * 160}px` }}
                        ></div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {item.success} successful
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-48 flex flex-col justify-between text-xs text-gray-500 -ml-8">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Funding Over Time */}
        <Card>
          <CardHeader>
            <CardTitle>Funding Over Time</CardTitle>
            <CardDescription>Monthly funding amounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 p-4">
              {/* Chart Legend */}
              <div className="flex justify-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-lendeck-primary rounded"></div>
                  <span className="text-sm">Funding Amount</span>
                </div>
              </div>
              
              {/* Custom Area Chart */}
              <div className="relative h-48 border-l border-b border-gray-300">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Area Chart Path */}
                  <defs>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#4E0F60', stopOpacity: 0.6}} />
                      <stop offset="100%" style={{stopColor: '#4E0F60', stopOpacity: 0.1}} />
                    </linearGradient>
                  </defs>
                  
                  {/* Generate area path */}
                  <path
                    d={`M 0,${200 - (fundingData[0].amount / 4200000) * 180}
                       L ${400/6},${200 - (fundingData[1].amount / 4200000) * 180}
                       L ${400*2/6},${200 - (fundingData[2].amount / 4200000) * 180}
                       L ${400*3/6},${200 - (fundingData[3].amount / 4200000) * 180}
                       L ${400*4/6},${200 - (fundingData[4].amount / 4200000) * 180}
                       L ${400*5/6},${200 - (fundingData[5].amount / 4200000) * 180}
                       L ${400*5/6},200 L 0,200 Z`}
                    fill="url(#areaGradient)"
                    stroke="#4E0F60"
                    strokeWidth="2"
                  />
                  
                  {/* Data points */}
                  {fundingData.map((item, index) => (
                    <g key={index}>
                      <circle
                        cx={index * (400/6) + (index === 0 ? 0 : 400/12)}
                        cy={200 - (item.amount / 4200000) * 180}
                        r="4"
                        fill="#4E0F60"
                        className="hover:r-6 transition-all cursor-pointer"
                      />
                      <text
                        x={index * (400/6) + (index === 0 ? 0 : 400/12)}
                        y={200 - (item.amount / 4200000) * 180 - 10}
                        textAnchor="middle"
                        className="text-xs fill-gray-600 opacity-0 hover:opacity-100 transition-opacity"
                      >
                        ${(item.amount / 1000000).toFixed(1)}M
                      </text>
                    </g>
                  ))}
                </svg>
                
                {/* X-axis labels */}
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                  {fundingData.map((item, index) => (
                    <span key={index} className="flex-1 text-center">{item.name}</span>
                  ))}
                </div>
                
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-48 flex flex-col justify-between text-xs text-gray-500 -ml-12">
                  <span>$4.2M</span>
                  <span>$3.1M</span>
                  <span>$2.1M</span>
                  <span>$1.0M</span>
                  <span>$0M</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Company Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Company Performance</CardTitle>
            <CardDescription>Quarterly performance percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.name}</span>
                    <span className="font-semibold text-lendeck-primary">{item.performance}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-lendeck-primary h-3 rounded-full transition-all duration-300" 
                      style={{ width: `${item.performance}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Amount Allocated */}
        <Card>
          <CardHeader>
            <CardTitle>Amount Allocated</CardTitle>
            <CardDescription>Distribution by channel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {allocationData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="font-semibold">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${item.value}%`, 
                        backgroundColor: item.color 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="pt-2 border-t">
                <div className="text-sm text-muted-foreground text-center">
                  Total: {allocationData.reduce((sum, item) => sum + item.value, 0)}% allocated
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Deal Status */}
        <Card>
          <CardHeader>
            <CardTitle>Deal Status</CardTitle>
            <CardDescription>Current deal distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {statusData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <span className="font-semibold">{item.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${(item.count / 145) * 100}%`, 
                        backgroundColor: item.color 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="pt-2 border-t">
                <div className="text-sm text-muted-foreground text-center">
                  Total: {statusData.reduce((sum, item) => sum + item.count, 0)} deals
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Statistics Quick View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-blue/10 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-lendeck-blue" />
              </div>
              <div>
                <div className="text-xl">156</div>
                <div className="text-sm text-muted-foreground">Active ISOs</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-success/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-lendeck-success" />
              </div>
              <div>
                <div className="text-xl">1,248</div>
                <div className="text-sm text-muted-foreground">Open Cash Advances</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-lendeck-primary" />
              </div>
              <div>
                <div className="text-xl">856</div>
                <div className="text-sm text-muted-foreground">Closed Cash Advances</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-error/10 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-lendeck-error" />
              </div>
              <div>
                <div className="text-xl">24</div>
                <div className="text-sm text-muted-foreground">Defaulted Cash Advances</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Financial Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Collections & Write-offs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Advance Collections</span>
                <div className="text-right">
                  <div className="font-semibold">$8.2M (68%)</div>
                  <div className="text-sm text-muted-foreground">Total: $12.1M</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Advance Write-offs</span>
                <div className="text-right">
                  <div className="font-semibold text-red-600">$480K (4%)</div>
                  <div className="text-sm text-muted-foreground">Total: $12.1M</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Payback Collections</span>
                <div className="text-right">
                  <div className="font-semibold">$9.8M (72%)</div>
                  <div className="text-sm text-muted-foreground">Total: $13.6M</div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Payback Write-offs</span>
                <div className="text-right">
                  <div className="font-semibold text-red-600">$520K (3.8%)</div>
                  <div className="text-sm text-muted-foreground">Total: $13.6M</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Snapshot */}
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Snapshot</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Metric</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Cash Out</TableCell>
                  <TableCell className="font-semibold">$12,450,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Expected Return</TableCell>
                  <TableCell className="font-semibold">$15,680,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Expected Payback</TableCell>
                  <TableCell className="font-semibold">$15,680,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Balance</TableCell>
                  <TableCell className="font-semibold">$3,230,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Avg. Factor Rate</TableCell>
                  <TableCell className="font-semibold">1.26</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Payback to Date</TableCell>
                  <TableCell className="font-semibold text-green-600">$9,220,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Return to Date</TableCell>
                  <TableCell className="font-semibold text-green-600">$2,100,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Top & Bottom Merchants */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Merchants</CardTitle>
            <CardDescription>Highest performing merchants by category</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Merchant</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Paid Back</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Days Left</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topMerchants.map((merchant, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{merchant.name}</TableCell>
                    <TableCell>{merchant.amount}</TableCell>
                    <TableCell>{merchant.paidBack}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {merchant.performance}%
                      </Badge>
                    </TableCell>
                    <TableCell>{merchant.daysLeft}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bottom Performing Merchants</CardTitle>
            <CardDescription>Merchants requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Merchant</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Paid Back</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Days Left</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bottomMerchants.map((merchant, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{merchant.name}</TableCell>
                    <TableCell>{merchant.amount}</TableCell>
                    <TableCell>{merchant.paidBack}</TableCell>
                    <TableCell>
                      <Badge variant="destructive" className="bg-red-100 text-red-800">
                        {merchant.performance}%
                      </Badge>
                    </TableCell>
                    <TableCell className="text-red-600">{merchant.daysLeft}</TableCell>
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