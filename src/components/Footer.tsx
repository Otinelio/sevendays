import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { useSettings } from "@/store/settingsStore";

export function Footer() {
  const s = useSettings();
  return (
    <footer className="bg-[var(--color-footer)] border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display font-black text-3xl lowercase text-cream">
            sevendays
          </div>
          <p className="mt-3 text-cream/60 text-sm max-w-xs">
            Open 7 days. Generous every time.
          </p>
        </div>
        <div>
          <h4 className="font-display font-bold uppercase text-cream mb-4 tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "About" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
              { to: "/order", label: "Order Now" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/70 hover:text-paprika transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold uppercase text-cream mb-4 tracking-wide">
            Visit Us
          </h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5 text-paprika shrink-0" />
              <span>{s.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="size-4 mt-0.5 text-paprika shrink-0" />
              <span>+{s.whatsapp.slice(0, 3)} {s.whatsapp.slice(3, 5)} {s.whatsapp.slice(5, 7)} {s.whatsapp.slice(7, 9)} {s.whatsapp.slice(9)}</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="size-4 mt-0.5 text-paprika shrink-0" />
              <span>{s.hours}</span>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a href={s.instagram} target="_blank" rel="noreferrer" className="p-2 border border-white/10 hover:border-paprika hover:text-paprika text-cream/70 rounded-full transition-colors" aria-label="Instagram">
              <Instagram className="size-4" />
            </a>
            <a href={s.facebook} target="_blank" rel="noreferrer" className="p-2 border border-white/10 hover:border-paprika hover:text-paprika text-cream/70 rounded-full transition-colors" aria-label="Facebook">
              <Facebook className="size-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-cream/40">
        © 2025 sevendays. All rights reserved.
      </div>
    </footer>
  );
}
