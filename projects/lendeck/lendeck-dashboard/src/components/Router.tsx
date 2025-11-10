import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from './Layout';
import { BrokerSidebar } from './BrokerSidebar';
import { LenderSidebar } from './LenderSidebar';
import { DashboardSelector } from './DashboardSelector';
// Auth
import { AuthProvider, useAuth } from './auth/AuthContext';
import { LoginPage } from './auth/LoginPage';
import { SignupPage } from './auth/SignupPage';
import { ProtectedRoute } from './auth/ProtectedRoute';
// Demo Mode
import { DemoProvider } from './demo/DemoContext';
// Onboarding
import { BusinessInformationPage } from './onboarding/BusinessInformationPage';
import { BusinessContactPage } from './onboarding/BusinessContactPage';
import { MainOwnerInformationPage } from './onboarding/MainOwnerInformationPage';
import { FundingInformationPage } from './onboarding/FundingInformationPage';
import { SignaturePage } from './onboarding/SignaturePage';
// Broker pages
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
import { SettingsPage as BrokerSettingsPage } from './broker/SettingsPage';
import { ProfilePage as BrokerProfilePage } from './broker/ProfilePage';
// Lender pages
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
import { SettingsPage as LenderSettingsPage } from './lender/SettingsPage';
// Design System pages
import ComponentKit from './ComponentKit';
import ComponentKitSimple from './ComponentKitSimple';
import { DesignSystemDemo } from './design-system/DesignSystemDemo';

