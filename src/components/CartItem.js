import React, { Component } from 'react';


class CartItem extends Component {

    renderCartItem = () => {
        // debugger
        console.log(this.props)
        return <li >
                    <div><img className="img-fluid" src={this.props.img} alt={this.props.name}></img>
                    <div className="item-info">{this.props.name}: {this.props.size}
                    <br/><b>QTY:</b> {this.props.quantity}
                    <br/>${this.props.total}.00</div>
                    <div className="delete-btn">
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

export default CartItem;