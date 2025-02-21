import { Bot, Calendar, MessageCircle, UserCheck } from "lucide-react";
import SolutionCardLayout from "./solution-card-layout";
import Image from "next/image";

const Solutions = () => {
  return (
    <section
      id="features"
      className="flex flex-col items-center gap-10 md:py-20 py-10"
    >
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        How<span className="text-accent-700"> Corena</span> help you win more
        deals
      </h2>
      <div className="md:w-2/3 grid grid-cols-11 gap-4">
        <SolutionCardLayout
          className="md:col-span-6 col-span-11"
          Icon={Bot}
          title="AI-Powered cold calls"
          description="Our AI agent calls prospects on your behalf, delivering the perfect pitch."
        >
          <div className="group md:h-[300px] h-[250px] relative bg-gray-100 rounded-md flex items-end justify-center">
            <Image
              src="/images/ai-agent-setting.png"
              alt="ai-agent-setting"
              width={300}
              height={300}
              className="w-2/3 transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent z-10 w-full h-full" />
          </div>
        </SolutionCardLayout>
        <SolutionCardLayout
          className="md:col-span-5 col-span-11"
          Icon={UserCheck}
          title="Smart lead qualification"
          description="Automatically identify and prioritize high-value leads."
        >
          <div className="group md:h-[300px] h-[250px]  bg-gradient-to-tr from-accent via-accent to-transparent rounded-md flex items-end justify-end">
            <Image
              src="/images/lead-status.png"
              alt="lead-status"
              width={300}
              height={300}
              className="w-5/6 transition-transform duration-300 ease-in-out group-hover:-translate-x-6"
            />
          </div>
        </SolutionCardLayout>
        <SolutionCardLayout
          className="md:col-span-5 col-span-11"
          Icon={Calendar}
          title="Instant appointment booking"
          description="AI schedules meetings directly in your calendar."
        >
          <div className="group md:h-[300px] h-[250px]  relative bg-gray-100 rounded-md flex items-end justify-end">
            <Image
              src="/images/appointments.png"
              alt="appointments"
              width={400}
              height={400}
              className="w-5/6 transition-transform duration-300 ease-in-out group-hover:-translate-x-6"
            />
            <div className="absolute top-0 left-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent z-10 w-full h-full" />
          </div>
        </SolutionCardLayout>
        <SolutionCardLayout
          className="md:col-span-6 col-span-11"
          Icon={MessageCircle}
          title="Call transcripts & insights"
          description="Get detailed analytics on every call."
        >
          <div className="md:h-[300px] h-[250px]  group relative bg-gray-100 rounded-md pt-12">
            <Image
              src="/images/conversation-transcript.png"
              alt="conversation-transcript"
              width={300}
              height={300}
              className="absolute bottom-0 right-14 w-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-6"
            />
            <Image
              src="/images/conversation-recording.png"
              alt="conversation-recording"
              width={300}
              height={300}
              className="absolute bottom-0 left-14 w-1/2 transition-transform duration-300 ease-in-out group-hover:-translate-x-6"
            />
          </div>
        </SolutionCardLayout>
      </div>
    </section>
  );
};

export default Solutions;
