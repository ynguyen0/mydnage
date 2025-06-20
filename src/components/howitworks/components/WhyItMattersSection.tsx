// src/components/howitworks/components/WhyItMattersSection.tsx
import whyItMatters from "../../../assets/why-it-matters.png"; // You'll need to add this image

export default function WhyItMattersSection() {
  return (
    <div className="py-16">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image on the left */}
        <div className="md:w-1/3">
          <div className="rounded-full overflow-hidden bg-gray-100 aspect-square">
            <img
              src={whyItMatters}
              alt="Man exercising"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content on the right */}
        <div className="md:w-2/3">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#393D43] mb-6">
            Why does it matter?
          </h3>
          <p className="text-base sm:text-lg text-[#7F7F7F] leading-relaxed mb-4">
            Your TrueAge can help you:
          </p>
          <ul className="space-y-3 text-base sm:text-lg text-[#7F7F7F] mb-6">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Spot early warning signs of accelerated aging</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Track how lifestyle changes affect your biology</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Understand your unique path to longevity</span>
            </li>
          </ul>
          <p className="text-base sm:text-lg text-[#393D43] font-bold">
            <em>This isn't just data. It's direction.</em>
          </p>
        </div>
      </div>
    </div>
  );
}
