const express = require('express');
const router = express.Router();
const { Game } = require('../db/models');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
    const games = await Game.findAll({
        attributes: ['name', 'releaseYear', 'online'],
        order: [['esrbRating'], ['releaseYear'], ['name']]
    });

    res.json(games)
});

router.get('/:id(\\d+)', async (req, res) => {
    const game = await Game.findByPk(req.params.id);

    res.json(game)
});

router.get('/:gameName', async (req, res) => {
    const gameName = req.params.gameName;
    const game = await Game.findOne({
        where: {
            name: {
                [Op.substring]: gameName
            }
        }
    });

    res.json(game)
});




module.exports = router;