"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PROPS {
  children: React.ReactNode;
}

const MobileNavbar = ({ children }: PROPS) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full block md:hidden">
      <span className="flex justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="corena-ai-logo"
            width={40}
            height={40}
          />
          <p className="text-xl font-semibold">Corena</p>
        </Link>
        <Button onClick={() => setIsOpen(!isOpen)} variant="outline">
          {isOpen ? <X /> : <Menu />}
        </Button>
      </span>
      <div
        className={cn(
          "overflow-y-hidden bg-neutral-900 flex flex-col items-center gap-8 mt-4 rounded-xl overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 p-4" : "max-h-0"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default MobileNavbar;
