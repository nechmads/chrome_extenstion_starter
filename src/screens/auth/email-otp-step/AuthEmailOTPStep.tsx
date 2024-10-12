import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { registerFlowState } from "@/state/registerFlowState";
import supabase from "@/services/supabase";
import AuthNavBar from "@/components/auth/AuthNavBar";
import useShowNotification from "@/lib/notifications/useShowNotification";
import { authState } from "@/state/authState";

const AuthEmailOTPStep = () => {
  const [otp, setOTP] = useState("");
  const [countdown, setCountdown] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const navigate = useNavigate();
  const showNotification = useShowNotification();
  const email = registerFlowState.get()?.email;

  useEffect(() => {
    sendOTPEmail();
  }, []);

  useEffect(() => {
    let timer: number;
    if (countdown > 0 && isResendDisabled) {
      timer = window.setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setIsResendDisabled(false);
    }
    return () => window.clearTimeout(timer);
  }, [countdown, isResendDisabled]);

  const sendOTPEmail = async () => {
    if (email) {
      try {
        const options =
          registerFlowState.mode.peek() === "signup"
            ? {
                data: {
                  name: registerFlowState.get()?.name,
                },
              }
            : {};
        const { error } = await supabase.auth.signInWithOtp({
          email,
          options: options,
        });
        if (error) throw error;
      } catch (error) {
        console.error("Error sending OTP email:", error);
        showNotification({
          title: "Error sending OTP",
          description: "We couldn't send you the OTP email, Please try again in a few minutes",
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.verifyOtp({
        email: email!,
        token: otp,
        type: "email",
      });
      if (error) throw error;
      console.log("OTP verified successfully");
      const session = await supabase.auth.getSession();

      authState.user.set({
        email: email!,
        name: registerFlowState.name.peek(),
        id: session.data.session!.user.id,
      });
      navigate("/app/home");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      showNotification({
        title: "Wrong OTP",
        description: "Please check your OTP code and try again.",
      });
    }
  };

  const handleResendEmail = () => {
    sendOTPEmail();
    setCountdown(30);
    setIsResendDisabled(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AuthNavBar title="Verify Email" />
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <h1 className="text-2xl font-bold mb-6">Enter OTP</h1>
        <p className="text-sm text-gray-600 mb-4">
          We've sent a one-time password to your email. Please enter it below.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col items-center">
          <InputOTP value={otp} onChange={setOTP} maxLength={6} className="mb-4">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Button type="submit" className="w-full mt-4" disabled={otp.length !== 6}>
            Verify OTP
          </Button>
        </form>
        <div className="mt-4 flex flex-col items-center">
          <Button
            variant="link"
            onClick={handleResendEmail}
            disabled={isResendDisabled}
            className="text-sm"
          >
            Resend Email
          </Button>
          {countdown > 0 && (
            <p className="text-xs text-gray-500 mt-1">Resend in {countdown} seconds</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthEmailOTPStep;
