import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth/signInWithGoogle";
import { Mail } from "lucide-react";
import appConfig from "@/app-config";
import { useNavigate } from "react-router-dom";
import { registerFlowState } from "@/state/registerFlowState";

interface SignUpButtonsProps {
  onToggleAuthMode: () => void;
}

const SignUpButtons = ({ onToggleAuthMode }: SignUpButtonsProps) => {
  const navigate = useNavigate();

  return (
    <>
      {appConfig.SIGN_IN_WITH_EMAIL && (
        <Button
          onClick={() => {
            registerFlowState.assign({ mode: "signup", name: "", email: "" });
            navigate("/auth/namestep");
          }}
          className="w-full mb-4 bg-white hover:bg-gray-100 text-black border border-gray-300"
        >
          <Mail className="w-5 h-5 mr-2" />
          Sign Up with Email
        </Button>
      )}
      {appConfig.SIGN_IN_WITH_GOOGLE && (
        <Button
          onClick={signInWithGoogle}
          variant="outline"
          className="w-full border-black text-black mb-4"
        >
          <img src="/images/logos/google-g.png" alt="Google logo" className="w-5 h-5 mr-2" />
          Sign Up with Google
        </Button>
      )}
      <Button onClick={onToggleAuthMode} variant="link" className="w-full text-sm text-gray-600">
        Already have an account? Sign in
      </Button>
    </>
  );
};

export default SignUpButtons;
