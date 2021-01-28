import {changeActive} from './active-category';

let initialState = {categories: ['MARVEL','NINTENDO','DND','ALL'], subtitle: ['ALL THINGS SUPERHERO.','ITS A MARIO!', 'DUNGEONS & DRAGONS ADVENTURES', 'A LIL BIT OF EVERYTHING']};

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
                if(category === payload) {
                    changeActive(category)
                } 
            })

        default:
            return state;
    }
}