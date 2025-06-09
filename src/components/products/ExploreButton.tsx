import { Link } from "react-router-dom";

// src/components/products/ExploreButton.tsx
export default function ExploreButton() {
    return (
      <Link to="/home">
                        <button
                            type="button"
                            className="inline-flex items-center gap-3 rounded-full bg-[#393D43] px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-[#2e3237] focus:outline-none"
                        >
                            <span className="text-[#AFD5E7]">Explore How MyDNAge Works</span>
                        </button>
        </Link>
    );
  }