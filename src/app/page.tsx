import Booking from "@/components/landing-page/booking";
import FAQs from "@/components/shared/faqs";
import Hero from "@/components/landing-page/hero";
import Intergrations from "@/components/landing-page/integrations";
import Problems from "@/components/landing-page/problems";
import Process from "@/components/landing-page/process";
import Solutions from "@/components/landing-page/solutions";
import Testimonials from "@/components/shared/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex flex-col items-center">
        <Problems />
        <Solutions />
        <Process />
        <Intergrations />
        <Testimonials />
        <FAQs />
        <Booking />
      </div>
    </div>
  );
}
