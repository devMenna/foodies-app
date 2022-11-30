import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectRecipeById } from './recipesSlice'

const RecipeDetails = () => {
  const { id } = useParams()
    const recipe = useSelector((state) => selectRecipeById(state, id))
    console.log(recipe)

  return (
    <Box
    component="img"
    sx={{
      height: 233,
      width: 350,
      maxHeight: { xs: 233, md: 167 },
      maxWidth: { xs: 350, md: 250 },
    }}
    alt="The house from the offer."
    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
  />
  )
}

export default RecipeDetails