import { Analytics } from "@/lib/analytics/analytics";
import { convertUrlToScreenName } from "@/lib/analytics/convertUrlToScreenName";
import { useUser } from "@/state/authState";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://yourextensionurl";

/**
 * AnalyticsContainer Component
 *
 * This component is responsible for tracking screen views and identifying users
 * for analytics purposes. It should be placed high in the component tree to
 * ensure it can track navigation across the entire application.
 *
 * @component
 * @example
 * <AnalyticsContainer />
 */
const AnalyticsContainer = () => {
  const location = useLocation();
  const user = useUser();

  // Track screen views whenever the location changes
  useEffect(() => {
    const screenName = convertUrlToScreenName(location.pathname);

    Analytics.trackScreenView(screenName, {
      path: location.pathname,
      url: `${BASE_URL}/${location.pathname}`,
    });
  }, [location]);

  // Identify the user when user data becomes available
  useEffect(() => {
    if (user) {
      Analytics.identifyUser(user.id, user.email, user.name);
    }
  }, [user]);

  // This component doesn't render anything visible
  return <div />;
};

export default AnalyticsContainer;
