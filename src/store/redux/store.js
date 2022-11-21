import {configureStore }  from  '@reduxjs/toolkit'
import favoritesReducer from './favorites'
const store=configureStore({
    reducer:{
 favMeals:favoritesReducer
    }
});
export default store;

