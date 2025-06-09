// src/components/products/ProductImage.tsx
import dogdna from "../../assets/dog-dna.png";

export default function DogProductImage() {
  return (
    <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl flex-shrink-0">
      <img
        src={dogdna}
        alt="My Dog DNAge Health Test Kit"
        className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] object-contain"
      />
    </div>
  );
}
