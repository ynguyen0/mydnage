import "../../index.css";
import product from "../../assets/product.png";
import {
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import running from "../../assets/running.png";
import dna from "../../assets/dna.png";
import Collapsible from "./Collapsible";
import line from "../../assets/vector-line.png";
import gradient2 from "../../assets/vector-2.png";

export default function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background decorative images - responsive positioning */}
      <section className="relative">
        <div
          className="fixed top-0 right-0 w-full h-full z-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <img
            src={gradient2}
            alt="Decorative corner graphic"
            className="
      absolute -top-16 right-0
      w-[500px] h-[500px]
      sm:w-[400px] sm:h-[400px]
      lg:w-[800px] lg:h-[800px]
      transform -scale-x-100
      pointer-events-none
      z-0
    "
          />

          <img
            src={gradient2}
            alt="Decorative corner graphic"
            className="
      absolute top-[280px] right-0
      w-[500px] h-[500px]
      sm:w-[200px] sm:h-[200px]
      lg:w-[650px] lg:h-[650px]
      transform -scale-x-100
      pointer-events-none
      z-0
    "
          />

          <img
            src={line}
            alt="Decorative corner graphic"
            className="
      absolute top-0 right-0
      w-[500px] h-[500px]
      sm:w-[200px] sm:h-[200px]
      lg:w-[500px] lg:h-[500px]
      transform -scale-x-100
      pointer-events-none
      z-0
    "
          />
        </div>

      </section>

      {/* Main content container */}
      <div className="relative z-10">
        {/* Hero section with absolute positioning for desktop, stacked for mobile */}
        <section className="relative min-h-[250px] sm:min-h-[350px] lg:min-h-[550px] mb-4 md:mb-8">
          {/* Text content */}
          <div className="px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-8 md:py-16 
          lg:absolute lg:top-[140px] lg:left-[100px] xl:left-[140px] 
          max-w-full lg:max-w-[800px]">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
            leading-snug sm:leading-tight text-[#393D43] 
            text-center lg:text-left">
            Changing the way you age to live <b>healthier, longer, and better</b>
          </h1>
        </div>
        
          {/* Product image - absolute on desktop, centered on mobile */}
          <div className="hidden lg:block absolute top-[75px] left-[calc(100%-36%)] xl:top-[125px] xl:left-[calc(100%-40%)] 2xl:left-[calc(100%-42%)]">
            <img
              src={product}
              alt="MyDNAge product"
              className="w-[340px] xl:w-[380px] object-contain"
            />
          </div>
        </section>

        {/* Buttons section */}
            <section className="mt-0 lg:-mt-[100px] px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32
        flex flex-col gap-4 
        mb-16 md:mb-24 
        max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 
        mx-auto lg:mx-0 lg:ml-[80px] xl:ml-[120px]">


          {" "}
          <button
            type="button"
            className="inline-flex items-center gap-3 justify-center sm:justify-start
                                   rounded-full bg-[#AFD5E7] px-4 sm:px-5 py-3
                                   text-base sm:text-lg font-medium text-[#2A5987]
                                   whitespace-normal sm:whitespace-nowrap text-left"
          >
            <HiOutlineCheckCircle className="h-6 w-6 sm:h-7 sm:w-7 text-[#2A5987] flex-shrink-0" />
            <span>
              Scientifically proven, at-home DNA tests to reveal your TrueAge
            </span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-3 justify-center sm:justify-start
                                   rounded-full bg-[#AFD5E7] px-4 sm:px-5 py-3
                                   text-base sm:text-lg font-medium text-[#2A5987]
                                   whitespace-normal sm:whitespace-nowrap text-left"
          >
            <HiOutlineCheckCircle className="h-6 w-6 sm:h-7 sm:w-7 text-[#2A5987] flex-shrink-0" />
            <span>
              Evidence-based reports that capture your health snapshot
            </span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-3 justify-center sm:justify-start
                                   rounded-full bg-[#AFD5E7] px-4 sm:px-5 py-3
                                   text-base sm:text-lg font-medium text-[#2A5987]
                                   whitespace-normal sm:whitespace-nowrap text-left"
          >
            <HiOutlineCheckCircle className="h-6 w-6 sm:h-7 sm:w-7 text-[#2A5987] flex-shrink-0" />
            <span>
              Actionable and personalized plans to extend your healthspan
            </span>
          </button>
          <Link to="/myDNAge" onClick={() => window.scrollTo(0, 0)}>
            <button
              type="button"
              className="inline-flex items-center gap-3 justify-center
                                     rounded-full bg-[#393D43] px-4 sm:px-5 py-3
                                     text-base sm:text-lg font-medium text-white
                                     shadow-md transition-colors hover:bg-[#2e3237] focus:outline-none
                                     w-full sm:w-auto"
            >
              <HiOutlineQuestionMarkCircle className="h-6 w-6 sm:h-7 sm:w-7 text-[#AFD5E7] flex-shrink-0" />
              <span className="text-[#AFD5E7]">Find Your TrueAge Now</span>
            </button>
          </Link>
        </section>

        {/* Quote section */}
        <section className="text-center py-10 md:py-16 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2A5987] max-w-5xl mx-auto px-4">
            Our unique science provides accurate, consistent results you can
            rely on—and use to help you monitor your progress as you make
            changes to improve your health.
          </h2>
          <p className="font-semibold text-base sm:text-lg text-[#393D43] mt-6">
            — Neal Kitchen, Ph.D., chief operating officer at LIV
          </p>
          <Link to="/myDNAge" onClick={() => window.scrollTo(0, 0)}>
            <button
              type="button"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#393D43] px-6 py-3 
                                     text-base sm:text-lg font-semibold text-white shadow-md 
                                     transition-colors hover:bg-[#2e3237] focus:outline-none"
            >
              <span className="text-[#AFD5E7]">Get Started</span>
            </button>
          </Link>
        </section>

        {/* Feature section */}
        <section className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-10 md:py-16 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32">
          {/* Images container */}
          <div className="relative">
            <img
              src={running}
              alt="Young woman athlete running along the road in pink sportswear jogging"
              className="w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] 
                                     rounded-full object-cover shadow-lg"
            />
            <img
              src={dna}
              alt="Blue DNA helix"
              className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 md:-top-15 md:-right-15 
                                     w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] 
                                     rounded-full object-cover shadow-md"
            />
          </div>

          {/* Text content */}
          <div className="max-w-md text-[#393D43] text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Redefine aging with science-backed, at-home DNA testing
            </h2>
            <p className="text-base sm:text-lg mt-6">
              <span className="text-[#2A5987] font-semibold">MyDNAge</span>{" "}
              tests provide a snapshot of your health and biological age on a
              cellular level, giving you the most accurate, in-depth information
              about your body on the market.
            </p>
            <Link to="/myDNAge" onClick={() => window.scrollTo(0, 0)}>
              <button
                type="button"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#393D43] px-6 py-3 
                                         text-base sm:text-lg font-semibold text-white shadow-md 
                                         transition-colors hover:bg-[#2e3237] focus:outline-none"
              >
                <span className="text-[#AFD5E7]">MyDNAge</span>
              </button>
            </Link>
          </div>
        </section>

        {/* FAQ section */}
        <section className="max-w-2xl mx-auto py-10 md:py-16 px-6 sm:px-8 md:px-12">
          <div className="text-semibold text-[#2A5987]">
            <Collapsible title="What is my TrueAge?">
              <p>
                While a person's chronological age can tell the world how many
                years a person has walked upon the Earth, it's an individual's
                TrueAge, or biological age, that measures their body's unique
                pace of aging. It's driven by measurable molecular signals that
                can tell you how well your cells are functioning.
              </p>
            </Collapsible>

            <Collapsible title="Why is my TrueAge different from my chronological age?">
              <p>
                While a person's chronological age can tell the world how many
                years a person has walked upon the Earth, it's an individual's
                TrueAge, or biological age, that measures their body's unique
                pace of aging. It's driven by measurable molecular signals that
                can tell you how well your cells are functioning.
              </p>
            </Collapsible>

            <Collapsible title="How does DNA methylation affect my TrueAge?">
              <p>
                Methylation is one type of epigenetic program that lets your
                genes know when to increase, decrease, or stop expression by
                adding one or more methyl groups to your DNA. If epigenetics is
                DNA software, methyl groups are the high-level programming code
                telling the genome which genes to express. This methylation
                programming code often changes based on our lifestyle choices
                and health status.
              </p>
            </Collapsible>

            <Collapsible title="How does MyDNAge measure my pace of aging with DNA methylation?">
              <p>
                TrueAge is calculated by looking at epigenetic modifications,
                specifically methylation. Epigenetic activity is driven by your
                environment, including vital lifestyle factors like what you
                eat, how much you exercise, and the quality of your sleep. These
                all have the power to affect how quickly your cells, and the
                organs and tissues they make up, age over time.
              </p>
            </Collapsible>

            <div className="text-center mt-8">
              <Link to="/our-science" onClick={() => window.scrollTo(0, 0)}>
                <button
                  type="button"
                  className="inline-flex items-center gap-3 rounded-full bg-[#393D43] px-6 py-3 
                                             text-base sm:text-lg font-semibold text-white shadow-md 
                                             transition-colors hover:bg-[#2e3237] focus:outline-none"
                >
                  <span className="text-[#AFD5E7]">
                    Learn More About Our Science
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
