// src/components/products/ProductImage.tsx
import productImage from "../../assets/productImage.png";

export default function ProductImage() {
  return (
    <div className="relative z-40 bg-white rounded-3xl p-10 md:p-12 shadow-xl flex-shrink-0">
      <img
        src={productImage}
        alt="MyDNAge Health Test Kit"
        className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] object-contain relative z-10"
      />
    </div>
  );
}
