'use client'; // If using Next.js App Router

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WordScrollAnimation = () => {
  // The cycling words (will loop 3 times) + final word
  const cyclingWords = ['Husband', 'Father', 'Veteran', 'Floridian', 'Farmer', 'Fighter', 'Citizen'];
  const finalWord = 'Troy';

  // Start on the first cycling word
  const [thirdWord, setThirdWord] = useState(cyclingWords[0]);

  // Ref to manage the timeout chain (so we can clean up)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Animation variants for the cycling third line
  // Y-slide + fade gives a nice "rolling" slot-machine feel
  const wordVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  };

  // Fixed transition – short enough for the "quickly" phase but smooth
  const wordTransition = {
    duration: 0.18,
    ease: [0.4, 0, 0.2, 1], // nice snappy cubic-bezier
  };

  // Build the full sequence once (3 full cycles of the array + final word)
  const buildSequence = () => {
    const sequence: string[] = [];
    const numCycles = 3; // ← tweak this if you want more/less looping
    for (let i = 0; i < numCycles; i++) {
      sequence.push(...cyclingWords);
    }
    sequence.push(finalWord);
    return sequence;
  };

  // The core animation engine – variable speed (slow → fast)
  const startCycling = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const sequence = buildSequence();
    let index = 1; // we already show index 0 on mount, so start from the next word
    let delay = 850; // starting slow (ms the word stays visible)
    const minDelay = 65; // fastest "quickly" phase
    const decrement = (delay - minDelay) / (sequence.length - 2); // smooth ramp

    const animateNext = () => {
      if (index < sequence.length) {
        setThirdWord(sequence[index]);
        index++;

        // Only continue if we haven't reached the final word
        if (index < sequence.length) {
          delay = Math.max(minDelay, delay - decrement);
          timeoutRef.current = setTimeout(animateNext, delay);
        }
        // When we set "Troy", we simply stop – it stays forever
      }
    };

    // Give the first word a brief moment on screen before the cycling begins
    timeoutRef.current = setTimeout(animateNext, 650);
  };

  // Kick off the animation when the component mounts
  useEffect(() => {
    startCycling();

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-1 text-center font-black tracking-[-2px] leading-none pb-16">
      {/* Line 1 – static "Hell" */}
      <motion.div
        className="text-8xl md:text-9xl pb-8"
        style={{ color: '#c8102e' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Hell of a
      </motion.div>

      {/* Line 2 – static "of a"
      <motion.div
        className="text-8xl md:text-9xl"
        style={{ color: '#c8102e' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
      >
        of a
      </motion.div> */}

      {/* Line 3 – the cycling / final word */}
      <div className="relative min-h-[1.1em] flex items-center justify-center">
        <AnimatePresence mode="sync">
          <motion.div
            key={thirdWord}
            className="text-8xl md:text-9xl text-white absolute"
            // style={{ color: '#003087' }} // Navy / dark blue
            variants={wordVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={wordTransition}
          >
            {thirdWord}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WordScrollAnimation