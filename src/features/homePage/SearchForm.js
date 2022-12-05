import React, { useState } from 'react'
import { Button, CircularProgress, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { cleanup, recipesGotten } from '../recipes-details/recipesSlice';
import { nanoid } from '@reduxjs/toolkit';



const SearchForm = () => {

  const dispatch = useDispatch()

  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const handleChange = (e) => {
    setInput(e.target.value)

  }

  const apiCall = async(e) => {
    e.preventDefault()

    dispatch(cleanup())
    
    setIsLoading(true)
    const options = {
        method: 'GET',
        url: 'https://api.edamam.com/api/recipes/v2',
        params: {
            type: 'public',
            q: input,
            app_id: '9e5dd53f',
            app_key:'f4b604703518fa984c1d5c0dc8ee45fb'
        },
     } 

     setInput('')
     const data = await axios.request(options)
     console.log(data)
     if(data){
      const formattedData = data.data.hits.map(item => {
        const recipeData = item.recipe
        return {
          id: nanoid(),
          title: recipeData.label,
          ingredients: recipeData.ingredientLines,
          thumbnail: recipeData.images.THUMBNAIL?.url,
          regImage: recipeData.images.REGULAR?.url,
          mealType: recipeData.mealType,
          source: recipeData.source,
          url: recipeData.url,
          calories: recipeData.calories,
          dietType: recipeData.dietLabels,
          cautions: recipeData.cautions
        }
      } )
      dispatch(recipesGotten(formattedData))
     }
     setIsLoading(false)
    
}

  return (
    <div>
        <form onSubmit={apiCall}>
            <Box
            display= "flex"
            flexDirection="column"
            alignItems="center" >
            <TextField id="search-bar" label="Search your favorite food" variant="outlined" sx={{ mb: 1 }} value={input} onChange={handleChange} />
            <Button variant="contained" type='submit'>Search</Button>
            </Box>
        </form>
        <Box display='flex' justifyContent='center' my={2}>
          {isLoading && <CircularProgress />}
        </Box>
    </div>
  )
}

export default SearchForm