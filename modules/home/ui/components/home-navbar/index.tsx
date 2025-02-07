import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { AuthButton } from "@/modules/auth/ui/components/auth-button";

export const HomeNavbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* menu and logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href={"/"}>
            <div className="p-4 flex gap-1 items-center">
              <Image src={"/logo.svg"} height={32} width={32} alt="Logo" />
              <p className="text-xl font-semibold tracking-tight">NewTube</p>
            </div>
          </Link>
        </div>
        {/* Search Bar */}
        <div className="flex-1 flex justify-center mx-auto max-w-[720px]">
          <SearchInput />
        </div>
        <div className="flex-shrink-0 items-center flex gap-4">
          <AuthButton />
        </div>
      </div>
    </div>
  );
};
