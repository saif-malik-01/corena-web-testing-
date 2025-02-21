import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PROPS {
  title: string;
  description: string;
  Icon: React.ComponentType;
}

const ProblemCard = ({ title, description, Icon }: PROPS) => {
  return (
    <Card className="bg-gray-100 md:w-[300px] border-none">
      <CardHeader>
        <span className="p-2 bg-gray-200 w-fit rounded-md">
          <Icon />
        </span>
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProblemCard;
