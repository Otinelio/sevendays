import { create } from "zustand";
import { persist } from "zustand/middleware";

type Settings = {
  whatsapp: string; // raw digits
  restaurantName: string;
  address: string;
  hours: string;
  instagram: string;
  facebook: string;
};

type SettingsState = Settings & {
  set: (patch: Partial<Settings>) => void;
};

export const DEFAULT_SETTINGS: Settings = {
  whatsapp: "22893121213",
  restaurantName: "sevendays",
  address: "Av. de la Chance, Lomé, Togo",
  hours: "Daily 10:00 – 00:00",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
};

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      ...DEFAULT_SETTINGS,
      set: (patch) => set((s) => ({ ...s, ...patch })),
    }),
    { name: "sevendays_settings" },
  ),
);

export const whatsappUrl = (text?: string) => {
  const num = useSettings.getState().whatsapp;
  const base = `https://wa.me/${num}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};
