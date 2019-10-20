import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/fetchItems';
import Item from '../components/Item'

class ItemsContainer extends Component {
    componentDidMount(){
        console.log("MOUNTING")
        this.props.fetchItems()
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

    // searchFilter = () => {
    //   return this.props.items.filter(item => {
    //     return item.name.includes(this.props.search)
    //   })
    // }

    renderItems = () => {
      if(this.props.filterItems) {
        return this.sizeFilter(this.props.filter).map(item => 
            <Item key={item.id} id={item.id} img={item.attributes.image} name={item.attributes.name} price={item.attributes.price} size={item.attributes.size} currentUser={this.props.currentUser} />
        )
      }
    }

    render() {
      window.scrollTo(0,0)

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
            {/*<div class="input-group">
              <form>
                <input type="text" onChange={this.props.udpateSearch} value={this.props.search} className="form-control" placeholder="Search bow ties" aria-describedby="btnGroupAddon2" />
              </form>
            </div>*/}
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
  return { items: state.itemsReducer.items }
}

export default connect(mapStateToProps, { fetchItems })(ItemsContainer); 
