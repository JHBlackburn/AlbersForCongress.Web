import type { Route } from "./+types/home";
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
  return (
    <section className="relative isolate flex min-h-[calc(100svh-3.5rem-3.25rem)] w-full overflow-hidden bg-[#071f43] text-white sm:min-h-[calc(100svh-3.5rem-3.6rem)] lg:min-h-[calc(100svh-3.5rem-4.2rem)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(0,119,204,0.46),transparent_34%),linear-gradient(135deg,#061936_0%,#0b2f5b_48%,#061936_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#031226] to-transparent" />

      <div className="relative z-10 grid min-h-0 w-full grid-rows-[auto_1fr] px-[clamp(1rem,4vw,4.5rem)] pt-[clamp(0.7rem,2vh,2rem)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:grid-rows-1 lg:items-end lg:gap-[clamp(1rem,3vw,4rem)]">
        <div className="relative z-20 flex min-w-0 flex-col items-start self-start lg:self-center lg:pb-[clamp(3rem,8vh,7rem)]">
          <div className="w-full max-w-[min(92vw,760px)]">
            <WordScrollAnimation />
          </div>
        </div>

        <div className="relative z-10 flex min-h-0 items-end justify-end self-end">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
