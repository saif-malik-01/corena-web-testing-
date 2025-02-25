import { Laptop } from "lucide-react";

export const PRICINGS = [
  {
    title: "Starter",
    price: "₹4999/mo",
    Icon: Laptop,
    buttonName: "Subscribe",
    variant: "secondary",
    features: [
      "AI Outreach Calls (100 calls/month)",
      "Conversation Transcripts",
      "Email Support",
    ],
  },
  {
    title: "Basic",
    price: "₹9999/mo",
    Icon: Laptop,
    buttonName: "Subscribe",
    variant: "secondary",
    features: [
      "AI Outreach Calls (1000 calls/month)",
      "Conversation Transcripts",
      "Call Support",
    ],
  },
  {
    title: "Premium",
    price: "₹14999/mo",
    Icon: Laptop,
    buttonName: "Subscribe",
    variant: "primary",
    features: [
      "AI Outreach Calls (2000 calls/month)",
      "Conversation Recording",
      "Phone Support",
    ],
  },

  {
    title: "Enterprise",
    price: "Custom",
    Icon: Laptop,
    buttonName: "Contact Sales",
    variant: "secondary",
    features: [
      "Everything in Growth +",
      "Unlimited AI Calls",
      "Dedicated Account Manager",
      "Custom Integrations",
    ],
  },
];
