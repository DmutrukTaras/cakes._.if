import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FAQCategory, FAQItem } from "../data/faq";
import { faqItems } from "../data/faq";
import SectionTitle from "./SectionTitle";

type FAQSectionProps = {
  category: FAQCategory;
  title?: string;
};

export default function FAQSection({ category, title = "Питання, які часто ставлять" }: FAQSectionProps) {
  const items = faqItems.filter((item) => item.category === category);
  const [openQuestion, setOpenQuestion] = useState(items[0]?.question ?? "");

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle title={title} align="center" />
      <div className="mt-8 grid gap-3">
        {items.map((item: FAQItem) => {
          const isOpen = openQuestion === item.question;

          return (
            <div key={item.question} className="rounded-3xl border border-rose/10 bg-white shadow-sm">
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-cocoa"
                type="button"
                onClick={() => setOpenQuestion(isOpen ? "" : item.question)}
              >
                {item.question}
                <ChevronDown
                  size={19}
                  className={`shrink-0 transition ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen ? (
                <p className="px-5 pb-5 text-sm leading-6 text-cocoa/65">{item.answer}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
