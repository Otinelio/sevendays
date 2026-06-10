import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { b as Route$3, C as CATEGORY_ORDER, c as allCats, a as CATEGORY_LABELS, d as defaultMenu } from "./_ssr/router-Dc421v5c.mjs";
import { M as MenuCard } from "./_ssr/MenuCard-M9gXloeK.mjs";
import { R as Reveal } from "./_ssr/Reveal-DmRDc-r9.mjs";
import "./_libs/sonner.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__zod-adapter.mjs";
import "./_libs/zod.mjs";
import "./_ssr/cartStore-WhyZEGLF.mjs";
import "./_libs/zustand.mjs";
import "./_libs/framer-motion.mjs";
import "./_libs/motion-dom.mjs";
import "./_libs/motion-utils.mjs";
import "./_libs/lucide-react.mjs";
function MenuPage() {
  const {
    cat
  } = Route$3.useSearch();
  const nav = Route$3.useNavigate();
  const visibleCategories = reactExports.useMemo(() => cat === "all" ? CATEGORY_ORDER : [cat], [cat]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[55vh] min-h-[360px] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=900&fit=crop", alt: "", className: "absolute inset-0 size-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black uppercase text-cream", style: {
          fontSize: "clamp(3rem, 10vw, 8rem)"
        }, children: "Our Menu" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/70 mt-2 text-lg", children: "Fresh · Bold · Generous" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-16 z-40 bg-charcoal/95 backdrop-blur border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 py-3 min-w-max", children: allCats.map((c) => {
      const active = cat === c;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => nav({
        search: {
          cat: c
        },
        replace: true
      }), className: `px-4 py-2 text-sm font-semibold uppercase tracking-wide whitespace-nowrap border-b-2 transition-colors ${active ? "text-paprika border-paprika" : "text-cream/60 border-transparent hover:text-cream"}`, children: c === "all" ? "All" : CATEGORY_LABELS[c] }, c);
    }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16", children: visibleCategories.map((catKey) => {
      const items = defaultMenu.filter((i) => i.category === catKey);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: catKey, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black uppercase text-3xl sm:text-4xl mb-6 border-l-4 border-paprika pl-4", children: CATEGORY_LABELS[catKey] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: items.map((i, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx * 0.03, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCard, { item: i }) }, i.id)) })
      ] }, catKey);
    }) })
  ] });
}
export {
  MenuPage as component
};
