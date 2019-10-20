import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ItemsContainer from './containers/ItemsContainer';
import User from './components/User';
import Login from './components/Login';
import Footer from './components/Footer';
import Cart from './components/Cart';



class App extends Component {
  state = {
    filterTitle: 'ALL BOW TIES',
    filter: ''
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
    return (
      <Router>
      <Navbar currentUser={this.props.currentUser} carts={this.props.carts} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/bowties" render={(props) => <ItemsContainer {...props} currentUser={this.props.currentUser} filterItems={this.filterItems} filter={this.state.filter} filterTitle={this.state.filterTitle} />} />
          <Route path="/account" render={(props) => <User {...props} currentUser={this.props.currentUser} carts={this.props.carts} />} />
          <Route path="/new-cart" component={Cart} />
        </Switch>
      <Footer />
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