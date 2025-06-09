// src/components/products/QuantitySelector.tsx
interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

export default function QuantitySelector({
  quantity,
  onChange,
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    onChange(quantity - 1);
  };

  const handleIncrease = () => {
    onChange(quantity + 1);
  };

  return (
    <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
      <button
        onClick={handleDecrease}
        className="px-5 py-3 text-[#393D43] hover:bg-gray-100 transition-colors"
        aria-label="Decrease quantity"
        disabled={quantity <= 1}
      >
        <span className="text-xl font-medium">−</span>
      </button>

      <div className="px-6 py-3 border-l border-r border-gray-200 min-w-[60px] text-center">
        <span className="text-lg font-semibold text-[#393D43]">{quantity}</span>
      </div>

      <button
        onClick={handleIncrease}
        className="px-5 py-3 text-[#393D43] hover:bg-gray-100 transition-colors"
        aria-label="Increase quantity"
      >
        <span className="text-xl font-medium">+</span>
      </button>
    </div>
  );
}
