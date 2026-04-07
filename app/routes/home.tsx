import type { Route } from "./+types/home";
import WordScrollAnimation from "../components/WordScrollAnimation"
import { FiExternalLink } from "react-icons/fi";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Troy Albers for Congress - Florida 3rd District" },
    { name: "description", content: "Troy Albers is running for Congress in Florida's 3rd District." },
  ];
}

export default function Home() {
  return (
    <div className="h-full w-full">
      {/* Hero Section */}
      <div className="text-white relative overflow-hidden h-full flex items-center">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCC33] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B2C9A3] rounded-full blur-3xl"></div>
        </div>

        <div className="w-full py-2 relative z-10 max-h-full pl-0 xl:pl-2">
          <div className="flex flex-col xl:flex-row items-center gap-2 xl:gap-3 max-h-full">
            {/* Candidate Photo */}
            <div className="flex-shrink-0 max-h-full flex items-center justify-start px-4 xl:px-3">
              <div className="relative inline-block max-h-full">
                <div className="absolute inset-0 bg-[#FFCC33] rounded-lg blur-xl opacity-30 animate-pulse"></div>
                <img
                  src="/TroyAlbers4Congress.jpg"
                  alt="Troy Albers"
                  className="rounded-lg shadow-2xl max-w-full max-h-[80vh] w-auto h-auto object-contain relative border-4 border-[#FFCC33] hover:border-[#B2C9A3] transition-all duration-300"
                />
              </div>
            </div>
            {/* Text Content */}
            <div className="flex-1 max-h-full flex items-center justify-start text-left w-full pl-[1.15rem] md:pl-24 pr-4 xl:pl-0 xl:pr-0">
              <WordScrollAnimation />
              {/* <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                Troy Albers for Congress
              </h1>
              <p className="text-xl md:text-2xl mb-2 text-[#FFCC33] font-semibold drop-shadow-md">
                Democrat for FL-3
              </p>
              <p className="text-2xl md:text-3xl font-semibold mb-8 text-white drop-shadow-md border-l-4 border-[#FFCC33] pl-4 inline-block">
                Troy works for YOU
              </p>
              <div className="mt-8">
                <a
                  href="https://secure.actblue.com/donate/troy-albers-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-bold text-lg px-8 py-4 rounded-lg shadow-xl transition-all duration-200 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                >
                  Donate to Troy Albers
                  <FiExternalLink className="w-5 h-5" aria-hidden="true" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
