import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as MenuCard } from "./MenuCard-M9gXloeK.mjs";
import { C as CartDrawer } from "./CartDrawer-C9wwxaEU.mjs";
import { u as useCart } from "./cartStore-WhyZEGLF.mjs";
import { s as supabase } from "./client-CjgIe9uj.mjs";
import { R as Route$5, C as CATEGORY_ORDER, a as CATEGORY_LABELS, d as defaultMenu, f as formatFCFA } from "./router-Dc421v5c.mjs";
import "../_libs/sonner.mjs";
import { S as ShoppingCart, e as CircleCheckBig } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "./whatsapp-DNmAct0s.mjs";
import "./settingsStore-CrqKPR1U.mjs";
import "../_libs/zustand.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
function TablePage() {
  const {
    tableNumber
  } = Route$5.useParams();
  const {
    items,
    subtotal,
    clear,
    open
  } = useCart();
  const [sent, setSent] = reactExports.useState(null);
  const [status, setStatus] = reactExports.useState("pending");
  reactExports.useEffect(() => {
    if (!sent) return;
    const channel = supabase.channel(`order-${sent.id}`).on("postgres_changes", {
      event: "UPDATE",
      schema: "public",
      table: "orders",
      filter: `id=eq.${sent.id}`
    }, (payload) => {
      const s = payload.new.status;
      setStatus(s);
    }).subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [sent]);
  const sendToKitchen = async () => {
    if (items.length === 0) return;
    const total = subtotal();
    const {
      data,
      error
    } = await supabase.from("orders").insert({
      table_number: Number(tableNumber) || 0,
      items: items.map((i) => ({
        id: i.id,
        name: i.name,
        qty: i.qty,
        price: i.price
      })),
      total_fcfa: total,
      status: "pending"
    }).select("id").single();
    if (error || !data) {
      alert("Failed to send order");
      return;
    }
    setSent({
      id: data.id
    });
    clear();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-charcoal pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "border-b border-white/10 px-4 py-4 flex items-center justify-between sticky top-0 bg-charcoal/95 backdrop-blur z-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black lowercase text-2xl text-cream", children: "sevendays" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: open, className: "relative p-2 text-cream", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "size-5" }),
          items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 bg-cheddar text-charcoal text-[10px] font-bold rounded-full size-5 flex items-center justify-center", children: items.reduce((n, i) => n + i.qty, 0) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-cheddar text-charcoal font-bold uppercase px-3 py-1 rounded text-sm", children: [
          "Table ",
          tableNumber
        ] })
      ] })
    ] }),
    sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md mx-auto px-6 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "size-16 text-cheddar mx-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black uppercase text-3xl mt-4", children: "Order sent to kitchen!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-cream/70 mt-2", children: [
        "Table ",
        tableNumber,
        " — We'll bring it to you shortly."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSent(null), className: "mt-6 text-paprika font-semibold uppercase", children: "Add more items" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 py-8 space-y-12", children: CATEGORY_ORDER.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-black uppercase text-2xl mb-4 border-l-4 border-paprika pl-3", children: CATEGORY_LABELS[c] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: defaultMenu.filter((i) => i.category === c).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuCard, { item: i }, i.id)) })
    ] }, c)) }),
    !sent && items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-0 inset-x-0 bg-charcoal border-t border-white/10 p-4 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-cream/60 uppercase", children: [
          items.reduce((n, i) => n + i.qty, 0),
          " items"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-cheddar text-xl", children: formatFCFA(subtotal()) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: sendToKitchen, className: "bg-paprika hover:bg-tomato text-white px-6 py-3 rounded font-semibold uppercase tracking-wide", children: "Send to Kitchen" })
    ] }) }),
    sent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-0 inset-x-0 bg-charcoal border-t border-white/10 p-4 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto flex items-center justify-center gap-3 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `size-3 rounded-full ${status === "pending" ? "bg-amber-400" : status === "confirmed" ? "bg-blue-400" : "bg-green-400"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-cream", children: [
        status === "pending" && "Order received — Kitchen is preparing",
        status === "confirmed" && "Confirmed — On its way to your table",
        status === "delivered" && "Delivered — Enjoy your meal!"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {})
  ] });
}
export {
  TablePage as component
};
