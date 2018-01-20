import React, { Component } from 'react';
import { getGamesData } from './utils/genralUtils';
import BasePage from './components/BasePage';
import './App.css'

class App extends Component {
  render() {

    getGamesData()

    return (
      <div className="App">
        <BasePage />
      </div>
    );
  }
}

export default App;
