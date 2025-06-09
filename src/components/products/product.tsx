import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import productImage from "../../assets/productImage.png";

export default function Product() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <main className="font-['Poppins',_ui-sans-serif,_system-ui] min-h-screen bg-[#BFDBE8] px-12 py-12 md:px-20 lg:px-28">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-6xl md:text-7xl lg:text-8xl font-bold text-[#393D43]">
          MyDNAge
        </h1>
        <p className="mb-8 max-w-3xl text-lg md:text-xl text-[#393D43]">
          The at-home test that measures your biological TrueAge with precise
          DNA analysis.
        </p>

        {/* Product Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mt-8">
          {/* Product Image with Box */}
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <img
              src={productImage}
              alt="MyDNAge Health Test Kit"
              className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
            />
          </div>

          {/* Product Details Column */}
          <div className="flex-1 w-full lg:max-w-3xl">
            {/* Product Info Card */}
            <div className="bg-white rounded-3xl px-8 py-6 shadow-lg mb-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Radio Button Icon */}
                  <div className="mt-1">
                    <div className="w-6 h-6 rounded-full border-2 border-harmony-500 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-harmony-500"></div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div>
                    <h2 className="text-xl font-semibold text-[#393D43] mb-1">
                      My DNAge
                    </h2>
                    <p className="text-base text-gray-600">
                      Get detailed results in just 4-6 weeks!
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right">
                  <span className="text-3xl font-bold text-[#393D43]">
                    $299
                  </span>
                  <span className="text-sm text-[#393D43] ml-1">USD</span>
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart Section */}
            <div>
              <p className="text-center text-lg font-medium text-[#393D43] mb-4">
                Quantity
              </p>
              <div className="flex items-center justify-center gap-4">
                {/* Quantity Selector - Single Rounded Rectangle */}
                <div className="flex items-center border-2 border-[#4F7FA8] rounded-full bg-white overflow-hidden h-12">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-5 h-full text-[#4F7FA8] hover:bg-[#4F7FA8] hover:text-white transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <HiMinus className="h-5 w-5" />
                  </button>
                  <div className="border-l-2 border-r-2 border-[#4F7FA8] px-8 h-full flex items-center">
                    <span className="text-xl font-semibold text-[#393D43]">
                      {quantity}
                    </span>
                  </div>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-5 h-full text-[#4F7FA8] hover:bg-[#4F7FA8] hover:text-white transition-colors"
                    aria-label="Increase quantity"
                  >
                    <HiPlus className="h-5 w-5" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#393D43] px-8 h-12 text-base font-medium text-white shadow-lg transition-all hover:opacity-90"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                      fill="currentColor"
                    />
                    <path
                      d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Product Details */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#393D43] mb-4">
                What's Included:
              </h3>
              <ul className="space-y-2 text-base text-[#393D43]">
                <li className="flex items-center gap-2">
                  <span className="text-harmony-500">•</span>
                  Easy-to-use saliva collection kit
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-harmony-500">•</span>
                  Prepaid return shipping label
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-harmony-500">•</span>
                  Comprehensive digital report
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-harmony-500">•</span>
                  Personalized health insights
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#393D43] mb-4">
                How It Works:
              </h3>
              <ol className="space-y-2 text-base text-[#393D43]">
                <li>1. Order your kit online</li>
                <li>2. Collect your saliva sample at home</li>
                <li>3. Mail it back with prepaid shipping</li>
                <li>4. Receive your results in 4-6 weeks</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Test Results Include */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="mb-6 text-2xl font-semibold text-[#393D43] text-center">
            Your Test Results Include:
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-harmony-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base text-[#393D43]">
                Your biological TrueAge score
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-harmony-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base text-[#393D43]">
                Precise organ-by-organ insights that reveal how your heart,
                brain, liver, and kidneys are aging
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-harmony-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base text-[#393D43]">
                Environmental stress indicators that detects how lifestyle,
                toxins, and pollution exposure may impact your TrueAge
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-harmony-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base text-[#393D43]">
                Epigenetic metabolic rate tracking to explore how your body's
                methylation levels are functioning
              </span>
            </li>
            <li className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-harmony-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base text-[#393D43]">
                Personalized wellness focus areas that help you optimize your
                diet, sleep, and more to live longer, better
              </span>
            </li>
          </ul>
        </div>

        {/* Explore Section */}
        <div className="mt-16 text-center">
          <button
            type="button"
            className="inline-flex items-center gap-3 rounded-full bg-coolgray-500 px-8 py-4 text-lg font-semibold text-fresh-500 shadow-lg transition-all hover:opacity-90"
          >
            Explore How MyDNAge Works
          </button>
        </div>
      </div>
    </main>
  );
}
