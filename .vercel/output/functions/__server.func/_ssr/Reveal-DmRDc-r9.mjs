import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function Reveal({
  children,
  delay = 0,
  className,
  y = 40
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6, delay, ease: "easeOut" },
      className,
      children
    }
  );
}
export {
  Reveal as R
};
