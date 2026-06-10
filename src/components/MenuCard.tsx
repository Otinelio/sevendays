import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useCart } from "@/store/cartStore";
import { formatFCFA, type MenuItem } from "@/data/defaultMenu";
import { toast } from "sonner";

export function MenuCard({ item }: { item: MenuItem }) {
  const add = useCart((s) => s.add);
  const soldOut = !!item.sold_out;
  return (
    <motion.div
      whileHover={{ scale: soldOut ? 1 : 1.03, y: soldOut ? 0 : -4 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-lg bg-card border border-white/10 hover:shadow-2xl hover:shadow-paprika/20"
    >
      <div className="aspect-[4/3] overflow-hidden bg-black">
        <img
          src={item.image_url}
          alt={item.name}
          loading="lazy"
          className={`size-full object-cover transition-transform duration-500 group-hover:scale-110 ${soldOut ? "grayscale opacity-50" : ""}`}
        />
        {soldOut && (
          <div className="absolute top-3 left-3 bg-charcoal/90 text-cream text-xs font-bold uppercase tracking-wider px-2 py-1 rounded border border-paprika">
            Sold Out
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-bold text-lg text-cream uppercase tracking-tight leading-tight">
            {item.name}
          </h3>
          <span className="font-display font-bold text-cheddar shrink-0">
            {formatFCFA(item.price_fcfa)}
          </span>
        </div>
        <p className="text-xs text-cream/60 line-clamp-2">{item.description}</p>
        <button
          disabled={soldOut}
          onClick={() => {
            add({ id: item.id, name: item.name, price: item.price_fcfa, image: item.image_url });
            toast.success(`${item.name} added`);
          }}
          className="w-full mt-2 inline-flex items-center justify-center gap-1 bg-paprika hover:bg-tomato disabled:bg-muted disabled:text-cream/40 disabled:cursor-not-allowed text-white text-sm font-semibold py-2 rounded uppercase tracking-wide transition-colors"
        >
          <Plus className="size-4" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
