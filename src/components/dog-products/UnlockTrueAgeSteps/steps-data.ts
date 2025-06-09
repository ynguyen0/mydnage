// src/components/products/UnlockTrueAgeSteps/steps-data.ts
export interface Step {
    number: string;
    title: string;
    description: string;
    icon: 'box' | 'dna' | 'report';
  }
  
  export const stepsData: Step[] = [
    {
      number: "01",
      title: "Order a Test",
      description: "You should receive your test within a week of purchase",
      icon: "box"
    },
    {
      number: "02",
      title: "Collect your DNA",
      description: "Follow the in-box instructions to collect your DNA sample at home. Then, send it back to us using the prepaid mailing label",
      icon: "dna"
    },
    {
      number: "03",
      title: "Reveal your TrueAge",
      description: "Your test results and personalized report will be ready in 4-6 weeks and delivered via email",
      icon: "report"
    }
  ];