import Game from './objects/games'
 
let initialState = {cart: []};

export const addToCart = (game) => {
    console.log('in addToCart')
    return {
        type: 'ADD',
        payload: game,
    }
}

export const removeFromCart = (game) => {
    console.log('game', game);
    return {
        type: 'REMOVE',
        payload: game,
    }
}


// fix logic for updating cart quantity
export const updateQuantity = (count, item) => {
    return {
        type: 'QUANTITY',
        payload: {count, item},
    }
}



export default (state=initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case 'ADD':
            let contains;
            for(var item of state.cart) {
                if(item.title == payload.title) {
                    item.count += 1;
                    contains = true;
                }
            }
            if(!contains) {
                state.cart.push(payload);
            }
            return {...state};

        case 'REMOVE':
            let cart = state.cart.filter(game => game.title != payload.title);
            return {...state, cart};

        // fix logic for updating cart quantity    
        case 'QUANTITY': 
            let quantity = state.cart.map(item => {
                if(item.title == payload.item.title) {
                    item.count = payload.count;
                }
            })
            return{...state, quantity};

        default:
            return state;
    }
}
