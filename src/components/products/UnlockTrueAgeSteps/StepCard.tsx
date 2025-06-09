// src/components/products/UnlockTrueAgeSteps/StepCard.tsx
import type { Step } from "./steps-data";

interface StepCardProps {
  step: Step;
}

export default function StepCard({ step }: StepCardProps) {
  return (
    <div className="text-center">
      {/* DNA Icon Placeholder */}
      <div className="mb-4 flex justify-center">
        <div className="w-24 h-24 relative">
          {/* Placeholder for DNA flower icon - replace with actual icon */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <g fill="#B8D7E7">
              <circle cx="30" cy="30" r="20" />
              <circle cx="70" cy="30" r="20" />
              <circle cx="30" cy="70" r="20" />
              <circle cx="70" cy="70" r="20" />
              <rect
                x="40"
                y="40"
                width="20"
                height="20"
                rx="10"
                fill="#4F7FA8"
              />
            </g>
          </svg>
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
