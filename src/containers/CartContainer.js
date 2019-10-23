import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cartCheckout } from '../actions/fetchUser'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import swal from 'sweetalert';
import { withRouter } from 'react-router-dom';

class Cart extends Component {

    handleCheckout = (event) => {
        event.preventDefault()
        let cart = this.props.carts[this.props.carts.length - 1]
        if (cart.attributes.checkout === false) {
            this.props.cartCheckout(cart)
            this.props.close()
            swal({ title: "Thank you for shopping at Bowtique!", timer: 1700 })
            this.props.history.push("/")
        }
    }

    renderCartTotal = () => {
        const cart = this.props.carts[this.props.carts.length - 1]
        const total = cart.attributes.total
        console.log(cart)
        if (cart.attributes.items.length === 0) {
            return <div className="text-center" style={{margin: '20px'}}><p>Your cart is empty</p></div>
        } else {
            return (
                <div className="cart-footer">
                <div className="cart-total"><h5><strong>Total:</strong> {total}</h5></div><br/>
                <div className="checkout-btn-container"><button onClick={this.handleCheckout} className="checkout-btn">CHECKOUT</button></div></div>
            )
        }
    }

    renderCartItems = () => {
        console.log(this.props)
        const cart = this.props.carts[this.props.carts.length - 1];
        const cartItems = cart.attributes.items

        let itemsObj = {};
        cartItems.forEach(item => {
            if(!itemsObj[item.id]) {
                itemsObj[item.id] = [item];
            } else {
                itemsObj[item.id].push(item)
            }
        })

        let items = [];
        for (let cartItem in itemsObj) {
            let item = itemsObj[cartItem][0];
            let total = item.price * itemsObj[cartItem].length;
            
            items.push(<CartItem currentUser={this.props.currentUser} key={item.id} cart_id={cart.id} id={item.id} img={item.image} name={item.name} price={item.price} size={item.size} quantity={itemsObj[cartItem].length} total={total} />)
        }

        console.log(itemsObj)
        console.log(items)

        return items
    }

    render() {
        console.log(this.props)
        let cartClass = 'side-drawer';
        if (this.props.visible) {
            cartClass = 'side-drawer open';
        }

        return (
            <div className={cartClass}>
                <div className="cart-header">
                    <h4><div onClick={this.props.close} className="close-btn"> > </div>Cart</h4>
                </div>
                {/*<div className="table-responsive"><table className="table table-borderless">{this.renderCartItems()}</table></div>*/}
                {this.props.currentUser !== null ? <div><div>{this.renderCartItems()}</div> {this.renderCartTotal()}</div>
                :
                <div className="cart-login-prompt"><p><Link className="login-link" onClick={this.props.close} to="/login">Log in</Link> to shop</p></div>}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return { currentUser: state.userReducer.currentUser, carts: state.userReducer.carts.flat() }
}

export default withRouter(connect(mapStateToProps, { cartCheckout })(Cart));