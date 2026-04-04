import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Troy Albers for Congress - Florida 3rd District" },
    { name: "description", content: "Troy Albers is running for Congress in Florida's 3rd District." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Candidate Photo */}
            <div className="flex-1">
              <img
                src="public/TroyAlbers4Congress.jpg"
                alt="Troy Albers"
                className="rounded-lg shadow-2xl max-w-md mx-auto"
              />
            </div>
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Troy Albers for Congress
              </h1>
              <p className="text-xl md:text-2xl mb-2 text-blue-200">
                Democrat for FL-3
              </p>
              <p className="text-2xl md:text-3xl font-semibold mb-8">
                Troy works for YOU
              </p>
              <a
                href="https://secure.actblue.com/donate/troy-albers-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Donate to Troy Albers
              </a>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
