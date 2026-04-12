import type { Tabs } from "../types";

export const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = "https://api.thecatapi.com/v1";

export const TABS: Tabs[] = [
  {
    link: "/gallery",
    title: "Все котики",
  },
  {
    link: "/favorites",
    title: "Любимые котики",
  },
];
