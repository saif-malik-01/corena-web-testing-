import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CustomPlan = () => {
  return (
    <section className="dark relative md:w-[calc(100vw-2rem)] md:py-20 py-10 px-6 flex flex-col items-center gap-4 bg-black/95 text-white rounded-2xl">
      <h3 className="text-2xl text-center sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-accent to-accent-700 text-transparent bg-clip-text">
        Need a <span className="font-dmsansDisplay italic">Custom</span> Plan? Let's Talk!
      </h3>
      <p className="md:text-md text-center text-gray-200 mb-8">
        Tell us about your sales team's needs, and we'll tailor a plan for you.
      </p>
      <form className="z-10 md:w-1/3 w-full space-y-4">
        <div className="space-y-1">
          <Label className="" htmlFor="sd">
            Name
          </Label>
          <Input placeholder="Enter name" />
        </div>
        <div className="space-y-1">
          <Label>description</Label>
          <Input placeholder="Enter name" />
        </div>
        <div className="space-y-1">
          <Label>Message</Label>
          <Textarea placeholder="Enter name" />
        </div>
        <Button className="w-full">Submit</Button>
      </form>
      <Image
        src="/images/backdrop.png"
        alt="backdrop"
        width={200}
        height={400}
        className="absolute bottom-0 w-full left-1/5"
      />
    </section>
  );
};

export default CustomPlan;
