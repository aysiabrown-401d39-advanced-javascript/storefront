import superagent from 'superagent';
let initialState = { results: [] }

let url = 'https://aysiab-basic-api-server.herokuapp.com/products';


export const get = () => dispatch => {
    console.log('url', url);
    return superagent
      .get('https://aysiab-basic-api-server.herokuapp.com/products')
      .then(response => {
          console.log('in get', JSON.parse(response.text))
        dispatch(getAction(JSON.parse(response.text)))
      })
    }


  export const getAction = payload => {
      console.log('in getAction', payload);
    return{
      type: 'GET',
      payload: payload
    }
  }

  export const deleteItem = (id) => dispatch => {
    return superagent.delete(`${url}/${id}`)
      .then(response => {
        dispatch(deleteAction(response.body))
      })
  }
  
  export const deleteAction = payload => {
    return{
      type: 'DELETE',
      payload: payload
    }
  }

  export default (state=initialState, action) => {
    let {type, payload} = action;
    switch(type) {
      case 'GET':
        console.log('GET payload', payload);
        return {...state, results: payload};
      case 'DELETE':
        return payload;
      default:
        return state;
    }
  }