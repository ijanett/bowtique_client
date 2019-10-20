import React from 'react';
import { connect } from 'react-redux';

class User extends React.Component {
    render() {
        // console.log(this.props.carts)
        const carts = this.props.carts.map(cart => 
            cart.filter(cart => cart.attributes.checkout === true))
        
        const orders = carts.map(orderObj =>
            orderObj.map(order =>
                <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.attributes.order_date}</td>
                    <td>{order.attributes.items.length}</td>
                    <td>{order.attributes.total}</td>
                </tr>
            )   
        )
        console.log(this.props)
        return (
            <div className="text-center" id="user-container">
                {this.props.currentUser.id ? 
                    <div>
                        <p>Hello, <strong>{this.props.currentUser.attributes.username}</strong></p>
                        <h5>My Orders</h5>
                        <p>{this.props.currentUser.attributes.orders.length} order(s).</p>
                            <br />
                            <h6><b>ORDER DETAILS</b></h6>
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Order No.</th>
                                        <th>Order Date</th>
                                        <th>Items</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders}
                                </tbody>
                            </table> 
                    </div> 
                    : 
                    <div>Please log in to see your account info.</div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { currentUser: state.userReducer.currentUser, carts: state.userReducer.carts }
}

export default connect(mapStateToProps)(User);