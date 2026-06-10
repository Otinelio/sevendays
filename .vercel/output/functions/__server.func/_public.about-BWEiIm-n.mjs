import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { R as Reveal } from "./_ssr/Reveal-DmRDc-r9.mjs";
import { Z as Zap, H as Heart, d as Star } from "./_libs/lucide-react.mjs";
import "./_libs/framer-motion.mjs";
import "./_libs/motion-dom.mjs";
import "./_libs/motion-utils.mjs";
const values = [{
  icon: Zap,
  title: "Speed",
  body: "Ready in minutes, never rushed in quality."
}, {
  icon: Heart,
  title: "Generosity",
  body: "Big portions, honest prices. Always."
}, {
  icon: Star,
  title: "Consistency",
  body: "The same great taste, 7 days a week, every week."
}];
const timeline = [{
  year: "2018",
  text: "sevendays founded with 5 tables and a dream."
}, {
  year: "2019",
  text: "Introduced delivery service across Lomé."
}, {
  year: "2021",
  text: "Expanded menu to include pizzas and wraps."
}, {
  year: "2023",
  text: "Hit 5,000 happy customers milestone."
}, {
  year: "2024",
  text: "New location + online ordering launch."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=900&fit=crop", alt: "", className: "absolute inset-0 size-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-charcoal/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "relative font-display font-black uppercase text-cream", style: {
        fontSize: "clamp(3rem, 10vw, 7rem)"
      }, children: "Our Story" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=900&fit=crop", alt: "Kitchen", className: "rounded-lg w-full object-cover aspect-[4/5]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-4 border-paprika pl-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black uppercase text-4xl mb-4", children: "Born for the city." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/80 leading-relaxed", children: "sevendays was born from a simple belief — great food shouldn't make you wait or cost a fortune. Based in the heart of Lomé, we bring bold, generous flavors to every table, every day of the week. From our signature smash burgers to wood-fired pizzas and hand-rolled shawarma wraps, every item on our menu is made with real ingredients and real passion." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-lg p-8 h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "size-10 text-cheddar mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold uppercase text-2xl text-cream mb-2", children: v.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/70", children: v.body })
    ] }) }, v.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-4xl mx-auto px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black uppercase text-4xl text-center mb-12", children: "Our Journey" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-paprika/30 hidden sm:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col sm:flex-row gap-6 items-center ${i % 2 ? "sm:flex-row-reverse" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:w-1/2 sm:text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-card border border-white/10 rounded-lg p-5 ${i % 2 ? "sm:text-left" : ""}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-cheddar text-2xl", children: t.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/80 text-sm mt-1", children: t.text })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-4 rounded-full bg-paprika ring-4 ring-charcoal relative z-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:w-1/2" })
        ] }) }, t.year)) })
      ] })
    ] })
  ] });
}
export {
  AboutPage as component
};
