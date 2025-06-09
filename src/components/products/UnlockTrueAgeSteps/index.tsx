// src/components/products/UnlockTrueAgeSteps/index.tsx
import StepCard from "./StepCard";
import { stepsData } from "./steps-data";

function UnlockTrueAgeSteps() {
  return (
    <div className="bg-white rounded-t-3xl px-8 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#393D43] text-center mb-12">
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
