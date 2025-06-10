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
import blue from "../../assets/blue.png";
import blueline from "../../assets/blue-line.png";
import white from "../../assets/white.png";
import line from "../../assets/vector-line.png";

export default function Landing() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background decorative images - responsive positioning */}
      <img
        src={line}
        alt="Decorative corner graphic"
        className="
                    absolute top-10 left-20
                    w-[300px] h-[300px]
                    sm:top-21 sm:left-40 sm:w-[500px] sm:h-[500px]
                    md:left-60 md:w-[600px] md:h-[600px]
                    lg:top-21 lg:left-80 lg:w-[700px] lg:h-[700px]
                    xl:left-96
                    pointer-events-none
                    z-0
                    opacity-50 sm:opacity-100
                "
      />

      <img
        src={blue}
        alt="Decorative corner graphic"
        className="
                    absolute top-10 -right-20
                    w-[400px] h-[400px]
                    sm:top-20 sm:right-0 sm:w-[600px] sm:h-[600px]
                    md:w-[800px] md:h-[700px]
                    lg:w-[1000px] lg:h-[800px]
                    xl:w-[1100px]
                    pointer-events-none
                    z-0
                "
      />

      <img
        src={white}
        alt="Decorative corner graphic"
        className="
                    absolute top-20 -right-10
                    w-[350px] h-[350px]
                    sm:top-[100px] sm:right-0 sm:w-[600px] sm:h-[600px]
                    md:w-[800px] md:h-[650px]
                    lg:w-[900px] lg:h-[700px]
                    xl:w-[1010px]
                    pointer-events-none
                    z-0
                "
      />

      <img
        src={blueline}
        alt="Decorative corner graphic"
        className="
                    absolute top-20 right-10
                    w-[250px] h-[250px]
                    sm:top-30 sm:right-20 sm:w-[400px] sm:h-[400px]
                    md:right-40 md:w-[500px] md:h-[500px]
                    lg:right-60 lg:w-[600px] lg:h-[600px]
                    xl:right-80
                    pointer-events-none
                    z-0
                    opacity-50 sm:opacity-100
                "
      />

      {/* Main content container */}
      <div className="relative z-10">
        {/* Hero section with absolute positioning for desktop, stacked for mobile */}
        <section className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[700px] mb-12 md:mb-20">
          {/* Text content */}
          <div className="px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-8 md:py-16 lg:absolute lg:top-[200px] lg:left-[200px] xl:left-[400px] lg:max-w-[600px]">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#393D43] text-center lg:text-left">
              Changing the way you age to live{" "}
              <b>healthier, longer, and better</b>
            </h1>
          </div>

          {/* Product image - absolute on desktop, centered on mobile */}
          <div className="flex justify-center lg:absolute lg:top-[150px] lg:left-[70%] xl:top-[200px] xl:left-[65%] 2xl:left-[60%] px-6 lg:px-0">
            <img
              src={product}
              alt="MyDNAge product"
              className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[380px] xl:h-[380px] object-contain"
            />
          </div>
        </section>

        {/* Buttons section */}
        <section className="px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 flex flex-col gap-4 mb-16 md:mb-24 max-w-4xl mx-auto lg:mx-0 lg:ml-[200px] xl:ml-[100px]">
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
