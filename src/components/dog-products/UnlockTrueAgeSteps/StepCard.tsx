// src/components/products/UnlockTrueAgeSteps/StepCard.tsx
import type { Step } from "./steps-data";
import oneImg   from "../../../assets/steps/1.png";
import twoImg   from "../../../assets/steps/2.png";
import threeImg from "../../../assets/steps/3.png";

interface StepCardProps {
  step: Step;
}

export default function StepCard({ step }: StepCardProps) {
  const numberIcons: Record<string, string> = {
    "01": oneImg,
    "02": twoImg,
    "03": threeImg,
  }

  const imgSrc = numberIcons[step.number];
  return (
    <div className="text-center max-w-[18rem] mx-auto px-8 space-y-3">
      {/* DNA Icon Placeholder */}
      <div className="flex justify-center mb-4 pb-0 lg:pb-8">
        <div className="inline-flex items-center justify-center
        rounded-full bg-fresh-500 p-2 ring-1 ring-harmony-500 ring-offset-2 ring-offset-white w-16 h-16">
          
          <img
            src={imgSrc}
            alt="{`Step ${step.number}}"
            className=" object-cover flex-shrink-0 "
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-[#4F7FA8] mb-2 text-left pl-4">
        {step.title}
      </h3>
      <p className="text-sm text-coolgray-500 leading-relaxed text-left pl-4 pb-10">
        {step.description}
      </p>
    </div>
  );
}
