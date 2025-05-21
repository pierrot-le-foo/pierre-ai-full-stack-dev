import { AnimatePresence, motion } from "motion/react";

export default function CycleText({ index }: { index: number }) {
  const words = ["", "GitHub", "LinkedIn", "Resume"];

  // const total = words.length;
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((current) => (current + 1) % total);
  //   }, 1300);
  //   return () => clearInterval(interval);
  // }, [total]);

  return (
    <div>
      <span className="font-mono text-6xl text-gray-100">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`words_${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.08 }}
            className="inline-block font-mono text-6xl xs:text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl text-gray-100"
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
      </span>
    </div>
  );
}
