import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Cart from './simpleCart'

function Header(props) {

    return(
        <>
        <CssBaseline/>
        <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#f5e9ec', height: '75px', width: '100vw' }}>
            <Typography variant='h2' component='h2'>SAD GIRL GAMES</Typography>
        </Typography>
        <Cart/>
        </Container>
        </>
        
    )
}

export default Header;