import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { registerFlowState } from "@/state/registerFlowState";
import AuthNavBar from "@/components/auth/AuthNavBar";

const AuthEmailStep = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    registerFlowState.email.set(email);
    navigate("/auth/emailotpstep");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AuthNavBar title="Enter Email" />
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <h1 className="text-2xl font-bold mb-6">What's your email?</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
          />
          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthEmailStep;
