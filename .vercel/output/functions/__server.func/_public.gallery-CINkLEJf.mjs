import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { R as Reveal } from "./_ssr/Reveal-DmRDc-r9.mjs";
import { X, h as ChevronLeft, i as ChevronRight } from "./_libs/lucide-react.mjs";
import "./_libs/framer-motion.mjs";
import "./_libs/motion-dom.mjs";
import "./_libs/motion-utils.mjs";
const photos = [{
  url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=900&fit=crop",
  cat: "food",
  alt: "Burger close-up"
}, {
  url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop",
  cat: "food",
  alt: "Pizza"
}, {
  url: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=1100&fit=crop",
  cat: "food",
  alt: "Shawarma"
}, {
  url: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=700&fit=crop",
  cat: "food",
  alt: "Milkshake"
}, {
  url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=1000&fit=crop",
  cat: "interior",
  alt: "Interior"
}, {
  url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=800&fit=crop",
  cat: "interior",
  alt: "Counter"
}, {
  url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
  cat: "interior",
  alt: "Dining"
}, {
  url: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&h=900&fit=crop",
  cat: "packaging",
  alt: "Box"
}, {
  url: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&h=700&fit=crop",
  cat: "packaging",
  alt: "Bag"
}, {
  url: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=900&fit=crop",
  cat: "team",
  alt: "Chef"
}, {
  url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=800&fit=crop&crop=right",
  cat: "team",
  alt: "Team"
}, {
  url: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=1100&fit=crop",
  cat: "food",
  alt: "Loaded fries"
}];
const tabs = [{
  k: "all",
  l: "All"
}, {
  k: "food",
  l: "Food"
}, {
  k: "interior",
  l: "Interior"
}, {
  k: "packaging",
  l: "Packaging"
}, {
  k: "team",
  l: "Team"
}];
function GalleryPage() {
  const [cat, setCat] = reactExports.useState("all");
  const [open, setOpen] = reactExports.useState(null);
  const filtered = photos.filter((p) => cat === "all" || p.cat === cat);
  reactExports.useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      else if (e.key === "ArrowRight") setOpen((i) => i === null ? 0 : (i + 1) % filtered.length);
      else if (e.key === "ArrowLeft") setOpen((i) => i === null ? 0 : (i - 1 + filtered.length) % filtered.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered.length]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-28 pb-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black uppercase text-cream", style: {
      fontSize: "clamp(3rem, 9vw, 6rem)"
    }, children: "Gallery" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-16 z-40 bg-charcoal/95 backdrop-blur border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 flex gap-1 py-3 overflow-x-auto", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCat(t.k), className: `px-4 py-2 text-sm font-semibold uppercase whitespace-nowrap border-b-2 ${cat === t.k ? "text-paprika border-paprika" : "text-cream/60 border-transparent hover:text-cream"}`, children: t.l }, t.k)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: Math.min(i * 0.03, 0.3), children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(i), className: "block w-full break-inside-avoid", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.url, alt: p.alt, loading: "lazy", className: "w-full rounded-lg hover:opacity-80 transition-opacity" }) }) }, p.url)) }) }),
    open !== null && filtered[open] && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[200] bg-black/95 flex items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(null), className: "absolute top-5 right-5 text-cream/70 hover:text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen((open - 1 + filtered.length) % filtered.length), className: "absolute left-5 text-cream/70 hover:text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen((open + 1) % filtered.length), className: "absolute right-5 text-cream/70 hover:text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: filtered[open].url, alt: filtered[open].alt, className: "max-w-[92vw] max-h-[90vh] object-contain" })
    ] })
  ] });
}
export {
  GalleryPage as component
};
