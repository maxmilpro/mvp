import React, {Component} from "react";
import {hot} from "react-hot-loader";

function Ingredient({ingredient}) {
  return (
    <ul>
      <li>Ingredient: {ingredient.name}</li>
      <li>Quantity: {ingredient.quantity}</li>
      <li>Food Group: {ingredient.category}</li>
      <li>Meal: {ingredient.meal}</li>
    </ul>
  )
}

export default hot(module)(Ingredient);