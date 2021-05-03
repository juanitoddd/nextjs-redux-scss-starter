export const INCREMENT_COUNTER = "incrementCounter";
export const DECREMENT_COUNTER = "decrementCounter";

const initialState = {
    server: "",
    client: "",
    counter: 0,
  };
  
  // Creating my reducer
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case INCREMENT_COUNTER:
        return { ...state, counter: action.payload };
      case DECREMENT_COUNTER:
        return { ...state, counter: action.payload };
      default:
        return state;
    }
  }

  export const incrementCounter = (incrementState) => (dispatch) => {
    const increase = incrementState + 1;
  
    return dispatch({
      type: INCREMENT_COUNTER,
      payload: increase,
    });
  };
  
  export const decrementCounter = (decrementState) => (dispatch) => {
    const decrease = decrementState - 1;
  
    return dispatch({
      type: DECREMENT_COUNTER,
      payload: decrease,
    });
};