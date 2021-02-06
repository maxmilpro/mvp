import * as $ from "jquery";

const url = 'http://localhost:3000/ingredients/';

var getIngredients = function(cb) {
  $.get(url, cb);
}

var addIngredient = function(ingredient, cb) {
  $.post(url, ingredient, cb);
}

var deleteIngredient = function(ingredient, cb) {
  $.post('http://localhost:3000/removeingredient/', ingredient, cb);
}

export {getIngredients, addIngredient, deleteIngredient};