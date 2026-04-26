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
    <div className="h-full w-full min-h-0 overflow-hidden">
      {/* Hero Section */}
      <div className="text-white relative overflow-hidden h-full min-h-0 flex items-center">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCC33] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B2C9A3] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full h-full min-h-0 px-0 lg:px-[clamp(1.5rem,4vw,5rem)] lg:py-[clamp(1rem,3vh,2.5rem)]">
          <div className="h-full min-h-0 flex flex-col lg:grid lg:grid-cols-[minmax(360px,0.95fr)_minmax(420px,1.35fr)] xl:grid-cols-[minmax(420px,0.95fr)_minmax(520px,1.35fr)] lg:items-center gap-1 lg:gap-[clamp(2rem,4vw,5rem)]">
            {/* Mobile: Container for centering */}
            <div className="lg:hidden flex flex-col items-center w-full min-h-0">
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
            <div className="hidden lg:flex h-full min-h-0 items-center justify-start pt-[clamp(0.75rem,2.5vh,2rem)] pl-[clamp(0.75rem,2vw,2rem)]">
              <div className="h-[min(100%,72vh)] max-h-[760px] min-h-[420px] flex items-center">
                <div className="h-full [&>*]:h-full [&>*]:max-h-full [&_img]:h-full [&_img]:w-auto [&_img]:max-w-full [&_img]:object-contain">
                  <HeroImage />
                </div>
              </div>
            </div>

            {/* Desktop: WordScrollAnimation and help text on right */}
            <div className="hidden lg:flex h-full min-h-0 flex-col items-start justify-center text-left w-full min-w-0 overflow-hidden pr-[clamp(0.5rem,2vw,2rem)]">
              <div className="w-full max-w-[min(58vw,920px)] origin-left scale-[clamp(0.72,0.84+0.12vw,1)]">
                <WordScrollAnimation />
              </div>

              <p className="text-white text-[clamp(1rem,1.15vw,1.35rem)] mt-[clamp(1rem,2.6vh,2.5rem)] max-w-[min(52vw,840px)] leading-[1.45] xl:leading-[1.6]">
                Troy needs your help to get on the ballot. Print and sign the
                petition, then mail it to:
                <span className="block mt-[clamp(0.5rem,1.5vh,1rem)] font-semibold leading-[1.6]">
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
          <div className="lg:hidden text-white text-base md:text-lg mt-3 max-w-2xl leading-snug px-4">
            <button
              onClick={() => setIsAddressOpen(!isAddressOpen)}
              className="inline-flex items-center gap-2 text-[#FFCC33] hover:text-[#E8B923] transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-offset-2 focus:ring-offset-[#0E3B67] rounded px-1"
              aria-expanded={isAddressOpen}
            >
              How YOU can help Troy:
              <svg
                className={`w-5 h-5 transition-transform ${isAddressOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
              <div className="mt-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
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