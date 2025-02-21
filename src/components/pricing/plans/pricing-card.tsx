import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PROPS {
  variant: string | "secondary" | "primary";
  price: string;
  title: string;
  features: string[];
  buttonName: string;
  Icon: React.ComponentType;
}

const PricingCard = ({
  title,
  Icon,
  buttonName,
  features,
  price,
  variant,
}: PROPS) => {
  return (
    <div
      className={cn(
        "border z-10 rounded-xl p-6 bg-neutral-900",
        variant === "primary" ? "border-accent" : "border-white/20"
      )}
    >
      <div className="flex justify-between">
        <p
          className={cn(
            "text-2xl font-medium",
            variant === "primary" ? "text-accent" : "text-white/80"
          )}
        >
          {title}
        </p>
        <span
          className={cn(
            "p-2 bg-gray-200 text-black rounded-xl",
            variant === "primary" && "bg-accent"
          )}
        >
          <Icon />
        </span>
      </div>
      <h3
        className={cn(
          "font-semibold text-4xl mt-2 mb-8",
          variant === "primary" ? "text-accent" : ""
        )}
      >
        {price}
      </h3>
      <Button className="w-full">{buttonName}</Button>
      <div className="space-y-4 mt-8">
        {features.map((f,index) => (
          <p key={index} className="flex gap-4 text-sm">
            <Check className="text-accent" size={16} />
            {f}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
