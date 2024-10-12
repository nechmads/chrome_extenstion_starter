import { createRoot } from "react-dom/client";
import AppNavigation from "@/components/navigation/AppNavigation.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <>
    <AppNavigation />
    <Toaster />
  </>
);
