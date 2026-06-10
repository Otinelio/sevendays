import { c as create, p as persist } from "../_libs/zustand.mjs";
const DEFAULT_SETTINGS = {
  whatsapp: "22893121213",
  restaurantName: "sevendays",
  address: "Av. de la Chance, Lomé, Togo",
  hours: "Daily 10:00 – 00:00",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/"
};
const useSettings = create()(
  persist(
    (set) => ({
      ...DEFAULT_SETTINGS,
      set: (patch) => set((s) => ({ ...s, ...patch }))
    }),
    { name: "sevendays_settings" }
  )
);
const whatsappUrl = (text) => {
  const num = useSettings.getState().whatsapp;
  const base = `https://wa.me/${num}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};
export {
  useSettings as u,
  whatsappUrl as w
};
