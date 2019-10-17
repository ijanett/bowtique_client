import React, { Component } from 'react';
import {connect} from 'react-redux'
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
  
  
  render() {
    console.log(this.props);
    return (
      <Router>
      <Navbar />
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/bowties" component={Items} />
          <Route path="/account" component={User} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps)(App)


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