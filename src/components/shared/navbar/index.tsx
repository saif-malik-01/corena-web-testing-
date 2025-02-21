import Image from "next/image";
import { Button } from "../../ui/button";
import NavbarAnimation from "./navbar-animation";
import Link from "next/link";
import NavbarContent from "./navbar-content";
import MobileNavbar from "./mobile-navbar";

const Navbar = () => {
  return (
    <header className="w-screen navbar-header dark z-[100] fixed left-0 top-6 px-6 md:px-10 py-4 text-white transition-all duration-300 ease-in-out bg-transparent">
      <div className="hidden md:grid grid-cols-3 items-center w-full">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="corena-ai-logo"
            width={40}
            height={40}
          />
          <p className="text-xl font-semibold">Corena</p>
        </Link>
        <NavbarContent />
      </div>
      <MobileNavbar>
        <NavbarContent />
      </MobileNavbar>
      <NavbarAnimation />
    </header>
  );
};

export default Navbar;
