import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

// Component imports
import { AuthPage } from "./components/AuthPage";
import { OnboardingFlow } from "./components/OnboardingFlow";
import { DashboardLayout } from "./components/DashboardLayout";
import { ReportsAnalytics } from "./components/ReportsAnalytics";
import { CallLogs, CallLogsHeaderActions } from "./components/CallLogs";
import { Lines } from "./components/Lines";
import { LinesHeaderActions } from "./components/Lines";
import { IVRFlows, IVRFlowsHeaderActions } from "./components/IVRFlows";
import { IVRVoices } from "./components/IVRVoices";
import { IVRVoicesHeaderActions } from "./components/IVRVoices";
import { Billing } from "./components/Billing";
import { Users } from "./components/Users";
import { SettingsRegistration } from "./components/settings/SettingsRegistration";
import { RegisteredVoIPNumbersHeaderActions } from "./components/settings/RegisteredVoIPNumbers";
import { SettingsView } from "./components/settings/SettingsView";
import { UserSettings } from "./components/settings/UserSettings";
import { DesignSystemShowcase } from "./components/DesignSystemShowcase";
import { CreateIVRFlow } from "./components/CreateIVRFlow";
import { AddExtension } from "./components/AddExtension";
import { Toaster } from "./components/ui/sonner";

type OnboardingData = {
  personalInfo: {
    firstName: string;
    lastName: string;
    mobile: string;
    idNumber: string;
    birthday: string;
    city: string;
    address: string;
    phoneNumber: string;
  };
  businessInfo: {
    companyName: string;
    registrationId: string;
    city: string;
    address: string;
    companyPhone: string;
  };
  linesSetup: {
    extensions: Array<{
      id: number;
      name: string;
      dialingNumber: string;
      voiceSetting: string;
    }>;
  };
  ivrVoices: {
    files: any[];
  };
};

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // Allow access to dashboard even if onboarding is not complete
  // Onboarding is only required for new signups
  return <>{children}</>;
}

function OnboardingRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const isOnboardingComplete = localStorage.getItem('onboardingComplete') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (isOnboardingComplete) {
    return <Navigate to="/reports" replace />;
  }
  
  return <>{children}</>;
}

function AuthRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const isOnboardingComplete = localStorage.getItem('onboardingComplete') === 'true';
  
  if (isAuthenticated && isOnboardingComplete) {
    return <Navigate to="/reports" replace />;
  }
  
  if (isAuthenticated && !isOnboardingComplete) {
    return <Navigate to="/onboarding" replace />;
  }
  
  return <>{children}</>;
}

function LinesWrapper() {
  const navigate = useNavigate();
  
  return (
    <DashboardLayout headerActions={<LinesHeaderActions onAddClick={() => navigate('/lines/add')} />}>
      <Lines />
    </DashboardLayout>
  );
}

function IVRFlowsWrapper() {
  const navigate = useNavigate();
  
  return (
    <DashboardLayout headerActions={<IVRFlowsHeaderActions onCreateClick={() => navigate('/ivr-flows/create')} />}>
      <IVRFlows />
    </DashboardLayout>
  );
}

function SettingsRegistrationWrapper() {
  const [addNumberDialogOpen, setAddNumberDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("voip-numbers");
  
  return (
    <DashboardLayout 
      headerActions={
        activeTab === "voip-numbers" ? (
          <RegisteredVoIPNumbersHeaderActions onAddClick={() => setAddNumberDialogOpen(true)} />
        ) : null
      }
    >
      <SettingsRegistration 
        addNumberDialogOpen={addNumberDialogOpen}
        onAddNumberDialogChange={setAddNumberDialogOpen}
        onTabChange={setActiveTab}
      />
    </DashboardLayout>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );
  
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    personalInfo: {
      firstName: "",
      lastName: "",
      mobile: "",
      idNumber: "",
      birthday: "",
      city: "",
      address: "",
      phoneNumber: "",
    },
    businessInfo: {
      companyName: "",
      registrationId: "",
      city: "",
      address: "",
      companyPhone: "",
    },
    linesSetup: {
      extensions: [
        {
          id: 1,
          name: "",
          dialingNumber: "",
          voiceSetting: "default",
        },
      ],
    },
    ivrVoices: {
      files: [],
    },
  });

  useEffect(() => {
    // Load saved onboarding data
    const savedData = localStorage.getItem('onboardingData');
    if (savedData) {
      setOnboardingData(JSON.parse(savedData));
    }
  }, []);

  const handleAuthenticate = () => {
    setIsAuthenticated(true);
  };

  const handleOnboardingComplete = (data: OnboardingData) => {
    setOnboardingData(data);
    localStorage.setItem('onboardingComplete', 'true');
    localStorage.setItem('onboardingData', JSON.stringify(data));
  };

  const getDefaultRoute = () => {
    const isAuth = localStorage.getItem('isAuthenticated') === 'true';
    const isOnboardingDone = localStorage.getItem('onboardingComplete') === 'true';
    
    if (!isAuth) return '/login';
    if (!isOnboardingDone) return '/onboarding';
    return '/reports';
  };

  return (
    <Router>
      <Routes>
        {/* Root redirect */}
        <Route 
          path="/" 
          element={<Navigate to={getDefaultRoute()} replace />} 
        />
        
        {/* Auth routes */}
        <Route 
          path="/login" 
          element={
            <AuthRoute>
              <AuthPage onAuthenticate={handleAuthenticate} />
            </AuthRoute>
          } 
        />
        
        {/* Onboarding route */}
        <Route 
          path="/onboarding" 
          element={
            <OnboardingRoute>
              <OnboardingFlow
                onComplete={handleOnboardingComplete}
                initialData={onboardingData}
              />
            </OnboardingRoute>
          } 
        />
        
        {/* Protected dashboard routes */}
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ReportsAnalytics />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/call-logs"
          element={
            <ProtectedRoute>
              <DashboardLayout headerActions={<CallLogsHeaderActions />}>
                <CallLogs />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/lines"
          element={
            <ProtectedRoute>
              <LinesWrapper />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/lines/add"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <AddExtension />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/ivr-flows"
          element={
            <ProtectedRoute>
              <IVRFlowsWrapper />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/ivr-flows/create"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <CreateIVRFlow />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/ivr-voices"
          element={
            <ProtectedRoute>
              <DashboardLayout headerActions={<IVRVoicesHeaderActions onUploadClick={() => {}} />}>
                <IVRVoices />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/billing"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Billing />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Users />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        {/* Settings routes */}
        <Route
          path="/settings/registration"
          element={
            <ProtectedRoute>
              <SettingsRegistrationWrapper />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/settings/view"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <SettingsView />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/settings/user"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <UserSettings />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/design-system"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <DesignSystemShowcase />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        
        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </Router>
  );
}