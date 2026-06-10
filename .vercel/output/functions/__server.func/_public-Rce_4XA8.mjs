import { j as jsxRuntimeExports, r as reactExports } from "./_libs/react.mjs";
import { O as Outlet, d as useLocation, L as Link } from "./_libs/tanstack__react-router.mjs";
import { u as useCart } from "./_ssr/cartStore-WhyZEGLF.mjs";
import { u as useSettings, w as whatsappUrl } from "./_ssr/settingsStore-CrqKPR1U.mjs";
import { C as CartDrawer } from "./_ssr/CartDrawer-C9wwxaEU.mjs";
import "./_libs/sonner.mjs";
import { S as ShoppingCart, X, M as Menu, a as MapPin, P as Phone, b as Clock, I as Instagram, F as Facebook, c as MessageCircle } from "./_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "./_libs/framer-motion.mjs";
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
import "./_libs/zustand.mjs";
import "./_ssr/router-Dc421v5c.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/tanstack__zod-adapter.mjs";
import "./_libs/zod.mjs";
import "./_ssr/whatsapp-DNmAct0s.mjs";
import "./_libs/motion-dom.mjs";
import "./_libs/motion-utils.mjs";
const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const { pathname } = useLocation();
  const cartCount = useCart((s) => s.items.reduce((n, i) => n + i.qty, 0));
  const openCart = useCart((s) => s.open);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => setOpen(false), [pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-charcoal/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "font-display font-black text-2xl text-cream tracking-tight lowercase", children: "sevendays" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8", children: links.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: l.to,
                className: `text-sm font-medium uppercase tracking-wide transition-colors relative pb-1 ${active ? "text-paprika" : "text-cream/80 hover:text-cream"}`,
                children: [
                  l.label,
                  active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 right-0 -bottom-0.5 h-0.5 bg-paprika" })
                ]
              },
              l.to
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: openCart,
                "aria-label": "Open cart",
                className: "relative p-2 text-cream hover:text-paprika transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "size-5" }),
                  cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-0.5 -right-0.5 bg-cheddar text-charcoal text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1", children: cartCount })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/order",
                className: "hidden sm:inline-flex items-center px-4 py-2 bg-paprika hover:bg-tomato transition-colors text-white text-sm font-semibold rounded uppercase tracking-wide",
                children: "Order Now"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "md:hidden p-2 text-cream",
                onClick: () => setOpen((v) => !v),
                "aria-label": "Toggle menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-6" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.25 },
            className: "md:hidden overflow-hidden bg-charcoal border-t border-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col px-6 py-4 gap-3", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  className: "text-cream font-medium uppercase text-sm py-2",
                  children: l.label
                },
                l.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/order",
                  className: "mt-2 inline-flex justify-center px-4 py-3 bg-paprika text-white font-semibold uppercase tracking-wide rounded",
                  children: "Order Now"
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
function Footer() {
  const s = useSettings();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-[var(--color-footer)] border-t border-white/5 mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-3xl lowercase text-cream", children: "sevendays" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-cream/60 text-sm max-w-xs", children: "Open 7 days. Generous every time." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold uppercase text-cream mb-4 tracking-wide", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: [
          { to: "/", label: "Home" },
          { to: "/menu", label: "Menu" },
          { to: "/about", label: "About" },
          { to: "/gallery", label: "Gallery" },
          { to: "/contact", label: "Contact" },
          { to: "/order", label: "Order Now" }
        ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "text-cream/70 hover:text-paprika transition-colors", children: l.label }) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold uppercase text-cream mb-4 tracking-wide", children: "Visit Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-cream/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 mt-0.5 text-paprika shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 mt-0.5 text-paprika shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "+",
              s.whatsapp.slice(0, 3),
              " ",
              s.whatsapp.slice(3, 5),
              " ",
              s.whatsapp.slice(5, 7),
              " ",
              s.whatsapp.slice(7, 9),
              " ",
              s.whatsapp.slice(9)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4 mt-0.5 text-paprika shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.hours })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: s.instagram, target: "_blank", rel: "noreferrer", className: "p-2 border border-white/10 hover:border-paprika hover:text-paprika text-cream/70 rounded-full transition-colors", "aria-label": "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: s.facebook, target: "_blank", rel: "noreferrer", className: "p-2 border border-white/10 hover:border-paprika hover:text-paprika text-cream/70 rounded-full transition-colors", "aria-label": "Facebook", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "size-4" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/5 py-5 text-center text-xs text-cream/40", children: "© 2025 sevendays. All rights reserved." })
  ] });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: whatsappUrl(),
      target: "_blank",
      rel: "noreferrer",
      "aria-label": "Order via WhatsApp",
      title: "Order via WhatsApp",
      className: "fixed bottom-5 right-5 z-[100]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.span,
          {
            className: "absolute inset-0 rounded-full bg-paprika/60",
            animate: { scale: [1, 1.6, 1], opacity: [0.7, 0, 0.7] },
            transition: { duration: 2, repeat: Infinity }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative bg-paprika hover:bg-tomato transition-colors p-4 rounded-full shadow-xl shadow-paprika/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-6 text-white" }) })
      ] })
    }
  );
}
function PageTransition({ children }) {
  const location = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -10 },
      transition: { duration: 0.4, ease: "easeOut" },
      children
    },
    location.pathname
  ) });
}
function PublicLayout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-charcoal flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {})
  ] });
}
export {
  PublicLayout as component
};
