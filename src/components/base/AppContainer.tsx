import { useUser } from "@/state/authState";
import React, { useEffect } from "react";

interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer = ({ children }: AppContainerProps) => {
  const user = useUser();
  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      const isAuthenticated = user !== undefined;

      // Check if we're in a popup by examining window dimensions
      const isPopup = window.innerWidth === 340 && window.innerHeight === 600;

      // Check if this is already a tab view by looking for the 'source=tab' parameter
      const urlParams = new URLSearchParams(window.location.search);
      const isTab = urlParams.get("source") === "tab";

      console.log("isAuthenticated", isAuthenticated, user);
      console.log("isPopup", isPopup);
      console.log("isTab", isTab);
      if (!isAuthenticated && isPopup && !isTab) {
        // Only open new tab if we're in the popup and not already in tab view
        await chrome.tabs.create({
          url: chrome.runtime.getURL("index.html?source=tab"),
        });
        // Close the popup
        window.close();
      }
    };

    checkAuthAndRedirect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default AppContainer;
