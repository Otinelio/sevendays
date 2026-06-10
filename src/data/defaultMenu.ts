export type MenuCategory =
  | "burgers"
  | "pizzas"
  | "snacks"
  | "wraps"
  | "sides"
  | "drinks"
  | "combos";

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price_fcfa: number;
  image_url: string;
  sold_out?: boolean;
  sort_order?: number;
};

export const CATEGORY_LABELS: Record<MenuCategory, string> = {
  burgers: "BURGERS",
  pizzas: "PIZZAS",
  snacks: "SNACKS",
  wraps: "WRAPS & SANDWICHES",
  sides: "SIDES",
  drinks: "DRINKS",
  combos: "COMBOS",
};

export const CATEGORY_ORDER: MenuCategory[] = [
  "burgers",
  "pizzas",
  "snacks",
  "wraps",
  "sides",
  "drinks",
  "combos",
];

export const defaultMenu: MenuItem[] = [
  // BURGERS
  { id: "b1", category: "burgers", name: "Sevendays Classic Burger", description: "Double beef patty, cheddar, caramelized onion, special sauce", price_fcfa: 3500, image_url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop" },
  { id: "b2", category: "burgers", name: "BBQ Smash Burger", description: "Smashed double patty, smoky BBQ sauce, jalapeños, pickles", price_fcfa: 4000, image_url: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&h=600&fit=crop" },
  { id: "b3", category: "burgers", name: "Chicken Crunch Burger", description: "Crispy fried chicken, coleslaw, garlic aioli, brioche", price_fcfa: 3500, image_url: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&h=600&fit=crop" },
  { id: "b4", category: "burgers", name: "The Beast", description: "Triple beef patty, double bacon, double cheddar, fried egg", price_fcfa: 5500, image_url: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=600&fit=crop" },
  { id: "b5", category: "burgers", name: "Veggie Delight", description: "Black bean patty, avocado, fresh salad, lemon mayo", price_fcfa: 3000, image_url: "https://images.unsplash.com/photo-1520072959219-c595e6cdc07a?w=800&h=600&fit=crop" },
  { id: "b6", category: "burgers", name: "Spicy Lava Burger", description: "Beef patty, ghost pepper sauce, jalapeños, pepper jack", price_fcfa: 4500, image_url: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&h=600&fit=crop" },

  // PIZZAS
  { id: "p1", category: "pizzas", name: "Margherita Pizz'7", description: "San Marzano tomato, fresh mozzarella, fresh basil", price_fcfa: 4500, image_url: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop" },
  { id: "p2", category: "pizzas", name: "Pepperoni Fire", description: "Spicy pepperoni, double mozzarella, chili oil drizzle", price_fcfa: 5000, image_url: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&h=600&fit=crop" },
  { id: "p3", category: "pizzas", name: "BBQ Chicken", description: "Grilled chicken, BBQ sauce, red onion, mozzarella, parsley", price_fcfa: 5500, image_url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop" },
  { id: "p4", category: "pizzas", name: "Four Cheese", description: "Mozzarella, gorgonzola, emmental, parmesan", price_fcfa: 5500, image_url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop" },
  { id: "p5", category: "pizzas", name: "Royale Meat", description: "Beef, chicken, merguez, pepperoni, double cheese", price_fcfa: 6000, image_url: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&h=600&fit=crop" },
  { id: "p6", category: "pizzas", name: "Veggie Supreme", description: "Roasted peppers, mushrooms, olives, pesto base, feta", price_fcfa: 4500, image_url: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=800&h=600&fit=crop" },

  // SNACKS
  { id: "s1", category: "snacks", name: "Loaded Fries", description: "Crispy fries, cheddar cheese sauce, crispy bacon, spring onions", price_fcfa: 2500, image_url: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop" },
  { id: "s2", category: "snacks", name: "Onion Rings (8 pcs)", description: "Golden battered rings, spicy sriracha dip", price_fcfa: 2000, image_url: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&h=600&fit=crop" },
  { id: "s3", category: "snacks", name: "Chicken Wings (6 pcs)", description: "Choice: BBQ / Spicy Buffalo / Garlic Parmesan", price_fcfa: 3000, image_url: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&h=600&fit=crop" },
  { id: "s4", category: "snacks", name: "Mozzarella Sticks (5 pcs)", description: "Crispy fried, with marinara dipping sauce", price_fcfa: 2500, image_url: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=800&h=600&fit=crop" },
  { id: "s5", category: "snacks", name: "Mini Sliders (3 pcs)", description: "Bite-sized beef sliders, trio of sauces", price_fcfa: 3000, image_url: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop" },
  { id: "s6", category: "snacks", name: "Fried Chicken Tenders (4 pcs)", description: "Crispy tenders, honey mustard sauce", price_fcfa: 3000, image_url: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&h=600&fit=crop" },

  // WRAPS
  { id: "w1", category: "wraps", name: "Chicken Shawarma Wrap", description: "Grilled chicken, garlic sauce, pickles, tomatoes, fresh veggies", price_fcfa: 3000, image_url: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&h=600&fit=crop" },
  { id: "w2", category: "wraps", name: "Beef Shawarma Wrap", description: "Marinated beef strips, tahini sauce, veggies, sumac", price_fcfa: 3500, image_url: "https://images.unsplash.com/photo-1561651188-d207bbec4ec3?w=800&h=600&fit=crop" },
  { id: "w3", category: "wraps", name: "Club Sandwich", description: "Triple-decker: chicken, bacon, egg, lettuce, tomato, mayo", price_fcfa: 3500, image_url: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800&h=600&fit=crop" },
  { id: "w4", category: "wraps", name: "Kafta Roll", description: "Spiced beef kafta, onion, parsley, harissa, flatbread", price_fcfa: 3000, image_url: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=800&h=600&fit=crop" },
  { id: "w5", category: "wraps", name: "Chicken Caesar Wrap", description: "Grilled chicken, romaine, parmesan, caesar dressing", price_fcfa: 3000, image_url: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=600&fit=crop" },

  // SIDES
  { id: "sd1", category: "sides", name: "Classic Fries", description: "Crispy golden fries", price_fcfa: 1500, image_url: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=800&h=600&fit=crop" },
  { id: "sd2", category: "sides", name: "Sweet Potato Fries", description: "Crispy sweet potato wedges", price_fcfa: 2000, image_url: "https://images.unsplash.com/photo-1623238914382-6da26cfb5342?w=800&h=600&fit=crop" },
  { id: "sd3", category: "sides", name: "Coleslaw", description: "Fresh and creamy", price_fcfa: 1000, image_url: "https://images.unsplash.com/photo-1625938144755-652e08e359b7?w=800&h=600&fit=crop" },
  { id: "sd4", category: "sides", name: "Garden Side Salad", description: "Mixed greens, tomato, cucumber", price_fcfa: 1500, image_url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop" },
  { id: "sd5", category: "sides", name: "Garlic Bread (4 pcs)", description: "Toasted with garlic butter", price_fcfa: 1500, image_url: "https://images.unsplash.com/photo-1619535860434-ba1d8fa12536?w=800&h=600&fit=crop" },

  // DRINKS
  { id: "d1", category: "drinks", name: "Soft Drinks (33cl)", description: "Coca-Cola / Fanta / Sprite", price_fcfa: 800, image_url: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800&h=600&fit=crop" },
  { id: "d2", category: "drinks", name: "Fresh Orange Juice", description: "Freshly squeezed", price_fcfa: 1500, image_url: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&h=600&fit=crop" },
  { id: "d3", category: "drinks", name: "Grapefruit Juice", description: "Fresh and tangy", price_fcfa: 1500, image_url: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&h=600&fit=crop" },
  { id: "d4", category: "drinks", name: "Bissap Frais", description: "Chilled hibiscus drink", price_fcfa: 1000, image_url: "https://images.unsplash.com/photo-1544252890-c3e95e867399?w=800&h=600&fit=crop" },
  { id: "d5", category: "drinks", name: "Milkshake", description: "Vanilla / Chocolate / Strawberry / Caramel", price_fcfa: 2500, image_url: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&h=600&fit=crop" },
  { id: "d6", category: "drinks", name: "Bottled Water (50cl)", description: "Still water", price_fcfa: 500, image_url: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&h=600&fit=crop" },
  { id: "d7", category: "drinks", name: "Iced Tea", description: "Peach or Lemon", price_fcfa: 1200, image_url: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&h=600&fit=crop" },

  // COMBOS
  { id: "c1", category: "combos", name: "Burger Combo", description: "Any burger + Classic Fries + Soft Drink — Save 1,000 FCFA", price_fcfa: 5300, image_url: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=800&h=600&fit=crop" },
  { id: "c2", category: "combos", name: "Pizza Combo", description: "Any pizza + Side Salad + Soft Drink — Save 1,500 FCFA", price_fcfa: 6300, image_url: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=800&h=600&fit=crop" },
  { id: "c3", category: "combos", name: "Family Pack", description: "2 Classic Burgers + 1 Royale Meat Pizza + 4 Soft Drinks + 2 Classic Fries", price_fcfa: 18000, image_url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop" },
  { id: "c4", category: "combos", name: "Snack Attack", description: "2 Snacks of your choice + 1 Drink", price_fcfa: 4000, image_url: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&h=600&fit=crop" },
  { id: "c5", category: "combos", name: "Shawarma Duo", description: "2 Wraps (any) + 2 Soft Drinks", price_fcfa: 6500, image_url: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=600&fit=crop" },
];

export const formatFCFA = (n: number) =>
  `${n.toLocaleString("fr-FR").replace(/\u202f/g, ",")} FCFA`;
