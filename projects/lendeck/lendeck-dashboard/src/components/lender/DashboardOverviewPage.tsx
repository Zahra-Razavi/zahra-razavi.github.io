import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
// Recharts components removed to prevent timeout issues
import { TrendingUp, TrendingDown, DollarSign, Users, FileText, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const dealTrendData = [
  { name: 'Jan', received: 58, approved: 33, declined: 25, reviewDays: 3.6 },
  { name: 'Feb', received: 86, approved: 55, declined: 31, reviewDays: 3.1 },
  { name: 'Mar', received: 124, approved: 84, declined: 40, reviewDays: 2.4 },
  { name: 'Apr', received: 92, approved: 58, declined: 34, reviewDays: 3.0 },
  { name: 'May', received: 78, approved: 47, declined: 31, reviewDays: 3.3 },
  { name: 'Jun', received: 96, approved: 62, declined: 34, reviewDays: 2.8 },
  { name: 'Jul', received: 138, approved: 97, declined: 41, reviewDays: 2.1 },
  { name: 'Aug', received: 104, approved: 66, declined: 38, reviewDays: 2.7 },
  { name: 'Sep', received: 88, approved: 55, declined: 33, reviewDays: 3.0 },
  { name: 'Oct', received: 126, approved: 88, declined: 38, reviewDays: 2.3 },
  { name: 'Nov', received: 84, approved: 52, declined: 32, reviewDays: 2.9 },
  { name: 'Dec', received: 62, approved: 36, declined: 26, reviewDays: 3.4 },
];

const fundingData = [
  { name: 'Jan', amount: 2400000, deals: 38 },
  { name: 'Feb', amount: 3100000, deals: 45 },
  { name: 'Mar', amount: 2800000, deals: 41 },
  { name: 'Apr', amount: 3500000, deals: 52 },
  { name: 'May', amount: 4200000, deals: 61 },
  { name: 'Jun', amount: 3900000, deals: 57 },
  { name: 'Jul', amount: 4600000, deals: 66 },
  { name: 'Aug', amount: 4100000, deals: 60 },
  { name: 'Sep', amount: 5000000, deals: 72 },
  { name: 'Oct', amount: 4700000, deals: 68 },
  { name: 'Nov', amount: 5400000, deals: 77 },
  { name: 'Dec', amount: 5800000, deals: 82 },
];

// Catmull-Rom → cubic bezier for smooth chart curves
function smoothPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return '';
  let d = `M ${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(pts.length - 1, i + 2)];
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x},${c1y} ${c2x},${c2y} ${p2.x},${p2.y}`;
  }
  return d;
}

