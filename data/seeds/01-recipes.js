
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  // return knex('recipes').del()
  //   .then(function () {
  // Inserts seed entries
  return knex('recipes').insert([
    { recipe_name: 'omelette', ingredients: "eggs, salt, pepper, cheese", quantity: "2, 0.25t, 0.25t, 1slice", instructions: "Beat eggs in a bowl and add salt and pepper. Pour into pan and flip when cooked. Add cheese and fold egg over and serve." },
    { recipe_name: 'pancakes', ingredients: "eggs, milk, salt, flour, baking powder, sugar", quantity: "2, 1c, 0.25t, 2c, 2t, 1T", instructions: "Mix dry ingredients in large bowl. Mix wet ingredients in smaller bowl. Slowly fold wet ingredients into dry. Mix until combined and cook on a skillet until golden brown." },
  ]);
};
