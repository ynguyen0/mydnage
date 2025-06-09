// src/components/products/UnlockTrueAgeSteps/StepCard.tsx
import type { Step } from "./steps-data";
import logo from "../../../assets/logo.png";

interface StepCardProps {
  step: Step;
}

export default function StepCard({ step }: StepCardProps) {
  return (
    <div className="text-center">
      {/* DNA Icon Placeholder */}
      <div className="mb-4 flex justify-center">
        <div className="w-24 h-24 relative">
          <img
            src={logo}
            alt="True age logo"
            className=" object-cover flex-shrink-0 "
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-[#4F7FA8] mb-2">
        {step.title}
      </h3>
      <p className="text-sm text-[#393D43]/70 leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}
