import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { u as useSettings, w as whatsappUrl } from "./_ssr/settingsStore-CrqKPR1U.mjs";
import { b as composeContactMessage } from "./_ssr/whatsapp-BO3V9gRo.mjs";
import "./_libs/sonner.mjs";
import { c as MessageCircle, a as MapPin, P as Phone, b as Clock } from "./_libs/lucide-react.mjs";
import "./_libs/zustand.mjs";
import "./_ssr/router-Cl-UL5Ap.mjs";
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
function ContactPage() {
  const s = useSettings();
  const [name, setName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [err, setErr] = reactExports.useState("");
  const send = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErr("Name is required");
      return;
    }
    const msg = composeContactMessage(name, phone, message);
    window.open(whatsappUrl(msg), "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-24 pb-16 max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black uppercase text-5xl sm:text-6xl mb-2", children: "Get in touch" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/60 mb-10", children: "We're open every day. Drop by or message us." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: send, className: "md:col-span-3 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase text-cream/60 block mb-1", children: "Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => {
            setName(e.target.value);
            setErr("");
          }, className: `w-full bg-white/5 border rounded px-3 py-3 outline-none focus:border-paprika ${err ? "border-paprika" : "border-white/10"}` }),
          err && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-paprika text-xs mt-1", children: err })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase text-cream/60 block mb-1", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: phone, onChange: (e) => setPhone(e.target.value), className: "w-full bg-white/5 border border-white/10 rounded px-3 py-3 outline-none focus:border-paprika" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase text-cream/60 block mb-1", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: message, onChange: (e) => setMessage(e.target.value), rows: 5, className: "w-full bg-white/5 border border-white/10 rounded px-3 py-3 outline-none focus:border-paprika resize-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "bg-paprika hover:bg-tomato text-white px-6 py-3 rounded font-semibold uppercase tracking-wide inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
          " Send Message"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "md:col-span-2 bg-card border border-white/10 rounded-lg p-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold uppercase text-xl", children: "Visit us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-start gap-3 text-cream/80 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5 text-paprika mt-0.5 shrink-0" }),
          " ",
          s.address,
          " (near GTA / Service des Passeports)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-3 text-cream/80 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5 text-paprika shrink-0" }),
          " +228 93 12 12 13"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-3 text-cream/80 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-5 text-paprika shrink-0" }),
          " ",
          s.hours
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-3 text-cream/80 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-5 text-paprika shrink-0" }),
          " WhatsApp: +228 93 12 12 13"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video rounded overflow-hidden border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "map", src: "https://www.google.com/maps?q=Lome,Togo&output=embed", className: "size-full", loading: "lazy" }) })
      ] })
    ] })
  ] });
}
export {
  ContactPage as component
};
