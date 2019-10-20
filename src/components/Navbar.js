import React from 'react';
import { NavLink } from 'react-router-dom';
import brandName from '../brandName.png';
import { connect } from 'react-redux';

class Navbar extends React.Component {
    render() {
        let carts = this.props.carts.flat()
        // debugger
        return (
            <div className="navbar">
                <NavLink to="/" className="navbar-logo"><img src={brandName} alt=""/></NavLink>
                <div className="navbar-list">
                    <NavLink to="/" activeClassName="chosen">Home</NavLink>
                    <NavLink to="/bowties" activeClassName="chosen">Shop</NavLink>
                    
                    {this.props.currentUser !== null ? <NavLink to="/account" activeClassName="chosen">My Account</NavLink> : <NavLink to="/login" activeClassName="chosen">Login</NavLink> }
                    
                    <NavLink to="/new-cart" className="cart-icon"><ion-icon name="cart"></ion-icon>{this.props.currentUser !== null ? `(${carts[carts.length - 1].attributes.items.length})` : '(0)'}</NavLink>
                </div> 
            </div>
        )
    
    }
}

const mapStateToProps = state => {
    return { currentUser: state.userReducer.currentUser, carts: state.userReducer.carts }
}

export default connect(mapStateToProps)(Navbar);