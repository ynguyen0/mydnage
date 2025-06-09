// src/components/products/FAQSection/faq-data.ts
export interface FAQ {
    question: string;
    answer: string;
  }
  
  export const faqData: FAQ[] = [
    {
      question: "What is my TrueAge?",
      answer: "TrueAge is your biological age—the actual age of your cells and body systems. Unlike chronological age (your birthday age), TrueAge reflects how well your body is aging based on epigenetic markers. It can be higher or lower than your chronological age depending on your lifestyle, genetics, and environmental factors."
    },
    {
      question: "Why is my TrueAge different from my chronological age?",
      answer: "Your chronological age is simply the number of years since you were born. TrueAge measures how your cells are actually aging by analyzing DNA methylation patterns. Factors like diet, exercise, stress, sleep, and environmental exposures can cause your biological age to differ from your chronological age."
    },
    {
      question: "How does DNA methylation affect my TrueAge?",
      answer: "Methylation is one type of epigenetic program that lets your genes know when to increase, decrease, or stop expression by adding one or more methyl groups to your DNA. If epigenetics is DNA software, methyl groups are the high-level programming code telling the genome which genes to express. This methylation programming code often changes based on our lifestyle choices and health status."
    },
    {
      question: "How does MyDNAge measure my pace of aging with DNA methylation?",
      answer: "MyDNAge analyzes thousands of methylation sites across your genome to calculate your biological age with remarkable accuracy. These patterns are influenced by lifestyle factors, making them both a measure of aging and a target for intervention."
    }
  ];