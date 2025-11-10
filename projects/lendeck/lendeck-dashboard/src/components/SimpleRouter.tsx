import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from './Layout';
import { BrokerSidebar } from './BrokerSidebar';
import { LenderSidebar } from './LenderSidebar';
import { DashboardSelector } from './DashboardSelector';
import { OverviewPage } from './broker/OverviewPage';
import { DealsPage } from './broker/DealsPage';
import { DealDetailPage } from './broker/DealDetailPage';
import { SubmissionsPage } from './broker/SubmissionsPage';
import { SubmissionDetailPage } from './broker/SubmissionDetailPage';
import { ClosingPage } from './broker/ClosingPage';
import { ClosingDetailPage } from './broker/ClosingDetailPage';
import { FundedPage } from './broker/FundedPage';
import { FundedDealDetailPage } from './broker/FundedDealDetailPage';
import { ACHManagementPage } from './broker/ACHManagementPage';
import { ACHDetailPage } from './broker/ACHDetailPage';
import { DashboardOverviewPage } from './lender/DashboardOverviewPage';
import { DealsPage as LenderDealsPage } from './lender/DealsPage';
import { UnderwritingPage } from './lender/UnderwritingPage';
import { ReportsPage } from './lender/ReportsPage';
import { ISOsPage } from './lender/ISOsPage';
import { SyndicatorsPage } from './lender/SyndicatorsPage';
import { MerchantsPage } from './lender/MerchantsPage';
import { AdvancesPage } from './lender/AdvancesPage';
import { AlertsPage } from './lender/AlertsPage';
import { ProfilePage } from './lender/ProfilePage';

// Layout wrapper components for each dashboard type
function BrokerLayout({ children, title }: { children: React.ReactNode; title: string }) {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = location.pathname.split('/')[2] || 'overview';

  const handleDashboardChange = (dashboard: string) => {
    if (dashboard === 'lender') {
      navigate('/lender/dashboard');
    }
  };

  return (
    <Layout
      currentDashboard="broker"
      onDashboardChange={handleDashboardChange}
      sidebar={<BrokerSidebar activeTab={activeTab} onTabChange={() => {}} />}
      title={title}
    >
      {children}
    </Layout>
  );
}

function LenderLayout({ children, title }: { children: React.ReactNode; title: string }) {
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = location.pathname.split('/')[2] || 'dashboard';

  const handleDashboardChange = (dashboard: string) => {
    if (dashboard === 'broker') {
      navigate('/broker/overview');
    }
  };

  return (
    <Layout
      currentDashboard="lender"
      onDashboardChange={handleDashboardChange}
      sidebar={<LenderSidebar activeTab={activeTab} onTabChange={() => {}} />}
      title={title}
    >
      {children}
    </Layout>
  );
}

export function SimpleRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardSelector />} />
        <Route path="/preview_page.html" element={<DashboardSelector />} />
        <Route path="/broker" element={<Navigate to="/broker/overview" replace />} />
        
        {/* Broker Routes */}
        <Route path="/broker/overview" element={
          <BrokerLayout title="Dashboard Overview">
            <OverviewPage />
          </BrokerLayout>
        } />
        <Route path="/broker/deals" element={
          <BrokerLayout title="Deals">
            <DealsPage />
          </BrokerLayout>
        } />
        <Route path="/broker/deals/:id" element={
          <BrokerLayout title="Deal Details">
            <DealDetailPage />
          </BrokerLayout>
        } />
        <Route path="/broker/submissions" element={
          <BrokerLayout title="Submissions">
            <SubmissionsPage />
          </BrokerLayout>
        } />
        <Route path="/broker/submissions/:id" element={
          <BrokerLayout title="Submission Details">
            <SubmissionDetailPage />
          </BrokerLayout>
        } />
        <Route path="/broker/closing" element={
          <BrokerLayout title="Closing">
            <ClosingPage />
          </BrokerLayout>
        } />
        <Route path="/broker/closing/:id" element={
          <BrokerLayout title="Closing Details">
            <ClosingDetailPage />
          </BrokerLayout>
        } />
        <Route path="/broker/funded" element={
          <BrokerLayout title="Funded Deals">
            <FundedPage />
          </BrokerLayout>
        } />
        <Route path="/broker/funded/:id" element={
          <BrokerLayout title="Funded Deal Details">
            <FundedDealDetailPage />
          </BrokerLayout>
        } />
        <Route path="/broker/ach-management" element={
          <BrokerLayout title="ACH Management">
            <ACHManagementPage />
          </BrokerLayout>
        } />
        <Route path="/broker/ach-management/:id" element={
          <BrokerLayout title="ACH Transaction Details">
            <ACHDetailPage />
          </BrokerLayout>
        } />
        
        {/* Lender Routes */}
        <Route path="/lender" element={<Navigate to="/lender/dashboard" replace />} />
        <Route path="/lender/dashboard" element={
          <LenderLayout title="Dashboard Overview">
            <DashboardOverviewPage />
          </LenderLayout>
        } />
        <Route path="/lender/deals" element={
          <LenderLayout title="Deals">
            <LenderDealsPage />
          </LenderLayout>
        } />
        <Route path="/lender/underwriting" element={
          <LenderLayout title="Underwriting">
            <UnderwritingPage />
          </LenderLayout>
        } />
        <Route path="/lender/isos" element={
          <LenderLayout title="ISOs">
            <ISOsPage />
          </LenderLayout>
        } />
        <Route path="/lender/syndicators" element={
          <LenderLayout title="Syndicators">
            <SyndicatorsPage />
          </LenderLayout>
        } />
        <Route path="/lender/merchants" element={
          <LenderLayout title="Merchants">
            <MerchantsPage />
          </LenderLayout>
        } />
        <Route path="/lender/cashadvances" element={
          <LenderLayout title="Cash Advances">
            <AdvancesPage />
          </LenderLayout>
        } />
        <Route path="/lender/alerts" element={
          <LenderLayout title="Alerts">
            <AlertsPage />
          </LenderLayout>
        } />
        <Route path="/lender/reports" element={
          <LenderLayout title="Reports">
            <ReportsPage />
          </LenderLayout>
        } />
        <Route path="/lender/profile" element={
          <LenderLayout title="Profile">
            <ProfilePage />
          </LenderLayout>
        } />
        
        {/* Catch-all route */}
        <Route path="*" element={<DashboardSelector />} />
      </Routes>
    </BrowserRouter>
  );
}