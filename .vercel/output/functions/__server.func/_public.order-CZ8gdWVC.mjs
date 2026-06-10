import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { w as whatsappUrl } from "./_ssr/settingsStore-CrqKPR1U.mjs";
import { a as composeReservation } from "./_ssr/whatsapp-DNmAct0s.mjs";
import "./_libs/sonner.mjs";
import { m as motion, A as AnimatePresence } from "./_libs/framer-motion.mjs";
import { e as CircleCheckBig } from "./_libs/lucide-react.mjs";
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
import "./_libs/motion-dom.mjs";
import "./_libs/motion-utils.mjs";
function OrderPage() {
  const [mode, setMode] = reactExports.useState("Dine-in");
  const [sent, setSent] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({});
  const set = (k, v) => setForm((f) => ({
    ...f,
    [k]: v
  }));
  const submit = (e) => {
    e.preventDefault();
    const msg = composeReservation(mode, form);
    window.open(whatsappUrl(msg), "_blank");
    setSent(true);
  };
  if (sent) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-32 pb-20 max-w-xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        scale: 0.5,
        opacity: 0
      }, animate: {
        scale: 1,
        opacity: 1
      }, transition: {
        type: "spring"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "size-20 text-cheddar mx-auto" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black text-3xl mt-6 uppercase", children: "Sent!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/70 mt-2", children: "Your request has been sent. We will confirm via WhatsApp shortly." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/menu", className: "inline-block mt-6 text-paprika font-semibold uppercase tracking-wide", children: "← Back to Menu" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-24 pb-20 max-w-3xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black uppercase text-5xl sm:text-6xl mb-6", children: "Order & Reserve" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-8 p-1 bg-card border border-white/10 rounded-lg", children: ["Dine-in", "Takeaway", "Delivery"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
      setMode(m);
      setForm({});
    }, className: `py-3 text-sm font-semibold uppercase tracking-wide rounded transition ${mode === m ? "bg-paprika text-white" : "text-cream/70 hover:bg-white/5"}`, children: m }, m)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { onSubmit: submit, initial: {
      opacity: 0,
      y: 10
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -10
    }, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", k: "Name", set, value: form.Name || "", required: true }),
      mode !== "Dine-in" && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", k: "Phone", set, value: form.Phone || "", required: true }),
      mode === "Dine-in" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Guests", k: "Guests", type: "number", set, value: form.Guests || "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Date", k: "Date", type: "date", set, value: form.Date || "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Time", k: "Time", type: "time", set, value: form.Time || "" })
      ] }),
      mode === "Takeaway" && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Pickup Time", k: "Pickup", set, value: form.Pickup || "", placeholder: "ASAP / 30min / 1hr / time" }),
      mode === "Delivery" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Delivery Address", k: "Address", set, value: form.Address || "", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Distance", k: "Distance", set, value: form.Distance || "", placeholder: "within 2km / 2-5km / 5km+" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-cheddar", children: "Free delivery above 5,000 FCFA" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase text-cream/60 block mb-1", children: "Note (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.Note || "", onChange: (e) => set("Note", e.target.value), rows: 3, className: "w-full bg-white/5 border border-white/10 rounded px-3 py-2 focus:border-paprika outline-none resize-none" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-paprika hover:bg-tomato text-white px-6 py-3 rounded font-semibold uppercase tracking-wide", children: "Send Request" })
    ] }, mode) })
  ] });
}
function Field({
  label,
  k,
  set,
  value,
  type = "text",
  required,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs uppercase text-cream/60 block mb-1", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, required, placeholder, value, onChange: (e) => set(k, e.target.value), className: "w-full bg-white/5 border border-white/10 rounded px-3 py-3 outline-none focus:border-paprika" })
  ] });
}
export {
  OrderPage as component
};
