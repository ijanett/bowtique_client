import React from 'react'
import {connect} from 'react-redux'
import { fetchUser } from '../actions/fetchUser';
import swal from 'sweetalert';

class Login extends React.Component {
    state = {
        username: ''
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
       
        if(this.state.username === "") {
            swal({ title: "Form fields cannot be blank!", icon: "error", timer: 1700 })
        } else {
            this.props.fetchUser(this.state)
            this.props.history.push("/bowties")
        }
    }

    render() {
        console.log(this.props);
        
        return (
            <div className="text-center">
                <div className="login-container">
                    <h4>LOGIN FORM</h4>
                    <br />
                    <form>
                        <input onChange={this.handleChange} type="text" name="username" value={this.state.username} placeholder="Username" />
                        <br />
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