import React, {Component} from "react";
import {hot} from "react-hot-loader";
import Ingredient from "./Ingredient.js";

function Ingredients({ingredients, handleDelete}) {
  return (
    <div>
      {ingredients.map(function(item) {
        return <Ingredient key={item._id} ingredient={item} handleDelete={handleDelete}/>
      })}
    </div>
  )
}

export default hot(module)(Ingredients);
