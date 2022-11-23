import { configureStore } from "@reduxjs/toolkit";
import { recipesGotten } from "../features/recipes-details/recipesSlice";

export const store = configureStore({
    reducer:{
        recipesGotten: recipesGotten
    }
})
