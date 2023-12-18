const express = require('express');
const app = express();
require('dotenv').config();

const gamesRouter = require('./routes/games');

app.use(express.json());

app.use('/styling', express.static('assets/css'));

app.use('/games', gamesRouter);







const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));