import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="md:w-[600px] w-full bg-white px-4 py-2 border rounded-xl border-none">
        <AccordionTrigger className="border-none">{question}</AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FAQItem;
