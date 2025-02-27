// import Link from "next/link";
// import { Button } from "@/components/ui/button";
import Image from "next/image";

const Booking = () => {
  return (
    <section className="dark relative md:w-[calc(100vw-2rem)] md:py-20 py-10 px-6 flex flex-col items-center gap-4 bg-black/95 rounded-2xl">
      <h3 className="text-2xl text-center sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-accent to-accent-700 text-transparent bg-clip-text">
        Get more sales calls{" "}
        <span className="font-dmsansDisplay italic">Booked</span>
      </h3>
      <p className="md:text-xl sm:text-2xl text-gray-200 mb-4">
        Without lifting a finger
      </p>
      <div className="flex flex-row justify-center gap-4">
        {/* <Button asChild>
          <Link href="#">Start Free Trial</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="#" className="text-white">Book a Demo</Link>
        </Button> */}
      </div>
      <p className="text-sm text-gray-200 font-light">No credit card required</p>
      <Image
        src="/images/backdrop.png"
        alt="backdrop"
        width={200}
        height={400}
        className="absolute bottom-0 md:w-2/3 w-full left-1/5"
      />
    </section>
  );
};

export default Booking;
