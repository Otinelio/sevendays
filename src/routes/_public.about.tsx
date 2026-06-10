import { createFileRoute } from "@tanstack/react-router";
import { Zap, Heart, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/_public/about")({
  head: () => ({
    meta: [
      { title: "Our Story | sevendays" },
      { name: "description", content: "How sevendays started — bold flavors, every day of the week, in Lomé." },
      { property: "og:title", content: "Our Story — sevendays" },
      { property: "og:description", content: "Great food shouldn't make you wait. The sevendays story." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Zap, title: "Speed", body: "Ready in minutes, never rushed in quality." },
  { icon: Heart, title: "Generosity", body: "Big portions, honest prices. Always." },
  { icon: Star, title: "Consistency", body: "The same great taste, 7 days a week, every week." },
];

const timeline = [
  { year: "2018", text: "sevendays founded with 5 tables and a dream." },
  { year: "2019", text: "Introduced delivery service across Lomé." },
  { year: "2021", text: "Expanded menu to include pizzas and wraps." },
  { year: "2023", text: "Hit 5,000 happy customers milestone." },
  { year: "2024", text: "New location + online ordering launch." },
];

function AboutPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&h=900&fit=crop" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <h1 className="relative font-display font-black uppercase text-cream" style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}>
          Our Story
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=900&fit=crop" alt="Kitchen" className="rounded-lg w-full object-cover aspect-[4/5]" />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="border-l-4 border-paprika pl-6">
            <h2 className="font-display font-black uppercase text-4xl mb-4">Born for the city.</h2>
            <p className="text-cream/80 leading-relaxed">
              sevendays was born from a simple belief — great food shouldn't make you wait or cost a fortune. Based in the heart of Lomé, we bring bold, generous flavors to every table, every day of the week. From our signature smash burgers to wood-fired pizzas and hand-rolled shawarma wraps, every item on our menu is made with real ingredients and real passion.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i * 0.1}>
            <div className="glass rounded-lg p-8 h-full">
              <v.icon className="size-10 text-cheddar mb-4" />
              <h3 className="font-display font-bold uppercase text-2xl text-cream mb-2">{v.title}</h3>
              <p className="text-cream/70">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <Reveal>
          <h2 className="font-display font-black uppercase text-4xl text-center mb-12">Our Journey</h2>
        </Reveal>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-paprika/30 hidden sm:block" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className={`flex flex-col sm:flex-row gap-6 items-center ${i % 2 ? "sm:flex-row-reverse" : ""}`}>
                  <div className="sm:w-1/2 sm:text-right">
                    <div className={`bg-card border border-white/10 rounded-lg p-5 ${i % 2 ? "sm:text-left" : ""}`}>
                      <div className="font-display font-black text-cheddar text-2xl">{t.year}</div>
                      <p className="text-cream/80 text-sm mt-1">{t.text}</p>
                    </div>
                  </div>
                  <div className="size-4 rounded-full bg-paprika ring-4 ring-charcoal relative z-10" />
                  <div className="sm:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
