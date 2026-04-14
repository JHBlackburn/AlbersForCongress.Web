"use client";

import type { Route } from "./+types/about";
import { motion } from "framer-motion";
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

// Animation variants for sections
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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};

// Animation for heading - sentences appear one by one
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

// Each sentence: first word appears, then rest fades in
const sentenceVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.28
    }
  }
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Hero Section */}
        <motion.section
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight text-left"
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
              <motion.span
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.42 } } }}
              >
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
              <motion.span
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.42 } } }}
              >
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
              <motion.span
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.42 } } }}
              >
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
              <motion.span
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.42 } } }}
              >
                {" "}in North Florida.
              </motion.span>
            </motion.span>
          </motion.h1>

          <motion.div
            className="my-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.56, delay: 3.85 }}
          >
            <div className="relative inline-block max-w-2xl mx-auto">
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
            variants={fadeInUp}
          >
            Troy Albers has spent his life serving something bigger than himself, first in uniform, then on the land, and now in the fight to restore honor and accountability to our government.
          </motion.p>
        </motion.section>

        {/* Campaign Info Callout */}
        <motion.div
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

        {/* Roots Section */}
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
              Troy Albers was born in a Naval hospital and raised on a farm in Elizabethtown, North Carolina. He grew up as a Navy kid in a family that understood duty, sacrifice, and service to country.
            </motion.p>

            <motion.p className="text-lg md:text-xl text-white leading-relaxed" variants={fadeInUp}>
              Like many military families, they moved where the mission took them. Eventually, that road led to San Diego, where Troy graduated high school and made a decision that would shape the rest of his life: he joined the United States Navy.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Service Section */}
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

          {/* Placeholder for service photo */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* TODO: Replace with actual military service photo */}
            <div className="bg-blue-800 border-l-4 border-[#B2C9A3] p-4 rounded">
              <p className="text-white italic text-center">
                [Photo: Troy in uniform during his military service]
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* A Turning Point Section */}
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

        {/* Family and North Florida Section */}
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

          {/* Placeholder for family/farm photo */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* TODO: Replace with actual family or farm photo */}
            <div className="bg-blue-800 border-l-4 border-[#B2C9A3] p-4 rounded">
              <p className="text-white italic text-center">
                [Photo: Troy with his family or working the farm in Columbia County]
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Why He's Running Section */}
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

        {/* What Troy Stands For Section */}
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

          {/* Core Values Placeholder */}
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

        {/* Troy's Mad Section */}
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
              .<br/> He's Turning That{" "}
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

        {/* Final CTA Section */}
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
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={() => {
                  // Check if mobile device
                  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

                  if (isMobile) {
                    // On mobile, open PDF directly in new tab
                    window.open('/dsde104.pdf', '_blank');
                  } else {
                    // On desktop, use iframe print method
                    const iframe = document.createElement('iframe');
                    iframe.style.display = 'none';
                    iframe.src = '/dsde104.pdf';
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
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
