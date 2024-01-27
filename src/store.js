import { create } from "zustand";
import { persist } from "zustand/middleware";
let useStore = (set, get) => ({
  categories: [],
  meals: [],
  favourites: [],
  fetchCategories: async () => {
    const apiKey = "1";
    const url = `https://www.themealdb.com/api/json/v1/${apiKey}/categories.php`;
    const resp = await fetch(url);
    const data = await resp.json();
    set((state) => ({ ...state, categories: data?.categories }));
  },
  addFavourites: (data) =>
    set((state) => ({ ...state, favourites: [...state.favourites, data] })),
  removeFavourites: (data) =>
    set((state) => ({
      ...state,
      favourites: state.favourites.filter(
        (item) => item.idMeal !== data.idMeal
      ),
    })),
  fetchMeals: async (category) => {
    const apiKey = "1";
    const url = `https://www.themealdb.com/api/json/v1/${apiKey}/filter.php?c=${category}`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log('meals........: ', data)
    set((state) => ({ ...state, meals: {...state.meals, category: data.meals} }));
  },
});

useStore = persist(useStore, {
  name: "Meals",
  getStorage: () => localStorage,
});

useStore = create(useStore);

export { useStore };
