import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { FileText, Send, CheckCircle, DollarSign, TrendingUp, Clock } from 'lucide-react';
// Recharts components removed to prevent timeout issues

const submissionTrendsData = [
  { name: 'Jan', submissions: 45, funding: 32 },
  { name: 'Feb', submissions: 52, funding: 38 },
  { name: 'Mar', submissions: 48, funding: 35 },
  { name: 'Apr', submissions: 61, funding: 42 },
  { name: 'May', submissions: 55, funding: 39 },
  { name: 'Jun', submissions: 67, funding: 48 },
];

const fundingPerformanceData = [
  { name: 'Jan', amount: 1200000, rate: 71 },
  { name: 'Feb', amount: 1580000, rate: 73 },
  { name: 'Mar', amount: 1350000, rate: 69 },
  { name: 'Apr', amount: 1890000, rate: 75 },
  { name: 'May', amount: 1650000, rate: 72 },
  { name: 'Jun', amount: 2100000, rate: 78 },
];

export function OverviewPage() {
  return (
    <div className="space-y-6">
      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-orange/10 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-lendeck-orange" />
              </div>
              <div>
                <div className="text-xl">12</div>
                <div className="text-sm text-muted-foreground">New Files Pending</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-primary/10 rounded-lg flex items-center justify-center">
                <Send className="h-5 w-5 text-lendeck-primary" />
              </div>
              <div>
                <div className="text-xl">28</div>
                <div className="text-sm text-muted-foreground">Deal Submissions</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-pink/10 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-lendeck-pink" />
              </div>
              <div>
                <div className="text-xl">15</div>
                <div className="text-sm text-muted-foreground">Pending Offers</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-lendeck-success/10 rounded-lg flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-lendeck-success" />
              </div>
              <div>
                <div className="text-xl">8</div>
                <div className="text-sm text-muted-foreground">Funded Deals</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Submission Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Submission Trends</CardTitle>
            <CardDescription>Daily submissions over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 p-4">
              {/* Chart Legend */}
              <div className="flex justify-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-lendeck-primary rounded"></div>
                  <span className="text-sm">Submissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-lendeck-success rounded"></div>
                  <span className="text-sm">Funded</span>
                </div>
              </div>
              
              {/* Custom Line Chart */}
              <div className="relative h-48 border-l border-b border-gray-300">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid-submissions" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-submissions)" />
                  
                  {/* Submissions Line */}
                  <polyline
                    fill="none"
                    stroke="#4E0F60"
                    strokeWidth="2"
                    points={submissionTrendsData.map((item, index) => 
                      `${(index * 400) / (submissionTrendsData.length - 1)},${200 - (item.submissions / 67) * 180}`
                    ).join(' ')}
                  />
                  
                  {/* Funded Line */}
                  <polyline
                    fill="none"
                    stroke="#25A900"
                    strokeWidth="2"
                    points={submissionTrendsData.map((item, index) => 
                      `${(index * 400) / (submissionTrendsData.length - 1)},${200 - (item.funding / 67) * 180}`
                    ).join(' ')}
                  />
                  
                  {/* Data Points - Submissions */}
                  {submissionTrendsData.map((item, index) => (
                    <g key={`sub-${index}`}>
                      <circle
                        cx={(index * 400) / (submissionTrendsData.length - 1)}
                        cy={200 - (item.submissions / 67) * 180}
                        r="4"
                        fill="#4E0F60"
                        className="hover:r-6 transition-all"
                      />
                    </g>
                  ))}
                  
                  {/* Data Points - Funded */}
                  {submissionTrendsData.map((item, index) => (
                    <g key={`fund-${index}`}>
                      <circle
                        cx={(index * 400) / (submissionTrendsData.length - 1)}
                        cy={200 - (item.funding / 67) * 180}
                        r="4"
                        fill="#25A900"
                        className="hover:r-6 transition-all"
                      />
                    </g>
                  ))}
                </svg>
                
                {/* X-axis labels */}
                <div className="flex justify-between mt-2 px-2">
                  {submissionTrendsData.map((item, index) => (
                    <span key={index} className="text-xs text-gray-600">{item.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Funding Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Funding Performance</CardTitle>
            <CardDescription>Funded deals over time</CardDescription>
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
                    <pattern id="grid-funding" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                    </pattern>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#4E0F60', stopOpacity: 0.6}} />
                      <stop offset="100%" style={{stopColor: '#4E0F60', stopOpacity: 0.1}} />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-funding)" />
                  
                  {/* Area Chart Path */}
                  <path
                    d={`M 0,${200 - (fundingPerformanceData[0].amount / 2100000) * 180}
                       L ${400/5},${200 - (fundingPerformanceData[1].amount / 2100000) * 180}
                       L ${400*2/5},${200 - (fundingPerformanceData[2].amount / 2100000) * 180}
                       L ${400*3/5},${200 - (fundingPerformanceData[3].amount / 2100000) * 180}
                       L ${400*4/5},${200 - (fundingPerformanceData[4].amount / 2100000) * 180}
                       L ${400},${200 - (fundingPerformanceData[5].amount / 2100000) * 180}
                       L ${400},200 L 0,200 Z`}
                    fill="url(#areaGradient)"
                    stroke="#4E0F60"
                    strokeWidth="2"
                  />
                  
                  {/* Data Points */}
                  {fundingPerformanceData.map((item, index) => (
                    <circle
                      key={index}
                      cx={(index * 400) / (fundingPerformanceData.length - 1)}
                      cy={200 - (item.amount / 2100000) * 180}
                      r="4"
                      fill="#4E0F60"
                      className="hover:r-6 transition-all"
                    />
                  ))}
                </svg>
                
                {/* X-axis labels */}
                <div className="flex justify-between mt-2 px-2">
                  {fundingPerformanceData.map((item, index) => (
                    <span key={index} className="text-xs text-gray-600">{item.name}</span>
                  ))}
                </div>
                
                {/* Y-axis labels */}
                <div className="absolute -left-12 top-0 h-48 flex flex-col justify-between text-xs text-gray-500">
                  <span>$2.1M</span>
                  <span>$1.6M</span>
                  <span>$1.0M</span>
                  <span>$0.5M</span>
                  <span>$0</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates on your deals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { company: 'Tech Solutions Inc', status: 'Offer Received', amount: '$150,000', time: '2 hours ago', type: 'offer' },
              { company: 'Green Energy Co', status: 'Documents Submitted', amount: '$200,000', time: '4 hours ago', type: 'submitted' },
              { company: 'Retail Plus LLC', status: 'Funded', amount: '$75,000', time: '1 day ago', type: 'funded' },
              { company: 'Manufacturing Corp', status: 'Under Review', amount: '$300,000', time: '2 days ago', type: 'review' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[#F9F8FD]">
                <div className="flex items-center gap-3">
                  {activity.type === 'offer' && <CheckCircle className="h-4 w-4 text-[#25A900]" />}
                  {activity.type === 'submitted' && <Send className="h-4 w-4 text-[#4E0F60]" />}
                  {activity.type === 'funded' && <DollarSign className="h-4 w-4 text-[#25A900]" />}
                  {activity.type === 'review' && <Clock className="h-4 w-4 text-[#FF5F0C]" />}
                  <div>
                    <p className="font-medium">{activity.company}</p>
                    <p className="text-sm text-muted-foreground">{activity.status}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{activity.amount}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Success Rate Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#25A900]" />
            Success Rate Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 bg-[#F9F8FD] rounded-lg">
              <div className="text-2xl font-bold text-[#25A900]">68%</div>
              <p className="text-sm text-muted-foreground">Overall Success Rate</p>
            </div>
            <div className="text-center p-4 bg-[#F9F8FD] rounded-lg">
              <div className="text-2xl font-bold text-[#4E0F60]">85%</div>
              <p className="text-sm text-muted-foreground">Document Completion</p>
            </div>
            <div className="text-center p-4 bg-[#F9F8FD] rounded-lg">
              <div className="text-2xl font-bold text-[#ED1E59]">7.2</div>
              <p className="text-sm text-muted-foreground">Avg Days to Fund</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}