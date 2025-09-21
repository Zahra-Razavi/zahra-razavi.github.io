import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { TrendingUp, FileCheck, Clock, DollarSign, Users, AlertCircle } from 'lucide-react';

export function LenderOverviewPage() {
  const stats = [
    {
      title: 'Total Applications',
      value: '142',
      change: '+12%',
      changeType: 'positive',
      icon: FileCheck,
    },
    {
      title: 'Pending Review',
      value: '23',
      change: '+3',
      changeType: 'neutral',
      icon: Clock,
    },
    {
      title: 'Monthly Volume',
      value: '$2.4M',
      change: '+8.2%',
      changeType: 'positive',
      icon: DollarSign,
    },
    {
      title: 'Approval Rate',
      value: '78%',
      change: '+2.1%',
      changeType: 'positive',
      icon: TrendingUp,
    },
  ];

  const recentApplications = [
    {
      id: 'APP-2024-001',
      merchant: 'Tech Solutions LLC',
      amount: '$150,000',
      status: 'Under Review',
      priority: 'High',
      submittedDate: '2024-01-15',
    },
    {
      id: 'APP-2024-002',
      merchant: 'Garden Center Co',
      amount: '$75,000',
      status: 'Pending Documents',
      priority: 'Medium',
      submittedDate: '2024-01-14',
    },
    {
      id: 'APP-2024-003',
      merchant: 'Restaurant Group',
      amount: '$200,000',
      status: 'Approved',
      priority: 'High',
      submittedDate: '2024-01-13',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${
                  stat.changeType === 'positive' ? 'text-green-600' : 
                  stat.changeType === 'negative' ? 'text-red-600' : 
                  'text-muted-foreground'
                }`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Applications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Recent Applications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentApplications.map((app) => (
              <div key={app.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-4">
                  <div>
                    <div className="font-medium">{app.merchant}</div>
                    <div className="text-sm text-muted-foreground">{app.id}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-medium">{app.amount}</div>
                    <div className="text-sm text-muted-foreground">{app.submittedDate}</div>
                  </div>
                  <Badge 
                    variant={
                      app.status === 'Approved' ? 'default' :
                      app.status === 'Under Review' ? 'secondary' :
                      'outline'
                    }
                    className={
                      app.status === 'Approved' ? 'bg-green-100 text-green-800 hover:bg-green-100' :
                      app.status === 'Under Review' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' :
                      ''
                    }
                  >
                    {app.status}
                  </Badge>
                  <Badge 
                    variant="outline"
                    className={
                      app.priority === 'High' ? 'border-red-200 text-red-800' :
                      app.priority === 'Medium' ? 'border-yellow-200 text-yellow-800' :
                      'border-gray-200 text-gray-800'
                    }
                  >
                    {app.priority}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Portfolio Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Funded Volume</span>
                  <span>$2.1M of $2.5M target</span>
                </div>
                <Progress value={84} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Applications Processed</span>
                  <span>89 of 100 target</span>
                </div>
                <Progress value={89} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Average Processing Time</span>
                  <span>2.3 days (Target: 3 days)</span>
                </div>
                <Progress value={77} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-500" />
              Attention Required
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="font-medium text-red-800">High Priority Applications</div>
                <div className="text-sm text-red-600">5 applications pending review for over 48 hours</div>
              </div>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="font-medium text-amber-800">Missing Documents</div>
                <div className="text-sm text-amber-600">8 applications waiting for required documentation</div>
              </div>
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="font-medium text-blue-800">Approved Awaiting Funding</div>
                <div className="text-sm text-blue-600">12 deals approved and ready for funding</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}