import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PINGate } from "./PINGate-CRsHRBZF.mjs";
import { f as formatFCFA } from "./router-Cl-UL5Ap.mjs";
import "../_libs/sonner.mjs";
import { L as LogOut } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
function ReceptionPage() {
  const [unlocked, setUnlocked] = reactExports.useState(false);
  if (!unlocked) return /* @__PURE__ */ jsxRuntimeExports.jsx(PINGate, { correctPin: "9999", label: "Reception Access", onUnlock: () => setUnlocked(true) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dashboard, { onLogout: () => setUnlocked(false) });
}
function Dashboard({
  onLogout
}) {
  const [orders, setOrders] = reactExports.useState([]);
  const [flash, setFlash] = reactExports.useState(false);
  const setStatus = (id, status) => {
    setOrders(orders.map((o) => o.id === id ? {
      ...o,
      status
    } : o));
  };
  const today = orders;
  const stats = {
    total: today.length,
    pending: today.filter((o) => o.status === "pending").length,
    confirmed: today.filter((o) => o.status === "confirmed").length,
    delivered: today.filter((o) => o.status === "delivered").length,
    revenue: today.reduce((s, o) => s + o.total_fcfa, 0)
  };
  const itemCounts = {};
  today.forEach((o) => o.items.forEach((it) => {
    itemCounts[it.name] = (itemCounts[it.name] || 0) + it.qty;
  }));
  const mostOrdered = Object.entries(itemCounts).sort(([, a], [, b]) => b - a)[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-charcoal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "border-b border-white/10 px-6 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black lowercase text-2xl", children: "sevendays" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cream/50 uppercase text-sm tracking-wider", children: "Reception" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `px-2 py-0.5 rounded-full text-xs font-bold transition ${flash ? "bg-paprika text-white" : "bg-white/10 text-cream/70"}`, children: [
          stats.total,
          " today"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onLogout, className: "text-cream/60 hover:text-paprika", "aria-label": "Log out", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "size-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_320px] gap-6 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold uppercase text-xl mb-2", children: "Live Orders" }),
        orders.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/50", children: "No orders yet today." }),
        orders.map((o) => {
          const color = o.status === "pending" ? "border-amber-400/50" : o.status === "confirmed" ? "border-blue-400/50" : "border-green-400/50";
          const dot = o.status === "pending" ? "bg-amber-400" : o.status === "confirmed" ? "bg-blue-400" : "bg-green-400";
          const label = o.status[0].toUpperCase() + o.status.slice(1);
          const elapsed = Math.floor((Date.now() - new Date(o.created_at).getTime()) / 6e4);
          const time = new Date(o.created_at).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          });
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `glass border-l-4 ${color} rounded p-4`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-lg", children: [
                  "Table ",
                  o.table_number
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-cream/50", children: [
                  time,
                  " · ",
                  elapsed,
                  " min ago"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `size-2 rounded-full ${dot}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-cream/80", children: label })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 text-sm text-cream/80 space-y-1", children: o.items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              it.name,
              " × ",
              it.qty,
              " — ",
              formatFCFA(it.price * it.qty)
            ] }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-cheddar", children: formatFCFA(o.total_fcfa) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                o.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStatus(o.id, "confirmed"), className: "bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1.5 rounded uppercase font-semibold", children: "Confirm Order" }),
                o.status === "confirmed" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStatus(o.id, "delivered"), className: "bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1.5 rounded uppercase font-semibold", children: "Mark Delivered" })
              ] })
            ] })
          ] }, o.id);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold uppercase text-xl mb-2", children: "Today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Orders", value: stats.total }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Pending", value: stats.pending }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Confirmed", value: stats.confirmed }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Delivered", value: stats.delivered }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-white/10 rounded p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase text-cream/60", children: "Revenue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-2xl text-cheddar", children: formatFCFA(stats.revenue) })
        ] }),
        mostOrdered && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-white/10 rounded p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase text-cream/60", children: "Most Ordered" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold", children: [
            mostOrdered[0],
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-cream/50", children: [
              "× ",
              mostOrdered[1]
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function StatCard({
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-white/10 rounded p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase text-cream/60", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black text-2xl", children: value })
  ] });
}
export {
  ReceptionPage as component
};
