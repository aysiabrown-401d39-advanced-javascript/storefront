import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Cart from './simpleCart'

function Header(props) {

    return(
        <>
        <CssBaseline/>
        <Typography component="div" style={{ backgroundColor: '#f5e9ec', height: '75px', width: '100%' }}>
            <Typography variant='h2' component='h2'> <img src="https://img.icons8.com/fluent/48/000000/year-of-dragon.png"/>SAD DRAGON GAMES</Typography>
        </Typography>
        <Cart/>
        </>
        
    )
}

export default Header;