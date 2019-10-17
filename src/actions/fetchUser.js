const USERS_URL = "http://localhost:3000/users"

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
            .then(user => dispatch({type: 'LOGIN_USER', user: user.data}))
                
    }
}