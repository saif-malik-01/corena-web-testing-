import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PROPS {
  children: React.ReactNode;
  title: string;
  description: string;
  Icon: React.ComponentType;
  className?: string;
}

const SolutionCardLayout = ({
  children,
  Icon,
  description,
  title,
  className,
}: PROPS) => {
  return (
    <Card className={cn(className)}>
      <div className="p-6 flex items-start gap-4">
        <span className="min-w-[40px] min-h-[40px] rounded-full bg-gray-100 flex items-center justify-center">
          <Icon />
        </span>
        <span>
          <CardTitle className="flex items-center gap-2 mb-2">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </span>
      </div>
      <CardContent className="p-1">{children}</CardContent>
    </Card>
  );
};

export default SolutionCardLayout;
