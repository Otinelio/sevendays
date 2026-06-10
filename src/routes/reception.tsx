import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { PINGate } from "@/components/PINGate";
import { formatFCFA } from "@/data/defaultMenu";

export const Route = createFileRoute("/reception")({
  component: ReceptionPage,
});

type Order = {
  id: string;
  table_number: number;
  items: { id: string; name: string; qty: number; price: number }[];
  total_fcfa: number;
  status: "pending" | "confirmed" | "delivered";
  created_at: string;
};

function ReceptionPage() {
  const [unlocked, setUnlocked] = useState(false);
  if (!unlocked) return <PINGate correctPin="9999" label="Reception Access" onUnlock={() => setUnlocked(true)} />;
  return <Dashboard onLogout={() => setUnlocked(false)} />;
}

function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [flash, setFlash] = useState(false);

  const setStatus = (id: string, status: Order["status"]) => {
    setOrders(orders.map((o) => o.id === id ? { ...o, status } : o));
  };

  const today = orders;
  const stats = {
    total: today.length,
    pending: today.filter((o) => o.status === "pending").length,
    confirmed: today.filter((o) => o.status === "confirmed").length,
    delivered: today.filter((o) => o.status === "delivered").length,
    revenue: today.reduce((s, o) => s + o.total_fcfa, 0),
  };
  const itemCounts: Record<string, number> = {};
  today.forEach((o) => o.items.forEach((it) => { itemCounts[it.name] = (itemCounts[it.name] || 0) + it.qty; }));
  const mostOrdered = Object.entries(itemCounts).sort(([, a], [, b]) => b - a)[0];

  return (
    <div className="min-h-screen bg-charcoal">
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="font-display font-black lowercase text-2xl">sevendays</div>
          <span className="text-cream/50 uppercase text-sm tracking-wider">Reception</span>
          <span className={`px-2 py-0.5 rounded-full text-xs font-bold transition ${flash ? "bg-paprika text-white" : "bg-white/10 text-cream/70"}`}>
            {stats.total} today
          </span>
        </div>
        <button onClick={onLogout} className="text-cream/60 hover:text-paprika" aria-label="Log out"><LogOut className="size-5" /></button>
      </header>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6 p-6">
        <div className="space-y-3">
          <h2 className="font-display font-bold uppercase text-xl mb-2">Live Orders</h2>
          {orders.length === 0 && <p className="text-cream/50">No orders yet today.</p>}
          {orders.map((o) => {
            const color = o.status === "pending" ? "border-amber-400/50" : o.status === "confirmed" ? "border-blue-400/50" : "border-green-400/50";
            const dot = o.status === "pending" ? "bg-amber-400" : o.status === "confirmed" ? "bg-blue-400" : "bg-green-400";
            const label = o.status[0].toUpperCase() + o.status.slice(1);
            const elapsed = Math.floor((Date.now() - new Date(o.created_at).getTime()) / 60000);
            const time = new Date(o.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
            return (
              <div key={o.id} className={`glass border-l-4 ${color} rounded p-4`}>
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <div className="font-display font-bold text-lg">Table {o.table_number}</div>
                    <div className="text-xs text-cream/50">{time} · {elapsed} min ago</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className={`size-2 rounded-full ${dot}`} />
                    <span className="text-cream/80">{label}</span>
                  </div>
                </div>
                <ul className="mt-3 text-sm text-cream/80 space-y-1">
                  {o.items.map((it, i) => <li key={i}>{it.name} × {it.qty} — {formatFCFA(it.price * it.qty)}</li>)}
                </ul>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-display font-bold text-cheddar">{formatFCFA(o.total_fcfa)}</span>
                  <div className="flex gap-2">
                    {o.status === "pending" && <button onClick={() => setStatus(o.id, "confirmed")} className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1.5 rounded uppercase font-semibold">Confirm Order</button>}
                    {o.status === "confirmed" && <button onClick={() => setStatus(o.id, "delivered")} className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1.5 rounded uppercase font-semibold">Mark Delivered</button>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <aside className="space-y-3">
          <h2 className="font-display font-bold uppercase text-xl mb-2">Today</h2>
          <StatCard label="Total Orders" value={stats.total} />
          <StatCard label="Pending" value={stats.pending} />
          <StatCard label="Confirmed" value={stats.confirmed} />
          <StatCard label="Delivered" value={stats.delivered} />
          <div className="bg-card border border-white/10 rounded p-4">
            <div className="text-xs uppercase text-cream/60">Revenue</div>
            <div className="font-display font-black text-2xl text-cheddar">{formatFCFA(stats.revenue)}</div>
          </div>
          {mostOrdered && (
            <div className="bg-card border border-white/10 rounded p-4">
              <div className="text-xs uppercase text-cream/60">Most Ordered</div>
              <div className="text-sm font-semibold">{mostOrdered[0]} <span className="text-cream/50">× {mostOrdered[1]}</span></div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-card border border-white/10 rounded p-4">
      <div className="text-xs uppercase text-cream/60">{label}</div>
      <div className="font-display font-black text-2xl">{value}</div>
    </div>
  );
}
