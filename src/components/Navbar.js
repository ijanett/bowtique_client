import React from 'react';
import { NavLink } from 'react-router-dom';
import brandName from '../brandName.png';

const Navbar = (props) => {
    // debugger
    return (
        <div className="navbar">
            <NavLink to="/" className="navbar-logo"><img src={brandName} alt=""/></NavLink>
            <div className="navbar-list">
                <NavLink to="/" activeClassName="chosen">Home</NavLink>
                <NavLink to="/bowties" activeClassName="chosen">Shop</NavLink>
                
                {props.currentUser !== null ? <NavLink to="/account" activeClassName="chosen">My Account</NavLink> : <NavLink to="/login" activeClassName="chosen">Login</NavLink> }
                
                <NavLink to="/new-cart" className="cart-icon"><ion-icon name="cart"></ion-icon>{props.currentUser !== null ? `(${props.carts[props.carts.length - 1].attributes.items.length})` : '(0)'}</NavLink>
            </div> 
        </div>
    )
}

export default Navbar;