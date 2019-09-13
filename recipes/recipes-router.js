// const express = require('express');
// const router = express.Router();

const router = require('express').Router();

const Recipes = require('./recipes-model');

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Failed to get recipes.' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Recipes.getShoppingList()
});

router.get('/:id/instructions', (req, res) => {

});

module.exports = router;