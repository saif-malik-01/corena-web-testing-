import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavbarContent = () => {
  return (
    <>
      <nav className="justify-self-center">
        <ul className="flex md:flex-row flex-col items-center gap-6 md:gap-10 text-sm">
          <li>
            <Link href="/#features">Features</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
        </ul>
      </nav>
      <span className="flex gap-2 justify-self-end">
        {/* <Button variant="outline">Book a demo</Button>
        <Button>Get Started</Button> */}
      </span>
    </>
  );
};

export default NavbarContent;
