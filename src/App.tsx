import { Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import { useIsAuthenticated } from "./state/authState";
import { useEffect } from "react";
import { setNavigator } from "@/lib/navigation/navigationHelpers";

function App() {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  // Set up the navigator on component mount
  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  if (isAuthenticated) {
    return <Navigate to="/app/home" />;
  }
  return <Navigate to="/auth/home" />;
}

export default App;