// Root redirect component based on authentication status
function RootRedirect() {
  const { isAuthenticated, user } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // If authenticated but no role selected, go to dashboard selector
  if (!user?.role) {
    return <Navigate to="/select-dashboard" replace />;
  }
  
  // Redirect to appropriate dashboard based on user role
  if (user?.role === 'broker') {
    return <Navigate to="/broker/overview" replace />;
  } else if (user?.role === 'lender') {
    return <Navigate to="/lender/dashboard" replace />;
  }
  
  return <Navigate to="/select-dashboard" replace />;
}

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

  const handleProfileClick = () => {
    navigate('/broker/profile');
  };

  return (
    <Layout
      currentDashboard="broker"
      onDashboardChange={handleDashboardChange}
      onProfileClick={handleProfileClick}
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

  const handleProfileClick = () => {
    navigate('/lender/profile');
  };

  return (
    <Layout
      currentDashboard="lender"
      onDashboardChange={handleDashboardChange}
      onProfileClick={handleProfileClick}
      sidebar={<LenderSidebar activeTab={activeTab} onTabChange={() => {}} />}
      title={title}
    >
      {children}
    </Layout>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      
      {/* Dashboard Selector - Protected, shows after login */}
      <Route path="/select-dashboard" element={
        <ProtectedRoute>
          <DashboardSelector />
        </ProtectedRoute>
      } />
      
      {/* Onboarding Routes - Protected */}
      <Route path="/onboarding/step-1" element={
        <ProtectedRoute>
          <BusinessInformationPage />
        </ProtectedRoute>
      } />
      <Route path="/onboarding/step-2" element={
        <ProtectedRoute>
          <BusinessContactPage />
        </ProtectedRoute>
      } />
      <Route path="/onboarding/step-3" element={
        <ProtectedRoute>
          <MainOwnerInformationPage />
        </ProtectedRoute>
      } />
      <Route path="/onboarding/step-4" element={
        <ProtectedRoute>
          <FundingInformationPage />
        </ProtectedRoute>
      } />
      <Route path="/onboarding/step-5" element={
        <ProtectedRoute>
          <SignaturePage />
        </ProtectedRoute>
      } />
      
      {/* Component Kit - Standalone page without dashboard layout */}
      <Route path="/component-kit" element={<ComponentKit />} />
      
      {/* Root redirects to login or dashboard based on auth */}
      <Route path="/" element={<RootRedirect />} />
      <Route path="/preview_page.html" element={<RootRedirect />} />
      
      {/* Broker Routes - Protected */}
      <Route path="/broker" element={<Navigate to="/broker/overview" replace />} />
      <Route path="/broker/overview" element={
        <ProtectedRoute requireRole="broker">
          <BrokerLayout title="Dashboard Overview">
            <OverviewPage />
          </BrokerLayout>
        </ProtectedRoute>
      } />
      <Route path="/broker/deals" element={
        <ProtectedRoute requireRole="broker">
          <BrokerLayout title="Deals">
            <DealsPage />
          </BrokerLayout>
        </ProtectedRoute>
      } />
      <Route path="/broker/deals/:id" element={
        <ProtectedRoute requireRole="broker">
          <BrokerLayout title="Deal Details">
            <DealDetailPage />
          </BrokerLayout>
        </ProtectedRoute>
      } />
      <Route path="/broker/submissions" element={
        <ProtectedRoute requireRole="broker">
          <BrokerLayout title="Submissions">
            <SubmissionsPage />
          </BrokerLayout>
        </ProtectedRoute>
      } />
      <Route path="/broker/submissions/:id" element={
        <ProtectedRoute requireRole="broker">
          <BrokerLayout title="Submission Details">
            <SubmissionDetailPage />
          </BrokerLayout>
        </ProtectedRoute>
      } />
      <Route path="/broker/closing" element={
        <ProtectedRoute requireRole="broker">
          <BrokerLayout title="Closing">
            <ClosingPage />
          </BrokerLayout>
        </ProtectedRoute>
      } />
      <Route path="/broker/closing/:id" element={
        <ProtectedRoute requireRole="broker">
          <BrokerLayout title="Closing Details">
            <ClosingDetailPage />
          </BrokerLayout>
        </ProtectedRoute>
      } />
      <Route path="/broker/funded" element={
        <ProtectedRoute requireRole="broker">
          <BrokerLayout title="Funded Deals">
            <FundedPage />
          </BrokerLayout>
        </ProtectedRoute>
      } />
      <Route path="/broker/funded/:id" element={
        <ProtectedRoute requireRole="broker">
          <BrokerLayout title="Funded Deal Details">
            <FundedDealDetailPage />
          </BrokerLayout>
        </ProtectedRoute>
      } />
      <Route path="/broker/ach-management" element={
        <ProtectedRoute requireRole="broker">
          <BrokerLayout title="ACH Management">
            <ACHManagementPage />
          </BrokerLayout>
        </ProtectedRoute>
      } />
      <Route path="/broker/ach-management/:id" element={
        <ProtectedRoute requireRole="broker">
          <BrokerLayout title="ACH Transaction Details">
            <ACHDetailPage />
          </BrokerLayout>
        </ProtectedRoute>
      } />
      <Route path="/broker/profile" element={
        <ProtectedRoute requireRole="broker">
          <BrokerLayout title="Profile">
            <BrokerProfilePage />
          </BrokerLayout>
        </ProtectedRoute>
      } />
      <Route path="/broker/settings" element={
        <ProtectedRoute requireRole="broker">
          <BrokerLayout title="Settings">
            <BrokerSettingsPage />
          </BrokerLayout>
        </ProtectedRoute>
      } />
      
      {/* Lender Routes - Protected */}
      <Route path="/lender" element={<Navigate to="/lender/dashboard" replace />} />
      <Route path="/lender/dashboard" element={
        <ProtectedRoute requireRole="lender">
          <LenderLayout title="Dashboard Overview">
            <DashboardOverviewPage />
          </LenderLayout>
        </ProtectedRoute>
      } />
      <Route path="/lender/deals" element={
        <ProtectedRoute requireRole="lender">
          <LenderLayout title="Deals">
            <LenderDealsPage />
          </LenderLayout>
        </ProtectedRoute>
      } />
      <Route path="/lender/underwriting" element={
        <ProtectedRoute requireRole="lender">
          <LenderLayout title="Underwriting">
            <UnderwritingPage />
          </LenderLayout>
        </ProtectedRoute>
      } />
      <Route path="/lender/isos" element={
        <ProtectedRoute requireRole="lender">
          <LenderLayout title="ISOs">
            <ISOsPage />
          </LenderLayout>
        </ProtectedRoute>
      } />
      <Route path="/lender/syndicators" element={
        <ProtectedRoute requireRole="lender">
          <LenderLayout title="Syndicators">
            <SyndicatorsPage />
          </LenderLayout>
        </ProtectedRoute>
      } />
      <Route path="/lender/merchants" element={
        <ProtectedRoute requireRole="lender">
          <LenderLayout title="Merchants">
            <MerchantsPage />
          </LenderLayout>
        </ProtectedRoute>
      } />
      <Route path="/lender/cashadvances" element={
        <ProtectedRoute requireRole="lender">
          <LenderLayout title="Cash Advances">
            <AdvancesPage />
          </LenderLayout>
        </ProtectedRoute>
      } />
      <Route path="/lender/alerts" element={
        <ProtectedRoute requireRole="lender">
          <LenderLayout title="Alerts">
            <AlertsPage />
          </LenderLayout>
        </ProtectedRoute>
      } />
      <Route path="/lender/reports" element={
        <ProtectedRoute requireRole="lender">
          <LenderLayout title="Reports">
            <ReportsPage />
          </LenderLayout>
        </ProtectedRoute>
      } />
      <Route path="/lender/profile" element={
        <ProtectedRoute requireRole="lender">
          <LenderLayout title="Profile">
            <ProfilePage />
          </LenderLayout>
        </ProtectedRoute>
      } />
      <Route path="/lender/settings" element={
        <ProtectedRoute requireRole="lender">
          <LenderLayout title="Settings">
            <LenderSettingsPage />
          </LenderLayout>
        </ProtectedRoute>
      } />
      
      {/* Design System Routes */}
      <Route path="/design-system/demo" element={<DesignSystemDemo />} />
      
      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DemoProvider>
          <AppRoutes />
        </DemoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}