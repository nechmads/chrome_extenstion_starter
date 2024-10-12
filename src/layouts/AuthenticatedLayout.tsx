import supabase from "@/services/supabase";
import { useUser } from "@/state/authState";
import { useEffect } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import AnalyticsContainer from "@/components/base/AnalyticsContaciner";

/**
 * AuthenticatedLayout Component
 *
 * This component serves as a wrapper for routes that require authentication.
 * It checks if the user is authenticated and redirects to the login page if not.
 * It also includes the AnalyticsContainer for tracking user actions.
 *
 * @component
 * @example
 * <Route element={<AuthenticatedLayout />}>
 *   <Route path="/dashboard" element={<Dashboard />} />
 * </Route>
 */
const AuthenticatedLayout = () => {
  const user = useUser();
  const navigate = useNavigate();
  const outlet = useOutlet();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session?.user || true) {
        navigate("/auth/home");
      }
    };
    if (!user) {
      navigate("/auth/home");
    }
    checkSession();
  }, [user, navigate]);

  return (
    <>
      <AnalyticsContainer />
      {outlet}
    </>
  );
};

export default AuthenticatedLayout;
