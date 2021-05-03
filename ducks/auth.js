const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const initialState = {
    user: null,
    jwt: null
}

let _state;

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log('Dispatched LOGIN', action.payload)
            _state = {
                user: action.payload.user,
                jwt: action.payload.jwt
            };
            return _state;
        case LOGOUT:
            return initialState;
        default:
            return state
    }
}

export const setLogin = (user) => (dispatch) => {
    return dispatch({
        type: LOGIN,
    })
}

export default AuthReducer;