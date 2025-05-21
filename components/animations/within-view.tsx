import { useRef } from "react";
import { useInView, motion } from "motion/react";

export default function WithInView({
  children,
  initial,
  transition,
  animate,
  className,
}: {
  children: React.ReactNode;
  initial?: any;
  transition?: any;
  animate: (isInView: boolean) => any;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate(isInView)}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}