import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PINGate } from "./PINGate-CRsHRBZF.mjs";
import { s as supabase } from "./client-CjgIe9uj.mjs";
import { C as CATEGORY_ORDER, a as CATEGORY_LABELS, f as formatFCFA, d as defaultMenu } from "./router-Dc421v5c.mjs";
import { u as useSettings } from "./settingsStore-CrqKPR1U.mjs";
import "../_libs/sonner.mjs";
import { L as LogOut, T as Trash2 } from "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
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
import "../_libs/zustand.mjs";
function AdminPage() {
  const [unlocked, setUnlocked] = reactExports.useState(false);
  if (!unlocked) return /* @__PURE__ */ jsxRuntimeExports.jsx(PINGate, { correctPin: "9999", label: "Admin Access", onUnlock: () => setUnlocked(true) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDash, { onLogout: () => setUnlocked(false) });
}
function AdminDash({
  onLogout
}) {
  const [tab, setTab] = reactExports.useState("menu");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-charcoal flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "w-60 border-r border-white/10 p-5 hidden md:flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-black lowercase text-2xl mb-2", children: "sevendays" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase text-cream/40 mb-6", children: "Admin" }),
      ["menu", "orders", "settings", "promos"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: `text-left px-3 py-2 rounded font-semibold uppercase text-sm tracking-wide ${tab === t ? "bg-paprika text-white" : "text-cream/70 hover:bg-white/5"}`, children: t === "menu" ? "Menu" : t === "orders" ? "Orders" : t === "settings" ? "Settings" : "Promos" }, t)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onLogout, className: "mt-auto inline-flex items-center gap-2 text-cream/60 hover:text-paprika text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "size-4" }),
        " Log out"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 p-6 overflow-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden flex gap-2 mb-4 overflow-x-auto", children: ["menu", "orders", "settings", "promos"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: `px-3 py-1.5 text-xs uppercase rounded ${tab === t ? "bg-paprika text-white" : "bg-white/5"}`, children: t }, t)) }),
      tab === "menu" && /* @__PURE__ */ jsxRuntimeExports.jsx(MenuTab, {}),
      tab === "orders" && /* @__PURE__ */ jsxRuntimeExports.jsx(OrdersTab, {}),
      tab === "settings" && /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsTab, {}),
      tab === "promos" && /* @__PURE__ */ jsxRuntimeExports.jsx(PromosTab, {})
    ] })
  ] });
}
function MenuTab() {
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const load = async () => {
    setLoading(true);
    const {
      data
    } = await supabase.from("menu_items").select("*").order("category").order("sort_order");
    setItems(data || []);
    setLoading(false);
  };
  reactExports.useEffect(() => {
    load();
  }, []);
  const seed = async () => {
    if (!confirm("Seed default menu? This adds all default items.")) return;
    const rows = defaultMenu.map((m, i) => ({
      category: m.category,
      name: m.name,
      description: m.description,
      price_fcfa: m.price_fcfa,
      image_url: m.image_url,
      sort_order: i
    }));
    await supabase.from("menu_items").insert(rows);
    await load();
  };
  const toggleSoldOut = async (i) => {
    await supabase.from("menu_items").update({
      sold_out: !i.sold_out
    }).eq("id", i.id);
    load();
  };
  const del = async (id) => {
    if (!confirm("Delete this item?")) return;
    await supabase.from("menu_items").delete().eq("id", id);
    load();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 max-w-5xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black uppercase text-3xl", children: "Menu Management" }),
      items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: seed, className: "bg-paprika hover:bg-tomato text-white px-4 py-2 rounded font-semibold uppercase text-sm", children: "Seed default menu" })
    ] }),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/50", children: "Loading..." }),
    !loading && items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-cream/60", children: 'No items yet. Click "Seed default menu".' }),
    CATEGORY_ORDER.map((c) => {
      const list = items.filter((i) => i.category === c);
      if (list.length === 0) return null;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold uppercase text-lg text-cheddar mb-2", children: CATEGORY_LABELS[c] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: list.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-white/10 rounded p-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: i.image_url, alt: "", className: "size-14 rounded object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold truncate", children: i.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-cream/60 truncate", children: i.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-cheddar font-bold text-sm", children: formatFCFA(i.price_fcfa) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleSoldOut(i), className: `text-xs px-2 py-1 rounded uppercase font-semibold ${i.sold_out ? "bg-paprika text-white" : "bg-white/5 text-cream/60"}`, children: i.sold_out ? "Sold out" : "Available" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => del(i.id), className: "text-cream/40 hover:text-paprika", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-4" }) })
        ] }, i.id)) })
      ] }, c);
    })
  ] });
}
function OrdersTab() {
  const [orders, setOrders] = reactExports.useState([]);
  const [filter, setFilter] = reactExports.useState("all");
  reactExports.useEffect(() => {
    supabase.from("orders").select("*").order("created_at", {
      ascending: false
    }).limit(500).then(({
      data
    }) => setOrders(data || []));
  }, []);
  const filtered = orders.filter((o) => filter === "all" || o.status === filter);
  const exportCsv = () => {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const todays = orders.filter((o) => new Date(o.created_at) >= today);
    const rows = [["ID", "Table", "Items", "Total", "Status", "Time"]];
    todays.forEach((o) => rows.push([o.id, String(o.table_number), o.items.map((i) => `${i.name}x${i.qty}`).join("; "), String(o.total_fcfa), o.status, o.created_at]));
    const csv = rows.map((r) => r.map((c) => `"${(c || "").toString().replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], {
      type: "text/csv"
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `sevendays-orders-${today.toISOString().slice(0, 10)}.csv`;
    a.click();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 max-w-5xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black uppercase text-3xl", children: "Orders History" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: exportCsv, className: "bg-cheddar text-charcoal px-4 py-2 rounded font-semibold uppercase text-sm", children: "Download Today's Orders" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["all", "pending", "confirmed", "delivered"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: `px-3 py-1 rounded text-xs uppercase font-semibold ${filter === f ? "bg-paprika text-white" : "bg-white/5 text-cream/60"}`, children: f }, f)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "text-left text-cream/50 uppercase text-xs border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Table" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Items" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Total" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-2", children: "Time" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 font-bold", children: o.table_number }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-cream/70 max-w-xs truncate", children: o.items.map((i) => `${i.name}×${i.qty}`).join(", ") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-cheddar font-bold", children: formatFCFA(o.total_fcfa) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase", children: o.status }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-2 text-cream/50 text-xs", children: new Date(o.created_at).toLocaleString() })
      ] }, o.id)) })
    ] }) })
  ] });
}
function SettingsTab() {
  const s = useSettings();
  const [local, setLocal] = reactExports.useState(s);
  reactExports.useEffect(() => setLocal(s), [s]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black uppercase text-3xl", children: "Settings" }),
    [["whatsapp", "WhatsApp Number (digits)"], ["restaurantName", "Restaurant Name"], ["address", "Address"], ["hours", "Opening Hours"], ["instagram", "Instagram URL"], ["facebook", "Facebook URL"]].map(([k, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase text-cream/60 block mb-1", children: l }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: local[k], onChange: (e) => setLocal({
        ...local,
        [k]: e.target.value
      }), className: "w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none focus:border-paprika" })
    ] }, k)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => s.set(local), className: "bg-paprika hover:bg-tomato text-white px-5 py-2.5 rounded font-semibold uppercase", children: "Save" })
  ] });
}
function PromosTab() {
  const [promos, setPromos] = reactExports.useState([]);
  const [text, setText] = reactExports.useState("");
  const [bg, setBg] = reactExports.useState("#B62828");
  const [color, setColor] = reactExports.useState("#F4E8DA");
  const load = async () => {
    const {
      data
    } = await supabase.from("promos").select("*").order("created_at", {
      ascending: false
    });
    setPromos(data || []);
  };
  reactExports.useEffect(() => {
    load();
  }, []);
  const create = async () => {
    if (!text.trim()) return;
    await supabase.from("promos").insert({
      text,
      bg_color: bg,
      text_color: color,
      active: true
    });
    setText("");
    load();
  };
  const toggle = async (id, active) => {
    await supabase.from("promos").update({
      active: !active
    }).eq("id", id);
    load();
  };
  const del = async (id) => {
    await supabase.from("promos").delete().eq("id", id);
    load();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-black uppercase text-3xl", children: "Promos" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-white/10 rounded p-4 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: text, onChange: (e) => setText(e.target.value), placeholder: "Promo text", className: "w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs flex items-center gap-2", children: [
          "Bg ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "color", value: bg, onChange: (e) => setBg(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs flex items-center gap-2", children: [
          "Text ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "color", value: color, onChange: (e) => setColor(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: create, className: "ml-auto bg-paprika text-white px-4 py-1.5 rounded uppercase text-sm font-semibold", children: "Add" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: promos.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded p-3 flex items-center justify-between", style: {
      background: p.bg_color,
      color: p.text_color
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: p.text }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggle(p.id, p.active), className: "text-xs bg-black/30 px-2 py-1 rounded uppercase", children: p.active ? "Active" : "Off" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => del(p.id), className: "text-xs bg-black/30 px-2 py-1 rounded", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "size-3" }) })
      ] })
    ] }, p.id)) })
  ] });
}
export {
  AdminPage as component
};
