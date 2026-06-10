import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { MenuCard } from "@/components/MenuCard";
import { defaultMenu } from "@/data/defaultMenu";

export const Route = createFileRoute("/_public/")({
  head: () => ({
    meta: [
      { title: "sevendays | Burgers · Pizzas · Snacks — Lomé, Togo" },
      { name: "description", content: "Bold burgers, wood-fired pizzas, generous snacks. Open every day in Lomé, Togo." },
      { property: "og:title", content: "sevendays — Open every day. Full every time." },
      { property: "og:description", content: "Urban Fast Casual. Burgers · Pizzas · Snacks · Wraps." },
    ],
  }),
  component: HomePage,
});

const categories = [
  { key: "burgers", label: "BURGERS", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=800&fit=crop" },
  { key: "pizzas", label: "PIZZAS", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=800&fit=crop" },
  { key: "snacks", label: "SNACKS", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=800&fit=crop" },
  { key: "combos", label: "COMBOS", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=800&fit=crop" },
];

const reviews = [
  { name: "Amina K.", text: "The BBQ Smash Burger is insane. Worth every franc." },
  { name: "Jean-Paul M.", text: "Best pizza in Lomé, no contest. Fast delivery too." },
  { name: "Fatou D.", text: "Great food, great price. We come every week." },
  { name: "Marcus T.", text: "Finally a place that does burgers RIGHT in Togo." },
];

function HomePage() {
  const topPicks = defaultMenu.filter((i) =>
    ["b1", "b2", "p1", "p2", "w1", "s1"].includes(i.id),
  );

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&h=1080&fit=crop"
            alt="Gourmet burger"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/90" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display font-black uppercase text-cream leading-[0.85] text-balance"
            style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)" }}
          >
            EVERY. DAY.<br />DELICIOUS.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-cream/80"
          >
            Burgers · Pizzas · Snacks · Fast & Generous
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Link to="/menu" className="bg-paprika hover:bg-tomato text-white px-7 py-3 rounded font-semibold uppercase tracking-wide inline-flex items-center gap-2">
              View Menu <ArrowRight className="size-4" />
            </Link>
            <a href="https://wa.me/22893121213" target="_blank" rel="noreferrer" className="border border-cream/40 hover:bg-cream hover:text-charcoal text-cream px-7 py-3 rounded font-semibold uppercase tracking-wide">
              Order via WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-8 left-6 sm:left-10 z-10 bg-charcoal/80 border border-white/15 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 text-xs sm:text-sm text-cream"
        >
          <span className="relative flex size-2">
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping" />
            <span className="relative rounded-full size-2 bg-green-500" />
          </span>
          <Clock className="size-4" />
          Open today · 10:00 – 00:00
        </motion.div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <Reveal>
          <h2 className="font-display font-black uppercase text-4xl sm:text-5xl text-center mb-10">Pick Your Craving</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c, i) => (
            <Reveal key={c.key} delay={i * 0.08}>
              <Link
                to="/menu"
                search={{ cat: c.key as any }}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg block border-b-4 border-transparent hover:border-paprika transition-colors"
              >
                <img src={c.img} alt={c.label} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="font-display font-bold uppercase text-2xl text-cream">{c.label}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-paprika py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { n: 7, l: "Days open per week" },
            { n: 30, l: "Menu items", suf: "+" },
            { n: 5000, l: "Happy clients", suf: "+" },
            { n: 30, l: "Min avg delivery" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display font-black text-5xl sm:text-6xl leading-none">
                <Counter to={s.n} suffix={s.suf || ""} />
              </div>
              <div className="mt-2 text-sm uppercase tracking-wide text-white/80">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TOP PICKS */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <Reveal>
          <h2 className="font-display font-black uppercase text-4xl sm:text-5xl text-center mb-2">Top Picks</h2>
          <p className="text-center text-cream/60 mb-12">The crowd favorites — every single day.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topPicks.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <MenuCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <Reveal>
          <h2 className="font-display font-black uppercase text-3xl sm:text-4xl text-center mb-12">What Our Clients Say</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {reviews.slice(0, 3).map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <div className="bg-card border border-white/10 rounded-lg p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-cheddar text-cheddar" />
                  ))}
                </div>
                <p className="text-cream/80 italic">"{r.text}"</p>
                <div className="mt-4 font-semibold text-cream">{r.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
