import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { registerFlowState } from "@/state/registerFlowState";
import AuthNavBar from "@/components/auth/AuthNavBar";

const AuthNameStep = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    registerFlowState.name.set(name);

    navigate("/auth/emailstep");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AuthNavBar title="Enter Name" />
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <h1 className="text-2xl font-bold mb-6">What's your name?</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

export default AuthNameStep;
