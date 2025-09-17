import { useState } from 'react';
import { Layout } from './components/Layout';
import { BrokerSidebar } from './components/BrokerSidebar';
import { LenderSidebar } from './components/LenderSidebar';
import { OverviewPage } from './components/broker/OverviewPage';
import { DealsPage } from './components/broker/DealsPage';
import { SubmissionsPage } from './components/broker/SubmissionsPage';
import { ClosingPage } from './components/broker/ClosingPage';
import { FundedPage } from './components/broker/FundedPage';
import { ACHManagementPage } from './components/broker/ACHManagementPage';
import { LenderOverviewPage } from './components/lender/LenderOverviewPage';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { CreditCard, FileText, Users, Building2, Settings } from 'lucide-react';

// Placeholder components for unimplemented lender pages
function LenderApplicationsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Loan Applications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Review and manage incoming loan applications from brokers and direct submissions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function LenderUnderwritingPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Underwriting Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Comprehensive underwriting tools and risk assessment for loan applications.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function LenderApprovedPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Approved Deals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Manage approved deals awaiting funding and documentation completion.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function LenderFundedPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Funded Deals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Track and manage successfully funded deals and ongoing portfolio performance.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

function LenderSettingsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Lender Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Configure lending criteria, approval workflows, and integration settings.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}



export default function App() {
  const [currentDashboard, setCurrentDashboard] = useState('broker');
  const [activeTab, setActiveTab] = useState('overview');

  // Reset active tab when switching dashboards
  const handleDashboardChange = (dashboard: string) => {
    setCurrentDashboard(dashboard);
    setActiveTab('overview');
  };

  const renderBrokerContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewPage />;
      case 'deals':
        return <DealsPage />;
      case 'submissions':
        return <SubmissionsPage />;
      case 'closing':
        return <ClosingPage />;
      case 'funded':
        return <FundedPage />;
      case 'ach':
        return <ACHManagementPage />;
      default:
        return <OverviewPage />;
    }
  };

  const renderLenderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <LenderOverviewPage />;
      case 'applications':
        return <LenderApplicationsPage />;
      case 'underwriting':
        return <LenderUnderwritingPage />;
      case 'approved':
        return <LenderApprovedPage />;
      case 'funded':
        return <LenderFundedPage />;
      case 'settings':
        return <LenderSettingsPage />;
      default:
        return <LenderOverviewPage />;
    }
  };

  const getBrokerTitle = () => {
    switch (activeTab) {
      case 'overview':
        return 'Dashboard Overview';
      case 'deals':
        return 'Deals';
      case 'submissions':
        return 'Submissions';
      case 'closing':
        return 'Closing';
      case 'funded':
        return 'Funded Deals';
      case 'ach':
        return 'ACH Management';
      default:
        return 'Dashboard';
    }
  };

  const getLenderTitle = () => {
    switch (activeTab) {
      case 'overview':
        return 'Lender Overview';
      case 'applications':
        return 'Applications';
      case 'underwriting':
        return 'Underwriting';
      case 'approved':
        return 'Approved Deals';
      case 'funded':
        return 'Funded Deals';
      case 'settings':
        return 'Settings';
      default:
        return 'Lender Dashboard';
    }
  };

  return (
    <Layout
      currentDashboard={currentDashboard}
      onDashboardChange={handleDashboardChange}
      sidebar={
        currentDashboard === 'broker' ? (
          <BrokerSidebar 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
        ) : (
          <LenderSidebar 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
        )
      }
      title={currentDashboard === 'broker' ? getBrokerTitle() : getLenderTitle()}
    >
      {currentDashboard === 'broker' ? renderBrokerContent() : renderLenderContent()}
    </Layout>
  );
}