// src/components/products/FAQSection/FAQItem.tsx
import { useState } from "react";
import type { FAQ } from "./faq-data";

interface FAQItemProps {
  faq: FAQ;
}

export default function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
      >
        <h3 className="text-base md:text-lg font-medium text-[#393D43] pr-4">
          {faq.question}
        </h3>
        <div className="flex-shrink-0 ml-4">
          <div
            className={`w-8 h-8 rounded-full bg-white/30 flex items-center justify-center transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <span className="text-[#393D43] text-xl">⊕</span>
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="pb-6 pr-12">
          <p className="text-sm md:text-base text-[#393D43]/80 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}
