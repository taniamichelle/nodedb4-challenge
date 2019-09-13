
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('instructions').insert([
    { recipe_id: 1, ingredient_id: 9, quantity: 0.5, step_number: 1, step: "Place butter on preheated skillet to melt." },
    { recipe_id: 1, ingredient_id: 2, quantity: 2, step_number: 2, step: "Beat eggs in a small bowl." },
    { recipe_id: 1, ingredient_id: 4, quantity: 1, step_number: 5, step: "When the eggs have cooked, add the cheese, fold the omelette over it, and serve." },
    { recipe_id: 1, ingredient_id: 5, quantity: 0.25, step_number: 3, step: "Add salt into eggs." },
    { recipe_id: 1, ingredient_id: 6, quantity: 0.25, step_number: 4, step: "Add pepper into eggs and pour eggs into the skillet." },
    { recipe_id: 2, ingredient_id: 9, quantity: 3, step_number: 6, step: "Add melted butter to the mixture. Once combined, add desired amount of batter to a preheated skillet and cook until golden." },
    { recipe_id: 2, ingredient_id: 1, quantity: 1.25, step_number: 5, step: "Slowly add milk to dry mixture and combine." },
    { recipe_id: 2, ingredient_id: 2, quantity: 1, step_number: 7, step: "Add egg to mixture." },
    { recipe_id: 2, ingredient_id: 3, quantity: 1, step_number: 1, step: "Add flour to large mixing bowl." },
    { recipe_id: 2, ingredient_id: 5, quantity: 0.5, step_number: 2, step: "Add salt to the flour." },
    { recipe_id: 2, ingredient_id: 7, quantity: 2, step_number: 3, step: "Add sugar to the flour." },
    { recipe_id: 2, ingredient_id: 8, quantity: 2.5, step_number: 4, step: "Add baking powder to the flour mixture and mix well." },
  ]);
};
