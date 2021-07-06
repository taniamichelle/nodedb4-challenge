
exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
  // Inserts seed entries
  return knex('ingredients').insert([
    { ingredient_name: 'milk' },
    { ingredient_name: 'eggs' },
    { ingredient_name: 'flour' },
    { ingredient_name: 'cheese' },
    { ingredient_name: 'salt' },
    { ingredient_name: 'pepper' },
    { ingredient_name: 'sugar' },
    { ingredient_name: 'baking powder' },
    { ingredient_name: 'butter' },
  ]);
};
