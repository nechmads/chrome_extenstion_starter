import { createRoot } from "react-dom/client";
import AppNavigation from "@/components/navigation/AppNavigation.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";
import AppContainer from "./components/base/AppContainer";

createRoot(document.getElementById("root")!).render(
  <AppContainer>
    <AppNavigation />
    <Toaster />
  </AppContainer>
);
