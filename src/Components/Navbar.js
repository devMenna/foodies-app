import { AppBar, Button, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
      <AppBar position="static" sx={{backgroundColor: '#556B2F', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'} }>

          <Typography variant='h3' className='name' sx={{paddingTop: 2, marginLeft: 78}}>
            Foodies
          </Typography>

          <Button  href='/' sx={{ padding: 2, border: '0.5px solid white'  , m: 2, height: '3vw',
    width: '14vw', backgroundColor: '#FFF8DC',color: '#435425', fontWeight: '900', fontSize: '1.1vw',}} >
          Home
          </Button>
        </AppBar>
  )
}

export default Navbar