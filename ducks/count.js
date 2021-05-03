import { HYDRATE} from 'next-redux-wrapper';
import axios from 'axios';

const ADD = 'ADD'
const SUBSTRACT = 'SUBSTRACT'

const initialState = {
    count: 0
}
  
export default (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        case ADD:
            return Object.assign({}, state, {
                count: state.count + 1,
            })
        case SUBSTRACT:
            return state;
        default:
            return state
    }
}

export const addCount = () => (dispatch) => {
    console.log('Here')
    return dispatch({ type: ADD })
}

export const asyncAction = (id) => (dispatch, getState) => {
    console.log('Here')
    return axios.get('/api/hello').then(res => {
        console.log(res);
        dispatch({ type: SUBSTRACT });
    }).catch(error => {
    // handle error
        console.log(error);
    })
}