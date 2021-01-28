import {createStore, combineReducers, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

// middleware
import thunk from 'redux-thunk';

// reducers 
import products from './products';
import current from './active-category';
import categories from './categories';
import cart from './cart';

// combine reducers
let reducers = combineReducers({products, current, categories, cart});


// store
const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();