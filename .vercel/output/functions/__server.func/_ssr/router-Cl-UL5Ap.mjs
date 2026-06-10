import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as Toaster } from "../_libs/sonner.mjs";
import { z as zodValidator, f as fallback } from "../_libs/tanstack__zod-adapter.mjs";
import { o as objectType, e as enumType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-B3TLWtK5.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "sevendays | Burgers · Pizzas · Snacks — Lomé, Togo" },
      { name: "description", content: "Urban fast casual in Lomé. Bold burgers, wood-fired pizzas, generous snacks. Open every day, 10:00 – 00:00." },
      { name: "theme-color", content: "#B62828" },
      { property: "og:title", content: "sevendays — Open every day. Full every time." },
      { property: "og:description", content: "Burgers · Pizzas · Snacks · Wraps. Lomé, Togo." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "sevendays" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Inter:wght@400;500;600&display=swap"
      },
      { rel: "manifest", href: "/manifest.json" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { className: "bg-charcoal text-cream antialiased", children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { theme: "dark", position: "bottom-center", richColors: true })
  ] });
}
const $$splitComponentImporter$9 = () => import("./reception-BtX9AT1V.mjs");
const Route$9 = createFileRoute("/reception")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./admin-B8m7m3E9.mjs");
const Route$8 = createFileRoute("/admin")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("../_public-Bv_1PDTm.mjs");
const Route$7 = createFileRoute("/_public")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("../_public.index-LyB_fZ-w.mjs");
const Route$6 = createFileRoute("/_public/")({
  head: () => ({
    meta: [{
      title: "sevendays | Burgers · Pizzas · Snacks — Lomé, Togo"
    }, {
      name: "description",
      content: "Bold burgers, wood-fired pizzas, generous snacks. Open every day in Lomé, Togo."
    }, {
      property: "og:title",
      content: "sevendays — Open every day. Full every time."
    }, {
      property: "og:description",
      content: "Urban Fast Casual. Burgers · Pizzas · Snacks · Wraps."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./table._tableNumber-CqDORO-h.mjs");
const Route$5 = createFileRoute("/table/$tableNumber")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("../_public.order-CWxeAuhl.mjs");
const Route$4 = createFileRoute("/_public/order")({
  head: () => ({
    meta: [{
      title: "Order & Reserve | sevendays"
    }, {
      name: "description",
      content: "Reserve a table, order takeaway, or get delivery from sevendays in Lomé."
    }, {
      property: "og:title",
      content: "Order — sevendays"
    }, {
      property: "og:description",
      content: "Dine-in, takeaway, or delivery. Three ways to enjoy sevendays."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const CATEGORY_LABELS = {
  burgers: "BURGERS",
  pizzas: "PIZZAS",
  snacks: "SNACKS",
  wraps: "WRAPS & SANDWICHES",
  sides: "SIDES",
  drinks: "DRINKS",
  combos: "COMBOS"
};
const CATEGORY_ORDER = [
  "burgers",
  "pizzas",
  "snacks",
  "wraps",
  "sides",
  "drinks",
  "combos"
];
const defaultMenu = [
  // BURGERS
  { id: "b1", category: "burgers", name: "Sevendays Classic Burger", description: "Double beef patty, cheddar, caramelized onion, special sauce", price_fcfa: 3500, image_url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop" },
  { id: "b2", category: "burgers", name: "BBQ Smash Burger", description: "Smashed double patty, smoky BBQ sauce, jalapeños, pickles", price_fcfa: 4e3, image_url: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&h=600&fit=crop" },
  { id: "b3", category: "burgers", name: "Chicken Crunch Burger", description: "Crispy fried chicken, coleslaw, garlic aioli, brioche", price_fcfa: 3500, image_url: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&h=600&fit=crop" },
  { id: "b4", category: "burgers", name: "The Beast", description: "Triple beef patty, double bacon, double cheddar, fried egg", price_fcfa: 5500, image_url: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=600&fit=crop" },
  { id: "b5", category: "burgers", name: "Veggie Delight", description: "Black bean patty, avocado, fresh salad, lemon mayo", price_fcfa: 3e3, image_url: "https://images.unsplash.com/photo-1520072959219-c595e6cdc07a?w=800&h=600&fit=crop" },
  { id: "b6", category: "burgers", name: "Spicy Lava Burger", description: "Beef patty, ghost pepper sauce, jalapeños, pepper jack", price_fcfa: 4500, image_url: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&h=600&fit=crop" },
  // PIZZAS
  { id: "p1", category: "pizzas", name: "Margherita Pizz'7", description: "San Marzano tomato, fresh mozzarella, fresh basil", price_fcfa: 4500, image_url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop" },
  { id: "p2", category: "pizzas", name: "Pepperoni Fire", description: "Spicy pepperoni, double mozzarella, chili oil drizzle", price_fcfa: 5e3, image_url: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=600&fit=crop" },
  { id: "p3", category: "pizzas", name: "BBQ Chicken", description: "Grilled chicken, BBQ sauce, red onion, mozzarella, parsley", price_fcfa: 5500, image_url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop" },
  { id: "p4", category: "pizzas", name: "Four Cheese", description: "Mozzarella, gorgonzola, emmental, parmesan", price_fcfa: 5500, image_url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop" },
  { id: "p5", category: "pizzas", name: "Royale Meat", description: "Beef, chicken, merguez, pepperoni, double cheese", price_fcfa: 6e3, image_url: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&h=600&fit=crop" },
  { id: "p6", category: "pizzas", name: "Veggie Supreme", description: "Roasted peppers, mushrooms, olives, pesto base, feta", price_fcfa: 4500, image_url: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=800&h=600&fit=crop" },
  // SNACKS
  { id: "s1", category: "snacks", name: "Loaded Fries", description: "Crispy fries, cheddar cheese sauce, crispy bacon, spring onions", price_fcfa: 2500, image_url: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop" },
  { id: "s2", category: "snacks", name: "Onion Rings (8 pcs)", description: "Golden battered rings, spicy sriracha dip", price_fcfa: 2e3, image_url: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&h=600&fit=crop" },
  { id: "s3", category: "snacks", name: "Chicken Wings (6 pcs)", description: "Choice: BBQ / Spicy Buffalo / Garlic Parmesan", price_fcfa: 3e3, image_url: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&h=600&fit=crop" },
  { id: "s4", category: "snacks", name: "Mozzarella Sticks (5 pcs)", description: "Crispy fried, with marinara dipping sauce", price_fcfa: 2500, image_url: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=800&h=600&fit=crop" },
  { id: "s5", category: "snacks", name: "Mini Sliders (3 pcs)", description: "Bite-sized beef sliders, trio of sauces", price_fcfa: 3e3, image_url: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop" },
  { id: "s6", category: "snacks", name: "Fried Chicken Tenders (4 pcs)", description: "Crispy tenders, honey mustard sauce", price_fcfa: 3e3, image_url: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&h=600&fit=crop" },
  // WRAPS
  { id: "w1", category: "wraps", name: "Chicken Shawarma Wrap", description: "Grilled chicken, garlic sauce, pickles, tomatoes, fresh veggies", price_fcfa: 3e3, image_url: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop" },
  { id: "w2", category: "wraps", name: "Beef Shawarma Wrap", description: "Marinated beef strips, tahini sauce, veggies, sumac", price_fcfa: 3500, image_url: "https://images.unsplash.com/photo-1561651188-d207bbec4ec3?w=800&h=600&fit=crop" },
  { id: "w3", category: "wraps", name: "Club Sandwich", description: "Triple-decker: chicken, bacon, egg, lettuce, tomato, mayo", price_fcfa: 3500, image_url: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&h=600&fit=crop" },
  { id: "w4", category: "wraps", name: "Kafta Roll", description: "Spiced beef kafta, onion, parsley, harissa, flatbread", price_fcfa: 3e3, image_url: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=800&h=600&fit=crop" },
  { id: "w5", category: "wraps", name: "Chicken Caesar Wrap", description: "Grilled chicken, romaine, parmesan, caesar dressing", price_fcfa: 3e3, image_url: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=600&fit=crop" },
  // SIDES
  { id: "sd1", category: "sides", name: "Classic Fries", description: "Crispy golden fries", price_fcfa: 1500, image_url: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&h=600&fit=crop" },
  { id: "sd2", category: "sides", name: "Sweet Potato Fries", description: "Crispy sweet potato wedges", price_fcfa: 2e3, image_url: "https://images.unsplash.com/photo-1623238914382-6da26cfb5342?w=800&h=600&fit=crop" },
  { id: "sd3", category: "sides", name: "Coleslaw", description: "Fresh and creamy", price_fcfa: 1e3, image_url: "https://images.unsplash.com/photo-1625938144755-652e08e359b7?w=800&h=600&fit=crop" },
  { id: "sd4", category: "sides", name: "Garden Side Salad", description: "Mixed greens, tomato, cucumber", price_fcfa: 1500, image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop" },
  { id: "sd5", category: "sides", name: "Garlic Bread (4 pcs)", description: "Toasted with garlic butter", price_fcfa: 1500, image_url: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=800&h=600&fit=crop" },
  // DRINKS
  { id: "d1", category: "drinks", name: "Soft Drinks (33cl)", description: "Coca-Cola / Fanta / Sprite", price_fcfa: 800, image_url: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800&h=600&fit=crop" },
  { id: "d2", category: "drinks", name: "Fresh Orange Juice", description: "Freshly squeezed", price_fcfa: 1500, image_url: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&h=600&fit=crop" },
  { id: "d3", category: "drinks", name: "Grapefruit Juice", description: "Fresh and tangy", price_fcfa: 1500, image_url: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=600&fit=crop" },
  { id: "d4", category: "drinks", name: "Bissap Frais", description: "Chilled hibiscus drink", price_fcfa: 1e3, image_url: "https://images.unsplash.com/photo-1544252890-c3e95e867399?w=800&h=600&fit=crop" },
  { id: "d5", category: "drinks", name: "Milkshake", description: "Vanilla / Chocolate / Strawberry / Caramel", price_fcfa: 2500, image_url: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=600&fit=crop" },
  { id: "d6", category: "drinks", name: "Bottled Water (50cl)", description: "Still water", price_fcfa: 500, image_url: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&h=600&fit=crop" },
  { id: "d7", category: "drinks", name: "Iced Tea", description: "Peach or Lemon", price_fcfa: 1200, image_url: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop" },
  // COMBOS
  { id: "c1", category: "combos", name: "Burger Combo", description: "Any burger + Classic Fries + Soft Drink — Save 1,000 FCFA", price_fcfa: 5300, image_url: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=800&h=600&fit=crop" },
  { id: "c2", category: "combos", name: "Pizza Combo", description: "Any pizza + Side Salad + Soft Drink — Save 1,500 FCFA", price_fcfa: 6300, image_url: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&h=600&fit=crop" },
  { id: "c3", category: "combos", name: "Family Pack", description: "2 Classic Burgers + 1 Royale Meat Pizza + 4 Soft Drinks + 2 Classic Fries", price_fcfa: 18e3, image_url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop" },
  { id: "c4", category: "combos", name: "Snack Attack", description: "2 Snacks of your choice + 1 Drink", price_fcfa: 4e3, image_url: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&h=600&fit=crop" },
  { id: "c5", category: "combos", name: "Shawarma Duo", description: "2 Wraps (any) + 2 Soft Drinks", price_fcfa: 6500, image_url: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=600&fit=crop" }
];
const formatFCFA = (n) => `${n.toLocaleString("fr-FR").replace(/\u202f/g, ",")} FCFA`;
const allCats = ["all", ...CATEGORY_ORDER];
const $$splitComponentImporter$3 = () => import("../_public.menu-I-c8xIE4.mjs");
const searchSchema = objectType({
  cat: fallback(enumType(allCats), "all").default("all")
});
const Route$3 = createFileRoute("/_public/menu")({
  head: () => ({
    meta: [{
      title: "Our Menu | sevendays Restaurant"
    }, {
      name: "description",
      content: "Full menu — burgers, pizzas, snacks, wraps, sides, drinks, combos. Lomé, Togo."
    }, {
      property: "og:title",
      content: "Menu — sevendays"
    }, {
      property: "og:description",
      content: "Bold flavors, generous portions. Order online or via WhatsApp."
    }]
  }),
  validateSearch: zodValidator(searchSchema),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("../_public.gallery-CINkLEJf.mjs");
const Route$2 = createFileRoute("/_public/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery | sevendays"
    }, {
      name: "description",
      content: "Photos from sevendays — food, interior, packaging, team."
    }, {
      property: "og:title",
      content: "Gallery — sevendays"
    }, {
      property: "og:description",
      content: "A look inside our kitchen, our food, and our team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("../_public.contact-BEvsaUMO.mjs");
const Route$1 = createFileRoute("/_public/contact")({
  head: () => ({
    meta: [{
      title: "Contact & Location | sevendays — Av. de la Chance, Lomé"
    }, {
      name: "description",
      content: "Visit sevendays at Av. de la Chance, Lomé. Open daily 10:00 – midnight. +228 93 12 12 13."
    }, {
      property: "og:title",
      content: "Contact — sevendays"
    }, {
      property: "og:description",
      content: "Find us, call us, or message us on WhatsApp."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_public.about-BWEiIm-n.mjs");
const Route = createFileRoute("/_public/about")({
  head: () => ({
    meta: [{
      title: "Our Story | sevendays"
    }, {
      name: "description",
      content: "How sevendays started — bold flavors, every day of the week, in Lomé."
    }, {
      property: "og:title",
      content: "Our Story — sevendays"
    }, {
      property: "og:description",
      content: "Great food shouldn't make you wait. The sevendays story."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ReceptionRoute = Route$9.update({
  id: "/reception",
  path: "/reception",
  getParentRoute: () => Route$a
});
const AdminRoute = Route$8.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$a
});
const PublicRoute = Route$7.update({
  id: "/_public",
  getParentRoute: () => Route$a
});
const PublicIndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => PublicRoute
});
const TableTableNumberRoute = Route$5.update({
  id: "/table/$tableNumber",
  path: "/table/$tableNumber",
  getParentRoute: () => Route$a
});
const PublicOrderRoute = Route$4.update({
  id: "/order",
  path: "/order",
  getParentRoute: () => PublicRoute
});
const PublicMenuRoute = Route$3.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => PublicRoute
});
const PublicGalleryRoute = Route$2.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => PublicRoute
});
const PublicContactRoute = Route$1.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => PublicRoute
});
const PublicAboutRoute = Route.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => PublicRoute
});
const PublicRouteChildren = {
  PublicAboutRoute,
  PublicContactRoute,
  PublicGalleryRoute,
  PublicMenuRoute,
  PublicOrderRoute,
  PublicIndexRoute
};
const PublicRouteWithChildren = PublicRoute._addFileChildren(PublicRouteChildren);
const rootRouteChildren = {
  PublicRoute: PublicRouteWithChildren,
  AdminRoute,
  ReceptionRoute,
  TableTableNumberRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CATEGORY_ORDER as C,
  Route$5 as R,
  CATEGORY_LABELS as a,
  Route$3 as b,
  allCats as c,
  defaultMenu as d,
  formatFCFA as f,
  router as r
};
