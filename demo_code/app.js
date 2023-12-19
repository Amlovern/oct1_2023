const express = require('express');
const app = express();
require('dotenv').config();
const { Game } = require('./db/models');

const gamesRouter = require('./routes/games');

app.use(express.json());

app.use('/styling', express.static('assets/css'));

app.use('/games', gamesRouter);

app.get('/search', async(req, res) => {
    let { size, page } = req.query;
    let pagination = {};

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
        ...pagination
    });

    res.json(allGames)
})







const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));