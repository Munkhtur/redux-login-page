const initialState = {
    isAuthenticated: null,
    user: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case 'LOGOUT':

            return {
                ...state,
                isAuthenticated: false,
                user: null
            }
        default:
            return state
    }
}