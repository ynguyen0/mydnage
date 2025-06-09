// src/components/products/FAQSection/index.tsx
import FAQItem from "./FAQItem";
import { faqData } from "./faq-data";

function FAQSection() {
  return (
    <div className="bg-[#B8D7E7] rounded-b-3xl px-8 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#393D43] mb-8">
        Answers to Common Questions
      </h2>
      <div>
        {faqData.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
