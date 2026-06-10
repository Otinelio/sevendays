import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LogOut, Trash2 } from "lucide-react";
import { PINGate } from "@/components/PINGate";
import { supabase } from "@/integrations/supabase/client";
import { defaultMenu, CATEGORY_LABELS, CATEGORY_ORDER, formatFCFA, type MenuItem } from "@/data/defaultMenu";
import { useSettings } from "@/store/settingsStore";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

type Tab = "menu" | "orders" | "settings" | "promos";

function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  if (!unlocked) return <PINGate correctPin="9999" label="Admin Access" onUnlock={() => setUnlocked(true)} />;
  return <AdminDash onLogout={() => setUnlocked(false)} />;
}

function AdminDash({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<Tab>("menu");

  return (
    <div className="min-h-screen bg-charcoal flex">
      <aside className="w-60 border-r border-white/10 p-5 hidden md:flex flex-col gap-1">
        <div className="font-display font-black lowercase text-2xl mb-2">sevendays</div>
        <div className="text-xs uppercase text-cream/40 mb-6">Admin</div>
        {(["menu", "orders", "settings", "promos"] as Tab[]).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`text-left px-3 py-2 rounded font-semibold uppercase text-sm tracking-wide ${tab === t ? "bg-paprika text-white" : "text-cream/70 hover:bg-white/5"}`}>
            {t === "menu" ? "Menu" : t === "orders" ? "Orders" : t === "settings" ? "Settings" : "Promos"}
          </button>
        ))}
        <button onClick={onLogout} className="mt-auto inline-flex items-center gap-2 text-cream/60 hover:text-paprika text-sm"><LogOut className="size-4" /> Log out</button>
      </aside>

      <div className="flex-1 p-6 overflow-auto">
        <div className="md:hidden flex gap-2 mb-4 overflow-x-auto">
          {(["menu", "orders", "settings", "promos"] as Tab[]).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-3 py-1.5 text-xs uppercase rounded ${tab === t ? "bg-paprika text-white" : "bg-white/5"}`}>{t}</button>
          ))}
        </div>
        {tab === "menu" && <MenuTab />}
        {tab === "orders" && <OrdersTab />}
        {tab === "settings" && <SettingsTab />}
        {tab === "promos" && <PromosTab />}
      </div>
    </div>
  );
}

function MenuTab() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("menu_items").select("*").order("category").order("sort_order");
    setItems(((data || []) as any) as MenuItem[]);
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const seed = async () => {
    if (!confirm("Seed default menu? This adds all default items.")) return;
    const rows = defaultMenu.map((m, i) => ({
      category: m.category, name: m.name, description: m.description, price_fcfa: m.price_fcfa, image_url: m.image_url, sort_order: i,
    }));
    await supabase.from("menu_items").insert(rows);
    await load();
  };

  const toggleSoldOut = async (i: MenuItem) => {
    await supabase.from("menu_items").update({ sold_out: !i.sold_out }).eq("id", i.id);
    load();
  };
  const del = async (id: string) => {
    if (!confirm("Delete this item?")) return;
    await supabase.from("menu_items").delete().eq("id", id);
    load();
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="flex items-center justify-between">
        <h1 className="font-display font-black uppercase text-3xl">Menu Management</h1>
        {items.length === 0 && <button onClick={seed} className="bg-paprika hover:bg-tomato text-white px-4 py-2 rounded font-semibold uppercase text-sm">Seed default menu</button>}
      </div>
      {loading && <p className="text-cream/50">Loading...</p>}
      {!loading && items.length === 0 && <p className="text-cream/60">No items yet. Click "Seed default menu".</p>}
      {CATEGORY_ORDER.map((c) => {
        const list = items.filter((i) => i.category === c);
        if (list.length === 0) return null;
        return (
          <section key={c}>
            <h2 className="font-display font-bold uppercase text-lg text-cheddar mb-2">{CATEGORY_LABELS[c]}</h2>
            <div className="space-y-2">
              {list.map((i) => (
                <div key={i.id} className="bg-card border border-white/10 rounded p-3 flex items-center gap-3">
                  <img src={i.image_url} alt="" className="size-14 rounded object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{i.name}</div>
                    <div className="text-xs text-cream/60 truncate">{i.description}</div>
                  </div>
                  <div className="text-cheddar font-bold text-sm">{formatFCFA(i.price_fcfa)}</div>
                  <button onClick={() => toggleSoldOut(i)} className={`text-xs px-2 py-1 rounded uppercase font-semibold ${i.sold_out ? "bg-paprika text-white" : "bg-white/5 text-cream/60"}`}>
                    {i.sold_out ? "Sold out" : "Available"}
                  </button>
                  <button onClick={() => del(i.id)} className="text-cream/40 hover:text-paprika"><Trash2 className="size-4" /></button>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function OrdersTab() {
  const [orders, setOrders] = useState<any[]>([]);
  const [filter, setFilter] = useState<"all" | "pending" | "confirmed" | "delivered">("all");

  useEffect(() => {
    supabase.from("orders").select("*").order("created_at", { ascending: false }).limit(500).then(({ data }) => setOrders(data || []));
  }, []);

  const filtered = orders.filter((o) => filter === "all" || o.status === filter);

  const exportCsv = () => {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const todays = orders.filter((o) => new Date(o.created_at) >= today);
    const rows = [["ID", "Table", "Items", "Total", "Status", "Time"]];
    todays.forEach((o) => rows.push([o.id, String(o.table_number), o.items.map((i: any) => `${i.name}x${i.qty}`).join("; "), String(o.total_fcfa), o.status, o.created_at]));
    const csv = rows.map((r) => r.map((c) => `"${(c || "").toString().replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `sevendays-orders-${today.toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  return (
    <div className="space-y-4 max-w-5xl">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="font-display font-black uppercase text-3xl">Orders History</h1>
        <button onClick={exportCsv} className="bg-cheddar text-charcoal px-4 py-2 rounded font-semibold uppercase text-sm">Download Today's Orders</button>
      </div>
      <div className="flex gap-2">
        {(["all", "pending", "confirmed", "delivered"] as const).map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1 rounded text-xs uppercase font-semibold ${filter === f ? "bg-paprika text-white" : "bg-white/5 text-cream/60"}`}>{f}</button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-cream/50 uppercase text-xs border-b border-white/10">
            <tr><th className="p-2">Table</th><th className="p-2">Items</th><th className="p-2">Total</th><th className="p-2">Status</th><th className="p-2">Time</th></tr>
          </thead>
          <tbody>
            {filtered.map((o) => (
              <tr key={o.id} className="border-b border-white/5">
                <td className="p-2 font-bold">{o.table_number}</td>
                <td className="p-2 text-cream/70 max-w-xs truncate">{o.items.map((i: any) => `${i.name}×${i.qty}`).join(", ")}</td>
                <td className="p-2 text-cheddar font-bold">{formatFCFA(o.total_fcfa)}</td>
                <td className="p-2"><span className="text-xs uppercase">{o.status}</span></td>
                <td className="p-2 text-cream/50 text-xs">{new Date(o.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SettingsTab() {
  const s = useSettings();
  const [local, setLocal] = useState(s);
  useEffect(() => setLocal(s), [s]);

  return (
    <div className="max-w-2xl space-y-4">
      <h1 className="font-display font-black uppercase text-3xl">Settings</h1>
      {([
        ["whatsapp", "WhatsApp Number (digits)"],
        ["restaurantName", "Restaurant Name"],
        ["address", "Address"],
        ["hours", "Opening Hours"],
        ["instagram", "Instagram URL"],
        ["facebook", "Facebook URL"],
      ] as const).map(([k, l]) => (
        <div key={k}>
          <label className="text-xs uppercase text-cream/60 block mb-1">{l}</label>
          <input value={(local as any)[k]} onChange={(e) => setLocal({ ...local, [k]: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none focus:border-paprika" />
        </div>
      ))}
      <button onClick={() => s.set(local)} className="bg-paprika hover:bg-tomato text-white px-5 py-2.5 rounded font-semibold uppercase">Save</button>
    </div>
  );
}

function PromosTab() {
  const [promos, setPromos] = useState<any[]>([]);
  const [text, setText] = useState("");
  const [bg, setBg] = useState("#B62828");
  const [color, setColor] = useState("#F4E8DA");

  const load = async () => {
    const { data } = await supabase.from("promos").select("*").order("created_at", { ascending: false });
    setPromos(data || []);
  };
  useEffect(() => { load(); }, []);

  const create = async () => {
    if (!text.trim()) return;
    await supabase.from("promos").insert({ text, bg_color: bg, text_color: color, active: true });
    setText("");
    load();
  };
  const toggle = async (id: string, active: boolean) => { await supabase.from("promos").update({ active: !active }).eq("id", id); load(); };
  const del = async (id: string) => { await supabase.from("promos").delete().eq("id", id); load(); };

  return (
    <div className="max-w-2xl space-y-4">
      <h1 className="font-display font-black uppercase text-3xl">Promos</h1>
      <div className="bg-card border border-white/10 rounded p-4 space-y-3">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Promo text" className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none" />
        <div className="flex gap-3">
          <label className="text-xs flex items-center gap-2">Bg <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} /></label>
          <label className="text-xs flex items-center gap-2">Text <input type="color" value={color} onChange={(e) => setColor(e.target.value)} /></label>
          <button onClick={create} className="ml-auto bg-paprika text-white px-4 py-1.5 rounded uppercase text-sm font-semibold">Add</button>
        </div>
      </div>
      <div className="space-y-2">
        {promos.map((p) => (
          <div key={p.id} className="rounded p-3 flex items-center justify-between" style={{ background: p.bg_color, color: p.text_color }}>
            <span className="font-semibold">{p.text}</span>
            <div className="flex gap-2">
              <button onClick={() => toggle(p.id, p.active)} className="text-xs bg-black/30 px-2 py-1 rounded uppercase">{p.active ? "Active" : "Off"}</button>
              <button onClick={() => del(p.id)} className="text-xs bg-black/30 px-2 py-1 rounded"><Trash2 className="size-3" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
