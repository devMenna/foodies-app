import React from 'react'
import Recipes from './Recipes'
import SearchForm from './SearchForm'
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

const HomePage = () => {

  return (
    <Container maxWidth="lg" sx={{mt:10,backgroundColor: 'wheat', borderRadius: 5, display:'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Typography variant='h5' align='center' sx={{ m: 2, paddingTop: 3, maxWidth: '70%' }}>search your favorite meals and we'll bring you many delicious recipes you can choose from!</Typography>
        <SearchForm />
        
        <Recipes />
    </Container>
  )
}

export default HomePage