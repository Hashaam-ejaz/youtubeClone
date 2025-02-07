import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";

export const AuthButton = () => {
  //TODO: Add different auth states
  return (
    <Button
      variant={"outline"}
      className="px-4 p-2 text-sm font-md text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none"
    >
      <UserCircleIcon />
      Sign In
    </Button>
  );
};
