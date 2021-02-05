import React, {Component} from "react";
import {hot} from "react-hot-loader";

function Submit(props) {
  return (
    <form>
      <div>
        <label htmlFor="ingredient">Enter an ingredient: </label>
        <input type="text" name="ingredient" id="ingredient"></input>
      </div>
      <div>
        <label htmlFor="quantity">Enter a quantity: </label>
        <input type="text" name="quantity" id="quantity"></input>
      </div>
      <div>
        <label htmlFor="categories">Select a category: </label>
        <select name="categories" id="categories">
          <option value="">Please choose an option</option>
          <option value="protein">protein</option>
          <option value="grains">grains</option>
          <option value="vegetables">vegetables</option>
          <option value="fruit">fruit</option>
          <option value="dairu">dairy</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Add Ingredient"></input>
      </div>
    </form>
  )
}

export default hot(module)(Submit);