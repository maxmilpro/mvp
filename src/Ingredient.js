import React, {Component} from "react";
import {hot} from "react-hot-loader";

function Ingredient({ingredient, handleDelete}) {
  return (
    <div>
      <ul>
        <li>Ingredient: {ingredient.name}</li>
        <li>Quantity: {ingredient.quantity}</li>
        <li>Food Group: {ingredient.category}</li>
        <li>Meal: {ingredient.meal}</li>
        <li list-style-type="none">ID: {ingredient._id}</li>
        <button onClick={handleDelete}>Delete Ingredient</button>
      </ul>
    </div>
  )
}

export default hot(module)(Ingredient);