import "../../index.css";
import product from "../../assets/product.png";
import { HiOutlineCheckCircle, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import running from "../../assets/running.png";
import dna from "../../assets/dna.png"
import Collapsible from "./Collapsible";

export default function Landing() {
    return (
        <main>
            <section className="landing flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-0">
    <div className="landing__text text-[#393D43] flex-1">
        <h1 className="mt-12 text-2xl leading-snug text-[#393D43] lg:text-5xl">
            Changing the way you age to live <b>healthier, longer, and better</b>
        </h1>
    </div>

    <img
        src={product}
        alt="MyDNAge product"
        className="landing__image h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] md:ml-[60px] md:h-[340px] md:w-[340px] lg:h-85 lg:w-85 flex-shrink-0"
    />
</section>


            <section className="buttons flex flex-col gap-4">
                <button
                    type="button"
                    className="inline-flex items-center gap-3       /* 12px gap */
               rounded-full bg-[#AFD5E7] px-5 py-3   /* 20px/12px padding */
               text-lg font-medium text-[#2A5987]    /* larger font */
               whitespace-nowrap"
                >
                    <HiOutlineCheckCircle className="h-7 w-7 text-[#2A5987]" />  {/* ~28px icon */}
                    <span>Scientifically proven, at-home DNA tests to reveal your TrueAge</span>
                </button>


                <button
                    type="button"
                    className="inline-flex items-center gap-3
               rounded-full bg-[#AFD5E7] px-5 py-3
               text-lg font-medium text-[#2A5987]
               whitespace-nowrap"
                >
                    <HiOutlineCheckCircle className="h-7 w-7 text-[#2A5987]" />
                    <span>Evidence-based reports that capture your health snapshot</span>
                </button>


                <button
                    type="button"
                    className="inline-flex items-center gap-3
               rounded-full bg-[#AFD5E7] px-5 py-3
               text-lg font-medium text-[#2A5987]
               whitespace-nowrap"
                >
                    <HiOutlineCheckCircle className="h-7 w-7 text-[#2A5987]" />
                    <span>Actionable and personalized plans to extend your healthspan</span>
                </button>


                <Link to="/myDNAge">
                    <button
                        type="button"
                        className="inline-flex items-center gap-3
                 rounded-full bg-[#393D43] px-5 py-3
                 text-lg font-medium text-white
                 shadow-md transition-colors hover:bg-[#2e3237] focus:outline-none"
                    >
                        <HiOutlineQuestionMarkCircle className="h-7 w-7 text-[#AFD5E7]" />
                        <span className="text-[#AFD5E7]">Find Your TrueAge Now</span>
                    </button>
                </Link>
            </section>

            <section className="py-10 flex justify-center">
                <div>
                    <h1 className="max-w-6xl px-8 text-center mt-180 text-2xl font-bold text-[#2A5987]">
                        Our unique science provides accurate, consistent results you can rely on—and use to help you monitor your progress as you make chages to improve your health.
                    </h1>
                </div>
            </section>

            <section className="flex flex-col items-center">
                <p className="font-semibold text-lg text-[#393D43]">
                    — Neal Kitchen, Ph.D., chief operating officer at LIV
                </p>

                <Link to="/myDNAge">
                    <button
                        type="button"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#393D43] px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-[#2e3237] focus:outline-none"
                    >
                        <span className="text-[#AFD5E7]">Get Started</span>
                    </button>
                </Link>
            </section>

            <section className="mt-30 flex items-center justify-center gap-40">
                <div className="relative">
                    <img
                        src={running}
                        alt="Young woman athlete running along the road in pink sportswear jogging"
                        className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] rounded-full object-cover shadow-lg"
                    />

                    <img
                        src={dna}
                        alt="Blue DNA helix"
                        className="absolute -top-15 -right-15 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[150px] lg:h-[150px] rounded-full object-cover shadow-md"
                    />
                </div>

                <div className="max-w-md text-[#393D43] flex flex-col items-start">
                    <h2 className="text-4xl font-bold mb-2">
                        Redefine aging with science-backed, at-home DNA testing
                    </h2>
                    <p className="text-lg mt-6">
                        <span className="text-[#2A5987] font-semibold">MyDNAge</span> tests provide a snapshot of your health and biological age on a cellular level, giving you the most accurate, in-depth information about your body on the market.
                    </p>

                    <Link to="/myDNAge">
                        <button
                            type="button"
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#393D43] px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-[#2e3237] focus:outline-none"
                        >
                            <span className="text-[#AFD5E7]">MyDNAge</span>
                        </button>
                    </Link>
                </div>
            </section>

             <section className="mt-15 mb-10 mx-auto px-4 lg:px-0 lg:ml-[1065px] max-w-xl mx-4 txt-semibold text-[#2A5987]">
                <Collapsible title="What is my TrueAge?">
                    <p>While a person's chronological age can tell the world how many years a person has walked upon the Earth, it's an individual's TrueAge, or biological age, that measures their body's unique pace of aging. It's driven by measurable molecular signals that can tell you how well your cells are functioning.</p>
                </Collapsible>

                <Collapsible title="Why is my TrueAge different from my chronological age?">
                    <p>While a person's chronological age can tell the world how many years a person has walked upon the Earth, it's an individual's TrueAge, or biological age, that measures their body's unique pace of aging. It's driven by measurable molecular signals that can tell you how well your cells are functioning.</p>
                </Collapsible>

                <Collapsible title="How does DNA methylation affect my TrueAge?">
                    <p>
                        Methylation is one type of epigenetic program that lets your genes know when to increase, decrease, or stop expression by adding one or more methyl groups to your DNA. If epigenetics is DNA software, methyl groups are the high-level programming code telling the genome which genes to express. This methylation programming code often changes based on our lifestyle choices and health status.
                    </p>
                </Collapsible>

                <Collapsible title="How does MyDNAge measure my pace of aging with DNA methylation?">
                    <p>TrueAge is calculated by looking at epigenetic modifications, specifically methylation. Epigenetic activity is driven by your environment, including vital lifestyle factors like what you eat, how much you exercise, and the quality of your sleep. These all have the power to affect how quickly your cells, and the organs and tissues they make up, age over time. </p>
                </Collapsible>

                <Link to="/our-science">
                    <button
                        type="button"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#393D43] px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-[#2e3237] focus:outline-none"
                    >
                        <span className="text-[#AFD5E7]">Learn More About Our Science</span>
                    </button>
                </Link>
            </section>
        </main>
    );
}

