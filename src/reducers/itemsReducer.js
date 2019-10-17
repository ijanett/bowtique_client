const itemsReducer = (state = {
    items: [],
}, action) => {
    switch (action.type) {
        case 'RENDER_ITEMS':
            return {
                ...state,
                items: [...action.items],
            }
        
        default:
            return state;
    }
}

export default itemsReducer