import React, {Component} from "react";
import {hot} from "react-hot-loader";
import Ingredient from "./Ingredient.js";

function Ingredients({ingredients}) {
  return (
    <div>
      {ingredients.map(function(item) {
        return <Ingredient key={item.name} ingredient={item}/>
      })}
      {/* <Ingredient ingredient={ingredients[0]}/>
      <Ingredient ingredient={ingredients[1]}/>
      <Ingredient ingredient={ingredients[2]}/> */}
    </div>
  )
}

export default hot(module)(Ingredients);


{/* <Ingredient ingredient={ingredients[0]}/>
      <Ingredient ingredient={ingredients[1]}/>
      <Ingredient ingredient={ingredients[2]}/> */}