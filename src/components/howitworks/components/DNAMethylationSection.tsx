// src/components/howitworks/components/DNAMethylationSection.tsx
import dnaHelix from "../../../assets/dna-helix.png"; // You'll need to add this image

export default function DNAMethylationSection() {
  return (
    <div className="py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Content on the left */}
        <div className="md:w-2/3">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#393D43] mb-6">
            What is DNA methylation?
          </h3>
          <p className="text-base sm:text-lg text-[#7F7F7F] leading-relaxed mb-4">
            DNA methylation is how your body keeps score. It adds tiny "tags" to
            your DNA that control how genes behave, kind of like sticky notes on
            top of your genetic code. These tags change as you age and in
            response to your lifestyle, revealing your unique aging patterns.
          </p>
          <p className="text-base sm:text-lg text-[#7F7F7F] leading-relaxed">
            We use this data to calculate your biological age, which may be
            younger or older than your actual age, and give you the insights to
            take action.
          </p>
        </div>

        {/* DNA Helix image on the right */}
        <div className="md:w-1/3">
          <div className="rounded-full overflow-hidden bg-[#B8D7E7] aspect-square p-8">
            <img
              src={dnaHelix}
              alt="DNA Helix"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
