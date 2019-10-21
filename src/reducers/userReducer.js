const userReducer = (state = {
    currentUser: null,
    carts: []
}, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: action.user.data,
                carts: [action.user.included]
            }
        case 'ADD_CART_ITEM':
            return {
                ...state,
                currentUser: action.user.data,
                carts: [action.user.included]
            }

        case 'DELETE_CART_ITEM':
            return {
                ...state,
                currentUser: action.user.data,
                carts: [action.user.included]
            }
        
        default:
            return state;
    }
}

export default userReducer