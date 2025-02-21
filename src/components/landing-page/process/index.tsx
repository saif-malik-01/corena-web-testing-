"use client";

import Image from "next/image";
import StepLayout from "./step-layout";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { PROCESS, STEPS } from "@/contants/process";
import { cn } from "@/lib/utils";

const Process = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="w-full flex flex-col items-center gap-10 py-20">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        How <span className="text-accent-700">Outreach</span> actually works
        with Corena AI
      </h2>
      <div className="md:w-2/3 w-full flex md:flex-row flex-col gap-8">
        <div className="flex md:flex-col flex-row items-start gap-4 w-full overflow-x-auto">
          {STEPS.map((s, index) => (
            <Badge
              key={index}
              variant="outline"
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "cursor-pointer p-4 text-nowrap",
                current === index ? "bg-accent/50 text-black/95" : ""
              )}
            >
              {s}
            </Badge>
          ))}
        </div>
        <div className="md:w-3/4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {PROCESS.map((step, index) => (
                <CarouselItem key={index}>
                  <StepLayout title={step.title} description={step.description}>
                    <div
                      className={cn(
                        "md:w-1/2 rounded-xl px-12 py-20 flex items-center justify-center",
                        step.background === "gradient"
                          ? "bg-gradient-to-r from-accent to-transparent"
                          : "bg-gray-200"
                      )}
                    >
                      <Image
                        src={step.image}
                        alt="step-1"
                        width={500}
                        height={500}
                      />
                    </div>
                  </StepLayout>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Process;
