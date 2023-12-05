const express = require('express');
const app = express();

app.use(express.json());

const printPath = (req, _res, next) => {
    console.log(`path: ${req.path}`);
    next()
};
app.use('/actors', printPath)

// middleware to validate that req.body has a "stuff" prop
const checkUserInput = (req, res, next) => {
    if (!req.body.stuff) {
        return res.send('Please include a stuff property.')
    } else {
        next()
    };
}

app.use((req, res, next) => {
    console.log('error test');
    const error = 'There was an error :(';
    next(error);
})

app.get(['/test', '/status'], printPath, (err, req, res, next) => {
    res.send('Hello from your first express API!')
});

app.post('/create', printPath, checkUserInput, (req, res) => {
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

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.send(err)
})

app.listen(8000, () => console.log('Listening on port 8000...'));