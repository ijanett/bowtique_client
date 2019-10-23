import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCartItem } from '../actions/fetchUser';

class CartItem extends Component {
    handleClick = (event) => {
        event.preventDefault()

        let cart_item = this.props.currentUser.attributes.cart_items.find(cartItem =>
            (cartItem.cart_id === parseInt(this.props.cart_id, 10) && cartItem.item_id === this.props.id)
        )
    
        this.props.deleteCartItem(cart_item)
    }

    renderCartItem = () => {
        // debugger
        console.log(this.props)
        return <li >
                    <div><img className="img-fluid" src={this.props.img} alt={this.props.name}></img>
                    <div className="item-info">{this.props.name}: {this.props.size}
                    <br/><b>QTY:</b> {this.props.quantity}
                    <br/>${this.props.total}.00</div>
                    <div onClick={this.handleClick} className="delete-btn">
                        <ion-icon data-cart-id={this.props.cart_id} data-item-id={this.props.id} name="close-circle-outline"></ion-icon>
                    </div>
                    </div>
                      
                </li>           
    }
    render() {
        return (
            <div className="row">
                {this.renderCartItem()}
            </div>
        )
    }
}

export default connect(null, {deleteCartItem})(CartItem);