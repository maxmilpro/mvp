import React, {Component} from "react";
import {hot} from "react-hot-loader";

function Ingredient({name}) {
  return <div>Ingredient: {name}</div>;
}

export default hot(module)(Ingredient);