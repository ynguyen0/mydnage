import "../../index.css";
import product from "../../assets/product.png";
import { HiOutlineCheckCircle, HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { Link } from "react-router-dom";


export default function Landing() {
    return (
        <main>
            <section className="landing">
                <div className="landing__text text-[#393D43]">
                    <h1 className="mt-12 text-2xl eading-snug text-[#393D43] lg:text-5xl">Changing the way you age to live <b>healthier, longer, and better</b></h1>
                </div>


                <img
                    src={product}
                    alt="MyDNAge product"
                    className="landing__image ml-[60px] h-[340px] w-[340px] md:h-85 md:w-85"
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


        </main>
    );
}

