// src/components/products/product.tsx (update the quantity section)
import { useState } from "react";
import DogProductHero from "./DogProductHero.tsx";
import DogProductImage from "./DogProductimage.tsx";
import DogProductCard from "./DogProductCard";
import QuantitySelector from "./QuantitySelector.tsx";
import AddToCartButton from "./AddToCartButton.tsx";
import TestResultsInclude from "./TestResultsInclude.tsx";
import TrueAgeSection from "./TrueAgeSection.tsx";
import EpigeneticScienceSection from "./EpigeneticScienceSection.tsx";
import UnlockTrueAgeSteps from "./UnlockTrueAgeSteps";
import FAQSection from "./FAQSection";
import ExploreButton from "./ExploreButton.tsx";

export default function Product() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Adding ${quantity} items to cart`);
  };

  return (
    <main className="font-['Poppins',_ui-sans-serif,_system-ui] min-h-screen">
      {/* Hero Section - Blue Background */}
      <section className="px-6 sm:px-12 md:px-20 lg:px-28 py-8 md:py-12">
        <div className="mx-auto max-w-7xl">
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Column - Product Image (Fixed) */}
            <div>
              <DogProductImage />
            </div>

            {/* Right Column - All Other Content */}
            <div className="flex-1 w-full space-y-8">
              {/* Product Hero - Moved here */}
              <DogProductHero />

              {/* Product Card */}
              <DogProductCard price={299} />

              {/* Quantity and Cart Section */}
              <div className="flex justify-end">
                <div className="flex items-end gap-4">
                  <div>
                    <p className="text-lg font-medium text-[#393D43] mb-2 pl-10">
                      Quantity
                    </p>
                    <QuantitySelector
                      quantity={quantity}
                      onChange={handleQuantityChange}
                    />
                  </div>
                  <AddToCartButton onClick={handleAddToCart} />
                </div>
              </div>

              {/* Test Results Section */}
              <div className="pt-8">
                <TestResultsInclude />
              </div>

              {/* Explore Button */}
              <div className="text-center pt-8">
                <ExploreButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* True Age Section - White Background */}
      <section className="bg-[#F7F6F2] px-6 sm:px-12 md:px-20 lg:px-28 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <TrueAgeSection />
        </div>
      </section>

      {/* Epigenetic Science Section - Blue Background */}
      <section className="bg-[#F7F6F2] px-6 sm:px-12 md:px-20 lg:px-28 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <EpigeneticScienceSection />
        </div>
      </section>

      <section className="bg-[#F7F6F2] px-6 sm:px-12 md:px-20 lg:px-28 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="shadow-xl rounded-3xl">
            <UnlockTrueAgeSteps />
            <FAQSection />
          </div>
        </div>
      </section>
    </main>
  );
}