const formatM = (n: number) => `$${(n / 1000000).toFixed(1)}M`;

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
  const [dealHover, setDealHover] = useState<number | null>(null);
  const [fundHover, setFundHover] = useState<number | null>(null);

  const dealMax = 140;
  const totalReceived = dealTrendData.reduce((s, d) => s + d.received, 0);
  const totalApproved = dealTrendData.reduce((s, d) => s + d.approved, 0);
  const avgApprovalRate = Math.round((totalApproved / totalReceived) * 100);
  const bestDealMonth = dealTrendData.reduce((best, d) => (d.received > best.received ? d : best), dealTrendData[0]);
  const avgReviewDays = (dealTrendData.reduce((s, d) => s + d.reviewDays, 0) / dealTrendData.length).toFixed(1);

  const fundMax = 6000000;
  const totalFunded = fundingData.reduce((s, d) => s + d.amount, 0);
  const peakMonth = fundingData.reduce((best, d) => (d.amount > best.amount ? d : best), fundingData[0]);
  const fundPts = fundingData.map((d, i) => ({
    x: (i / (fundingData.length - 1)) * 100,
    y: 100 - (d.amount / fundMax) * 100,
  }));
  const fundLine = smoothPath(fundPts);
  const fundArea = `${fundLine} L 100,100 L 0,100 Z`;

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
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div>
              <CardTitle>Deal Review Trends</CardTitle>
              <CardDescription>Monthly volume, approvals and declines — last 12 months</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{totalReceived.toLocaleString()}</div>
              <div className="flex items-center justify-end gap-1 text-xs text-[#25A900]">
                <TrendingUp className="h-3 w-3" />
                +24% vs last year
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Legend */}
            <div className="flex items-center mb-4" style={{ gap: 20 }}>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4E0F60]"></span>
                <span className="text-xs text-muted-foreground">Received</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25A900]"></span>
                <span className="text-xs text-muted-foreground">Approved</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ED1E59]"></span>
                <span className="text-xs text-muted-foreground">Declined</span>
              </div>
            </div>

            <div className="flex gap-3">
              {/* Y axis */}
              <div className="flex flex-col justify-between text-[10px] text-muted-foreground text-right w-7 shrink-0" style={{ height: '14rem', paddingBottom: 20 }}>
                <span>140</span>
                <span>105</span>
                <span>70</span>
                <span>35</span>
                <span>0</span>
              </div>

              {/* Plot area */}
              <div className="relative flex-1" onMouseLeave={() => setDealHover(null)}>
                {/* Gridlines */}
                <div className="absolute left-0 right-0 top-0 flex flex-col justify-between pointer-events-none" style={{ bottom: 20 }}>
                  {[0, 1, 2, 3, 4].map((g) => (
                    <div key={g} className="w-full" style={{ borderTop: '1px dashed #E5E7EB', height: 0 }}></div>
                  ))}
                </div>

                {/* Bars */}
                <div className="relative flex items-end" style={{ height: '14rem', paddingBottom: 20 }}>
                  {dealTrendData.map((item, index) => (
                    <div
                      key={item.name}
                      className="relative flex-1 flex flex-col items-center justify-end h-full rounded-md transition-colors"
                      style={{ backgroundColor: dealHover === index ? 'rgba(78,15,96,0.05)' : 'transparent' }}
                      onMouseEnter={() => setDealHover(index)}
                    >
                      <div className="flex items-end w-full justify-center h-full" style={{ gap: 3 }}>
                        <div
                          className="rounded-full bg-[#4E0F60] transition-all duration-300"
                          style={{ width: '22%', maxWidth: 10, height: `${(item.received / dealMax) * 100}%` }}
                        ></div>
                        <div
                          className="rounded-full bg-[#25A900] transition-all duration-300"
                          style={{ width: '22%', maxWidth: 10, height: `${(item.approved / dealMax) * 100}%` }}
                        ></div>
                        <div
                          className="rounded-full bg-[#ED1E59] transition-all duration-300"
                          style={{ width: '22%', maxWidth: 10, height: `${(item.declined / dealMax) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* X labels */}
                <div className="absolute left-0 right-0 flex" style={{ bottom: 0 }}>
                  {dealTrendData.map((item) => (
                    <span key={item.name} className="flex-1 text-center text-[10px] text-muted-foreground whitespace-nowrap">{item.name}</span>
                  ))}
                </div>

                {/* Tooltip */}
                {dealHover !== null && (
                  <div
                    className="absolute top-0 pointer-events-none"
                    style={{
                      left: `${((dealHover + 0.5) / dealTrendData.length) * 100}%`,
                      transform: dealHover < 2 ? 'translateX(0)' : dealHover > dealTrendData.length - 3 ? 'translateX(-100%)' : 'translateX(-50%)',
                    }}
                  >
                    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs whitespace-nowrap">
                      <div className="font-semibold mb-1">{dealTrendData[dealHover].name}</div>
                      <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#4E0F60]"></span>Received: <span className="font-medium">{dealTrendData[dealHover].received}</span></div>
                      <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#25A900]"></span>Approved: <span className="font-medium">{dealTrendData[dealHover].approved}</span></div>
                      <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#ED1E59]"></span>Declined: <span className="font-medium">{dealTrendData[dealHover].declined}</span></div>
                      <div className="border-t border-gray-200 mt-1 pt-1 text-muted-foreground">
                        Approval rate {Math.round((dealTrendData[dealHover].approved / dealTrendData[dealHover].received) * 100)}% • {dealTrendData[dealHover].reviewDays}d avg review
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer stats */}
            <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-gray-200">
              <div>
                <div className="text-[10px] text-muted-foreground">Avg approval rate</div>
                <div className="text-sm font-semibold">{avgApprovalRate}%</div>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">Best month</div>
                <div className="text-sm font-semibold">{bestDealMonth.name} • {bestDealMonth.received} deals</div>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">Avg review time</div>
                <div className="text-sm font-semibold">{avgReviewDays} days</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Funding Over Time */}
        <Card>
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div>
              <CardTitle>Funding Over Time</CardTitle>
              <CardDescription>Monthly funded volume and deal count — last 12 months</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{formatM(totalFunded)}</div>
              <div className="flex items-center justify-end gap-1 text-xs text-[#25A900]">
                <TrendingUp className="h-3 w-3" />
                +31% vs last year
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Legend */}
            <div className="flex items-center mb-4" style={{ gap: 20 }}>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4E0F60]"></span>
                <span className="text-xs text-muted-foreground">Funded amount</span>
              </div>
            </div>

            <div className="flex gap-3">
              {/* Y axis */}
              <div className="flex flex-col justify-between text-[10px] text-muted-foreground text-right w-9 shrink-0" style={{ height: '14rem', paddingBottom: 20 }}>
                <span>$6M</span>
                <span>$4.5M</span>
                <span>$3M</span>
                <span>$1.5M</span>
                <span>$0</span>
              </div>

              {/* Plot area */}
              <div className="relative flex-1" onMouseLeave={() => setFundHover(null)}>
                {/* Gridlines */}
                <div className="absolute left-0 right-0 top-0 flex flex-col justify-between pointer-events-none" style={{ bottom: 20 }}>
                  {[0, 1, 2, 3, 4].map((g) => (
                    <div key={g} className="w-full" style={{ borderTop: '1px dashed #E5E7EB', height: 0 }}></div>
                  ))}
                </div>

                <div className="relative" style={{ height: '14rem', paddingBottom: 20 }}>
                  <div className="relative h-full">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="lenderFundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#4E0F60" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#4E0F60" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>
                      <path d={fundArea} fill="url(#lenderFundGradient)" />
                      <path d={fundLine} fill="none" stroke="#4E0F60" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                      {fundHover !== null && (
                        <line
                          x1={fundPts[fundHover].x} y1="0" x2={fundPts[fundHover].x} y2="100"
                          stroke="#4E0F60" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" opacity="0.4"
                        />
                      )}
                    </svg>

                    {/* Data dots (HTML so they stay round) */}
                    {fundingData.map((item, index) => (
                      <span
                        key={item.name}
                        className="absolute w-2 h-2 rounded-full bg-[#4E0F60] border-2 transition-transform"
                        style={{
                          left: `${fundPts[index].x}%`,
                          top: `${fundPts[index].y}%`,
                          borderColor: '#fff',
                          transform: `translate(-50%, -50%)${fundHover === index ? ' scale(1.5)' : ''}`,
                        }}
                      ></span>
                    ))}

                    {/* Hover zones */}
                    <div className="absolute inset-0 flex">
                      {fundingData.map((item, index) => (
                        <div key={item.name} className="flex-1" onMouseEnter={() => setFundHover(index)}></div>
                      ))}
                    </div>
                  </div>

                  {/* X labels */}
                  <div className="absolute left-0 right-0 flex" style={{ bottom: 0 }}>
                    {fundingData.map((item) => (
                      <span key={item.name} className="flex-1 text-center text-[10px] text-muted-foreground whitespace-nowrap">{item.name}</span>
                    ))}
                  </div>
                </div>

                {/* Tooltip */}
                {fundHover !== null && (
                  <div
                    className="absolute top-0 pointer-events-none"
                    style={{
                      left: `${fundPts[fundHover].x}%`,
                      transform: fundHover < 2 ? 'translateX(0)' : fundHover > fundingData.length - 3 ? 'translateX(-100%)' : 'translateX(-50%)',
                    }}
                  >
                    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs whitespace-nowrap">
                      <div className="font-semibold mb-1">{fundingData[fundHover].name}</div>
                      <div>Funded: <span className="font-medium">{formatM(fundingData[fundHover].amount)}</span></div>
                      <div>Deals: <span className="font-medium">{fundingData[fundHover].deals}</span></div>
                      <div className="border-t border-gray-200 mt-1 pt-1 text-muted-foreground">
                        Avg {formatM(fundingData[fundHover].amount / fundingData[fundHover].deals)} per deal
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer stats */}
            <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-gray-200">
              <div>
                <div className="text-[10px] text-muted-foreground">Total funded</div>
                <div className="text-sm font-semibold">{formatM(totalFunded)}</div>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">Peak month</div>
                <div className="text-sm font-semibold">{peakMonth.name} • {formatM(peakMonth.amount)}</div>
              </div>
              <div>
                <div className="text-[10px] text-muted-foreground">Monthly average</div>
                <div className="text-sm font-semibold">{formatM(totalFunded / fundingData.length)}</div>
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