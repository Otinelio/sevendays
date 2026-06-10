import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useCart } from "./cartStore-WhyZEGLF.mjs";
import { f as formatFCFA } from "./router-Dc421v5c.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { g as Plus } from "../_libs/lucide-react.mjs";
function MenuCard({ item }) {
  const add = useCart((s) => s.add);
  const soldOut = !!item.sold_out;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      whileHover: { scale: soldOut ? 1 : 1.03, y: soldOut ? 0 : -4 },
      transition: { duration: 0.25 },
      className: "group relative overflow-hidden rounded-lg bg-card border border-white/10 hover:shadow-2xl hover:shadow-paprika/20",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] overflow-hidden bg-black", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: item.image_url,
              alt: item.name,
              loading: "lazy",
              className: `size-full object-cover transition-transform duration-500 group-hover:scale-110 ${soldOut ? "grayscale opacity-50" : ""}`
            }
          ),
          soldOut && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 bg-charcoal/90 text-cream text-xs font-bold uppercase tracking-wider px-2 py-1 rounded border border-paprika", children: "Sold Out" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-cream uppercase tracking-tight leading-tight", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-cheddar shrink-0", children: formatFCFA(item.price_fcfa) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-cream/60 line-clamp-2", children: item.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              disabled: soldOut,
              onClick: () => {
                add({ id: item.id, name: item.name, price: item.price_fcfa, image: item.image_url });
                toast.success(`${item.name} added`);
              },
              className: "w-full mt-2 inline-flex items-center justify-center gap-1 bg-paprika hover:bg-tomato disabled:bg-muted disabled:text-cream/40 disabled:cursor-not-allowed text-white text-sm font-semibold py-2 rounded uppercase tracking-wide transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4" }),
                "Add to Cart"
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  MenuCard as M
};
