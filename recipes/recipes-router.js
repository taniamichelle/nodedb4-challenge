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
    const { id: recipe_id } = req.params;
    Recipes.getShoppingList(recipe_id)
        .then(shoppingList => {
            if (shoppingList) {
                return res.json(shoppingList);
            } else {
                return res.status(404).json({ error: 'Error finding ingredient with that id.' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Failed to get shoppingList.' });
        });
});

// router.get('/:id/instructions', (req, res) => {
//     const {id: recipe_id} = req.params;
//     Recipes.getInstructions(recipe_id)
//         .then(instructions => {
//             if()
//         })
// });
// Schemes.findSteps(id)
//     .then(steps => {
//         if (steps.length) {
//             res.json(steps);
//         } else {
//             res.status(404).json({ message: 'Could not find steps for given scheme' })
//         }
//     })
//     .catch(err => {
//         res.status(500).json({ message: 'Failed to get steps' });
//     });
// });
module.exports = router;