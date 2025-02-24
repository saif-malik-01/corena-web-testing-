import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="dark bg-black/95 text-white md:p-10 p-6 rounded-2xl mt-2">
      <div className="container grid grid-cols-12 gap-y-8 md:gap-0">
        <span className="md:col-span-3 col-span-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Corena Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold">Corena</span>
          </Link>
          <p className="mt-16 text-sm text-white/80 hidden md:block">
            Wellminto Home Services Private Limited <br /> © 2025 Corena - All
            Right Reserved
          </p>
        </span>
        <nav className="md:col-span-3 col-span-6 flex flex-col gap-4 md:justify-self-center text-sm">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>
        <div className="md:col-span-6 col-span-12 flex flex-col justify-between md:items-end gap-4 md:gap-0">
          <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
            <Link
              href="mailto:info@mapsily.com"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <span className="p-2 bg-white text-black rounded-md">
                <Mail className="w-4 h-4" />
              </span>
              <span>info@mapsily.com</span>
            </Link>
            <Link
              href="tel:+919389586440"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <span className="p-2 bg-white text-black rounded-md">
                <Phone className="w-4 h-4" />
              </span>
              <span>+919389586440</span>
            </Link>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com/corena"
                aria-label="Follow us on Facebook"
                className="hover:text-gray-300 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/corena"
                aria-label="Follow us on Instagram"
                className="hover:text-gray-300 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/corena"
                aria-label="Follow us on LinkedIn"
                className="hover:text-gray-300 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com/corena"
                aria-label="Subscribe to our YouTube channel"
                className="hover:text-gray-300 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <span className="text-sm">@corena</span>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center">
            <Button variant="link" asChild>
              <Link href="/terms-and-conditions" className="text-sm font-light">Terms & Conditions</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/terms-and-conditions">Privacy Policy</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/terms-and-conditions">Refund Policy</Link>
            </Button>
            <p className="font-light md:block hidden">|</p>
            <p className="ml-4 mt-4 md:mt-0 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 inline fill-white" /> by{" "}
              <Link
                className="text-accent"
                href="https://www.mapsily.com"
                target={"_blank"}
              >
                Mapsily
              </Link>
            </p>
          </div>
        </div>
      </div>
      <p className="block md:hidden border-t mt-4 pt-4 text-center text-sm text-white/80">
        Wellminto Home Services Private Limited <br /> © 2025 Corena - All Right
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
