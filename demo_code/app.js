const express = require('express');
const app = express();
require('dotenv').config();
const { Game, Genre } = require('./db/models');
const { Op } = require('sequelize');

const gamesRouter = require('./routes/games');

app.use(express.json());

app.use('/styling', express.static('assets/css'));

app.use('/games', gamesRouter);

app.get('/search', async(req, res) => {
    let { size, page, title, minScore, genre } = req.query;
    let pagination = {};
    const queryObj = {
        where: {},
        include: []
    };

    if (title) {
        queryObj.where.name = {
            [Op.substring]: title
        }
    };

    if (minScore) {
        queryObj.where.metacriticScore = {
            [Op.gte]: minScore
        }
    };

    if (genre) {
        queryObj.include.push({
            model: Genre,
            where: {
                name: genre
            }
        })
    };

    if (!size) size = 3;
    page = page || 1;

    pagination.limit = size;
    pagination.offset = size * (page - 1);

    if (page < 1 || size < 1) {
        // pagination = {};
        delete pagination.limit;
        delete pagination.offset;
    }

    const allGames = await Game.findAll({
        ...queryObj,
        ...pagination
    });

    res.json(allGames)
})







const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));