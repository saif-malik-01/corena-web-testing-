import FAQs from "@/components/shared/faqs";
import Plans from "@/components/pricing/plans";
import Testimonials from "@/components/shared/testimonials";
import CustomPlan from "@/components/pricing/custom-plan";

const Pricing = () => {
  return (
    <div>
      <Plans />
      <div className="flex flex-col items-center">
        <Testimonials />
        <FAQs />
      </div>
      <CustomPlan />
    </div>
  );
};

export default Pricing;
