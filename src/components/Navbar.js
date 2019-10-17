import React from 'react';
import { NavLink } from 'react-router-dom';
import brandName from '../brandName.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" className="navbar-logo" activeClassName="chosen"><img src={brandName} alt=""/></NavLink>
            <div className="navbar-list">
                <NavLink to="/" activeClassName="chosen">Home</NavLink>
                <NavLink to="/login" activeClassName="chosen">Login</NavLink>
                
                <NavLink to="/bowties" activeClassName="chosen">Shop</NavLink>
            </div> 
        </div>
    )
}

export default Navbar;