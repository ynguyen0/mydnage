// src/components/dog-products/dogproducts.tsx
import DogProductHero from "./DogProductHero.tsx";
import DogProductImage from "./DogProductimage.tsx";
import TestResultsInclude from "./TestResultsInclude.tsx";
import TrueAgeSection from "./TrueAgeSection.tsx";
import EpigeneticScienceSection from "./EpigeneticScienceSection.tsx";
import UnlockTrueAgeSteps from "./UnlockTrueAgeSteps";
import gradient2 from "../../assets/vector-2.png";
import line from "../../assets/Vector Line.png";

export default function Product() {
  return (
    <main className="font-['Poppins',_ui-sans-serif,_system-ui] min-h-screen">
      <img
        src={gradient2}
        alt="Decorative corner graphic"
        className="
          absolute -top-15 left-0
          w-[500px] h-[500px]         /* bigger size—adjust as needed */
          sm:w-[400px] sm:h-[400px]   /* scale up on sm */
          lg:w-[800px] lg:h-[800px]   /* and md */
          pointer-events-none
          z-0                         /* send it behind the main content */
        "
      />
      <img
        src={gradient2}
        alt="Decorative corner graphic"
        className="
          absolute top-70 left-0
          w-[500px] h-[500px]         /* bigger size—adjust as needed */
          sm:w-[200px] sm:h-[200px]   /* scale up on sm */
          lg:w-[650px] lg:h-[650px]   /* and md */
          pointer-events-none
          z-0                         /* send it behind the main content */
        "
      />
      <img
        src={line}
        alt="Decorative corner graphic"
        className="
          absolute top-0 left-0
          w-[500px] h-[500px]         /* bigger size—adjust as needed */
          sm:w-[200px] sm:h-[200px]   /* scale up on sm */
          lg:w-[500px] lg:h-[500px]   /* and md */
          pointer-events-none
          z-0                         /* send it behind the main content */
        "
      />
      {/* Hero Section - Blue Background */}
      <section className="px-6 sm:px-12 md:px-20 lg:px-28 py-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Column - Product Image (Fixed) */}
            <div>
              <DogProductImage />
            </div>

            {/* Right Column - All Other Content */}
            <div className="flex-1 w-full space-y-8">
              {/* Product Hero */}
              <DogProductHero />

              {/* Test Results Section - Moved up to fill the gap */}
              <div>
                <TestResultsInclude />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* True Age Section - White Background */}
      <section className="bg-[#F7F6F2] px-6 sm:px-12 md:px-20 lg:px-28 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <TrueAgeSection />
        </div>
      </section>

      {/* Epigenetic Science Section - Blue Background */}
      <section className="bg-[#F7F6F2] px-6 sm:px-12 md:px-20 lg:px-28 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <EpigeneticScienceSection />
        </div>
      </section>

      <section className="bg-[#F7F6F2] px-6 sm:px-12 md:px-20 lg:px-28 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="shadow-xl rounded-3xl">
            <UnlockTrueAgeSteps />
          </div>
        </div>
      </section>
    </main>
  );
}
