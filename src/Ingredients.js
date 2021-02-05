import React, {Component} from "react";
import {hot} from "react-hot-loader";
import Ingredient from "./Ingredient.js";

function Ingredients(props) {
  return (
    <div>
      <Ingredient name="chicken"/>
      <Ingredient name="lettuce"/>
      <Ingredient name="pasta"/>
      <Ingredient name="apple"/>
      <Ingredient name="eggplant"/>
    </div>
  )
}

export default hot(module)(Ingredients);