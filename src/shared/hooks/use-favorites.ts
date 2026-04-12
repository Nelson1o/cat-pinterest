import { useState, useEffect } from "react";

import type { Cat } from "../types";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Cat[]>(() => {
    const saved = localStorage.getItem("favorites");

    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (cat: Cat) => {
    setFavorites((prev) => {
      const isFavorite = prev.some((item) => item.id === cat.id);

      return isFavorite
        ? prev.filter((item) => item.id !== cat.id)
        : [...prev, cat];
    });
  };

  const isFavorite = (catId: string) =>
    favorites.some((item) => item.id === catId);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
};
