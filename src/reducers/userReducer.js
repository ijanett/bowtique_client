const userReducer = (state = {
    currentUser: null
}, action) => {

    console.log(action);
    switch(action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: action.user,
            }
        
        default:
            return state;
    }
}

export default userReducer