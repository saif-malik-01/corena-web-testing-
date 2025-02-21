"use client";

import Image from "next/image";

const logos = Array(25).fill("/images/logo.png");

const ClientShowcase = () => {
  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#0d0d0d]  to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0d0d0d]  to-transparent z-10"></div>
      <div className="flex whitespace-nowrap gap-8 animate-slide">
        {logos.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Logo"
            width={100}
            height={100}
            className="md:h-24 h-16 object-contain grayscale"
          />
        ))}
      </div>
    </div>
  );
};

export default ClientShowcase;
