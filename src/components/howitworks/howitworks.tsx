// src/components/howitworks/HowItWorks.tsx
import gradient2 from "../../assets/vector-2.png";
import line from "../../assets/Vector Line.png";
import {
  HowItWorksHero,
  FingerprickSection,
  MailSection,
  ReportSection,
  DNAMethylationSection,
  WhyItMattersSection,
  ReadyToBeginSection,
} from "./components";

export default function HowItWorks() {
  return (
    <main className="font-['Poppins',_ui-sans-serif,_system-ui] min-h-screen bg-[#F7F6F2]">
      {/* Background decorative images */}
      <img
        src={gradient2}
        alt="Decorative corner graphic"
        className="
          absolute -top-15 left-0
          w-[500px] h-[500px]
          sm:w-[400px] sm:h-[400px]
          lg:w-[800px] lg:h-[800px]
          pointer-events-none
          z-0
        "
      />
      <img
        src={gradient2}
        alt="Decorative corner graphic"
        className="
          absolute top-70 left-0
          w-[500px] h-[500px]
          sm:w-[200px] sm:h-[200px]
          lg:w-[650px] lg:h-[650px]
          pointer-events-none
          z-0
        "
      />

      {/* Main content */}
      <div className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-28 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <HowItWorksHero />

          {/* Process Steps */}
          <div className="mb-20">
            <FingerprickSection />
            <MailSection />
            <ReportSection />
          </div>

          {/* Educational Sections */}
          <DNAMethylationSection />
          <WhyItMattersSection />

          {/* CTA Section */}
          <ReadyToBeginSection />
        </div>
      </div>
    </main>
  );
}
