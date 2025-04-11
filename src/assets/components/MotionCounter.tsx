import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";


const MotionCounter = ({ end = 0, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // yalnız bir dəfə işləsin
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, { duration });
      return controls.stop;
    }
  }, [isInView, end, duration]);

  return (
    <motion.span
      ref={ref}
      style={{ fontSize: "40px", color: "white", fontWeight: "600" }}
    >
      {rounded}
    </motion.span>
  );
};

export default MotionCounter;
