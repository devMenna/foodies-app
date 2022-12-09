import { AppBar, Button, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
      <AppBar position="static" sx={{backgroundColor: 'black', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'} }>
      <img src="https://images.freecreatives.com/wp-content/uploads/2016/04/script-Lettering-Logo-Design.jpg"
         alt="logo"
         width={'5%'}
          />

          <Typography variant='h3' className='name' sx={{paddingTop: 2}}>
            Foodies
          </Typography>

          <Button href='/' sx={{color: 'white', padding: 2, border: '0.5px solid white'  , m: 2}} >
          Home
          </Button>
        </AppBar>
  )
}

export default Navbar