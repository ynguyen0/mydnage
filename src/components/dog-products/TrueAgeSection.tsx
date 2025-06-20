import dna from "../../assets/dog-dna-stat.png";
import dog from "../../assets/Dog.png";

// src/components/products/TrueAgeSection.tsx
export default function TrueAgeSection() {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#393D43] mb-8 leading-tight">
        Your dog can't say how old they
        <br />
        feel, but their DNA can
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left column */}
        <div className="space-y-6">
          <p className="text-lg text-[#393D43]/70 leading-relaxed">
            myDogDNAge unlocks healthier aging for your dog. It reveals their
            biological age—or TrueAge—which can be different than the number of
            years they've been cuddled up on your couch. Their cells, as
            revealed through various biomarkers, could be older or younger than
            their actual age, and this impacts how well they sit, stay, and
            enjoy life as your BFF (best furry friend).
          </p>
          <p className="text-lg text-[#393D43]/70 leading-relaxed">
            myDogDNAge doesn’t just measure a dog’s lifespan, it serves as a
            blueprint for age-appropriate, individualized care for your dog.
          </p>
          <p className="text-lg text-[#393D43]/70 font-semibold leading-relaxed">
            Armed with information about what’s happening at a molecular level,
            myDogDNAge allows pet owners to adjust diet, exercise and
            socialization activities, supplement intake, and veterinary care
            through every stage of their dog’s life to increase their happiness
            and longevity.
          </p>
        </div>

        {/* Right column: image + text */}
        <div className="flex flex-col items-end space-y-6">
          {/* 1) Image */}
          <div
            className="
        relative rounded-full overflow-hidden
        bg-gray-100 aspect-square max-w-[500px]
      "
          >
            <img
              src={dog}
              alt="Happy dog"
              className="w-full h-full object-cover"
            />
            <img
              src={dna}
              alt="DNA overlay"
              className="
                absolute inset-0
                w-full h-full 
    translate-y-25
    -translate-x-10
    scale-110
    object-contain
    pointer-events-none
  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
