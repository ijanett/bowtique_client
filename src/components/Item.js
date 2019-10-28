import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../actions/fetchUser';
import swal from 'sweetalert';

class Item extends Component {

  // PROJECT ASSESSMENT LIVE CODING:
  // state = {
  //   liked: 0
  // }

  // likeItem = () => {
  //   this.setState(prevState => {
  //     return {
  //       liked: prevState.liked + 1
  //     }
  //   })
  // }

  // iconName = () => {
  //   if(this.state.liked > 0) {
  //     return "heart"
  //   } else {
  //     return "heart-empty"
  //   }
  // }

    handleClick = (event) => {
      event.preventDefault()
      let user = this.props.currentUser
      // console.log(user)
      // debugger
      if(user === null) {
        return (
          swal({
            title: "Please log in to shop.", 
            icon: "info",
            timer: 1600
          })
        )
      } else {
        let carts = user.relationships.carts.data  
        let cartId = carts[carts.length - 1].id
        let itemId = event.target.dataset.itemId
        let cartItem = {
          cart_id: cartId,
          item_id: itemId
        }
        this.props.addItemToCart(cartItem)
      }
    }

    renderItem = () => {
        return  <div className="col-sm-3" key={this.props.key}>
                    <img src={this.props.img} alt={this.props.name} className="img-fluid"></img>
                    <h5 align="center">{this.props.name}</h5>
                    <h6 align="center">${this.props.price}.00</h6>
                    <h6 align="center">Size: {this.props.size}</h6>
                    {/*LIVE CODING*/}
                    {/*<div className="text-center"><ion-icon onClick={this.likeItem} name={this.iconName()}></ion-icon> {this.state.liked > 0 ? this.state.liked : ''}</div>*/}
                    <button data-item-id={this.props.id} onClick={this.handleClick} type="submit">ADD TO CART</button>
                </div>
      
    }

    render() {
      return (   
        this.renderItem()  
      );
    }
}


export default connect(null, { addItemToCart })(Item); 
