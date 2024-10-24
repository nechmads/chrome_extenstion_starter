// navigationUtil.ts
import { NavigateFunction } from "react-router-dom";

// Create a variable to store the navigate function
let navigator: NavigateFunction | null = null;

// Function to set the navigator
export const setNavigator = (navigateFunc: NavigateFunction) => {
  navigator = navigateFunc;
};

// Function to navigate programmatically
export const navigateTo = (path: string) => {
  if (!navigator) {
    throw new Error("Navigation function not initialized. Make sure to call setNavigator first.");
  }
  navigator(path);
};

// Optional: Function to navigate with state
export const navigateWithState = (path: string, state: unknown) => {
  if (!navigator) {
    throw new Error("Navigation function not initialized. Make sure to call setNavigator first.");
  }
  navigator(path, { state });
};

// Optional: Function to navigate with replace
export const navigateReplace = (path: string) => {
  if (!navigator) {
    throw new Error("Navigation function not initialized. Make sure to call setNavigator first.");
  }
  navigator(path, { replace: true });
};
