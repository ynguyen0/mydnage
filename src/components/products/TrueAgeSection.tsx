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
          <p className="text-lg text-[#393D43]/70 leading-relaxed">
            MyDNAge doesn't just measure aging, but to help you optimize and
            improve your aging trajectory for years to come.
          </p>
        </div>

        {/* Right Column - Image and Text */}
        <div>
          {/* Woman Image with Age Indicators */}
          <div className="relative rounded-full overflow-hidden bg-gray-100 aspect-square max-w-[500px] ml-auto mb-8">
            {/* Placeholder - replace with actual image */}
            <img
              src="/src/assets/woman-placeholder.jpg"
              alt="Woman smiling"
              className="w-full h-full object-cover"
            />

            {/* Age Indicators */}
            <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
              <div className="bg-[#393D43] text-white rounded-lg px-4 py-2 shadow-lg">
                <p className="text-xs uppercase tracking-wide mb-1">
                  Chronological Age
                </p>
                <p className="text-3xl font-bold">36</p>
              </div>
            </div>

            <div className="absolute bottom-1/3 right-8">
              <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                <p className="text-xs uppercase tracking-wide mb-1 text-gray-600">
                  Biological Age
                </p>
                <p className="text-3xl font-bold text-[#393D43]">42</p>
              </div>
            </div>

            {/* DNA Icon */}
            <div className="absolute top-1/4 right-12">
              <div className="w-12 h-12 bg-[#4F7FA8] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Text - Below and to the left of image */}
          <div className="max-w-sm">
            <p className="text-base text-[#4F7FA8] leading-relaxed mb-4">
              Learning what is happening in your body at a DNA level allows you
              to unlock potential health concerns at the source and make more
              informed lifestyle choices to increase your health longevity.
            </p>
            <button className="bg-[#393D43] text-white px-6 py-3 rounded-full font-medium hover:bg-[#393D43]/90 transition-colors">
              Our Science
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
