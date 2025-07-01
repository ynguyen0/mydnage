// src/components/howitworks/components/HowItWorksHero.tsx
export default function HowItWorksHero() {
  return (
    <div className="text-center max-w-4xl mx-auto mb-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#393D43] mb-8">
        How It Works — myDNAge
      </h1>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#393D43] mb-6 leading-relaxed">
        Discover your biological age, and what it means for your health.
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-[#7F7F7F] leading-relaxed mb-8 px-4">
        The rate at which you age isn't just about each passing birthday. Your
        lifestyle, environment, and genetics all play a role. We use a smart
        science called DNA methylation. MyDNAge gives you powerful data on how
        your body is aging, so you can quit living out your days and start
        getting healthier.
      </p>

      <div className="relative z-20">
        <a
          href="https://www.mydnage.com/auth/login?redirect_url=/activate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#393D43] text-[#AFD5E7] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#2e3237] transition-colors cursor-pointer"
        >
          Activate Your Kit
        </a>
      </div>
    </div>
  );
}
