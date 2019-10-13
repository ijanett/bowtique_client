import React from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/fetchItems';


class Items extends React.Component {
    componentDidMount(){
        console.log("MOUNTING")
        this.props.fetchItems()
    }

    render() {
        const items = this.props.items.map(item => 
        
          <div className="col-sm-3" key={item.id}>
              <img src={item.attributes.image} alt={item.attributes.name} className="img-fluid"></img> 
              <h5 align="center">{item.attributes.name}</h5>
              <h6 align="center">Size: {item.attributes.size}</h6>
              <p align="center">Price: ${item.attributes.price}.00</p>
              <button type="button">ADD TO CART</button>
          </div>
        
        )
    
      console.log(this.props.items)
    return (    
      <div className="container">
        <div className="row">
          {items}
        </div>
      </div>
    );
  }
  
}

// const mapDispatchToProps = dispatch => {
//   return { fetchItems: () => dispatch(fetchItems())}
// }

const mapStateToProps = state => {
  return { items: state.items }
}

export default connect(mapStateToProps, { fetchItems })(Items); 
