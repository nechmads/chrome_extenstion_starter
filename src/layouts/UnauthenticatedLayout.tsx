import { useOutlet } from "react-router-dom";
import AnalyticsContainer from "@/components/base/AnalyticsContaciner";

/**
 * UnauthenticatedLayout Component
 *
 * This component serves as a wrapper for routes that do not require authentication.
 * It includes the AnalyticsContainer for tracking user actions on public pages.
 *
 * @component
 * @example
 * <Route element={<UnauthenticatedLayout />}>
 *   <Route path="/login" element={<LoginPage />} />
 *   <Route path="/signup" element={<SignupPage />} />
 * </Route>
 */
const UnauthenticatedLayout = () => {
  const outlet = useOutlet();

  return (
    <>
      <AnalyticsContainer />
      {outlet}
    </>
  );
};

export default UnauthenticatedLayout;
