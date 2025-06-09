import { Link } from "react-router-dom";
import smiling from "../../assets/smiling-lady.png";
import dna from "../../assets/age stat.png"

// src/components/products/TrueAgeSection.tsx
export default function TrueAgeSection() {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#393D43] mb-8 leading-tight">
        Unlocking Your TrueAge to Live
        <br />
        Longer, Better
      </h2>


      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left column */}
        <div className="space-y-6">
          <p className="text-lg text-[#393D43]/70 leading-relaxed">
            Chronological age is the number of years you have been alive,
            whereas biological age—your TrueAge—is the age of the cells in your
            body.
          </p>
          <p className="text-lg text-[#393D43]/70 leading-relaxed">
            Your cells, as revealed through various biomarkers, could be older
            or younger than your actual age, and this impacts how well your body
            functions.
          </p>
          <p className="text-lg text-[#393D43]/70 font-semibold leading-relaxed">
            MyDNAge doesn't just measure aging, but to help you optimize and
            improve your aging trajectory for years to come.
          </p>
        </div>

        {/* Right column: image + text */}
        <div className="flex flex-col items-end space-y-6">
          {/* 1) Image */}
          <div
            className="
        relative rounded-full overflow-hidden
        bg-gray-100 aspect-square max-w-[500px]
      "
          >
            <img
              src={smiling}
              alt="Woman smiling"
              className="w-full h-full object-cover"
            />
             <img
  src={dna}
  alt="DNA overlay"
  className="
    absolute inset-0
    w-full h-full 
    translate-y-18
    -translate-x-10
    scale-110
    object-contain
    pointer-events-none
  "
/>
          </div>

          {/* 2) “learning what is…” text */}
          <div className="max-w-sm self-start text-left pt-8">
            <p className="text-base font-semibold text-[#4F7FA8] leading-relaxed mb-4">
              Learning what is happening in your body at a DNA level allows you
              to unlock potential health concerns at the source and make more
              informed lifestyle choices to increase your health longevity.
            </p>
            <Link to="/our-science">
              <button
                type="button"
                className="
            mt-3 inline-flex items-center gap-3
            rounded-full bg-[#393D43] px-6 py-3
            text-lg font-semibold text-white shadow-md
            transition-colors hover:bg-[#2e3237]
            focus:outline-none
          "
              >
                <span className="text-[#AFD5E7]">Our Science</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
