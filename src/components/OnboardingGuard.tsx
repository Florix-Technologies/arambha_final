import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function OnboardingGuard({ children }: { children: React.ReactNode }) {
  const { currentUser, userData, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  // Paths that do not require onboarding
  const bypassPaths = ["/onboarding", "/login", "/signup"];

  // If user is logged in, but onboarding is not completed, and they are not on a bypass path
  if (currentUser && userData && userData.onboardingCompleted === false && !bypassPaths.includes(location.pathname)) {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
}
