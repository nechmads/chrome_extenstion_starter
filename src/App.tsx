import { Navigate } from "react-router-dom";
import "./App.css";
import { useUser } from "./state/authState";

function App() {
  const user = useUser();

  if (user) {
    return <Navigate to="/app/home" />;
  }
  return <Navigate to="/auth/home" />;
}

export default App;
