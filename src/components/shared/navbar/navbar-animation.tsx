"use client";

import { useEffect, useState } from "react";

const NavbarAnimation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (window.screen.width <= 768) return;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const header = document.getElementsByClassName("navbar-header")[0];

    if (isScrolled) {
      header.className =
        `w-screen navbar-header dark z-[100] fixed left-0 top-0 px-6 md:px-10 py-4 text-white transition-all duration-300 ease-in-out bg-black/95`.trim();
    } else {
      header.className =
        `w-screen navbar-header dark z-[100] fixed left-0 top-6 px-6 md:px-10 py-4 text-white transition-all duration-300 ease-in-out bg-transparent`.trim();
    }
  }, [isScrolled]);

  return <></>;
};

export default NavbarAnimation;
