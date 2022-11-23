import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(),
        title: '',
        ingredients: '',
        thumbnail: '',
        largeImage: '',
        regImage: '',
        mealType: '',
        source: '',
        url: '',
        calories: 0,
        dietType: [],
        cautions: []
    }
]

const recipesSlice= createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        recipesGotten(state, action){
            state.push(action.payload)
        }
    }
})

export const selectAllRecipes = (state) => state.recipes

export const { recipesGotten } = recipesSlice.actions

export default recipesSlice.reducer