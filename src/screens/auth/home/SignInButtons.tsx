import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth/signInWithGoogle";
import { Mail } from "lucide-react";
import appConfig from "@/app-config";
import { registerFlowState } from "@/state/registerFlowState";
import { useNavigate } from "react-router-dom";

interface SignInButtonsProps {
  onToggleAuthMode: () => void;
}

const SignInButtons = ({ onToggleAuthMode }: SignInButtonsProps) => {
  const navigate = useNavigate();

  return (
    <>
      {appConfig.SIGN_IN_WITH_EMAIL && (
        <Button
          onClick={() => {
            registerFlowState.assign({ mode: "signin", name: "", email: "" });
            navigate("/auth/emailstep");
          }}
          className="w-full mb-4 bg-white hover:bg-gray-100 text-black border border-gray-300"
        >
          <Mail className="w-5 h-5 mr-2" />
          Sign In with Email
        </Button>
      )}
      {appConfig.SIGN_IN_WITH_GOOGLE && (
        <Button
          onClick={signInWithGoogle}
          variant="outline"
          className="w-full border-black text-black mb-4"
        >
          <img src="/images/logos/google-g.png" alt="Google logo" className="w-5 h-5 mr-2" />
          Sign In with Google
        </Button>
      )}
      <Button onClick={onToggleAuthMode} variant="link" className="w-full text-sm text-gray-600">
        Don't have an account? Sign up
      </Button>
    </>
  );
};

export default SignInButtons;
