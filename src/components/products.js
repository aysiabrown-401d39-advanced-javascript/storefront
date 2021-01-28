import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card'
import { CardActionArea, CardMedia, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import {addToCart} from '../store/cart'
import {minusCount, update, get} from '../store/products'
import Game from '../store/objects/games'
import Grid from '@material-ui/core/Grid'

function Products (props) {
    
    const handleAddItem = (e, item) => {
        e.preventDefault();
        let game = new Game(item._id, item.category, item.title, item.price, item.img, 1);
        props.addToCart(game);
        props.minusCount(item);
        let product = props.inventory.products.filter(thing => thing._id === item._id);
        props.update(item._id, product[0]);
    }


    const getItems = () => {
        props.get();
    }

    useEffect(getItems,[])


    return(
        <>
         {  console.log(props.inventory.products) || 
            props.inventory.products
            .filter(item => item.category === props.current.active || props.current.active === 'ALL')
            .map((item,idx) => {
                return (
                <>
                <Grid alignContent='flex-start' container spacing={10}>
                    <Grid item xs={12}> 
                    <Grid container justify="center" spacing={2}>
                    <Card 
                    key={idx}>
                        <CardActionArea>
                            <Typography variant='h4'>{item.title}</Typography>
                            <CardMedia 
                            component='img'
                            image={item.img}
                            style={{width:'400px'}}
                            />
                            {item.count <= 0 ?
                                (<Typography variant='body1'>SOLD OUT! Restocking soon.</Typography>)
                            :
                                (<>
                                <Typography variant='body1'>Price: {item.price}</Typography>
                                <Typography variant='body1'>Inventory Count: {item.count}</Typography>
                                <Button onClick={e => handleAddItem(e, item)} variant='contained' color='secondary'>Add To Cart</Button>
                                </>)
                            }
                        </CardActionArea>
                    </Card>
                    </Grid>
                    </Grid>
                </Grid>
                </>
            )}) 
        
        }
        </>
    )
}

const mapStateToProps = state => ({
    inventory: state.products,
    current: state.current,
    cart: state.cart,
})

const mapDispatchToProps = {addToCart,minusCount, update, get}


export default connect(mapStateToProps, mapDispatchToProps)(Products);