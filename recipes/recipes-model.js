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
    return db('instructions')
        .join('recipes', 'instructions.recipe_id', 'recipes.id')
        .join('ingredients', 'instructions.ingredient_id', 'ingredients.id')
        .where({ recipe_id })
        .select('recipe_name', 'ingredients.ingredient_name', 'instructions.quantity')
};

function getInstructions(recipe_id) {
    return db('instructions')
        .join('recipes', 'instructions.recipe_id', 'recipes.id')
        .join('ingredients', 'instructions.ingredient_id', 'ingredients.id')
        .where({ recipe_id })
        .select('recipe_name', 'ingredients.ingredient_name', 'instructions.quantity', 'instructions.step_number', 'instructions.step')
        .orderBy('instructions.step_number', 'asc')
};