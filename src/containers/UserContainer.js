import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';

class UserContainer extends Component {
    render() {
        return (
            <User currentUser={this.props.currentUser} carts={this.props.carts} />
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.userReducer.currentUser,
        carts: state.userReducer.carts.flat()
    }
}

export default connect(mapStateToProps)(UserContainer);