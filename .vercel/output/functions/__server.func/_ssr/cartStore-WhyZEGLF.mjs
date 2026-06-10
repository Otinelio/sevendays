import { c as create, p as persist } from "../_libs/zustand.mjs";
const useCart = create()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((s) => ({ isOpen: !s.isOpen })),
      add: (item, qty = 1) => set((s) => {
        const existing = s.items.find((i) => i.id === item.id);
        if (existing) {
          return {
            items: s.items.map(
              (i) => i.id === item.id ? { ...i, qty: i.qty + qty } : i
            )
          };
        }
        return { items: [...s.items, { ...item, qty }] };
      }),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      setQty: (id, qty) => set((s) => ({
        items: qty <= 0 ? s.items.filter((i) => i.id !== id) : s.items.map((i) => i.id === id ? { ...i, qty } : i)
      })),
      clear: () => set({ items: [] }),
      count: () => get().items.reduce((sum, i) => sum + i.qty, 0),
      subtotal: () => get().items.reduce((sum, i) => sum + i.qty * i.price, 0)
    }),
    { name: "sevendays_cart" }
  )
);
export {
  useCart as u
};
