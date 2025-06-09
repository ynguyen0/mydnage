// src/components/products/ProductCard.tsx
export interface DogProductCardProps {
  price: number;
}

export default function ProductCard({ price }: DogProductCardProps) {
  return (
    <div className="bg-white rounded-3xl px-6 sm:px-8 py-6 shadow-xl">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* Radio Button Icon */}
          <div className="flex-shrink-0">
            <div className="w-6 h-6 rounded-full border-2 border-[#4F7FA8] flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#4F7FA8]"></div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#393D43]">
              myDogDNAge
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Get detailed results in just 4-6 weeks!
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1 flex-shrink-0">
          <span className="text-3xl sm:text-4xl font-bold text-[#393D43]">
            ${price}
          </span>
          <span className="text-sm sm:text-base text-[#393D43]/60 uppercase">
            USD
          </span>
        </div>
      </div>
    </div>
  );
}
