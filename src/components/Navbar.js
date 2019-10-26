import React from 'react';
import { NavLink } from 'react-router-dom';
import brandName from '../brandName.png';

const Navbar = (props) => {
    // debugger
    return (
        <header className="nav">
            <nav className="navbar">
                <div></div>
                <NavLink to="/" className="navbar-logo"><img src={brandName} alt=""/></NavLink>
                <div className="spacer" />
                <div className="navbar-list">
                    <ul>
                        <li><NavLink exact to="/" activeClassName="chosen"><ion-icon title="Home" name="home"></ion-icon></NavLink></li>
                        <li><NavLink to="/bowties" activeClassName="chosen"><ion-icon title="Shop" name="bowtie"></ion-icon></NavLink></li>
                        
                        {props.currentUser !== null ? <><li><NavLink to="/account" activeClassName="chosen"><ion-icon title="Account" name="person"></ion-icon></NavLink></li> <li><NavLink to="/" title="Logout" onClick={props.logout}><ion-icon name="log-out"></ion-icon></NavLink></li></> : <li><NavLink to="/login" activeClassName="chosen"><ion-icon title="Login" name="log-in"></ion-icon></NavLink></li> }
                        
                        <li><div onClick={props.cartToggle} className="cart-icon"><ion-icon title="Cart" name="cart"></ion-icon><span className="badge">{props.currentUser !== null ? props.carts[props.carts.length - 1].attributes.items.length : 0}</span></div></li>
                    </ul>
                </div> 
            </nav>
        </header>
    )
}

export default Navbar;