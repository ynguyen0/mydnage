// src/components/howitworks/components/ReadyToBeginSection.tsx
export default function ReadyToBeginSection() {
  return (
    <div className="text-center py-16 border-t border-gray-200">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4F7FA8] mb-6">
        Ready to begin?
      </h2>
      <p className="text-base sm:text-lg text-[#7F7F7F] mb-8 max-w-2xl mx-auto">
        If you've received your kit or are just curious about next steps, you're
        in the right place.
      </p>
      <button className="bg-[#393D43] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#2e3237] transition-colors">
        Activate Your Kit
      </button>
    </div>
  );
}
