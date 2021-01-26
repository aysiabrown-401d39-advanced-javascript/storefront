let initialState = {active: 'ALL'};

export const changeActive = (status) => {
    return {
        type: 'CHANGE',
        payload: status,
    }
}

export default (state=initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case 'CHANGE':
            let active = payload;
            return {...state, active};
        default:
            return state;
    }
}