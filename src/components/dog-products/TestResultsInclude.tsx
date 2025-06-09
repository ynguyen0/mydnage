// src/components/products/TestResultsInclude.tsx
export default function TestResultsInclude() {
  const results = [
    {
      id: 1,
      text: "Your dog's biological TrueAge score",
      checked: true,
    },
    {
      id: 2,
      text: "Genetic trait markers that evaluate your dog for common health concerns, such as skin allergy risk, weight gain propensity, trainability, and cognition",
      checked: true,
    },
    {
      id: 3,
      text: "Environmental stress indicators that detects how lifestyle, toxins, and pollution exposure may impact your dog's TrueAge",
      checked: true,
    },
    {
      id: 4,
      text: "Personalized risk evaluations and recommendations to help you navigate your pet's aging",
      checked: true,
    },
  ];

  return (
    <div>
      <h3 className="mb-8 text-2xl md:text-3xl font-semibold text-[#393D43]">
        Test Results Include:
      </h3>
      <ul className="space-y-5">
        {results.map((result) => (
          <li key={result.id} className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
              {result.checked ? (
                <div className="w-6 h-6 rounded-full bg-[#4F7FA8] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
              )}
            </div>
            <span className="text-base md:text-lg text-[#393D43] leading-relaxed">
              {result.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
