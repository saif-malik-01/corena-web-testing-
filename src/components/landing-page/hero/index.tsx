import Image from "next/image";
import BookingInput from "./booking-input";
import ClientShowcase from "./client-showcase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import VoiceBlob from "@/components/shared/voice-blob";

const Hero = () => {
  return (
    <section className="dark bg-black/95 text-white/95 rounded-2xl pt-32 md:pb-16 pb-4 px-4 flex flex-col gap-6 items-center">
      <Badge variant="outline">Supercharge your outreach 🚀</Badge>
      <h1 className="text-center text-3xl md:text-6xl font-semibold">
        Turn Cold Leads into <br />{" "}
        <span className="font-dmsansDisplay italic">Warm Conversations</span>
      </h1>
      <span className="md:w-1/3 text-center text-sm">
        Let AI handle cold calls, qualify leads, and schedule appointments so
        you can focus on closing deals.
      </span>
      <VoiceBlob />
      <BookingInput />
      <div className="flex gap-2 items-center md:mb-8 mb-4">
        <span className="flex -space-x-2">
          <Avatar className="w-[20px] h-[20px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-[20px] h-[20px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="w-[20px] h-[20px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </span>
        <p className="text-xs font-medium">
          Trusted by 100+ Sales Teams Worldwide
        </p>
      </div>
      <ClientShowcase />
    </section>
  );
};

export default Hero;
