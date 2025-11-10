import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireRole?: 'broker' | 'lender';
}

export function ProtectedRoute({ children, requireRole }: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If a specific role is required, check it
  if (requireRole && user?.role !== requireRole) {
    // Redirect to their correct dashboard
    const redirectPath = user?.role === 'broker' ? '/broker/overview' : '/lender/dashboard';
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
}
