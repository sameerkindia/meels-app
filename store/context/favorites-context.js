import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteIds((currentFav) => [...currentFav, id]);

    console.log(favoriteMealIds , 'this is from context')
  };

  const removeFavorite = (id) => {
    setFavoriteIds((currentFav) =>
      currentFav.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
