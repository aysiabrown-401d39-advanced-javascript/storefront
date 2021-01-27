import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import {removeFromCart, updateQuantity} from '../store/cart';
import {addCountBack, changeInventory} from '../store/products';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { useState } from 'react';


const mapStateToProps = state => ({
    inventory: state.products,
    cart: state.cart,
});

const mapDispatchToProps = {removeFromCart, addCountBack, updateQuantity, changeInventory};

function Cart (props) {    
    const [display, setDisplay] = useState(false);
    
    const handleRemove = (e, item) => {
        e.preventDefault();
        props.removeFromCart(item);
        props.addCountBack(item);
    }

    const handleCart = (e) => {
        if(display) {
            setDisplay(false);
        } else {
            setDisplay(true);
        }

    }

    // these aren't working properly to adjust quantity from form
    // const handleQuantity = (e, item) => {
    //     props.changeInventory(e.target.value, item);
    //     props.updateQuantity(e.target.value, item);
    // }

    return(
        <>

        <Button onClick={handleCart} color='secondary'>CART: [{props.cart.cart.length}]</Button>
        {display ? props.cart.cart.map(item => (
        <>
            <p>{item.title}</p>
            <p>Price Per Each: {item.price}</p>
            <p>Quantity: {item.count}</p>
            {/* <form noValidate autoComplete="off">
                <InputLabel>Quantity</InputLabel>
                <TextField size='small' onChange={(e) => handleQuantity(e, item)} id="standard-basic" placeholder={item.count} />
            </form> */}
            <Button onClick={(e) => handleRemove(e, item)} size="small" color="secondary"> X </Button>
        </>
        ))
         : null }
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);