import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/store/cartStore";
import { formatFCFA } from "@/data/defaultMenu";
import { composeOrderMessage, type OrderMeta } from "@/utils/whatsapp";
import { whatsappUrl } from "@/store/settingsStore";

export function CartDrawer() {
  const { items, isOpen, close, setQty, remove, subtotal, clear } = useCart();
  const [checkout, setCheckout] = useState(false);
  const [name, setName] = useState("");
  const [orderType, setOrderType] = useState<OrderMeta["orderType"]>("Dine-in");
  const [note, setNote] = useState("");

  const total = subtotal();
  const deliveryFree = total >= 5000;

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 bg-black/70 z-[90]"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-charcoal border-l border-white/10 z-[95] flex flex-col"
          >
            <div className="p-5 flex items-center justify-between border-b border-white/10">
              <h2 className="font-display font-bold text-2xl uppercase text-cream">
                Your Cart
              </h2>
              <button onClick={close} className="text-cream/60 hover:text-cream"><X className="size-5" /></button>
            </div>

            {!checkout ? (
              <>
                <div className="flex-1 overflow-y-auto p-5 space-y-3">
                  {items.length === 0 && (
                    <p className="text-cream/50 text-center py-10">Your cart is empty.</p>
                  )}
                  {items.map((i) => (
                    <div key={i.id} className="flex gap-3 p-3 rounded-lg border border-white/10 bg-card/50">
                      {i.image && <img src={i.image} alt={i.name} className="size-16 object-cover rounded" />}
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-cream truncate">{i.name}</div>
                        <div className="text-xs text-cheddar font-bold">{formatFCFA(i.price)}</div>
                        <div className="flex items-center gap-2 mt-2">
                          <button onClick={() => setQty(i.id, i.qty - 1)} className="p-1 border border-white/20 rounded hover:bg-white/5"><Minus className="size-3" /></button>
                          <span className="text-sm font-medium w-6 text-center">{i.qty}</span>
                          <button onClick={() => setQty(i.id, i.qty + 1)} className="p-1 border border-white/20 rounded hover:bg-white/5"><Plus className="size-3" /></button>
                          <button onClick={() => remove(i.id)} className="ml-auto text-cream/40 hover:text-paprika"><Trash2 className="size-4" /></button>
                        </div>
                      </div>
                      <div className="text-sm font-bold text-cream">{formatFCFA(i.price * i.qty)}</div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 p-5 space-y-3">
                  <div className="flex justify-between text-sm text-cream/70">
                    <span>Subtotal</span><span>{formatFCFA(total)}</span>
                  </div>
                  <div className="text-xs text-cream/50">
                    {deliveryFree ? "Free delivery applies." : "Delivery: Free above 5,000 FCFA"}
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-cream">Total</span>
                    <span className="text-cheddar">{formatFCFA(total)}</span>
                  </div>
                  <button
                    disabled={items.length === 0}
                    onClick={() => setCheckout(true)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-paprika hover:bg-tomato disabled:bg-muted disabled:cursor-not-allowed text-white font-semibold py-3 rounded uppercase tracking-wide"
                  >
                    <MessageCircle className="size-4" /> Send Order via WhatsApp
                  </button>
                </div>
              </>
            ) : (
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                <div>
                  <label className="text-xs uppercase text-cream/60 mb-1 block">Your Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-cream focus:border-paprika outline-none"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase text-cream/60 mb-2 block">Order Type</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["Dine-in", "Takeaway", "Delivery"] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setOrderType(t)}
                        className={`py-2 text-sm font-semibold uppercase tracking-wide rounded border ${
                          orderType === t
                            ? "bg-paprika border-paprika text-white"
                            : "border-white/10 text-cream/70 hover:border-white/30"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase text-cream/60 mb-1 block">Note (optional)</label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-cream focus:border-paprika outline-none resize-none"
                    placeholder="Allergies, special requests..."
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setCheckout(false)}
                    className="flex-1 py-3 border border-white/20 text-cream rounded font-semibold uppercase tracking-wide hover:bg-white/5"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSend}
                    disabled={!name.trim()}
                    className="flex-1 py-3 bg-paprika hover:bg-tomato disabled:opacity-50 text-white rounded font-semibold uppercase tracking-wide"
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
