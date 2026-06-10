import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { z } from "zod";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { MenuCard } from "@/components/MenuCard";
import { Reveal } from "@/components/Reveal";
import {
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  defaultMenu,
  type MenuCategory,
} from "@/data/defaultMenu";

const allCats = ["all", ...CATEGORY_ORDER] as const;
const searchSchema = z.object({
  cat: fallback(z.enum(allCats), "all").default("all"),
});

export const Route = createFileRoute("/_public/menu")({
  head: () => ({
    meta: [
      { title: "Our Menu | sevendays Restaurant" },
      { name: "description", content: "Full menu — burgers, pizzas, snacks, wraps, sides, drinks, combos. Lomé, Togo." },
      { property: "og:title", content: "Menu — sevendays" },
      { property: "og:description", content: "Bold flavors, generous portions. Order online or via WhatsApp." },
    ],
  }),
  validateSearch: zodValidator(searchSchema),
  component: MenuPage,
});

function MenuPage() {
  const { cat } = Route.useSearch();
  const nav = Route.useNavigate();

  const visibleCategories = useMemo(
    () => (cat === "all" ? CATEGORY_ORDER : ([cat] as MenuCategory[])),
    [cat],
  );

  return (
    <>
      <section className="relative h-[55vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=900&fit=crop"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 to-charcoal" />
        <div className="relative text-center px-6">
          <h1 className="font-display font-black uppercase text-cream" style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}>
            Our Menu
          </h1>
          <p className="text-cream/70 mt-2 text-lg">Fresh · Bold · Generous</p>
        </div>
      </section>

      <div className="sticky top-16 z-40 bg-charcoal/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {allCats.map((c) => {
              const active = cat === c;
              return (
                <button
                  key={c}
                  onClick={() => nav({ search: { cat: c }, replace: true })}
                  className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide whitespace-nowrap border-b-2 transition-colors ${
                    active ? "text-paprika border-paprika" : "text-cream/60 border-transparent hover:text-cream"
                  }`}
                >
                  {c === "all" ? "All" : CATEGORY_LABELS[c as MenuCategory]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {visibleCategories.map((catKey) => {
          const items = defaultMenu.filter((i) => i.category === catKey);
          return (
            <section key={catKey} id={catKey}>
              <Reveal>
                <h2 className="font-display font-black uppercase text-3xl sm:text-4xl mb-6 border-l-4 border-paprika pl-4">
                  {CATEGORY_LABELS[catKey]}
                </h2>
              </Reveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((i, idx) => (
                  <Reveal key={i.id} delay={idx * 0.03}>
                    <MenuCard item={i} />
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
