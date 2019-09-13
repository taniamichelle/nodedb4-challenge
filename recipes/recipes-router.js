const router = require('express').Router;

const Recipes = require('./recipes-model');

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Failed to get recipes.' });
        });
});

router.get('/:id', (req, res) => {

});

router.get('/:id/instructions', (req, res) => {

});