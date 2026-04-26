"use client";

import type { Route } from "./+types/about";
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import { FiPrinter } from "react-icons/fi";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "About Troy Albers - Democrat for Florida's 3rd Congressional District"
    },
    {
      name: "description",
      content: "Born in a Naval hospital. Raised on a farm. Tested around the world. Rooted in North Florida. Troy Albers is running for Congress in Florida's 3rd District Democratic Primary on August 18, 2026."
    },
  ];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const headingContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.84,
      delayChildren: 0.21
    }
  }
};

const sentenceVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.28
    }
  }
};

type ScrollWipeStorySlide = {
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

function ScrollWipeStory({ slides, className = "" }: ScrollWipeStoryProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  if (slides.length === 0) {
    return null;
  }

  const sectionHeight = `${180 + slides.length * 105}vh`;

  return (
    <section
      ref={sectionRef}
      className={`relative -mx-4 mt-10 bg-blue-950 ${className}`}
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden px-4 py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="order-2 min-h-[15rem] lg:order-1">
            <div className="relative min-h-[15rem]">
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

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[430px] overflow-hidden rounded-lg border-4 border-[#FFCC33] bg-black shadow-2xl">
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
  const step = getStepSize(total);
  const revealStart = index === 0 ? 0 : getSlideStart(index, total) - step * 0.2;
  const revealEnd = index === 0 ? 0 : revealStart + step * 0.45;

  const exitStart = getSlideStart(index + 1, total) - step * 0.2;
  const exitEnd = exitStart + step * 0.45;

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
    index === total - 1 ? [1, 1] : [1, 0.45]
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
          className="pointer-events-none absolute inset-0 bg-linear-to-l from-white/25 via-transparent to-transparent"
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
  const slideStart = getSlideStart(index, total);
  const nextSlideStart = getSlideStart(index + 1, total);

  const fadeInStart = index === 0 ? slideStart + step * 0.12 : slideStart + step * 0.18;
  const fadeInEnd = fadeInStart + step * 0.18;

  const fadeOutStart = nextSlideStart - step * 0.18;
  const fadeOutEnd = nextSlideStart + step * 0.04;

  const opacity = useTransform(
    scrollYProgress,
    index === total - 1
      ? [fadeInStart, fadeInEnd, 1]
      : [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    index === total - 1 ? [0, 1, 1] : [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    index === total - 1
      ? [fadeInStart, fadeInEnd, 1]
      : [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    index === total - 1 ? [18, 0, 0] : [18, 0, 0, -12]
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
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#FFCC33]">
          {slide.eyebrow}
        </p>
      ) : null}

      <h3 className="text-3xl font-bold leading-tight text-white md:text-5xl">
        {slide.title}
      </h3>

      <p className="mt-4 text-lg leading-8 text-white/85 md:text-xl">
        {slide.body}
      </p>
    </motion.div>
  );
}

function getStepSize(total: number) {
  return 1 / Math.max(total, 1);
}

function getSlideStart(index: number, total: number) {
  return Math.min(index * getStepSize(total), 1);
}

export default function About() {
  const serviceSlides: ScrollWipeStorySlide[] = [
    {
      eyebrow: "Navy",
      title: "First, he became a sailor.",
      body: "Boot camp was the first hard line in a life shaped by service, discipline, and doing the job in front of him.",
      imageSrc: "/troy-navy-boot-camp.jpg",
      imageAlt: "Troy Albers in Navy boot camp uniform",
    },
    {
      eyebrow: "Army",
      title: "Then, he served again.",
      body: "From sailor to soldier, Troy kept choosing service when the country called.",
      imageSrc: "/troy-army-boot-camp.jpg",
      imageAlt: "Troy Albers in Army boot camp uniform",
    },
  ];

  return (
    <div className="container mx-auto px-4 pb-12">
      <div className="max-w-6xl mx-auto">
        <motion.section
          className="mb-16 -mx-4 px-4 pb-8 lg:pb-12 lg:min-h-screen"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex flex-col lg:flex-row lg:items-center md:min-h-screen gap-6 lg:gap-8">
            <div className="lg:hidden w-full">
              <div className="flex flex-col items-start w-full min-h-screen justify-center">
                <motion.h1
                  className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight text-left w-full"
                  variants={headingContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.span className="block mb-3" variants={sentenceVariant}>
                    <motion.span
                      className="text-[#FFCC33] text-4xl md:text-5xl"
                      variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.28 } } }}
                    >
                      Born
                    </motion.span>
                    <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.42 } } }}>
                      {" "}in a Naval hospital.
                    </motion.span>
                  </motion.span>

                  <motion.span className="block mb-3" variants={sentenceVariant}>
                    <motion.span
                      className="text-[#FFCC33] text-4xl md:text-5xl"
                      variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.28 } } }}
                    >
                      Raised
                    </motion.span>
                    <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.42 } } }}>
                      {" "}on a farm.
                    </motion.span>
                  </motion.span>

                  <motion.span className="block mb-3" variants={sentenceVariant}>
                    <motion.span
                      className="text-[#FFCC33] text-4xl md:text-5xl"
                      variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.28 } } }}
                    >
                      Tested
                    </motion.span>
                    <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.42 } } }}>
                      {" "}around the world.
                    </motion.span>
                  </motion.span>

                  <motion.span className="block" variants={sentenceVariant}>
                    <motion.span
                      className="text-[#FFCC33] text-4xl md:text-5xl"
                      variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.28 } } }}
                    >
                      Rooted
                    </motion.span>
                    <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.42 } } }}>
                      {" "}in North Florida.
                    </motion.span>
                  </motion.span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 3.6 }}
                >
                  <a
                    href="#meet-troy"
                    className="inline-flex items-center gap-2 bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-bold text-lg px-6 py-3 rounded-lg shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0E3B67]"
                  >
                    Meet Troy
                  </a>
                </motion.div>
              </div>

              <motion.div
                className="my-6 w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.56, delay: 3.85 }}
              >
                <div className="relative inline-block max-w-md mx-auto w-full">
                  <div className="absolute inset-0 bg-[#FFCC33] rounded-lg blur-xl opacity-30"></div>
                  <img
                    src="/about1.jpg"
                    alt="Troy Albers - Veteran, Farmer, Candidate for Congress"
                    className="rounded-lg shadow-2xl w-full h-auto relative border-4 border-[#FFCC33] max-h-[450px] object-cover"
                  />
                </div>
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl text-white leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 4.1 }}
              >
                Troy Albers has spent his life serving something bigger than himself, first in uniform, then on the land, and now in the fight to restore honor and accountability to our government.
              </motion.p>
            </div>

            <div className="hidden lg:flex flex-1 max-h-full flex-col items-start justify-center text-left">
              <motion.h1
                className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight"
                variants={headingContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.span className="block mb-2" variants={sentenceVariant}>
                  <motion.span
                    className="text-[#FFCC33] text-3xl lg:text-4xl xl:text-5xl"
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.28 } } }}
                  >
                    Born
                  </motion.span>
                  <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.42 } } }}>
                    {" "}in a Naval hospital.
                  </motion.span>
                </motion.span>

                <motion.span className="block mb-2" variants={sentenceVariant}>
                  <motion.span
                    className="text-[#FFCC33] text-3xl lg:text-4xl xl:text-5xl"
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.28 } } }}
                  >
                    Raised
                  </motion.span>
                  <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.42 } } }}>
                    {" "}on a farm.
                  </motion.span>
                </motion.span>

                <motion.span className="block mb-2" variants={sentenceVariant}>
                  <motion.span
                    className="text-[#FFCC33] text-3xl lg:text-4xl xl:text-5xl"
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.28 } } }}
                  >
                    Tested
                  </motion.span>
                  <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.42 } } }}>
                    {" "}around the world.
                  </motion.span>
                </motion.span>

                <motion.span className="block" variants={sentenceVariant}>
                  <motion.span
                    className="text-[#FFCC33] text-3xl lg:text-4xl xl:text-5xl"
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.28 } } }}
                  >
                    Rooted
                  </motion.span>
                  <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.42 } } }}>
                    {" "}in North Florida.
                  </motion.span>
                </motion.span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 3.6 }}
              >
                <a
                  href="#meet-troy"
                  className="inline-flex items-center gap-2 bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-bold text-lg px-6 py-3 rounded-lg shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0E3B67]"
                >
                  Meet Troy
                </a>
              </motion.div>

              <motion.p
                className="text-lg md:text-xl text-white leading-relaxed mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 3.8 }}
              >
                Troy Albers has spent his life serving something bigger than himself, first in uniform, then on the land, and now in the fight to restore honor and accountability to our government.
              </motion.p>
            </div>

            <div className="hidden lg:flex flex-shrink-0 max-h-full items-center justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.56, delay: 3.85 }}
              >
                <div className="relative inline-block max-w-md">
                  <div className="absolute inset-0 bg-[#FFCC33] rounded-lg blur-xl opacity-30"></div>
                  <img
                    src="/about1.jpg"
                    alt="Troy Albers - Veteran, Farmer, Candidate for Congress"
                    className="rounded-lg shadow-2xl w-full h-auto relative border-4 border-[#FFCC33] max-h-[500px] lg:max-h-[600px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.div
          id="meet-troy"
          className="bg-[#FFCC33] border-l-4 border-blue-900 p-6 rounded-lg shadow-lg mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <div className="text-blue-900">
            <p className="text-lg font-semibold mb-2">
              <strong>Running for:</strong> U.S. Congress, Florida's 3rd Congressional District
            </p>
            <p className="text-lg font-semibold mb-2">
              <strong>Party:</strong> Democrat
            </p>
            <p className="text-lg font-semibold mb-2">
              <strong>Democratic Primary:</strong> August 18, 2026
            </p>
            <p className="text-lg">
              <strong>Home:</strong> Columbia County, North Central Florida
            </p>
          </div>
        </motion.div>

        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 border-b-4 border-[#FFCC33] pb-3"
            variants={fadeInUp}
          >
            Roots
          </motion.h2>

          <motion.div className="space-y-4" variants={staggerContainer}>
            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              Troy Albers was born in a Naval hospital and raised on a farm in Elizabeth City, North Carolina. He grew up as a Navy kid in a family that understood duty, sacrifice, and service to country.
            </motion.p>

            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              Like many military families, they moved where the mission took them. Eventually, that road led to San Diego, where Troy graduated high school and made a decision that would shape the rest of his life: he joined the United States Navy.
            </motion.p>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 border-b-4 border-[#FFCC33] pb-3"
            variants={fadeInUp}
          >
            Service
          </motion.h2>

          <motion.div className="space-y-4" variants={staggerContainer}>
            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              Troy served around the world, including time in Iceland, the Mediterranean, and the Indian Ocean, and supported operations connected to the Black Hawk Down era. He later deployed to the Middle East, serving his country in dangerous and uncertain times.
            </motion.p>

            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              When his time in the Navy ended, Troy did not walk away from service. He became a Guardsman, then later went back in with the Army, continuing a life defined by commitment to something bigger than himself.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-white leading-relaxed font-semibold"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                className="text-[#FFCC33] italic"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}
              >
                Service
              </motion.span>
              <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
                {" "}was never a phase for Troy. It was a{" "}
              </motion.span>
              <motion.span
                className="text-[#FFCC33] italic"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}
              >
                calling
              </motion.span>
              <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
                .
              </motion.span>
            </motion.p>
          </motion.div>

          <ScrollWipeStory slides={serviceSlides} />
        </motion.section>

        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 border-b-4 border-[#FFCC33] pb-3"
            variants={fadeInUp}
          >
            A Turning Point
          </motion.h2>

          <motion.div className="space-y-4" variants={staggerContainer}>
            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              After years in uniform, Troy got out and enrolled at UCF as a pre-med student. He was considering a path into medicine and a very different future for himself and his family.
            </motion.p>

            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              Then came a moment that brought him back to his roots. In a genetics class, a professor posed a question about inheritance and asked how two brown quail could produce a white one. That class did not just teach Troy biology. It reminded him of something deeper: he came from people who worked the land, understood how life worked up close, and built their lives with their own hands.
            </motion.p>

            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              Staring down years of medical school and hundreds of thousands of dollars in student loans, Troy made the fiscally responsible choice he believed was right for him and his family.
            </motion.p>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 border-b-4 border-[#FFCC33] pb-3"
            variants={fadeInUp}
          >
            Family and North Florida
          </motion.h2>

          <motion.div className="space-y-4" variants={staggerContainer}>
            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              Troy moved to Columbia County, became a farmer, raised three kids, and fell in love with North Central Florida.
            </motion.p>

            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              Here, he built a life the way many people in this district have: through work, sacrifice, faith, family, and responsibility. He knows what it means to serve, but he also knows what it means to budget, to raise children, to work the land, and to worry about what kind of country and community we are handing to the next generation.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-blue-800 border-l-4 border-[#B2C9A3] p-4 rounded">
              <p className="text-white italic text-center">
                [Photo: Troy with his family or working the farm in Columbia County]
              </p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 border-b-4 border-[#FFCC33] pb-3"
            variants={fadeInUp}
          >
            Why He's Running
          </motion.h2>

          <motion.div className="space-y-4" variants={staggerContainer}>
            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              Troy has watched politics become toxic, performative, and two-faced. He has watched too many elected officials treat public office like a game, a stepping stone, or a brand opportunity instead of a duty. He has seen too little honor, too little accountability, and too much grandstanding while real people pay the price.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-white leading-relaxed font-semibold"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
                He is{" "}
              </motion.span>
              <motion.span
                className="text-[#FFCC33] italic"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}
              >
                disgusted
              </motion.span>
              <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
                {" "}by it.
              </motion.span>
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-[#FFCC33] leading-relaxed font-semibold italic"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
                You{" "}
              </motion.span>
              <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
                should{" "}
              </motion.span>
              <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
                be{" "}
              </motion.span>
              <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
                too.
              </motion.span>
            </motion.p>

            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              Troy is not running because politics looks fun. He is running because service did not stop when the uniform came off. He is running because the people of Florida's 3rd District deserve a representative who respects the office, tells the truth, and remembers who government is supposed to serve.
            </motion.p>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 border-b-4 border-[#FFCC33] pb-3"
            variants={fadeInUp}
          >
            What Troy Stands For
          </motion.h2>

          <motion.div className="space-y-4" variants={staggerContainer}>
            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              Troy wants to bring a different kind of leadership to Washington. Leadership rooted in duty, honor, work, and results.
            </motion.p>

            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              He wants to hold our government to a higher standard.
            </motion.p>

            <motion.div className="bg-blue-800 border-l-4 border-[#FFCC33] p-6 rounded-lg my-6" variants={fadeInUp}>
              <ul className="space-y-3 text-lg md:text-xl text-white">
                <li className="flex items-start">
                  <span className="text-[#FFCC33] font-bold mr-3">•</span>
                  <span>Not with slogans.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFCC33] font-bold mr-3">•</span>
                  <span>Not with fake outrage.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFCC33] font-bold mr-3">•</span>
                  <span>Not with political theater.</span>
                </li>
              </ul>
            </motion.div>

            <motion.p
              className="text-2xl text-white leading-relaxed font-bold text-center"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
                With{" "}
              </motion.span>
              <motion.span
                className="text-[#FFCC33] italic"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}
              >
                courage
              </motion.span>
              <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
                . With{" "}
              </motion.span>
              <motion.span
                className="text-[#FFCC33] italic"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}
              >
                backbone
              </motion.span>
              <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
                . With{" "}
              </motion.span>
              <motion.span
                className="text-[#FFCC33] italic"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}
              >
                service
              </motion.span>
              <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
                .
              </motion.span>
            </motion.p>
          </motion.div>

          <motion.div
            className="bg-[#B2C9A3] border-l-4 border-blue-900 p-6 rounded-lg shadow-lg mt-8"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Troy's Core Principles</h3>
            <div className="space-y-3 text-blue-900">
              <div className="flex items-start">
                <span className="text-2xl font-bold mr-3">1.</span>
                <div>
                  <p className="font-semibold text-lg">TBD Core Value 1</p>
                  <p className="text-sm italic">[Details to be added]</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl font-bold mr-3">2.</span>
                <div>
                  <p className="font-semibold text-lg">TBD Core Value 2</p>
                  <p className="text-sm italic">[Details to be added]</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl font-bold mr-3">3.</span>
                <div>
                  <p className="font-semibold text-lg">TBD Core Value 3</p>
                  <p className="text-sm italic">[Details to be added]</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6 border-b-4 border-[#FFCC33] pb-3"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
              Troy's{" "}
            </motion.span>
            <motion.span
              className="text-[#FFCC33] italic"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}
            >
              Mad
            </motion.span>
            <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
              .<br /> He's Turning That{" "}
            </motion.span>
            <motion.span
              className="text-[#FFCC33] italic"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}
            >
              Anger
            </motion.span>
            <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
              {" "}Into{" "}
            </motion.span>
            <motion.span
              className="text-[#FFCC33] italic"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}
            >
              Action
            </motion.span>
            <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }}>
              .
            </motion.span>
          </motion.h2>

          <motion.div className="space-y-4" variants={staggerContainer}>
            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              He is running for the people who are tired of being ignored. For the families doing everything right and still falling behind. For the rural communities that feel forgotten. For the voters who are sick of politicians who say one thing in public and another behind closed doors.
            </motion.p>

            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              Troy Albers has been a farm kid, a sailor, a soldier, a guardsman, a student, a farmer, a father, and a citizen.
            </motion.p>

            <motion.p className="text-lg md:text-xl text-white leading-relaxed font-semibold" variants={fadeInUp}>
              Now he is ready to serve Florida's 3rd District in a brand new way.
            </motion.p>
          </motion.div>
        </motion.section>

        <motion.section
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="bg-linear-to-r from-blue-800 to-blue-900 border-4 border-[#FFCC33] rounded-lg p-8 md:p-12 shadow-2xl">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Stand with Troy?
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-white mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Washington does not need another performer.<br />
              It needs someone with backbone.
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

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
                  }}
                  className="inline-flex items-center gap-2 bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-bold text-xl px-8 py-4 rounded-lg shadow-xl transition-all duration-200 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                >
                  Sign Troy's Petition
                  <FiPrinter className="w-5 h-5" aria-hidden="true" />
                </button>

                <Link
                  to="/issues"
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-bold text-xl px-8 py-4 rounded-lg shadow-xl transition-all duration-200 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-offset-2 focus:ring-offset-blue-900"
                >
                  View Troy's Issues
                </Link>
              </div>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-white/70 hover:text-white text-sm underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1"
              >
                Back to top
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}