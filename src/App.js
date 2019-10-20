import React, { Component } from 'react';
// import {connect} from 'react-redux'
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Header from './components/Header';
import Items from './components/Items';
import User from './components/User';
import Login from './components/Login';



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
      <Navbar />
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/bowties" render={(props) => <Items {...props} filterItems={this.filterItems} filter={this.state.filter} filterTitle={this.state.filterTitle} />} />
          <Route path="/account" component={User} />
        </Switch>
      </Router>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     user: state.userReducer.currentUser
//   }
// }

export default App;


//  {/* <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//  </div> */}