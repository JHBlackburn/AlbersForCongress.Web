import { FiExternalLink, FiPrinter } from "react-icons/fi";

export default function HeroImage() {
  const handlePrintPetition = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      window.open("/dsde104.pdf", "_blank");
    } else {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = "/dsde104.pdf";
      document.body.appendChild(iframe);
      iframe.onload = () => {
        iframe.contentWindow?.print();
      };
    }
  };

  return (
    <div className="relative inline-block max-h-full lg:pb-3">
      {/* Static glow effect */}
      <div className="absolute inset-0 bg-[#FFCC33] rounded-lg blur-xl opacity-20"></div>

      {/* Image and mobile overlay */}
      <div className="relative inline-block">
        <img
          src="/TroyAlbers4Congress_Zoomed.JPG"
          alt="Troy Albers"
          className="rounded-lg shadow-2xl max-w-full max-h-[45vh] lg:max-h-[48vh] xl:max-h-[58vh] w-auto h-auto object-contain relative border-4 border-[#FFCC33] hover:border-[#B2C9A3] transition-all duration-300"
        />

        {/* Mobile Overlay on bottom third */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-black/40 rounded-b-lg px-2 py-2 flex flex-col items-center justify-end min-h-[20%] lg:hidden">
          <p className="text-white text-[clamp(1rem,5.2vw,1.45rem)] font-semibold mb-1.5 drop-shadow-lg leading-tight whitespace-nowrap">
            Troy works for YOU
          </p>

          <div className="flex flex-nowrap gap-2 justify-center w-full">
            <a
              href="https://secure.actblue.com/donate/troy-albers-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-bold text-[clamp(0.72rem,3.4vw,0.95rem)] px-2.5 py-1 rounded-md shadow-xl transition-all duration-200 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 whitespace-nowrap"
            >
              Donate
              <FiExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>

            <button
              onClick={handlePrintPetition}
              className="inline-flex items-center justify-center gap-1 bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-bold text-[clamp(0.72rem,3.4vw,0.95rem)] px-2.5 py-1 rounded-md shadow-xl transition-all duration-200 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 whitespace-nowrap"
            >
              Sign My Petition
              <FiPrinter className="w-4 h-4 shrink-0" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop buttons below picture */}
      <div className="hidden lg:flex flex-col items-center mt-3 pb-2">
        <p className="text-white text-[clamp(1.15rem,1.45vw,1.65rem)] font-semibold mb-2 leading-tight">
          Troy works for YOU
        </p>

        <div className="flex flex-wrap gap-3 justify-center pb-2">
          <a
            href="https://secure.actblue.com/donate/troy-albers-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-bold text-[clamp(1rem,1.15vw,1.2rem)] px-5 py-2 rounded-lg shadow-xl transition-all duration-200 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 whitespace-nowrap"
          >
            Donate
            <FiExternalLink className="w-5 h-5" aria-hidden="true" />
          </a>

          <button
            onClick={handlePrintPetition}
            className="inline-flex items-center gap-2 bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-bold text-[clamp(1rem,1.15vw,1.2rem)] px-5 py-2 rounded-lg shadow-xl transition-all duration-200 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 whitespace-nowrap"
          >
            Sign My Petition
            <FiPrinter className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}