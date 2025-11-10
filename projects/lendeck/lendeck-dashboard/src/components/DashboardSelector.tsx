import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { FileText, Building2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth/AuthContext';

export function DashboardSelector() {
  const navigate = useNavigate();
  const { setUserRole } = useAuth();

  const handleSelectDashboard = (role: 'broker' | 'lender') => {
    // Set the user role
    setUserRole(role);
    
    // Navigate to the appropriate dashboard
    if (role === 'broker') {
      navigate('/broker/overview');
    } else {
      navigate('/lender/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#4E0F60] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <h1 className="text-4xl font-bold text-[#4E0F60]">Lendeck</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Choose your dashboard to get started
          </p>
        </div>

        {/* Dashboard Options */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Broker Dashboard Card */}
          <Card className="hover:shadow-lg transition-shadow duration-200 border-2 hover:border-[#4E0F60]/20">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-[#4E0F60] rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-[#4E0F60]">Broker Dashboard</CardTitle>
              <CardDescription className="text-base">
                Manage deals, submissions, and client relationships
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="font-medium text-sm text-[#4E0F60]">Key Features:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Deal management and tracking</li>
                  <li>• Document collection and webforms</li>
                  <li>• Submission to lenders</li>
                  <li>• Closing and funded deal tracking</li>
                  <li>• ACH management</li>
                  <li>• Commission tracking</li>
                </ul>
              </div>
              <Button 
                onClick={() => handleSelectDashboard('broker')}
                className="w-full"
                size="lg"
              >
                Enter Broker Dashboard
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Lender Dashboard Card */}
          <Card className="hover:shadow-lg transition-shadow duration-200 border-2 hover:border-[#FF5F0C]/20">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-[#FF5F0C] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-[#FF5F0C]">Lender Dashboard</CardTitle>
              <CardDescription className="text-base">
                Underwrite, fund, and manage lending operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="font-medium text-sm text-[#FF5F0C]">Key Features:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Deal review and underwriting</li>
                  <li>• ISO and syndicator management</li>
                  <li>• Merchant and portfolio tracking</li>
                  <li>• Cash advance management</li>
                  <li>• Reporting and analytics</li>
                  <li>• Alert and notification system</li>
                </ul>
              </div>
              <Button 
                onClick={() => handleSelectDashboard('lender')}
                className="w-full bg-[rgb(255,95,12)]"
                size="lg"
              >
                Enter Lender Dashboard
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <Card className="bg-[#F9F8FD] border-[#4E0F60]/20">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> You can switch between dashboards at any time using the dropdown selector in the header. 
                Both dashboards are fully integrated and share data seamlessly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}