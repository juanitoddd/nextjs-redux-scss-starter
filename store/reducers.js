import { combineReducers } from 'redux'


import auth from '../ducks/auth'

const hidrateReducer = (state, action) => {
    switch (action.type) {
      case HYDRATE:
        const nextState = {
          ...state,
          ...action.payload
        };
        console.log('state', state)
        console.log('payload', action.payload)
        return state;
    }
  };

  const createRootReducer = () => combineReducers({
    auth,
    hidration: hidrateReducer
  })
  export default createRootReducer