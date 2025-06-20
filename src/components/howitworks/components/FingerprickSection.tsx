// src/components/howitworks/components/FingerprickSection.tsx
import fingerprick from "../../../assets/fingerprick.png"; // You'll need to add this image

export default function FingerprickSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
      {/* Image on the left */}
      <div className="md:w-1/3">
        <div className="rounded-full overflow-hidden bg-[#E5E5E5] aspect-square">
          <img
            src={fingerprick}
            alt="Finger prick blood sample"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content on the right */}
      <div className="md:w-2/3 text-left">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#393D43] mb-4">
          Start with a quick finger prick
        </h3>
        <p className="text-base sm:text-lg text-[#7F7F7F] leading-relaxed">
          Inside your kit, you'll find everything you need to collect a small
          blood sample at home. It's clean, fast, and designed for comfort. Just
          follow the included instructions.
        </p>
      </div>
    </div>
  );
}
