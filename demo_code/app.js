const express = require('express');
const app = express();

app.use(express.json());

app.get(['/test', '/status'], (req, res) => {
    res.send('Hello from your first express API!')
});

app.post('/create', (req, res) => {
    console.log(req.body)
    res.json(req.body)
});

app.get('/request', (req, res) => {
    console.log(req)
});

app.get('/actors/:actorId/movies/:movieId', (req, res) => {
    console.log(req.params)
});

app.get('/actors', (req, res) => {
    console.log(req.query)
})




app.listen(8000, () => console.log('Listening on port 8000...'));