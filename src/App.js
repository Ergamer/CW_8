import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuotesWindow from "./components/QuotesWindow/QuotesWindow";
import SubmitNewQuote from "./containers/SubmitNewQuote/SubmitNewQuote";
import {Switch,Route} from 'react-router-dom';
import Header from "./components/Header/Header";


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Switch>
              <Route path="/" exact component={QuotesWindow}/>
              <Route path="/second" exact component={SubmitNewQuote}/>
          </Switch>
          <nav className="Nav">
              <ul>
                  <li><a href="">All</a></li>
                  <li><a href="">Famous</a></li>
                  <li><a href="">Humour</a></li>
              </ul>
          </nav>
      </div>
    );
  }
}

export default App;
