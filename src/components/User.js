import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/fetchUser';

class User extends React.Component {
    componentDidMount(){
    }
    render() {
        
        return (
            <div>
                User Account
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state.user}
}

export default connect(mapStateToProps, { fetchUser })(User);