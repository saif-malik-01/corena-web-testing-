"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useState } from "react";

const PricingSelector = () => {
  const [value, setValue] = useState("monthly");

  return (
    <Tabs
      value={value}
      onValueChange={setValue}
      defaultValue="monthly"
      className="w-fit"
    >
      <TabsList className="border border-white/40 bg-neutral-900">
        <TabsTrigger
          value="monthly"
          className={cn(value === "monthly" && "!bg-accent !text-black")}
        >
          Monthly
        </TabsTrigger>
        <TabsTrigger
          value="yearly"
          className={cn(value === "yearly" && "!bg-accent !text-black")}
        >
          Yearly
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default PricingSelector;
