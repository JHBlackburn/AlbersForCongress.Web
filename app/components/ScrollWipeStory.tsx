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
};

type ScrollWipeImageProps = {
  slide: ScrollWipeStorySlide;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
};

type ScrollWipeCaptionProps = {
  slide: ScrollWipeStorySlide;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
};

export function ScrollWipeStory({
  slides,
  className = "",
}: ScrollWipeStoryProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  if (slides.length === 0) {
    return null;
  }

  const timeline = getStoryTimeline(slides.length);
  const sectionHeight = `${100 + timeline.totalUnits * timeline.unitVh}vh`;

  return (
    <section
      ref={sectionRef}
      className={`relative isolate z-20 -mx-4 mt-10 bg-blue-950 ${className}`}
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 z-20 min-h-screen overflow-hidden px-4">
        <div className="mx-auto grid min-h-screen w-full max-w-6xl gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          <div className="order-1 flex w-full items-start justify-center lg:order-2">
            <div className="relative h-[calc(100svh-15rem)] min-h-[20rem] w-full max-w-[calc((100svh-15rem)*0.8)] overflow-hidden rounded-lg border-4 border-[#FFCC33] bg-black shadow-2xl sm:h-[calc(100svh-14rem)] sm:max-w-[calc((100svh-14rem)*0.8)] lg:h-screen lg:max-w-[calc(100vh*0.8)]">
              {slides.map((slide, index) => (
                <ScrollWipeImage
                  key={`${slide.imageSrc}-image-${index}`}
                  slide={slide}
                  index={index}
                  total={slides.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}

              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15" />
            </div>
          </div>

          <div className="order-2 flex w-full items-start lg:order-1 lg:pt-24">
            <div className="relative z-30 min-h-[14rem] w-full sm:min-h-[13rem] lg:min-h-[24rem]">
              {slides.map((slide, index) => (
                <ScrollWipeCaption
                  key={`${slide.imageSrc}-caption-${index}`}
                  slide={slide}
                  index={index}
                  total={slides.length}
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
  scrollYProgress,
}: ScrollWipeImageProps) {
  const { start, end } = getImageWipeWindow(index, total);
  const nextWipe = getImageWipeWindow(index + 1, total);

  const clipPath = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [start, end],
    index === 0
      ? ["inset(0 0% 0 0)", "inset(0 0% 0 0)"]
      : ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
    { clamp: true }
  );

  const opacity = useTransform(
    scrollYProgress,
    index === total - 1
      ? [0, 1]
      : [Math.max(0, nextWipe.end - 0.02), nextWipe.end],
    index === total - 1 ? [1, 1] : [1, 0],
    { clamp: true }
  );

  return (
    <>
      <motion.img
        src={slide.imageSrc}
        alt={slide.imageAlt}
        style={{
          clipPath,
          opacity,
          zIndex: index + 1,
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {index > 0 ? (
        <motion.div
          style={{
            clipPath,
            zIndex: index + 2,
          }}
          className="pointer-events-none absolute inset-0 bg-linear-to-l from-white/25 via-white/5 to-transparent"
        />
      ) : null}
    </>
  );
}

function ScrollWipeCaption({
  slide,
  index,
  total,
  scrollYProgress,
}: ScrollWipeCaptionProps) {
  const captionWindow = getCaptionWindow(index, total);
  const nextWipe = getImageWipeWindow(index + 1, total);

  const opacity = useTransform(
    scrollYProgress,
    index === total - 1
      ? [0, captionWindow.inStart, captionWindow.inEnd, 1]
      : [0, captionWindow.inStart, captionWindow.inEnd, nextWipe.start, nextWipe.end],
    index === total - 1 ? [0, 0, 1, 1] : [0, 0, 1, 1, 0],
    { clamp: true }
  );

  const y = useTransform(
    scrollYProgress,
    [captionWindow.inStart, captionWindow.inEnd],
    [34, 0],
    { clamp: true }
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
        zIndex: index + 1,
      }}
      className="pointer-events-none absolute inset-0 flex max-w-2xl flex-col justify-start bg-blue-950"
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

function getStoryTimeline(total: number) {
  const unitVh = 25;
  const firstHold = 1;
  const captionDrop = 0.4;
  const captionHold = 1;
  const wipe = 1.25;
  const finalCaptionDrop = 0.7;
  const finalCaptionHold = 2;
  const finalHold = 2.5;

  return {
    unitVh,
    firstHold,
    captionDrop,
    captionHold,
    wipe,
    finalCaptionDrop,
    finalCaptionHold,
    finalHold,
    totalUnits:
      total <= 1
        ? firstHold + finalCaptionDrop + finalCaptionHold + finalHold
        : firstHold +
          captionDrop +
          captionHold +
          Math.max(total - 2, 0) * (wipe + captionDrop + captionHold) +
          wipe +
          finalCaptionDrop +
          finalCaptionHold +
          finalHold,
  };
}

function getImageWipeWindow(index: number, total: number) {
  if (index === 0 || total <= 1) {
    return {
      start: 0,
      end: 0,
    };
  }

  const timeline = getStoryTimeline(total);
  const startUnit =
    timeline.firstHold +
    timeline.captionDrop +
    timeline.captionHold +
    (index - 1) *
      (timeline.wipe + timeline.captionDrop + timeline.captionHold);

  return {
    start: startUnit / timeline.totalUnits,
    end: (startUnit + timeline.wipe) / timeline.totalUnits,
  };
}

function getCaptionWindow(index: number, total: number) {
  const timeline = getStoryTimeline(total);
  const dropDuration = index === total - 1 ? timeline.finalCaptionDrop : timeline.captionDrop;
  const wipeWindow = getImageWipeWindow(index, total);
  const startUnit =
    index === 0
      ? timeline.firstHold
      : Math.max(
          wipeWindow.start * timeline.totalUnits,
          wipeWindow.end * timeline.totalUnits - dropDuration
        );

  return {
    inStart: startUnit / timeline.totalUnits,
    inEnd: (startUnit + dropDuration) / timeline.totalUnits,
  };
}
