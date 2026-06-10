import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useCart } from "./cartStore-WhyZEGLF.mjs";
import { f as formatFCFA } from "./router-Dc421v5c.mjs";
import { c as composeOrderMessage } from "./whatsapp-DNmAct0s.mjs";
import { w as whatsappUrl } from "./settingsStore-CrqKPR1U.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { X, f as Minus, g as Plus, T as Trash2, c as MessageCircle } from "../_libs/lucide-react.mjs";
function CartDrawer() {
  const { items, isOpen, close, setQty, remove, subtotal, clear } = useCart();
  const [checkout, setCheckout] = reactExports.useState(false);
  const [name, setName] = reactExports.useState("");
  const [orderType, setOrderType] = reactExports.useState("Dine-in");
  const [note, setNote] = reactExports.useState("");
  const total = subtotal();
  const deliveryFree = total >= 5e3;
  const handleSend = () => {
    if (!name.trim() || items.length === 0) return;
    const msg = composeOrderMessage(items, { name: name.trim(), orderType, note: note.trim() });
    window.open(whatsappUrl(msg), "_blank");
    clear();
    setCheckout(false);
    setName("");
    setNote("");
    close();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: close,
        className: "fixed inset-0 bg-black/70 z-[90]"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.aside,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { type: "tween", duration: 0.3 },
        className: "fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-charcoal border-l border-white/10 z-[95] flex flex-col",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex items-center justify-between border-b border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl uppercase text-cream", children: "Your Cart" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: close, className: "text-cream/60 hover:text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) })
          ] }),
          !checkout ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-5 space-y-3", children: [
              items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/50 text-center py-10", children: "Your cart is empty." }),
              items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-3 rounded-lg border border-white/10 bg-card/50", children: [
                i.image && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: i.image, alt: i.name, className: "size-16 object-cover rounded" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm text-cream truncate", children: i.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-cheddar font-bold", children: formatFCFA(i.price) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(i.id, i.qty - 1), className: "p-1 border border-white/20 rounded hover:bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "size-3" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium w-6 text-center", children: i.qty }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(i.id, i.qty + 1), className: "p-1 border border-white/20 rounded hover:bg-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-3" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(i.id), className: "ml-auto text-cream/40 hover:text-paprika", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4" }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-cream", children: formatFCFA(i.price * i.qty) })
              ] }, i.id))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 p-5 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm text-cream/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatFCFA(total) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-cream/50", children: deliveryFree ? "Free delivery applies." : "Delivery: Free above 5,000 FCFA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-lg font-bold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cream", children: "Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cheddar", children: formatFCFA(total) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  disabled: items.length === 0,
                  onClick: () => setCheckout(true),
                  className: "w-full inline-flex items-center justify-center gap-2 bg-paprika hover:bg-tomato disabled:bg-muted disabled:cursor-not-allowed text-white font-semibold py-3 rounded uppercase tracking-wide",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4" }),
                    " Send Order via WhatsApp"
                  ]
                }
              )
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase text-cream/60 mb-1 block", children: "Your Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  value: name,
                  onChange: (e) => setName(e.target.value),
                  className: "w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-cream focus:border-paprika outline-none",
                  placeholder: "Full name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase text-cream/60 mb-2 block", children: "Order Type" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ["Dine-in", "Takeaway", "Delivery"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setOrderType(t),
                  className: `py-2 text-sm font-semibold uppercase tracking-wide rounded border ${orderType === t ? "bg-paprika border-paprika text-white" : "border-white/10 text-cream/70 hover:border-white/30"}`,
                  children: t
                },
                t
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase text-cream/60 mb-1 block", children: "Note (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  value: note,
                  onChange: (e) => setNote(e.target.value),
                  rows: 3,
                  className: "w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-cream focus:border-paprika outline-none resize-none",
                  placeholder: "Allergies, special requests..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setCheckout(false),
                  className: "flex-1 py-3 border border-white/20 text-cream rounded font-semibold uppercase tracking-wide hover:bg-white/5",
                  children: "Back"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleSend,
                  disabled: !name.trim(),
                  className: "flex-1 py-3 bg-paprika hover:bg-tomato disabled:opacity-50 text-white rounded font-semibold uppercase tracking-wide",
                  children: "Send"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] }) });
}
export {
  CartDrawer as C
};
