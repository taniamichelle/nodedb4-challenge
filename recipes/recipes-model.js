const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes');
};

function getShoppingList(recipe_id) {
    return db('recipes')
        .select([
            'recipe_name',
            'recipes.ingredients',
            'ingredient_id',
            'ingredient_name'
        ])
        .where({ recipe_id })
        .join('ingredients', 'ingredient_id', 'recipe_id')
};

function getInstructions(recipe_id) {
    return db('recipes')
};