import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/fetchItems';
import { addItemToCart } from '../actions/fetchUser';

class Items extends Component {
    componentDidMount(){
        console.log("MOUNTING")
        this.props.fetchItems()
    }

    handleClick = (event) => {
      event.preventDefault()
      let user = this.props.currentUser
      console.log(user)
      // debugger
      if(user === null) {
        return (
          window.alert("You must be logged in to add to cart!")
        )
      } else {
        let carts = user.relationships.carts.data  
        let cartId = carts[carts.length - 1].id
        let itemId = event.target.id
        let cartItem = {
          cart_id: cartId,
          item_id: itemId
        }
        this.props.addItemToCart(cartItem)
      }
    }

    sizeFilter = (size) => {
      switch(size) {
        case 'ALL':
          return this.props.items
        case 'SM':
          return this.props.items.filter(item => item.attributes.size === 'SM');
        case 'LG':
          return this.props.items.filter(item => item.attributes.size === 'LG');
        default:
          return this.props.items
      }
    }

    renderItems = () => {
      if(this.sizeFilter() && this.props.filterItems) {
        return this.sizeFilter(this.props.filter).map(item => 
          <div className="col-sm-3" key={item.id}>
              <img src={item.attributes.image} alt={item.attributes.name} className="img-fluid"></img> 
              <h5 align="center">{item.attributes.name}</h5>
              <h6 align="center">${item.attributes.price}.00</h6>
              <h6 align="center">Size: {item.attributes.size}</h6>
              <button id={item.id} onClick={this.handleClick} type="submit">ADD TO CART</button>
          </div>
        
        )
      }
    }

    render() {
      // console.log(this.props.filterItems)
      return (    
        <div className="container">
          <div className="bwtq-filter-title">
            <h2>{this.props.filterTitle}</h2>
          </div>
          <div className="bwtq-size-desc">
            <p>SM is better suited for small to medium dogs/cats</p>
            <p>LG is better suited for medium to large dogs.</p>
          </div>
          
          <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group" role="group" aria-label="First group">
            Filter by size:
              <button type="button" onClick={this.props.filterItems} id="ALL BOW TIES" value='ALL' className="btn btn-secondary">ALL</button>
              <button type="button" onClick={this.props.filterItems} id="SMALL BOW TIES" value='SM' className="btn btn-secondary">SM</button>
              <button type="button" onClick={this.props.filterItems} id="LARGE BOW TIES" value='LG' className="btn btn-secondary">LG</button>
            </div>
          </div>

          <div className="row">
            {this.renderItems()}
          </div>
        </div>
        
      );
    }
  
}

// const mapDispatchToProps = dispatch => {
//   return { fetchItems: () => dispatch(fetchItems())}
// }

const mapStateToProps = state => {
  return { currentUser: state.userReducer.currentUser, items: state.itemsReducer.items }
}

export default connect(mapStateToProps, { fetchItems, addItemToCart })(Items); 
