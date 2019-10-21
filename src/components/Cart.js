import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = (props) => {
    console.log(props)
    let cartClass = 'side-drawer';
    if (props.visible) {
        cartClass = 'side-drawer open';
    }

    return (
        <div className={cartClass}>
            <div className="cart-header">
                <h3><div onClick={props.close} className="close-btn"> > </div>Cart</h3>
            </div>

            {props.currentUser !== null ? <CartItem />
            :
            <div className="cart-login-prompt"><p><Link className="login-link" onClick={props.close} to="/login">Log in</Link> to shop</p></div>}
        </div>
        
    )
}

export default Cart;