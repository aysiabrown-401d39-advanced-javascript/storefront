import {createStore, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

// reducers 
import products from './products'
import current from './active-category'
import categories from './categories'
import cart from './cart'

// combine reducers
let reducers = combineReducers({products, current, categories, cart});


// store
const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();