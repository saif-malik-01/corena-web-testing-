import { TESTIMONIALS } from "@/contants/testimonials";
import TestimonialCard from "./testimonial-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Testimonials = () => {
  return (
    <section className="w-full flex flex-col text-center gap-10 py-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        What our<span className="text-accent-700"> Users</span> say
      </h2>
      <div className="hidden md:flex justify-center gap-4">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard {...t} />
        ))}
      </div>
      <Carousel className="w-full block md:hidden">
        <CarouselContent>
          {TESTIMONIALS.map((t) => (
            <CarouselItem>
              <TestimonialCard {...t} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Testimonials;
