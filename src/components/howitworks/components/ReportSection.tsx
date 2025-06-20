// src/components/howitworks/components/ReportSection.tsx
import biologicalAge from "../../../assets/biological-age.png"; // You'll need to add this image

export default function ReportSection() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
      {/* Biological Age image on the left */}
      <div className="md:w-1/3">
        <div className="bg-[#AFD5E7] rounded-2xl p-4 flex items-center justify-center">
          <img
            src={biologicalAge}
            alt="Reveal Your Biological Age"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Content on the right */}
      <div className="md:w-2/3">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#393D43] mb-4">
          Get your personalized TrueAge report
        </h3>
        <p className="text-base sm:text-lg text-[#7F7F7F] leading-relaxed mb-4">
          In about 4 to 6 weeks, you'll receive a digital report that shows:
        </p>
        <ul className="space-y-3 text-base sm:text-lg text-[#7F7F7F]">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Your biological age (also TrueAge)</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Information on lifestyle changes that influence how your body is
              aging
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Guidance to help you make smart changes</span>
          </li>
        </ul>
        <p className="text-base sm:text-lg text-[#7F7F7F] leading-relaxed mt-4">
          Your report is clear, visual, and designed to be understood, not
          decoded.
        </p>
      </div>
    </div>
  );
}
