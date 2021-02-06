import React, {Component} from "react";
import {hot} from "react-hot-loader";
import Ingredient from "./Ingredient.js";
import "./App.css";

function Ingredients({ingredients, handleDelete}) {
  return (
    <div class="ingredients">
      {ingredients.map(function(item) {
        return <Ingredient key={item._id} ingredient={item} handleDelete={handleDelete}/>
      })}
    </div>
  )
}

export default hot(module)(Ingredients);
