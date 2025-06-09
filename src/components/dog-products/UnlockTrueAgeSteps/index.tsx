// src/components/products/UnlockTrueAgeSteps/index.tsx
import StepCard from "./StepCard";
import { stepsData } from "./steps-data";

function UnlockTrueAgeSteps() {
  return (
    <div className="bg-white rounded-t-3xl px-8 py-12">
      {/* Added relative and negative top offset to pull the heading out of the box */}
      <h2 className="relative -top-18 text-3xl lg:text-5xl font-bold text-[#393D43] text-center lg-12">
        Unlock your TrueAge
      </h2>
      <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {stepsData.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </div>
    </div>
  );
}

export default UnlockTrueAgeSteps;