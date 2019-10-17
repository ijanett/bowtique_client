import React from 'react'
import {connect} from 'react-redux'
import { fetchUser } from '../actions/fetchUser';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        event.persist()
        this.setState(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        //therea are 3 ways to get your component to dispatch your action. 
        //all 3 ways require connecting
        //1. Connect our component and pass in no 2nd argument to get access to dispatch
        //This makes dispatch available in props
        //this.props.dispatch(fetchUser(this.state))
        //2. Use MapDispatchToProps
        //this.props.fetchUser(this.state)
        //3. Easiest way 
        //just pass it in as a destructeud object
        this.props.fetchUser(this.state)
    }

    render() {
        console.log(this.props);
        
        return (
            <div className="text-center">
                <div className="login-container">
                    <h3>LOGIN FORM</h3>
                    <br />
                    <form>
                        USERNAME: <input onChange={this.handleChange} type="text" name="username" value={this.state.username}/>
                        <br />
                        <br />
                        PASSWORD: <input onChange={this.handleChange} type="password" name="password" vlaue={this.state.password}/>
                        <br />
                        <input onClick={this.handleSubmit} type="submit" value="Login" />
                    </form>
                </div>
            </div>
        )
    }
}

//2nd way
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchUser: (arg) => dispatch(fetchUser(arg))
//     }
// }

//3rd way easiest way always do this
export default connect(null, { fetchUser })(Login)