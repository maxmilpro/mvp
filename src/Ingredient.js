import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

function Ingredient({ingredient, handleDelete}) {
  return (
    <div class="ingredient">
      <ul>
        <li>Ingredient: {ingredient.name}</li>
        <li>Quantity: {ingredient.quantity}</li>
        <li>Food Group: {ingredient.category}</li>
        <li>Meal: {ingredient.meal}</li>
        <li id="hidden">ID: {ingredient._id}</li>
        <button onClick={handleDelete}>Delete Ingredient</button>
      </ul>
    </div>
  )
}

export default hot(module)(Ingredient);