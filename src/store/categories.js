import {changeActive} from './active-category';

let initialState = {categories: ['VIDEOGAMES','BOARDGAMES','ALL']};

export const change = (category) => {
    return {
        type: 'CHANGE',
        payload: category,
    }
}

export default (state=initialState, action=change) => {
    let {type, payload} = action;
    switch(type) {
        case 'CHANGE':
            console.log('in change', state);
           state.categories.map(category => {
                if(category == payload) {
                    changeActive(category)
                } 
            })

        default:
            return state;
    }
}