import { Box, Button, Chip, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { selectRecipeById } from './recipesSlice'

const RecipeDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const recipe = useSelector((state) => selectRecipeById(state, id))

  useEffect(() => {
    console.log(recipe)
    if(!recipe){
      navigate('/')
    }

  }, [recipe, navigate])

    const cautions = recipe?.cautions? recipe.cautions : ' none'
    const ingredients = recipe?.ingredients

    if(!recipe){
      return(
        <div></div>
        )
    }



  return (
    <Container  sx={{display: 'flex', alignItems: 'center', marginTop: 5, backgroundColor: 'wheat', padding: 5, mb: 4, borderRadius: 10 }}>
    <Box
    component="img"
    sx={{
      height: 500,
      width: 550,
    }}
    alt="Recipe image"
    src={recipe.regImage}
    
  />

  <Container>
    <Box sx={{marginBottom: 2}}>
  <Chip label={'Source: ' + recipe.source} sx={{ color: 'white', background: '#B5926D', marginRight: 1, marginTop: 1, fontWeight: 10}} />
  <Chip label={'Calories: ' + Math.round(recipe.calories) + ' Kcal'} sx={{ color: 'white', background: '#B5926D', marginRight: 1, marginTop: 1 }} />
  <Chip label={'Diet Type: ' + recipe.dietType} sx={{ color: 'white', background: '#B5926D', marginRight: 1, marginTop: 1 }} />
  <Chip label={'Cautions: ' + cautions } sx={{ color: 'white', background: 'red', marginRight: 1, marginTop: 1 }} />
  </Box>

  <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
          </Typography>

    {ingredients.map(line => (
    <Typography variant="body2" color="text.secondary" key={nanoid()}>
    {line} </Typography>
     ))}

  <Button variant="contained" sx={{marginTop: 2, backgroundColor: '#B5926D'}} href={recipe.url} target= '_blank'>
      Check out the recipe
  </Button>

  <Button variant="contained" sx={{marginTop: 2, marginLeft: 2, backgroundColor: '#B5926D'}} onClick={() => navigate(-1)}>
      Back
  </Button>
  </Container>

      

  </Container>
  )
}

export default RecipeDetails