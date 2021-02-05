import React, {Component} from "react";
import {hot} from "react-hot-loader";
import Ingredients from "./Ingredients.js";
import Submit from "./Submit.js";
import sampleIngredients from "./sample-data/sample-ingredients.js";
import {getIngredients, addIngredient} from "./requests.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: sampleIngredients
    }
  }

  componentDidMount() {
    getIngredients((data) => {
      this.setState({
        ingredients: data
      })
    });
  }

  render(){
    return (
      <div className="App">
        <h1>Recipebook</h1>
        <div><Submit/></div>
        <div><Ingredients ingredients={this.state.ingredients}/></div>
      </div>
    );
  }
}

export default hot(module)(App);