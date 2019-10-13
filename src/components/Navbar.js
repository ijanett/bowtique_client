import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/bowties" className="nav-link">Shop</NavLink>
            </nav> 
        </div>
    )
}

export default Navbar;