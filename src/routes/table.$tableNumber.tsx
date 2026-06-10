import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { MenuCard } from "@/components/MenuCard";
import { CartDrawer } from "@/components/CartDrawer";
import { useCart } from "@/store/cartStore";
import { supabase } from "@/integrations/supabase/client";
import { CATEGORY_LABELS, CATEGORY_ORDER, defaultMenu, formatFCFA } from "@/data/defaultMenu";
import { ShoppingCart } from "lucide-react";

export const Route = createFileRoute("/table/$tableNumber")({
  component: TablePage,
});

type OrderStatus = "pending" | "confirmed" | "delivered";

function TablePage() {
  const { tableNumber } = Route.useParams();
  const { items, subtotal, clear, open } = useCart();
  const [sent, setSent] = useState<{ id: string } | null>(null);
  const [status, setStatus] = useState<OrderStatus>("pending");

  useEffect(() => {
    if (!sent) return;
    const channel = supabase
      .channel(`order-${sent.id}`)
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "orders", filter: `id=eq.${sent.id}` }, (payload) => {
        const s = (payload.new as any).status as OrderStatus;
        setStatus(s);
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [sent]);

  const sendToKitchen = async () => {
    if (items.length === 0) return;
    const total = subtotal();
    const { data, error } = await supabase.from("orders").insert({
      table_number: Number(tableNumber) || 0,
      items: items.map((i) => ({ id: i.id, name: i.name, qty: i.qty, price: i.price })),
      total_fcfa: total,
      status: "pending",
    }).select("id").single();
    if (error || !data) { alert("Failed to send order"); return; }
    setSent({ id: data.id });
    clear();
  };

  return (
    <div className="min-h-screen bg-charcoal pb-32">
      <header className="border-b border-white/10 px-4 py-4 flex items-center justify-between sticky top-0 bg-charcoal/95 backdrop-blur z-40">
        <div className="font-display font-black lowercase text-2xl text-cream">sevendays</div>
        <div className="flex items-center gap-3">
          <button onClick={open} className="relative p-2 text-cream">
            <ShoppingCart className="size-5" />
            {items.length > 0 && <span className="absolute -top-1 -right-1 bg-cheddar text-charcoal text-[10px] font-bold rounded-full size-5 flex items-center justify-center">{items.reduce((n, i) => n + i.qty, 0)}</span>}
          </button>
          <div className="bg-cheddar text-charcoal font-bold uppercase px-3 py-1 rounded text-sm">Table {tableNumber}</div>
        </div>
      </header>

      {sent ? (
        <div className="max-w-md mx-auto px-6 py-20 text-center">
          <CheckCircle className="size-16 text-cheddar mx-auto" />
          <h1 className="font-display font-black uppercase text-3xl mt-4">Order sent to kitchen!</h1>
          <p className="text-cream/70 mt-2">Table {tableNumber} — We'll bring it to you shortly.</p>
          <button onClick={() => setSent(null)} className="mt-6 text-paprika font-semibold uppercase">Add more items</button>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
          {CATEGORY_ORDER.map((c) => (
            <section key={c}>
              <h2 className="font-display font-black uppercase text-2xl mb-4 border-l-4 border-paprika pl-3">{CATEGORY_LABELS[c]}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {defaultMenu.filter((i) => i.category === c).map((i) => (
                  <MenuCard key={i.id} item={i} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      {!sent && items.length > 0 && (
        <div className="fixed bottom-0 inset-x-0 bg-charcoal border-t border-white/10 p-4 z-50">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div>
              <div className="text-xs text-cream/60 uppercase">{items.reduce((n, i) => n + i.qty, 0)} items</div>
              <div className="font-display font-bold text-cheddar text-xl">{formatFCFA(subtotal())}</div>
            </div>
            <button onClick={sendToKitchen} className="bg-paprika hover:bg-tomato text-white px-6 py-3 rounded font-semibold uppercase tracking-wide">
              Send to Kitchen
            </button>
          </div>
        </div>
      )}

      {sent && (
        <div className="fixed bottom-0 inset-x-0 bg-charcoal border-t border-white/10 p-4 z-50">
          <div className="max-w-4xl mx-auto flex items-center justify-center gap-3 text-sm">
            <span className={`size-3 rounded-full ${status === "pending" ? "bg-amber-400" : status === "confirmed" ? "bg-blue-400" : "bg-green-400"}`} />
            <span className="text-cream">
              {status === "pending" && "Order received — Kitchen is preparing"}
              {status === "confirmed" && "Confirmed — On its way to your table"}
              {status === "delivered" && "Delivered — Enjoy your meal!"}
            </span>
          </div>
        </div>
      )}

      <CartDrawer />
    </div>
  );
}
