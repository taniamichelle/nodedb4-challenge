
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  // return knex('recipes').del()
  //   .then(function () {
  // Inserts seed entries
  return knex('recipes').insert([
    { recipe_name: 'omelette', ingredients: "eggs, salt, pepper, cheese", ingredient_quantity: "2, 0.25t, 0.25t, 0.5g" },
    { recipe_name: 'pancakes', ingredients: "eggs, milk, salt, flour, baking powder, sugar", ingredient_quantity: "2, 1c, 2c, 1t, 1T" },
  ]);
};
