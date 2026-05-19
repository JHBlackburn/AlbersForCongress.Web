import { FiExternalLink, FiUser } from "react-icons/fi";
import { Link } from "react-router";

export default function HeroImage() {
  return (
    <div className="relative flex h-full min-h-0 w-full items-end justify-center overflow-visible sm:justify-end lg:max-w-[min(48vw,820px)]">
      <div className="relative flex h-[calc((100svh-3.5rem-3.25rem)*0.85)] w-fit max-w-none -translate-x-[clamp(0.75rem,4vw,1.5rem)] items-end justify-center sm:h-[calc((100svh-3.5rem-3.6rem)*0.85)] sm:translate-x-[clamp(1rem,4vw,4.5rem)] md:h-[calc((100svh-3.5rem-3.6rem)*0.85)] lg:h-[calc((100svh-3.5rem-4.2rem)*0.85)] lg:translate-x-0 xl:h-[calc((100svh-3.5rem-4.2rem)*0.85)]">
        <div className="pointer-events-none absolute -bottom-8 right-[-10%] h-[80%] w-[84%] rounded-full bg-[#031226]/45 blur-3xl" />

        <img
          src="/troy-cutout.png"
          alt="Troy Albers"
          className="pointer-events-none relative z-0 h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_1.4rem_1.8rem_rgba(0,0,0,0.42)]"
        />

        <div className="pointer-events-none absolute bottom-0 left-0 top-[64%] z-10 w-[clamp(1rem,5vw,2.5rem)] bg-linear-to-r from-[#071f43]/72 via-[#071f43]/28 to-transparent blur-[1px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-[64%] z-10 w-[clamp(1rem,5vw,2.5rem)] bg-linear-to-l from-[#071f43]/72 via-[#071f43]/28 to-transparent blur-[1px]" />

        <p className="pointer-events-none absolute left-[4%] top-[clamp(3.5rem,15vh,8rem)] z-20 text-left text-[clamp(1.15rem,5.4vw,2rem)] font-black leading-[1.08] tracking-normal text-white drop-shadow-[0_0.35rem_0.7rem_rgba(0,0,0,0.42)] sm:left-[-8%] sm:top-[clamp(6.5rem,20vh,9rem)] sm:text-[clamp(1.6rem,4.8vw,2.7rem)] md:left-[-18%] md:top-[clamp(7.5rem,22vh,11rem)] md:text-[clamp(1.55rem,3.6vw,2.45rem)] lg:left-[calc(clamp(5rem,10vw,11rem)*-1)] lg:top-[clamp(5rem,14vh,9rem)] lg:text-[clamp(1.9rem,2.7vw,3.3rem)]">
          Troy works for
          <span className="block text-[#FFCC33]">YOU</span>
        </p>

        <div className="absolute bottom-[clamp(1.1rem,6vh,4rem)] left-1/2 z-20 grid w-[min(82vw,30rem)] -translate-x-1/2 grid-cols-2 gap-[clamp(0.45rem,1.6vw,1rem)] md:w-[min(54vw,25rem)] lg:bottom-[clamp(2rem,9vh,6rem)] lg:left-[calc(clamp(13rem,18vw,22rem)*-1)] lg:w-[min(82vw,30rem)] lg:translate-x-0">
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
    </div>
  );
}
