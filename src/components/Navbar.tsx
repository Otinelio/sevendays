import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/store/cartStore";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const cartCount = useCart((s) => s.items.reduce((n, i) => n + i.qty, 0));
  const openCart = useCart((s) => s.open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-black text-2xl text-cream tracking-tight lowercase">
          sevendays
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active =
              l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium uppercase tracking-wide transition-colors relative pb-1 ${
                  active ? "text-paprika" : "text-cream/80 hover:text-cream"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-paprika" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative p-2 text-cream hover:text-paprika transition-colors"
          >
            <ShoppingCart className="size-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-cheddar text-charcoal text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                {cartCount}
              </span>
            )}
          </button>
          <Link
            to="/order"
            className="hidden sm:inline-flex items-center px-4 py-2 bg-paprika hover:bg-tomato transition-colors text-white text-sm font-semibold rounded uppercase tracking-wide"
          >
            Order Now
          </Link>
          <button
            className="md:hidden p-2 text-cream"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-charcoal border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-cream font-medium uppercase text-sm py-2"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/order"
                className="mt-2 inline-flex justify-center px-4 py-3 bg-paprika text-white font-semibold uppercase tracking-wide rounded"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
