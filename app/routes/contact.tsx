"use client";

import type { Route } from "./+types/contact";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Contact Troy Albers for Congress",
    },
    {
      name: "description",
      content:
        "Reach out today to volunteer, learn more, or get involved with Troy Albers for Congress in Florida's 3rd Congressional District.",
    },
  ];
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// District data
const districtData = [
  {
    county: "Alachua County",
    cities: [
      "Gainesville",
      "High Springs",
      "Newberry",
      "Alachua",
      "Archer",
      "Hawthorne",
      "Micanopy",
      "Waldo",
    ],
  },
  {
    county: "Baker County",
    cities: ["Macclenny", "Glen St. Mary"],
  },
  {
    county: "Bradford County",
    cities: ["Starke", "Lawtey", "Brooker", "Hampton"],
  },
  {
    county: "Columbia County",
    cities: ["Lake City", "Fort White"],
  },
  {
    county: "Dixie County",
    cities: ["Cross City", "Horseshoe Beach"],
  },
  {
    county: "Gilchrist County",
    cities: ["Trenton", "Bell", "Fanning Springs"],
  },
  {
    county: "Hamilton County",
    cities: ["Jasper", "Jennings", "White Springs"],
  },
  {
    county: "Lafayette County",
    cities: ["Mayo"],
  },
  {
    county: "Levy County",
    cities: [
      "Bronson",
      "Cedar Key",
      "Chiefland",
      "Williston",
      "Yankeetown",
      "Inglis",
    ],
  },
  {
    county: "Marion County (partial)",
    cities: ["Ocala (northern parts)"],
  },
  {
    county: "Suwannee County",
    cities: ["Live Oak", "Branford"],
  },
  {
    county: "Union County",
    cities: ["Lake Butler", "Raiford", "Worthington Springs"],
  },
];

export default function Contact() {
  const [expandedCounties, setExpandedCounties] = useState<Set<number>>(
    new Set(),
  );
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleCounty = (index: number) => {
    const newExpanded = new Set(expandedCounties);

    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }

    setExpandedCounties(newExpanded);
    setAllExpanded(newExpanded.size === districtData.length);
  };

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedCounties(new Set());
      setAllExpanded(false);
    } else {
      setExpandedCounties(new Set(districtData.map((_, i) => i)));
      setAllExpanded(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.section
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch with Troy Albers for Congress
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Reach out today to volunteer, learn more, or get involved.
          </p>
        </motion.section>

        {/* Contact Information Section */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Phone */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm border-l-4 border-[#FFCC33] p-6 rounded-lg"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-4">
                <FiPhone
                  className="w-8 h-8 text-[#FFCC33] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-white/90 text-lg">
                    <a
                      href="tel:3527567882"
                      className="hover:text-[#FFCC33] transition-colors"
                    >
                      352 756 7882
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm border-l-4 border-[#FFCC33] p-6 rounded-lg"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-4">
                <FiMail
                  className="w-8 h-8 text-[#FFCC33] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-white/90 text-base sm:text-lg">
                    <a
                      href="mailto:GetInvolved@AlbersForCongress.com"
                      className="hover:text-[#FFCC33] transition-colors inline-block"
                      style={{
                        wordBreak: "break-word",
                        overflowWrap: "anywhere",
                      }}
                    >
                      <span className="inline">GetInvolved</span>
                      <wbr />
                      <span className="inline">@AlbersForCongress.com</span>
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* District Coverage Section */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              <span className="block md:inline">Showing Up </span>
              <span className="block md:inline text-[#FFCC33] italic">
                Every Day
              </span>

              <span className="block">
                <span className="block md:inline">For </span>
                <span className="block md:inline text-[#FFCC33] italic">
                  Florida's 3rd District
                </span>
              </span>
            </h2>

            <div className="h-1 w-full bg-[#FFCC33] mb-4" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <p className="max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed">
                Troy Albers is proudly seeking to serve the communities of North
                Central Florida, including the following counties and cities.
              </p>

              {/* Expand/Collapse All Button */}
              <button
                onClick={toggleAll}
                className="inline-flex w-fit self-end sm:self-auto shrink-0 items-center gap-2 bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                aria-label={
                  allExpanded
                    ? "Collapse all district counties"
                    : "Expand all district counties"
                }
              >
                {allExpanded ? (
                  <>
                    <FiChevronUp className="w-5 h-5" aria-hidden="true" />
                    <span className="hidden sm:inline">Collapse All</span>
                    <span className="sm:hidden">Collapse</span>
                  </>
                ) : (
                  <>
                    <FiChevronDown className="w-5 h-5" aria-hidden="true" />
                    <span className="hidden sm:inline">Expand All</span>
                    <span className="sm:hidden">Expand</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {districtData.map((district, index) => {
              const isExpanded = expandedCounties.has(index);

              return (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20"
                  variants={fadeInUp}
                >
                  <button
                    onClick={() => toggleCounty(index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFCC33] focus:ring-inset"
                    aria-expanded={isExpanded}
                  >
                    <h3 className="text-xl font-bold text-white">
                      {district.county}
                    </h3>
                    <div className="shrink-0 ml-4">
                      {isExpanded ? (
                        <FiChevronUp
                          className="w-6 h-6 text-[#FFCC33]"
                          aria-hidden="true"
                        />
                      ) : (
                        <FiChevronDown
                          className="w-6 h-6 text-[#FFCC33]"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 pt-2 border-t border-white/10">
                      <p className="text-white/90 text-lg">
                        <strong className="text-[#FFCC33]">
                          Cities & Towns:
                        </strong>{" "}
                        {district.cities.join(", ")}
                      </p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Call-to-Action Section */}
        <motion.section
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="bg-linear-to-r from-blue-800 to-blue-900 border-4 border-[#FFCC33] rounded-lg p-8 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Involved?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Join us in our mission to bring honor and accountability back to
              Washington.
            </p>

            {/* Desktop CTA */}
            <div className="hidden md:flex justify-center gap-4">
              <a
                href="mailto:GetInvolved@AlbersForCongress.com?subject=Interested%20in%20Volunteering"
                className="inline-flex items-center gap-2 bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-bold text-xl px-8 py-4 rounded-lg shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
              >
                <FiMail className="w-5 h-5" aria-hidden="true" />
                Send Us An Email
              </a>
            </div>

            {/* Mobile CTA */}
            <div className="flex md:hidden flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:3527567882"
                className="inline-flex items-center justify-center gap-2 bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 font-bold text-lg px-6 py-3 rounded-lg shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
              >
                <FiPhone className="w-5 h-5" aria-hidden="true" />
                Call Now
              </a>
              <a
                href="mailto:GetInvolved@AlbersForCongress.com?subject=Interested%20in%20Volunteering"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
              >
                <FiMail className="w-5 h-5" aria-hidden="true" />
                Email Us
              </a>
            </div>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-white/70 hover:text-white text-sm underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-2 py-1 mt-6 inline-block"
            >
              Back to top
            </a>
          </div>
        </motion.section>

        {/* Floating Mobile CTA (Sticky) */}
        <div className="md:hidden fixed bottom-6 right-6 z-50">
          <a
            href="tel:3527567882"
            className="flex items-center justify-center w-16 h-16 bg-[#FFCC33] hover:bg-[#E8B923] text-blue-900 rounded-full shadow-2xl transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
            aria-label="Call Troy Albers for Congress"
          >
            <FiPhone className="w-7 h-7" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
