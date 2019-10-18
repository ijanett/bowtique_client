import React from 'react';
import { NavLink } from 'react-router-dom';
import brandName from '../brandName.png';
import { connect } from 'react-redux';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <NavLink to="/" className="navbar-logo"><img src={brandName} alt=""/></NavLink>
                <div className="navbar-list">
                    <NavLink to="/" activeClassName="chosen">Home</NavLink>
                    <NavLink to="/bowties" activeClassName="chosen">Shop</NavLink>
                    
                    {this.props.currentUser !== null ? <NavLink to="/account" activeClassName="chosen">My Account</NavLink> : <NavLink to="/login" activeClassName="chosen">Login</NavLink> }
                    
                    <NavLink to="/carts/new" className="cart-icon"><ion-icon name="cart"></ion-icon>(0)</NavLink>
                </div> 
            </div>
        )
    
    }
}

const mapStateToProps = state => {
    return { currentUser: state.userReducer.currentUser}
}

export default connect(mapStateToProps)(Navbar);