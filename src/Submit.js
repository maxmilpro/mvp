import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

function Submit({handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="ingredient">Ingredient: </label>
        <input type="text" name="ingredient" id="ingredient"></input>
      </div>
      <div>
        <label htmlFor="quantity">Quantity: </label>
        <input type="text" name="quantity" id="quantity"></input>
      </div>
      <div>
        <label htmlFor="categories">Category: </label>
        <select name="categories" id="categories">
          <option value="">Please choose an option</option>
          <option value="protein">protein</option>
          <option value="grains">grains</option>
          <option value="vegetables">vegetables</option>
          <option value="fruit">fruit</option>
          <option value="dairy">dairy</option>
        </select>
      </div>
      <div>
        <label htmlFor="meal">Meal: </label>
        <select name="meal" id="meal">
          <option value="">Please choose an option</option>
          <option value="breakfast">breakfast</option>
          <option value="lunch">lunch</option>
          <option value="dinner">dinner</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Add Ingredient"></input>
      </div>
    </form>
  )
}

export default hot(module)(Submit);