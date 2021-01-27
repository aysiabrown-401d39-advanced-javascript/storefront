import React from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card'
import { CardActionArea, CardMedia, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import {addToCart} from '../store/cart'
import {updateCount} from '../store/products'
import Game from '../store/objects/games'

function Products (props) {
    
    const handleAddItem = (e, item) => {
        e.preventDefault();
        let game = new Game(item.category, item.title, item.price, item.img, 1);
        props.addToCart(game);
        props.updateCount(item);
    }


    return(
        <>
         {
            props.inventory.products
            .filter(item => item.category == props.current.active || props.current.active == 'ALL')
            .map((item,idx) => (
                <>
                    <Card 
                    className={idx}>
                        <CardActionArea>
                            <Typography variant='h4'>{item.title}</Typography>
                            <CardMedia 
                            component='img'
                            image={item.img}
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
                </>
            )) 
        
        }
        </>
    )
}

const mapStateToProps = state => ({
    inventory: state.products,
    current: state.current,
    cart: state.cart,
})

const mapDispatchToProps = {addToCart,updateCount}


export default connect(mapStateToProps, mapDispatchToProps)(Products);