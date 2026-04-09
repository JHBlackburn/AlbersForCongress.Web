import { FiExternalLink, FiPrinter } from "react-icons/fi";

export default function HeroImage() {
  return (
    <div className="relative inline-block max-h-full">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#FFCC33] rounded-lg blur-xl opacity-30 animate-pulse"></div>

      {/* Image */}
      <img
        src="/TroyAlbers4Congress.jpg"
        alt="Troy Albers"
        className="rounded-lg shadow-2xl max-w-full max-h-[80vh] w-auto h-auto object-contain relative border-4 border-[#FFCC33] hover:border-[#B2C9A3] transition-all duration-300"
      />

      {/* Overlay on bottom third */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-black/40 rounded-b-lg p-6 flex flex-col items-center justify-end min-h-[20%]">
        <p className="text-white text-xl md:text-2xl font-semibold mb-4 drop-shadow-lg">
          Troy works for YOU
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://secure.actblue.com/donate/troy-albers-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-bold text-lg px-4 rounded-lg shadow-xl transition-all duration-200 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
          >
            Donate
            <FiExternalLink className="w-5 h-5" aria-hidden="true" />
          </a>
          <button
            onClick={() => {
              const iframe = document.createElement('iframe');
              iframe.style.display = 'none';
              iframe.src = '/dsde104.pdf';
              document.body.appendChild(iframe);
              iframe.onload = () => {
                iframe.contentWindow?.print();
              };
            }}
            className="inline-flex items-center gap-2 bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-bold text-lg px-4 rounded-lg shadow-xl transition-all duration-200 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
          >
            Sign My Petition
            <FiPrinter className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
