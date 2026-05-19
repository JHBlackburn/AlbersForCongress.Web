import { FiExternalLink, FiUser } from "react-icons/fi";
import { Link } from "react-router";

export default function HeroImage() {
  return (
    <div className="relative flex h-full min-h-0 w-[165vw] max-w-none -translate-x-[20vw] items-end justify-center sm:w-[140vw] sm:-translate-x-[12vw] lg:w-full lg:max-w-[min(48vw,820px)] lg:translate-x-0 lg:justify-end">
      <div className="pointer-events-none absolute -bottom-8 right-[-10%] h-[80%] w-[84%] rounded-full bg-[#031226]/45 blur-3xl" />

      <img
        src="/troy-cutout.png"
        alt="Troy Albers"
        className="pointer-events-none relative z-0 h-[min(68svh,42rem)] w-full max-w-none object-contain object-bottom drop-shadow-[0_1.4rem_1.8rem_rgba(0,0,0,0.42)] sm:h-[min(72svh,46rem)] lg:ml-auto lg:h-auto lg:max-h-[calc(100svh-8.1rem)] lg:w-auto lg:max-w-full xl:max-h-[calc(100svh-7.6rem)]"
      />

      <div className="pointer-events-none absolute inset-y-0 left-[20vw] z-10 w-[clamp(1.25rem,7vw,4rem)] bg-linear-to-r from-[#071f43]/80 via-[#071f43]/32 to-transparent blur-[1px] sm:left-[12vw] lg:left-0 lg:w-[clamp(1rem,2vw,2rem)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[45vw] z-10 w-[clamp(1.25rem,7vw,4rem)] bg-linear-to-l from-[#071f43]/80 via-[#071f43]/32 to-transparent blur-[1px] sm:right-[28vw] lg:right-0 lg:w-[clamp(1rem,2vw,2rem)]" />

      <p className="pointer-events-none absolute left-[21vw] top-[clamp(2.2rem,11vh,6rem)] z-20 text-left text-[clamp(1.15rem,5.4vw,2rem)] font-black leading-[1.08] tracking-normal text-white drop-shadow-[0_0.35rem_0.7rem_rgba(0,0,0,0.42)] sm:left-[15vw] sm:text-[clamp(1.6rem,4.8vw,2.7rem)] lg:left-[calc(clamp(5rem,10vw,11rem)*-1)] lg:top-[clamp(5rem,14vh,9rem)] lg:text-[clamp(1.9rem,2.7vw,3.3rem)]">
        Troy works for
        <span className="block text-[#FFCC33]">YOU</span>
      </p>

      <div className="absolute bottom-[clamp(1.1rem,6vh,4rem)] left-[29vw] z-20 grid w-[min(82vw,30rem)] grid-cols-2 gap-[clamp(0.45rem,1.6vw,1rem)] sm:left-[21vw] lg:bottom-[clamp(2rem,9vh,6rem)] lg:left-[calc(clamp(13rem,18vw,22rem)*-1)]">
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
