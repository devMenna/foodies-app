import { createSlice } from "@reduxjs/toolkit";

const initialState = [
 
]

const recipesSlice= createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        recipesGotten(state, action){
            state.push(...action.payload)
        },
        cleanup: () => initialState,


    }
})

export const selectAllRecipes = (state) => state.recipes

export const selectRecipeById = (state, id) => state.recipes.find((recipe) => recipe.id === id)

export const { recipesGotten, cleanup } = recipesSlice.actions

export default recipesSlice.reducer

