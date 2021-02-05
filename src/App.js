import React, {Component} from "react";
import {hot} from "react-hot-loader";
import Ingredients from "./Ingredients.js";
import Submit from "./Submit.js";

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Recipebook</h1>
        <div><Submit/></div>
        <div><Ingredients/></div>
      </div>
    );
  }
}

export default hot(module)(App);