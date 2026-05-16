import { FiExternalLink, FiUser } from "react-icons/fi";
import { Link } from "react-router";

export default function HeroImage() {
  return (
    <div className="relative flex h-full min-h-0 w-full max-w-[min(92vw,720px)] items-end justify-end lg:max-w-[min(48vw,820px)]">
      <div className="pointer-events-none absolute -bottom-8 right-[-10%] h-[80%] w-[84%] rounded-full bg-[#031226]/45 blur-3xl" />

      <img
        // TODO: Add a transparent cutout at public/troy-cutout.png.
        src="/troy-cutout.png"
        alt="Troy Albers"
        className="pointer-events-none relative z-0 ml-auto h-auto max-h-[min(56svh,32rem)] w-auto max-w-[82vw] object-contain object-bottom drop-shadow-[0_1.4rem_1.8rem_rgba(0,0,0,0.42)] sm:max-h-[min(62svh,38rem)] lg:max-h-[calc(100svh-8.1rem)] lg:max-w-full xl:max-h-[calc(100svh-7.6rem)]"
      />

      <div className="absolute bottom-[clamp(1.1rem,6vh,4rem)] right-[clamp(0.2rem,4vw,3rem)] z-20 grid w-[min(82vw,30rem)] grid-cols-2 gap-[clamp(0.45rem,1.6vw,1rem)] lg:bottom-[clamp(2rem,9vh,6rem)] lg:right-[clamp(0rem,2vw,2rem)]">
        <a
          href="https://secure.actblue.com/donate/troy-albers-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[2.65rem] min-w-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[#FFCC33] px-[clamp(0.65rem,2.4vw,1.25rem)] py-[clamp(0.55rem,1.4vh,0.9rem)] text-[clamp(0.95rem,3.6vw,1.35rem)] font-black leading-none text-blue-900 shadow-[0_0.8rem_1.6rem_rgba(0,0,0,0.36)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E8B923] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 lg:text-[clamp(1.05rem,1.25vw,1.35rem)]"
        >
          Donate
          <FiExternalLink className="h-[1em] w-[1em] shrink-0" aria-hidden="true" />
        </a>

        <Link
          to="/about"
          className="inline-flex min-h-[2.65rem] min-w-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[#FFCC33] px-[clamp(0.65rem,2.4vw,1.25rem)] py-[clamp(0.55rem,1.4vh,0.9rem)] text-[clamp(0.95rem,3.6vw,1.35rem)] font-black leading-none text-blue-900 shadow-[0_0.8rem_1.6rem_rgba(0,0,0,0.36)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E8B923] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 lg:text-[clamp(1.05rem,1.25vw,1.35rem)]"
        >
          Meet Troy
          <FiUser className="h-[1em] w-[1em] shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
