import FAQItem from "./faq-item";

const FAQs = () => {
  return (
    <section className="w-full flex flex-col items-center gap-10 md:py-20 py-10">
      <h2 className="text-2xl md:text-4xl font-semibold">FAQs</h2>
      <div className="space-y-2 w-full md:w-auto">
        <FAQItem
          question="How does the AI agent work?"
          answer="Our AI voice agent makes cold calls, engages leads in natural conversations, qualifies prospects, and books appointments—just like a human sales rep. It handles outreach, follow-ups, and scheduling, allowing your sales team to focus on closing deals."
        />
        <FAQItem
          question="Can I customize the AI's messaging?"
          answer="Yes! You can tailor the AI's script, tone, and responses to match your business needs and sales approach. Whether you need a formal tone or a casual, friendly style, our AI adapts accordingly."
        />
        <FAQItem
          question="Does it integrate with my CRM?"
          answer="Absolutely! Our AI seamlessly integrates with your CRM to log calls, track prospects, and update lead statuses in real time. This ensures your sales pipeline is always up to date."
        />
        <FAQItem
          question="What industries does the AI work best for?"
          answer="Our AI voice agent is designed for a wide range of industries, including real estate, finance, insurance, healthcare, SaaS, and any business that relies on outbound sales and appointment setting."
        />
        <FAQItem
          question="Can the AI handle objections and complex conversations?"
          answer="Yes! The AI is trained to handle common objections, provide relevant responses, and even redirect conversations toward booking a meeting. For more complex queries, it can transfer the call to a human agent."
        />
        <FAQItem
          question="What happens if a prospect asks something the AI can't handle?"
          answer=" If the AI encounters an unfamiliar request or a highly specific question, it can escalate the conversation by transferring the call to a live agent or scheduling a follow-up."
        />
      </div>
    </section>
  );
};

export default FAQs;
