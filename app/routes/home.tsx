import type { Route } from "./+types/home";
import { useState } from "react";
import WordScrollAnimation from "../components/WordScrollAnimation";
import HeroImage from "../components/HeroImage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Troy Albers for Congress - Florida 3rd District" },
    {
      name: "description",
      content: "Troy Albers is running for Congress in Florida's 3rd District.",
    },
  ];
}

export default function Home() {
  const [isAddressOpen, setIsAddressOpen] = useState(false);

  return (
    <div className="w-full lg:h-full lg:min-h-0 lg:overflow-hidden">
      {/* Hero Section */}
      <div className="text-white relative overflow-hidden h-auto lg:h-full lg:min-h-0 flex items-start lg:items-center">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCC33] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B2C9A3] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full h-auto lg:h-full lg:min-h-0 px-0 pt-2 pb-1 lg:px-[clamp(1.25rem,3.25vw,4rem)] lg:py-[clamp(0.35rem,1.25vh,1.25rem)]">
          <div className="h-auto lg:h-full min-h-0 flex flex-col lg:grid lg:grid-cols-[minmax(420px,0.9fr)_minmax(420px,1.25fr)] xl:grid-cols-[minmax(480px,0.9fr)_minmax(520px,1.25fr)] lg:items-center gap-0 lg:gap-[clamp(0rem,0.7vw,0.9rem)]">
            {/* Mobile: Container for centering */}
            <div className="lg:hidden flex flex-col items-center w-full min-h-0">
              {/* WordScrollAnimation on top */}
              <div className="flex max-h-full flex-col items-start justify-center text-left w-full px-4">
                <WordScrollAnimation />
              </div>

              {/* Centered image container */}
              <div className="flex justify-center w-full px-4 mt-0">
                <div className="flex-shrink-0 max-h-full flex items-center">
                  <HeroImage />
                </div>
              </div>
            </div>

            {/* Desktop: Candidate Photo on left */}
            <div className="hidden lg:flex h-full min-h-0 items-center justify-start pt-[clamp(0rem,0.6vh,0.5rem)] pl-[clamp(0.5rem,1.5vw,1.5rem)] pb-0">
              <div className="h-[min(100%,82vh)] max-h-[820px] min-h-[500px] flex items-center">
                <div className="h-full [&>*]:h-full [&>*]:max-h-full [&_img]:h-full [&_img]:w-auto [&_img]:max-w-full [&_img]:object-contain">
                  <HeroImage />
                </div>
              </div>
            </div>

            {/* Desktop: WordScrollAnimation and help text on right */}
            <div className="hidden lg:flex h-full min-h-0 flex-col items-start justify-center text-left w-full min-w-0 overflow-hidden pr-[clamp(0.25rem,1vw,1rem)] -ml-[clamp(1rem,2vw,2.5rem)]">
              <div className="w-full max-w-[min(52vw,860px)] origin-left scale-[clamp(0.62,0.58+0.12vw,0.88)]">
                <WordScrollAnimation />
              </div>

              <p className="text-white text-[clamp(1rem,1.16vw,1.38rem)] mt-[clamp(0.75rem,1.75vh,1.75rem)] max-w-[min(52vw,840px)] leading-[1.38] xl:leading-[1.48]">
                Troy needs your help to get on the ballot. Print and sign the
                petition, then mail it to:
                <span className="block mt-[clamp(0.4rem,1.1vh,0.8rem)] font-semibold leading-[1.48]">
                  Troy Albers
                  <br />
                  1468 SW Main Blvd Ste 105-28
                  <br />
                  Lake City, FL 32025
                </span>
              </p>
            </div>
          </div>

          {/* Mobile version - visible below lg breakpoint */}
          <div className="lg:hidden text-white text-base md:text-lg -mt-1 max-w-2xl leading-snug px-4 mx-auto text-center pb-2">
            <button
              onClick={() => setIsAddressOpen(!isAddressOpen)}
              className="inline-flex items-center justify-center gap-2 text-[#FFCC33] hover:text-[#E8B923] transition-colors font-semibold rounded px-1 mx-auto border-0 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
              aria-expanded={isAddressOpen}
            >
              How YOU can help Troy:
              <svg
                className={`w-5 h-5 transition-transform ${isAddressOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isAddressOpen && (
              <div className="mt-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm text-left">
                <p className="mb-2">
                  Print and sign the petition, then mail it to:
                </p>
                <span className="block font-semibold">
                  Troy Albers
                  <br />
                  1468 SW Main Blvd Ste 105-28
                  <br />
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