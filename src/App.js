//import logo from './logo.svg';
import './App.css';

import News from './components/News';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Switch>
          <Route exact path="/"> <News key="01" pageSize={9} country="in" category="general"/></Route>
          <Route exact path="/business"> <News key="02" pageS ize={9} country="in" category="business"/></Route>
          <Route exact path="/entertainment"> <News key="03" pageSize={9} country="in" category="entertainment"/></Route>
          <Route exact path="/health"> <News key="04" pageSize={9} country="in" category="health"/></Route>
          <Route exact path="/science"> <News key="05" pageSize={9} country="in" category="science"/></Route>
          <Route exact path="/sports"> <News key="06" pageSize={9} country="in" category="sports"/></Route>
          <Route exact path="/technology"> <News key="07" pageSize={9} country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}



