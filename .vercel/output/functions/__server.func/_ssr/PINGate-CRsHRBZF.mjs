import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { D as Delete, C as Check } from "../_libs/lucide-react.mjs";
function PINGate({
  correctPin,
  label,
  onUnlock
}) {
  const [pin, setPin] = reactExports.useState("");
  const [shake, setShake] = reactExports.useState(0);
  const [error, setError] = reactExports.useState("");
  const press = (d) => {
    if (pin.length >= 4) return;
    setError("");
    setPin(pin + d);
  };
  const back = () => setPin(pin.slice(0, -1));
  const confirm = () => {
    if (pin === correctPin) {
      onUnlock();
    } else {
      setError("Invalid PIN");
      setShake((n) => n + 1);
      setPin("");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-charcoal flex items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black lowercase text-4xl text-cream mb-2", children: "sevendays" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display uppercase text-cream/70 tracking-wider mb-8", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: shake ? { x: [-8, 8, -6, 6, 0] } : {},
        transition: { duration: 0.35 },
        className: "flex justify-center gap-3 mb-2",
        children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `size-4 rounded-full border-2 ${pin.length > i ? "bg-paprika border-paprika" : "border-white/30"}`
          },
          i
        ))
      },
      shake
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 text-xs text-paprika", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 mt-6", children: [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => press(d),
          className: "aspect-square text-2xl font-display font-bold text-cream bg-white/5 hover:bg-white/10 rounded-lg border border-white/10",
          children: d
        },
        d
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: back, className: "aspect-square flex items-center justify-center text-cream/70 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Delete, { className: "size-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => press("0"), className: "aspect-square text-2xl font-display font-bold text-cream bg-white/5 hover:bg-white/10 rounded-lg border border-white/10", children: "0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: confirm,
          disabled: pin.length !== 4,
          className: "aspect-square flex items-center justify-center bg-paprika hover:bg-tomato disabled:bg-paprika/30 rounded-lg text-white",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-5" })
        }
      )
    ] })
  ] }) });
}
export {
  PINGate as P
};
