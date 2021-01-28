import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import {removeFromCart, plusQuantity, minusQuantity} from '../store/cart';
import {addCountBack, minusCount, plusCount, update} from '../store/products';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { useState } from 'react';


const mapStateToProps = state => ({
    inventory: state.products,
    cart: state.cart,
});

const mapDispatchToProps = {removeFromCart, addCountBack, minusCount, plusCount, minusQuantity, plusQuantity, update};

function Cart (props) {    
    const [display, setDisplay] = useState(false);
    
    const handleRemove = (e, item) => {
        e.preventDefault();
        props.removeFromCart(item);
        props.addCountBack(item);
        let product = props.inventory.products.filter(thing => thing._id === item._id);
        props.update(item._id, product[0]);
    }

    const handleCart = (e) => {
        if(display) {
            setDisplay(false);
        } else {
            setDisplay(true);
        }
    }


    const onPlus = (item) => {
        props.plusQuantity(item)
        props.minusCount(item)
        let product = props.inventory.products.filter(thing => thing._id === item._id);
        props.update(item._id, product[0]);
    }

    const onMinus = (item) => {
        props.minusQuantity(item)
        props.plusCount(item)
        let product = props.inventory.products.filter(thing => thing._id === item._id);
        props.update(item._id, product[0]);
    }


    return(
        <>

        <Button onClick={handleCart} color='secondary'>CART: [{props.cart.cart.length}]</Button>
        {display ? props.cart.cart.map((item, idx) => (
        <div key={idx}>
            <p>{item.title}</p>
            <p>Price Per Each: ${item.price}</p>
            <p>{item.count > 1 ? <button onClick={() => onMinus(item)}>-</button> : null} Quantity: {item.count}<button onClick={() => onPlus(item)}>+</button></p>
            <Button onClick={(e) => handleRemove(e, item)} size="small" color="secondary"> X </Button>
        </div>
        ))
         : null }
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);