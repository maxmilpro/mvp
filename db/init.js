conn = new Mongo();
db = conn.getDB('recipeBook');

var categories = [
  {name: 'protein'},
  {name: 'grains'},
  {name: 'vegetables'},
  {name: 'fruit'},
  {name: 'dairy'}
];

var meals = [
  {name: 'dinner'},
  {name: 'lunch'},
  {name: 'breakfast'}
]

db.ingredients.drop();
db.categories.drop();
db.meals.drop();

db.categories.insertMany(categories);
db.meals.insertMany(meals);
