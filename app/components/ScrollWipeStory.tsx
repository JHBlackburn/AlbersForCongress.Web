import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export type ScrollWipeStorySlide = {
  eyebrow?: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
};

type ScrollWipeStoryProps = {
  slides: ScrollWipeStorySlide[];
  className?: string;
  introScrollVh?: number;
  betweenScrollVh?: number;
  outroScrollVh?: number;
};

type ScrollWipeStoryTiming = {
  introScrollVh: number;
  betweenScrollVh: number;
  outroScrollVh: number;
  captionDropVh: number;
  captionFadeVh: number;
  wipeVh: number;
  totalVh: number;
};

type ScrollWipeImageProps = {
  slide: ScrollWipeStorySlide;
  index: number;
  total: number;
  timing: ScrollWipeStoryTiming;
  scrollYProgress: MotionValue<number>;
};

type ScrollWipeCaptionProps = {
  slide: ScrollWipeStorySlide;
  index: number;
  total: number;
  timing: ScrollWipeStoryTiming;
  scrollYProgress: MotionValue<number>;
};

export function ScrollWipeStory({
  slides,
  className = "",
  introScrollVh = 25,
  betweenScrollVh = 25,
  outroScrollVh = 25,
}: ScrollWipeStoryProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  if (slides.length === 0) {
    return null;
  }

  const timing = getStoryTiming(slides.length, {
    introScrollVh,
    betweenScrollVh,
    outroScrollVh,
  });
  const sectionHeight = `${100 + timing.totalVh}vh`;

  return (
    <section
      ref={sectionRef}
      className={`relative isolate z-20 -mx-4 mt-3 bg-blue-950 sm:mt-4 ${className}`}
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 z-20 min-h-screen overflow-hidden px-3 sm:px-4">
        <div className="mx-auto grid min-h-screen w-full max-w-6xl gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          <div className="order-1 flex w-full items-start justify-center py-1 lg:order-2 lg:py-0">
            <div className="relative h-[calc(100svh-15.5rem)] min-h-[20rem] w-full max-w-[calc((100svh-15.5rem)*0.8)] overflow-hidden rounded-lg border-4 border-[#FFCC33] bg-black shadow-2xl sm:h-[calc(100svh-14rem)] sm:max-w-[calc((100svh-14rem)*0.8)] lg:h-screen lg:max-w-[calc(100vh*0.8)]">
              {slides.map((slide, index) => (
                <ScrollWipeImage
                  key={`${slide.imageSrc}-image-${index}`}
                  slide={slide}
                  index={index}
                  total={slides.length}
                  timing={timing}
                  scrollYProgress={scrollYProgress}
                />
              ))}

              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15" />
            </div>
          </div>

          <div className="order-2 flex w-full items-start lg:order-1 lg:pt-20">
            <div className="relative z-30 min-h-[14rem] w-full sm:min-h-[13rem] lg:min-h-[24rem]">
              {slides.map((slide, index) => (
                <ScrollWipeCaption
                  key={`${slide.imageSrc}-caption-${index}`}
                  slide={slide}
                  index={index}
                  total={slides.length}
                  timing={timing}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollWipeImage({
  slide,
  index,
  total,
  timing,
  scrollYProgress,
}: ScrollWipeImageProps) {
  const { start, end } = getImageWipeWindow(index, total, timing);
  const revealWidth = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [start, end],
    index === 0 ? ["100%", "100%"] : ["0%", "100%"],
    { clamp: true }
  );

  return (
    <>
      {index === 0 ? (
        <motion.img
          src={slide.imageSrc}
          alt={slide.imageAlt}
          style={{
            zIndex: total,
          }}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      ) : (
        <motion.div
          style={{
            width: revealWidth,
            zIndex: total + index,
          }}
          className="absolute inset-y-0 left-0 overflow-hidden"
        >
          <img
            src={slide.imageSrc}
            alt={slide.imageAlt}
            className="absolute inset-0 h-full w-full min-w-full object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/25 via-white/5 to-transparent" />
        </motion.div>
      )}
    </>
  );
}

function ScrollWipeCaption({
  slide,
  index,
  total,
  timing,
  scrollYProgress,
}: ScrollWipeCaptionProps) {
  const captionWindow = getCaptionWindow(index, total, timing);
  const opacity = useTransform(scrollYProgress, (value) => {
    if (value < captionWindow.inStart) {
      return 0;
    }

    if (index === total - 1 || value < captionWindow.outStart) {
      return 1;
    }

    if (value >= captionWindow.outEnd) {
      return 0;
    }

    return interpolateClamped(value, captionWindow.outStart, captionWindow.outEnd, 1, 0);
  });

  const y = useTransform(scrollYProgress, (value) => {
    if (value < captionWindow.inStart) {
      return 34;
    }

    if (value >= captionWindow.inEnd) {
      return 0;
    }

    return interpolateClamped(value, captionWindow.inStart, captionWindow.inEnd, 34, 0);
  });

  return (
    <motion.div
      style={{
        opacity,
        y,
        zIndex: index + 1,
      }}
      className="pointer-events-none absolute inset-0 flex max-w-2xl flex-col justify-start"
    >
      {slide.eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#FFCC33] sm:text-sm">
          {slide.eyebrow}
        </p>
      ) : null}

      <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-5xl">
        {slide.title}
      </h3>

      <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:text-xl">
        {slide.body}
      </p>
    </motion.div>
  );
}

function getStoryTiming(
  total: number,
  {
    introScrollVh,
    betweenScrollVh,
    outroScrollVh,
  }: Pick<ScrollWipeStoryProps, "introScrollVh" | "betweenScrollVh" | "outroScrollVh">
): ScrollWipeStoryTiming {
  const captionDropVh = betweenScrollVh * 0.4;
  const captionFadeVh = betweenScrollVh * 0.2;
  const wipeVh = betweenScrollVh * 1.25;

  return {
    introScrollVh,
    betweenScrollVh,
    outroScrollVh,
    captionDropVh,
    captionFadeVh,
    wipeVh,
    totalVh:
      total <= 1
        ? introScrollVh + captionDropVh + outroScrollVh
        : introScrollVh +
          captionDropVh +
          betweenScrollVh +
          Math.max(total - 2, 0) * (wipeVh + betweenScrollVh + captionDropVh + betweenScrollVh) +
          wipeVh +
          betweenScrollVh +
          captionDropVh +
          outroScrollVh,
  };
}

function getImageWipeWindow(index: number, total: number, timing: ScrollWipeStoryTiming) {
  if (index === 0 || total <= 1) {
    return {
      start: 0,
      end: 0,
    };
  }

  const startVh =
    timing.introScrollVh +
    timing.captionDropVh +
    timing.betweenScrollVh +
    (index - 1) *
      (timing.wipeVh + timing.betweenScrollVh + timing.captionDropVh + timing.betweenScrollVh);

  return {
    start: startVh / timing.totalVh,
    end: (startVh + timing.wipeVh) / timing.totalVh,
  };
}

function getCaptionWindow(index: number, total: number, timing: ScrollWipeStoryTiming) {
  const currentWipe = getImageWipeWindow(index, total, timing);
  const nextWipe = getImageWipeWindow(index + 1, total, timing);
  const inStartVh =
    index === 0
      ? timing.introScrollVh
      : Math.max(
          currentWipe.start * timing.totalVh,
          currentWipe.end * timing.totalVh - timing.captionDropVh
        );
  const inEndVh = inStartVh + timing.captionDropVh;
  const outEndVh =
    index === total - 1
      ? timing.totalVh + 1
      : nextWipe.end * timing.totalVh - timing.captionDropVh;
  const outStartVh = Math.max(inEndVh, outEndVh - timing.captionFadeVh);

  return {
    inStart: inStartVh / timing.totalVh,
    inEnd: inEndVh / timing.totalVh,
    outStart: outStartVh / timing.totalVh,
    outEnd: outEndVh / timing.totalVh,
  };
}

function interpolateClamped(
  value: number,
  inputStart: number,
  inputEnd: number,
  outputStart: number,
  outputEnd: number
) {
  if (inputEnd <= inputStart) {
    return outputEnd;
  }

  const progress = Math.min(Math.max((value - inputStart) / (inputEnd - inputStart), 0), 1);

  return outputStart + (outputEnd - outputStart) * progress;
}
