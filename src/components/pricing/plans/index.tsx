import { PRICINGS } from "@/contants/pricings";
import PricingCard from "./pricing-card";
// import PricingSelector from "./pricing-selector";

const Plans = () => {
  return (
    <section className="relative dark bg-black/95 text-white rounded-2xl pt-32 pb-16 flex flex-col items-center md:gap-10 gap-6">
      <h1 className="text-2xl md:text-4xl font-semibold">
        Choose Your <span className="text-accent">Plan</span>
      </h1>
      {/* <PricingSelector /> */}
      <div className="md:px-28 flex md:flex-row flex-col gap-4">
        {PRICINGS.map((p) => (
          <PricingCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Plans;
