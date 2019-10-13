import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Items from './components/Items';


export default class App extends Component {
  render() {
    return (
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bowties" component={Items} />
        </Switch>
      </Router>
    )
  }
}



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