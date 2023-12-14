const express = require('express');
const router = express.Router();
const { Game, Genre, Studio } = require('../db/models');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
    const games = await Game.findAll({
        attributes: ['name', 'releaseYear', 'online'],
        order: [['esrbRating'], ['releaseYear'], ['name']]
    });

    res.json(games)
});

router.get('/associations', async (req, res) => {
    const games = await Game.findAll({
        include: [
            {
                model: Genre,
                attributes: ['name']
            },
            {
                model: Studio,
                through: {
                    attributes: []
                }
            }
        ]
    });

    res.json(games)
});

router.get('/associations/methods', async (req, res) => {
    // const game = await Game.findByPk(1);
    // const gameGenre = await game.getGenre({
    //     attributes: ['id', 'name']
    // });
    // const genre = await Genre.findByPk(1);
    // const newGame = await genre.createGame({
    //     name: 'TEsting create',
    //     releaseYear: 2022,
    //     esrbRating: 'M',
    //     soldUnits: 1234567,
    //     description: 'This is a test',
    //     online: true,
    //     metacriticScore: 5.5
    // });
    const studio = await Studio.findByPk(1);
    const game = await Game.findOne({
        where: {
            name: 'Tetris'
        }
    })
    const newGameJoin = await studio.addGame(game.id)

    res.json({
        // game,
        // gameGenre,
        // genre,
        // newGame,
        studio,
        newGameJoin
    })
});

router.get('/aggregates', async (req, res) => {
    const minScore = await Game.min('metacriticScore', {
        where: {
            esrbRating: 'T'
        }
    });
    const maxScore = await Game.max('metacriticScore');
    const numGames = await Game.count();
    const allGames = await Game.findAll();
    const numGames2 = allGames.length;
    const totalSales = await Game.sum('soldUnits');
    const avgSales = totalSales / numGames;
    let bestGame = await Game.findOne({
        where: {
            metacriticScore: maxScore
        }
    });

    bestGame = bestGame.toJSON();

    bestGame.minScore = minScore;
    bestGame.maxScore = maxScore;
    bestGame.numGames = numGames;
    bestGame.totalSales = totalSales;
    bestGame.avgSales = avgSales;

    // res.json({
    //     minScore,
    //     maxScore,
    //     numGames,
    //     totalSales,
    //     avgSales,
    //     bestGame
    // })
    res.json(bestGame)
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

router.post('/build', async (req, res) => {
    const { name, releaseYear, esrbRating, soldUnits, description, genreId, online, metacriticScore } = req.body;

    const newGame = Game.build({
        name,
        releaseYear,
        esrbRating,
        soldUnits,
        description,
        genreId,
        online,
        metacriticScore
    });
    await newGame.validate();
    await newGame.save();

    res.json(newGame)
});

router.post('/create', async (req, res) => {
    const { name, releaseYear, esrbRating, soldUnits, description, genreId, online, metacriticScore } = req.body;

    const newGame = await Game.create({
        name,
        releaseYear,
        esrbRating,
        soldUnits,
        description,
        genreId,
        online,
        metacriticScore
    });

    res.json(newGame);
});

router.put('/:id', async (req, res) => {
    const game = await Game.findByPk(req.params.id);
    const { name, releaseYear, esrbRating, soldUnits, description, genreId, online, metacriticScore } = req.body;

    if (name) {
        game.name = name;
    }
    game.releaseYear = releaseYear || game.releaseYear;
    esrbRating ? game.esrbRating = esrbRating : null;
    game.soldUnits = soldUnits;
    game.description = description;
    game.genreId = genreId;
    game.online = online;
    game.metacriticScore = metacriticScore;

    console.log(game)

    await game.save();

    res.json(game);
});

router.delete('/:id', async (req, res) => {
    const game = await Game.findByPk(req.params.id);

    await game.destroy();

    res.json(game)
});


module.exports = router;