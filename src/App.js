import React, {Component} from "react";
import {hot} from "react-hot-loader";
import Ingredients from "./Ingredients.js";
import Submit from "./Submit.js";
import {getIngredients, addIngredient} from "./requests.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    getIngredients((data) => {
      this.setState({
        ingredients: data
      })
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var newIngredient = {
      name: event.target.children[0].children[1].value,
      quantity: event.target.children[1].children[1].value,
      category: event.target.children[2].children[1].value,
      meal: event.target.children[3].children[1].value
    }
    addIngredient(newIngredient, () => {
      console.log('Sent a new ingredient to the server!')
    });
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
        <div><Submit handleSubmit={this.handleSubmit}/></div>
        <div><Ingredients ingredients={this.state.ingredients}/></div>
      </div>
    );
  }
}

export default hot(module)(App);