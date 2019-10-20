import React from 'react';
import { connect } from 'react-redux';


class Cart extends React.Component {
    renderCartItems = () => {
        
    }

    
    render() {
        return (
            <div></div>
        ) 
    }
}

const mapStateToProps = state => {
    return { currentUser: state.userReducer.currentUser}
}

export default connect(mapStateToProps)(Cart);