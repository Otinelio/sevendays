import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { whatsappUrl } from "@/store/settingsStore";
import { composeReservation } from "@/utils/whatsapp";

export const Route = createFileRoute("/_public/order")({
  head: () => ({
    meta: [
      { title: "Order & Reserve | sevendays" },
      { name: "description", content: "Reserve a table, order takeaway, or get delivery from sevendays in Lomé." },
      { property: "og:title", content: "Order — sevendays" },
      { property: "og:description", content: "Dine-in, takeaway, or delivery. Three ways to enjoy sevendays." },
    ],
  }),
  component: OrderPage,
});

type Mode = "Dine-in" | "Takeaway" | "Delivery";

function OrderPage() {
  const [mode, setMode] = useState<Mode>("Dine-in");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = composeReservation(mode, form);
    window.open(whatsappUrl(msg), "_blank");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="pt-32 pb-20 max-w-xl mx-auto px-6 text-center">
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring" }}>
          <CheckCircle className="size-20 text-cheddar mx-auto" />
        </motion.div>
        <h1 className="font-display font-black text-3xl mt-6 uppercase">Sent!</h1>
        <p className="text-cream/70 mt-2">Your request has been sent. We will confirm via WhatsApp shortly.</p>
        <Link to="/menu" className="inline-block mt-6 text-paprika font-semibold uppercase tracking-wide">← Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 max-w-3xl mx-auto px-6">
      <h1 className="font-display font-black uppercase text-5xl sm:text-6xl mb-6">Order & Reserve</h1>

      <div className="grid grid-cols-3 gap-2 mb-8 p-1 bg-card border border-white/10 rounded-lg">
        {(["Dine-in", "Takeaway", "Delivery"] as Mode[]).map((m) => (
          <button key={m} onClick={() => { setMode(m); setForm({}); }} className={`py-3 text-sm font-semibold uppercase tracking-wide rounded transition ${mode === m ? "bg-paprika text-white" : "text-cream/70 hover:bg-white/5"}`}>
            {m}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.form key={mode} onSubmit={submit} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
          <Field label="Full Name" k="Name" set={set} value={form.Name || ""} required />
          {mode !== "Dine-in" && <Field label="Phone" k="Phone" set={set} value={form.Phone || ""} required />}

          {mode === "Dine-in" && (
            <>
              <Field label="Guests" k="Guests" type="number" set={set} value={form.Guests || ""} />
              <Field label="Date" k="Date" type="date" set={set} value={form.Date || ""} />
              <Field label="Time" k="Time" type="time" set={set} value={form.Time || ""} />
            </>
          )}
          {mode === "Takeaway" && (
            <Field label="Pickup Time" k="Pickup" set={set} value={form.Pickup || ""} placeholder="ASAP / 30min / 1hr / time" />
          )}
          {mode === "Delivery" && (
            <>
              <Field label="Delivery Address" k="Address" set={set} value={form.Address || ""} required />
              <Field label="Distance" k="Distance" set={set} value={form.Distance || ""} placeholder="within 2km / 2-5km / 5km+" />
              <p className="text-xs text-cheddar">Free delivery above 5,000 FCFA</p>
            </>
          )}

          <div>
            <label className="text-xs uppercase text-cream/60 block mb-1">Note (optional)</label>
            <textarea value={form.Note || ""} onChange={(e) => set("Note", e.target.value)} rows={3} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 focus:border-paprika outline-none resize-none" />
          </div>

          <button type="submit" className="bg-paprika hover:bg-tomato text-white px-6 py-3 rounded font-semibold uppercase tracking-wide">
            Send Request
          </button>
        </motion.form>
      </AnimatePresence>
    </div>
  );
}

function Field({ label, k, set, value, type = "text", required, placeholder }: any) {
  return (
    <div>
      <label className="text-xs uppercase text-cream/60 block mb-1">{label}{required && " *"}</label>
      <input
        type={type} required={required} placeholder={placeholder}
        value={value} onChange={(e) => set(k, e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded px-3 py-3 outline-none focus:border-paprika"
      />
    </div>
  );
}
