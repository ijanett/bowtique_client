import React from 'react';

const User = (props) => {

    // console.log(this.props.carts)
    const carts = props.carts.filter(cart => 
        cart.attributes.checkout === true)
    
    const orders = carts.sort((a, b) => b.id - a.id).map(order =>
            <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.attributes.order_date}</td>
                <td>{order.attributes.items.length}</td>
                <td>{order.attributes.total}</td>
            </tr>  
    )

    return (
        <div className="text-center" id="user-container">
            {props.currentUser !== null ? 
                <div>
                    <p>Hello, <strong>{props.currentUser.attributes.username}</strong></p>
                    <h5>My Orders</h5>
                    <p>{carts.length} order(s).</p>
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

export default User;