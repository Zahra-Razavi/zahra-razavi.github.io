import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { FileText, Send, CheckCircle, DollarSign, TrendingUp, Clock } from 'lucide-react';

const metricsData = [
  { name: 'Jan', submissions: 45, funding: 32 },
  { name: 'Feb', submissions: 52, funding: 38 },
  { name: 'Mar', submissions: 48, funding: 35 },
  { name: 'Apr', submissions: 61, funding: 42 },
  { name: 'May', submissions: 55, funding: 39 },
  { name: 'Jun', submissions: 67, funding: 48 },
];

export function OverviewPage() {
  return (
    <div className="space-y-6">
      {/* Quick Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-[#FF5F0C]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Files Pending</CardTitle>
            <FileText className="h-4 w-4 text-[#FF5F0C]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from yesterday</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#4E0F60]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deal Submissions</CardTitle>
            <Send className="h-4 w-4 text-[#4E0F60]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">$2.1M total value</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#ED1E59]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Offers</CardTitle>
            <Clock className="h-4 w-4 text-[#ED1E59]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">Awaiting responses</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#25A900]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Funded Deals</CardTitle>
            <DollarSign className="h-4 w-4 text-[#25A900]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">$1.2M total funded</p>
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
            <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-muted-foreground">Chart: Submission Trends Over Time</p>
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
            <div className="h-[300px] flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-muted-foreground">Chart: Funding Performance Over Time</p>
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