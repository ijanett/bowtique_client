const BASE_URL = "http://localhost:3000"
const USERS_URL = BASE_URL + "/users"
const CART_ITEMS_URL = BASE_URL + "/cart_items"
const CARTS_URL = BASE_URL + "/carts"

//if you're using THUNK, your actionCreator will receive dispatch TWO TIMES
//the MAIN PURPOSE OF THUNK IS TO PUT YOUR ASYNC LOGIC INTO YOUR ACTION CREATORS
//instead of taking up space in your component
//this is to say that you could've put all of this async logic
//into your Login component and it would still work
//it's just neater this way 
//that's it 
//division of responsibility 
export const fetchUser = (user) => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        fetch(USERS_URL, configObj)
            .then(res => res.json())
            .then(user => 
                fetch(USERS_URL + `/${user.data.id}`)
                    .then(res => res.json())
                    .then(user => dispatch({ type: 'LOGIN_USER', user }))
            )
            
    }
}

export const addItemToCart = (cart_item) => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cart_item)
        }
        fetch(CART_ITEMS_URL, configObj)
            .then(res => res.json())
            .then(user => dispatch({ type: 'ADD_CART_ITEM', user }))
    }
}

export const deleteCartItem = (cartItem) => {
    return (dispatch) => {
        const configObj = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        }
        fetch(CART_ITEMS_URL + `/${cartItem.id}`, configObj)
            .then(res => res.json())
            .then(user => dispatch({ type: 'DELETE_CART_ITEM', user }))
    }
}

export const cartCheckout = (cart) => {
    return (dispatch) => {
        const configObj = {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cart)
        }
        fetch(CARTS_URL + `/${cart.id}`, configObj)
            .then(res => res.json())
            .then(user => dispatch({ type: 'CART_CHECKOUT', user }))
    }
}