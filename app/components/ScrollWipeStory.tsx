import { motion, MotionValue, useTransform } from "framer-motion";
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

  const { scrollYProgress } = useScrollForElement(sectionRef);

  if (slides.length === 0) {
    return null;
  }

  const sectionHeight = `${180 + slides.length * 100}vh`;

  return (
    <section
      ref={sectionRef}
      className={`relative bg-[#0b1f3a] ${className}`}
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden px-5 py-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="order-2 min-h-[14rem] md:order-1">
            <div className="relative">
              {slides.map((slide, index) => (
                <ScrollWipeCaption
                  key={`${slide.imageSrc}-${index}`}
                  slide={slide}
                  index={index}
                  total={slides.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl">
              {slides.map((slide, index) => (
                <ScrollWipeImage
                  key={`${slide.imageSrc}-${index}`}
                  slide={slide}
                  index={index}
                  total={slides.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}

              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
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
  const revealStart = index === 0 ? 0 : getSlideStart(index, total);
  const revealEnd = index === 0 ? 0 : revealStart + getStepSize(total) * 0.45;

  const exitStart = getSlideStart(index + 1, total);
  const exitEnd = exitStart + getStepSize(total) * 0.45;

  const clipPath = useTransform(
    scrollYProgress,
    index === 0 ? [0, 1] : [revealStart, revealEnd],
    index === 0
      ? ["inset(0 0% 0 0)", "inset(0 0% 0 0)"]
      : ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  const opacity = useTransform(
    scrollYProgress,
    index === total - 1 ? [0, 1] : [exitStart, exitEnd],
    index === total - 1 ? [1, 1] : [1, 0.55]
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
          className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white/20 via-transparent to-transparent"
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
  const step = getStepSize(total);
  const start = getSlideStart(index, total);
  const fadeInStart = index === 0 ? start + step * 0.15 : start + step * 0.42;
  const fadeInEnd = fadeInStart + step * 0.18;
  const fadeOutStart = getSlideStart(index + 1, total) - step * 0.12;
  const fadeOutEnd = getSlideStart(index + 1, total) + step * 0.1;

  const opacity = useTransform(
    scrollYProgress,
    index === total - 1
      ? [fadeInStart, fadeInEnd, 1]
      : [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    index === total - 1 ? [0, 1, 1] : [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [18, 0, 0, -12]
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
      }}
      className="absolute left-0 top-0 max-w-xl"
    >
      {slide.eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#f5cc5c]">
          {slide.eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-black uppercase leading-tight text-white md:text-5xl">
        {slide.title}
      </h2>

      <p className="mt-4 text-lg leading-8 text-white/80">{slide.body}</p>
    </motion.div>
  );
}

function getStepSize(total: number) {
  return 1 / Math.max(total, 1);
}

function getSlideStart(index: number, total: number) {
  return Math.min(index * getStepSize(total), 1);
}

function useScrollForElement(ref: React.RefObject<HTMLElement | null>) {
  const { useScroll } = require("framer-motion") as typeof import("framer-motion");

  return useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
}