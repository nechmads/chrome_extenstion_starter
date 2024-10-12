import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface AuthNavBarProps {
  title: string;
}

const AuthNavBar = ({ title }: AuthNavBarProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between w-full p-4 bg-white border-b">
      <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="w-10" /> {/* Spacer to balance the layout */}
    </div>
  );
};

export default AuthNavBar;
