import { H1 } from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { signOut } from "@/state/authState";

const HomeScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <H1>Home</H1>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
};

export default HomeScreen;
