import { useState } from "react";
import SignInButtons from "@/screens/auth/home/SignInButtons";
import SignUpButtons from "@/screens/auth/home/SignUpButtons";

const AuthHome = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleAuthMode = () => setIsSignIn(!isSignIn);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white p-4">
      <div className="w-full max-w-sm mt-auto">
        {/* Globe and coins image */}
        <img src="/images/temp_logo.png" alt="Product Logo" className="w-4/5 mb-6 mx-auto" />

        {/* Slogan */}
        <h1 className="text-3xl font-bold text-center mb-8 px-4">
          {chrome.i18n.getMessage("screens-authhome-title")}
        </h1>
      </div>

      {/* Buttons container */}
      <div className="w-full max-w-sm mb-[10%]">
        {isSignIn ? (
          <SignInButtons onToggleAuthMode={toggleAuthMode} />
        ) : (
          <SignUpButtons onToggleAuthMode={toggleAuthMode} />
        )}
      </div>
    </div>
  );
};

export default AuthHome;
