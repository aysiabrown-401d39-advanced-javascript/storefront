import {createStore, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

// reducers 
import products from './products'
import current from './active-category'
import categories from './categories'

// combine reducers
let reducers = combineReducers({products, current, categories});


// store
const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();