
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('recipes').insert([
    { recipe_name: 'omelette' },
    { recipe_name: 'pancakes' },
  ]);
};
