import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { hot } from 'react-hot-loader';
import AppContainer from './components/hoc/AppContainer';

class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

export default hot(module)(App);
