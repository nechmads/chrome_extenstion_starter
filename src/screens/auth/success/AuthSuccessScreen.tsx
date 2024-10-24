import { H1, P, Lead } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const AuthSuccessScreen = () => {
  const handleCloseTab = () => {
    if (chrome && chrome.tabs && chrome.tabs.getCurrent) {
      chrome.tabs.getCurrent((tab) => {
        if (tab && tab.id) {
          chrome.tabs.remove(tab.id);
        }
      });
    } else {
      // Fallback for non-extension environments (e.g., development)
      window.close();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-6">
      <CheckCircle className="w-16 h-16 text-green-500 mb-6" />
      <H1 className="text-center mb-4">Authentication Successful!</H1>
      <Lead className="text-center mb-6">You're now logged in and ready to go.</Lead>
      <P className="text-center mb-8">
        To access the extension, simply click on its icon in the Chrome toolbar.
      </P>
      <Button variant="default" size="lg" onClick={handleCloseTab}>
        Close this tab
      </Button>
    </div>
  );
};

export default AuthSuccessScreen;
