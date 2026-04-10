import type { Route } from "./+types/home";
import { useState } from "react";
import WordScrollAnimation from "../components/WordScrollAnimation"
import HeroImage from "../components/HeroImage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Troy Albers for Congress - Florida 3rd District" },
    { name: "description", content: "Troy Albers is running for Congress in Florida's 3rd District." },
  ];
}

export default function Home() {
  const [isAddressOpen, setIsAddressOpen] = useState(false);

  return (
    <div className="h-full w-full">
      {/* Hero Section */}
      <div className="text-white relative overflow-hidden h-full flex items-center">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCC33] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B2C9A3] rounded-full blur-3xl"></div>
        </div>

        <div className="w-full py-1 relative z-10 max-h-full pl-0 lg:pl-2">
          <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2 max-h-full">
            {/* Mobile: Container for centering */}
            <div className="lg:hidden flex flex-col items-center w-full">
              {/* WordScrollAnimation on top */}
              <div className="flex-1 max-h-full flex flex-col items-start justify-center text-left w-full px-4">
                <WordScrollAnimation />
              </div>

              {/* Centered image container */}
              <div className="flex justify-center w-full px-4 mt-0.5">
                <div className="flex-shrink-0 max-h-full flex items-center">
                  <HeroImage />
                </div>
              </div>
            </div>

            {/* Desktop: Candidate Photo on left */}
            <div className="hidden lg:flex flex-shrink-0 max-h-full items-center justify-start px-3">
              <HeroImage />
            </div>

            {/* Desktop: WordScrollAnimation and help text on right */}
            <div className="hidden lg:flex flex-1 max-h-full flex-col items-start justify-center text-left w-full">
              <WordScrollAnimation />
              <p className="text-white text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
                Troy needs your help to get on the ballot. Print and sign the petition, then mail it to:
                <span className="block mt-2 font-semibold">
                  Troy Albers<br />
                  1468 SW Main Blvd Ste 105-28<br />
                  Lake City, FL 32025
                </span>
              </p>
            </div>
          </div>

          {/* Mobile version - visible below lg breakpoint */}
          <div className="lg:hidden text-white text-base md:text-lg mt-3 max-w-2xl leading-snug px-4">
            <button
              onClick={() => setIsAddressOpen(!isAddressOpen)}
              className="inline-flex items-center gap-2 text-[#FFCC33] hover:text-[#E8B923] transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-offset-2 focus:ring-offset-[#0E3B67] rounded px-1"
              aria-expanded={isAddressOpen}
            >
              How YOU can help Troy:
              <svg
                className={`w-5 h-5 transition-transform ${isAddressOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isAddressOpen && (
              <div className="mt-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <p className="mb-2">Print and sign the petition, then mail it to:</p>
                <span className="block font-semibold">
                  Troy Albers<br />
                  1468 SW Main Blvd Ste 105-28<br />
                  Lake City, FL 32025
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
