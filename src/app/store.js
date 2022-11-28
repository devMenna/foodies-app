import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../features/recipes-details/recipesSlice";

export const store = configureStore({
    reducer:{
        recipes: recipesReducer,
    }
})
