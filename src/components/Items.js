import React from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/fetchItems';


class Items extends React.Component {
    componentDidMount(){
        console.log("MOUNTING")
        this.props.fetchItems()
    }

    render() {
      console.log(this.props.items)
        const items = this.props.items.map(item => 
        
          <div className="col-sm-3" key={item.id}>
              <img src={item.attributes.image} alt={item.attributes.name} className="img-fluid"></img> 
              <h5 align="center">{item.attributes.name}</h5>
              <h6 align="center">Size: {item.attributes.size}</h6>
              <p align="center">Price: ${item.attributes.price}.00</p>
              <button key={item.id} type="submit">ADD TO CART</button>
          </div>
        
        )
    
      console.log(this.props.items)
    return (    
      <div className="container">
        <div className="bwtq-filter-title">
          <h2>ALL BOW TIES</h2>
        </div>
        <div className="bwtq-size-desc">
          <p>SM is better suited for small to medium dogs/cats</p>
          <p>LG is better suited for medium to large dogs.</p>
        </div>
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
  return { items: state.itemsReducer.items }
}

export default connect(mapStateToProps, { fetchItems })(Items); 
