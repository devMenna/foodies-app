import React from 'react'
import Recipes from './Recipes'
import SearchForm from './SearchForm'
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

const HomePage = () => {

  return (
    <Container maxWidth="lg">
    <div>
        <Typography align='center' sx={{ m: 2 }}>Recipes App</Typography>
        <SearchForm />
        <Recipes />
    </div>
    </Container>
  )
}

export default HomePage