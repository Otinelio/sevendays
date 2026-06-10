import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { R as Reveal } from "./_ssr/Reveal-DmRDc-r9.mjs";
import { M as MenuCard } from "./_ssr/MenuCard-CM-OIi9M.mjs";
import { d as defaultMenu } from "./_ssr/router-Cl-UL5Ap.mjs";
import "./_libs/sonner.mjs";
import { m as motion, u as useInView, a as useMotionValue, b as useTransform, c as animate } from "./_libs/framer-motion.mjs";
import { A as ArrowRight, b as Clock, d as Star } from "./_libs/lucide-react.mjs";
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
import "./_ssr/cartStore-WhyZEGLF.mjs";
import "./_libs/zustand.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/tanstack__zod-adapter.mjs";
import "./_libs/zod.mjs";
import "./_libs/motion-dom.mjs";
import "./_libs/motion-utils.mjs";
function Counter({ to, suffix = "" }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString("en-US"));
  reactExports.useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className: "tabular-nums", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { children: rounded }),
    suffix
  ] });
}
const categories = [{
  key: "burgers",
  label: "BURGERS",
  img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=800&fit=crop"
}, {
  key: "pizzas",
  label: "PIZZAS",
  img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=800&fit=crop"
}, {
  key: "snacks",
  label: "SNACKS",
  img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=800&fit=crop"
}, {
  key: "combos",
  label: "COMBOS",
  img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=800&fit=crop"
}];
const reviews = [{
  name: "Amina K.",
  text: "The BBQ Smash Burger is insane. Worth every franc."
}, {
  name: "Jean-Paul M.",
  text: "Best pizza in Lomé, no contest. Fast delivery too."
}, {
  name: "Fatou D.",
  text: "Great food, great price. We come every week."
}, {
  name: "Marcus T.",
  text: "Finally a place that does burgers RIGHT in Togo."
}];
function HomePage() {
  const topPicks = defaultMenu.filter((i) => ["b1", "b2", "p1", "p2", "w1", "s1"].includes(i.id));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen min-h-[640px] w-full overflow-hidden flex items-center justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        scale: 1.1
      }, animate: {
        scale: 1
      }, transition: {
        duration: 1.4,
        ease: "easeOut"
      }, className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=1080&fit=crop", alt: "Gourmet burger", className: "size-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/90" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6 max-w-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7
        }, className: "font-display font-black uppercase text-cream leading-[0.85] text-balance", style: {
          fontSize: "clamp(3.5rem, 12vw, 9rem)"
        }, children: [
          "EVERY. DAY.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "DELICIOUS."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          delay: 0.4,
          duration: 0.6
        }, className: "mt-6 text-lg sm:text-xl text-cream/80", children: "Burgers · Pizzas · Snacks · Fast & Generous" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.6
        }, className: "mt-8 flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/menu", className: "bg-paprika hover:bg-tomato text-white px-7 py-3 rounded font-semibold uppercase tracking-wide inline-flex items-center gap-2", children: [
            "View Menu ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/22893121213", target: "_blank", rel: "noreferrer", className: "border border-cream/40 hover:bg-cream hover:text-charcoal text-cream px-7 py-3 rounded font-semibold uppercase tracking-wide", children: "Order via WhatsApp" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { animate: {
        y: [0, -8, 0]
      }, transition: {
        duration: 3,
        repeat: Infinity
      }, className: "absolute bottom-8 left-6 sm:left-10 z-10 bg-charcoal/80 border border-white/15 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 text-xs sm:text-sm text-cream", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex size-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-green-400 animate-ping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative rounded-full size-2 bg-green-500" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4" }),
        "Open today · 10:00 – 00:00"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 px-4 sm:px-6 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black uppercase text-4xl sm:text-5xl text-center mb-10", children: "Pick Your Craving" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: categories.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/menu", search: {
        cat: c.key
      }, className: "group relative aspect-[3/4] overflow-hidden rounded-lg block border-b-4 border-transparent hover:border-paprika transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: c.label, loading: "lazy", className: "size-full object-cover transition-transform duration-500 group-hover:scale-110" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold uppercase text-2xl text-cream", children: c.label }) })
      ] }) }, c.key)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-paprika py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white", children: [{
      n: 7,
      l: "Days open per week"
    }, {
      n: 30,
      l: "Menu items",
      suf: "+"
    }, {
      n: 5e3,
      l: "Happy clients",
      suf: "+"
    }, {
      n: 30,
      l: "Min avg delivery"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-5xl sm:text-6xl leading-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.n, suffix: s.suf || "" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm uppercase tracking-wide text-white/80", children: s.l })
    ] }, s.l)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 px-4 sm:px-6 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black uppercase text-4xl sm:text-5xl text-center mb-2", children: "Top Picks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-cream/60 mb-12", children: "The crowd favorites — every single day." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: topPicks.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCard, { item }) }, item.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 px-4 sm:px-6 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black uppercase text-3xl sm:text-4xl text-center mb-12", children: "What Our Clients Say" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: reviews.slice(0, 3).map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-white/10 rounded-lg p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-3", children: Array.from({
          length: 5
        }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-cheddar text-cheddar" }, j)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-cream/80 italic", children: [
          '"',
          r.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 font-semibold text-cream", children: r.name })
      ] }) }, r.name)) })
    ] })
  ] });
}
export {
  HomePage as component
};
