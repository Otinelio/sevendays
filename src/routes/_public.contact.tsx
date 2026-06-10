import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { useSettings, whatsappUrl } from "@/store/settingsStore";
import { composeContactMessage } from "@/utils/whatsapp";

export const Route = createFileRoute("/_public/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location | sevendays — Av. de la Chance, Lomé" },
      { name: "description", content: "Visit sevendays at Av. de la Chance, Lomé. Open daily 10:00 – midnight. +228 93 12 12 13." },
      { property: "og:title", content: "Contact — sevendays" },
      { property: "og:description", content: "Find us, call us, or message us on WhatsApp." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const s = useSettings();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setErr("Name is required"); return; }
    const msg = composeContactMessage(name, phone, message);
    window.open(whatsappUrl(msg), "_blank");
  };

  return (
    <div className="pt-24 pb-16 max-w-7xl mx-auto px-6">
      <h1 className="font-display font-black uppercase text-5xl sm:text-6xl mb-2">Get in touch</h1>
      <p className="text-cream/60 mb-10">We're open every day. Drop by or message us.</p>

      <div className="grid md:grid-cols-5 gap-8">
        <form onSubmit={send} className="md:col-span-3 space-y-4">
          <div>
            <label className="text-xs uppercase text-cream/60 block mb-1">Name *</label>
            <input value={name} onChange={(e) => { setName(e.target.value); setErr(""); }}
              className={`w-full bg-white/5 border rounded px-3 py-3 outline-none focus:border-paprika ${err ? "border-paprika" : "border-white/10"}`} />
            {err && <p className="text-paprika text-xs mt-1">{err}</p>}
          </div>
          <div>
            <label className="text-xs uppercase text-cream/60 block mb-1">Phone</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-3 outline-none focus:border-paprika" />
          </div>
          <div>
            <label className="text-xs uppercase text-cream/60 block mb-1">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full bg-white/5 border border-white/10 rounded px-3 py-3 outline-none focus:border-paprika resize-none" />
          </div>
          <button type="submit" className="bg-paprika hover:bg-tomato text-white px-6 py-3 rounded font-semibold uppercase tracking-wide inline-flex items-center gap-2">
            <MessageCircle className="size-4" /> Send Message
          </button>
        </form>

        <aside className="md:col-span-2 bg-card border border-white/10 rounded-lg p-6 space-y-4">
          <h3 className="font-display font-bold uppercase text-xl">Visit us</h3>
          <p className="flex items-start gap-3 text-cream/80 text-sm"><MapPin className="size-5 text-paprika mt-0.5 shrink-0" /> {s.address} (near GTA / Service des Passeports)</p>
          <p className="flex items-center gap-3 text-cream/80 text-sm"><Phone className="size-5 text-paprika shrink-0" /> +228 93 12 12 13</p>
          <p className="flex items-center gap-3 text-cream/80 text-sm"><Clock className="size-5 text-paprika shrink-0" /> {s.hours}</p>
          <p className="flex items-center gap-3 text-cream/80 text-sm"><MessageCircle className="size-5 text-paprika shrink-0" /> WhatsApp: +228 93 12 12 13</p>
          <div className="aspect-video rounded overflow-hidden border border-white/10">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Lome,Togo&output=embed"
              className="size-full"
              loading="lazy"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
