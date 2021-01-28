import Game from './objects/games'
 
let initialState = {cart: []};

export const addToCart = (item) => {
    return {
        type: 'ADD',
        payload: item,
    }
}

export const removeFromCart = (item) => {
    return {
        type: 'REMOVE',
        payload: item,
    }
}


export const plusQuantity = (item) => {
    return {
        type: 'PLUS',
        payload: item,
    }

}

export const minusQuantity = (item) => {
    return {
        type: 'MINUS',
        payload: item,
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
            let cart = state.cart.filter(item => item.title != payload.title);
            return {...state, cart};


        case 'PLUS':
            let plus = state.cart.map(item => {
                if(item.title === payload.title) {
                    item.count++;
                }
                return item;
            })
            return {...state, plus};


        case 'MINUS':
            let minus = state.cart.map(item => {
                if(item.title === payload.title) {
                    item.count--;
                    console.log('minus', item.count);
                }
                return item;
            })

            return {...state, minus};

        default:
            return state;
    }
}
