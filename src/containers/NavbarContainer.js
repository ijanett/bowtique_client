import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { withRouter } from 'react-router-dom';

class NavbarContainer extends Component {
    logout = () => {
        window.location.reload()
        this.props.history.push("/login")
    }

    render() {
        return (
            <Navbar cartToggle={this.props.cartToggle} openCart={this.props.openCart} currentUser={this.props.currentUser} carts={this.props.carts} logout={this.logout} />
        )
    }

};

const mapStateToProps = state => {
    return {
        currentUser: state.userReducer.currentUser,
        carts: state.userReducer.carts.flat()
    }
}

export default withRouter(connect(mapStateToProps)(NavbarContainer));