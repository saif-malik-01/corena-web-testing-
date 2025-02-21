import FAQItem from "./faq-item";

const FAQs = () => {
  return (
    <section className="w-full flex flex-col items-center gap-10 md:py-20 py-10">
      <h2 className="text-2xl md:text-4xl font-semibold">FAQs</h2>
      <div className="space-y-2 w-full md:w-auto">
        <FAQItem
          question="How does the AI agent work?"
          answer="Our AI mimics natural human conversations, handling outreach, follow-ups, and appointment scheduling."
        />
        <FAQItem
          question="Can I customize the AI’s messaging?"
          answer="Our AI mimics natural human conversations, handling outreach, follow-ups, and appointment scheduling."
        />
        <FAQItem
          question="Does it integrate with my CRM?"
          answer="Our AI mimics natural human conversations, handling outreach, follow-ups, and appointment scheduling."
        />
        <FAQItem
          question="How does the AI agent work?"
          answer="Our AI mimics natural human conversations, handling outreach, follow-ups, and appointment scheduling."
        />
        <FAQItem
          question="Can I customize the AI's messaging?"
          answer="Our AI mimics natural human conversations, handling outreach, follow-ups, and appointment scheduling."
        />
        <FAQItem
          question="Does it integrate with my CRM?"
          answer="Our AI mimics natural human conversations, handling outreach, follow-ups, and appointment scheduling."
        />
      </div>
    </section>
  );
};

export default FAQs;
