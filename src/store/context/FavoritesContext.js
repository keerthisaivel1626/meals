import React,{createContext, useState} from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFav: id => {},
  removeFav: id => {},
});
const FavoritesContextProvider = ({children}) => {
  const [favMealSID, setFavMealsID] = useState([]);

  const addFav = id => {
    setFavMealsID(currentFavID => [...currentFavID, id]);
  };
  const removeFav = id => {
    setFavMealsID(currentFavID => currentFavID.filter(mealID => mealID !== id));
  };
  const value = {
    ids: favMealSID,
    addFav: addFav,
    removeFav: removeFav,
  }; 
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContextProvider;
