import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarContainer from './containers/NavbarContainer';
import Home from './components/Home';
import ItemsContainer from './containers/ItemsContainer';
import User from './components/User';
import Login from './components/Login';
import Footer from './components/Footer';
import Cart from './containers/CartContainer';
import Backdrop from './components/Backdrop';

class App extends Component {
  state = {
    filterTitle: 'ALL BOW TIES',
    filter: '',
    cartVisible: false
  }

  cartToggleHandler = () => {
    this.setState((prevState) => {
      return {cartVisible: !prevState.cartVisible}
    })
  }

  filterItems = (event) => {
    event.persist()
    this.setState(prevState => ({
      ...prevState,
      filterTitle: event.target.id,
      filter: event.target.value
    }))
  }
  
  render() {
    let backdrop;

    if(this.state.cartVisible) {
      backdrop = <Backdrop closeCart={this.cartToggleHandler} />
    }

    return (
      <Router>
          <div style={{height: '100%'}}>
            <NavbarContainer cartToggle={this.cartToggleHandler} openCart={this.w3_open} />
            <Cart visible={this.state.cartVisible} close={this.cartToggleHandler} />
              {backdrop}
              <main style={{marginTop: '34px'}}>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/bowties" render={(props) => <ItemsContainer {...props} currentUser={this.props.currentUser} filterItems={this.filterItems} filter={this.state.filter} filterTitle={this.state.filterTitle} />} />
                <Route path="/account" render={(props) => <User {...props} currentUser={this.props.currentUser} carts={this.props.carts} />} />
              </main>
            <Footer />
          </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.userReducer.currentUser,
    carts: state.userReducer.carts.flat()
  }
}

export default connect(mapStateToProps)(App);