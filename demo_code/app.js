const express = require('express');
const app = express();
require('dotenv').config();

const actorRouter = require('./routes/actors');

app.use(express.json());

app.use('/actors', actorRouter);

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

// app.use((req, res, next) => {
//     console.log('error test');
//     const error = new Error('There was an error :(');
//     error.statusCode = 401;
//     next(error);
// })

app.get(['/test', '/status'], printPath, (req, res, next) => {
    res.send('Hello from your first express API!')
});

app.post('/create', [printPath, checkUserInput], (req, res) => {
    console.log(req.body)
    res.json(req.body)
});

app.get('/request', (req, res) => {
    console.log(req)
});

app.get('/env', (req, res) => {
    console.log('env endpoint')
    res.send(process.env.MESSAGE)
})


// 404 Not Found Middleware
app.use((req, res, next) => {
    const notFoundError = new Error(`${req.method} ${req.path} not found`);
    notFoundError.statusCode = 404;
    next(notFoundError)
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err.message);
    const status = err.statusCode || 500;
    res.status(status);
    res.json({
        message: err.message || 'Something went wrong...',
        status
    })
});

app.listen(8000, () => console.log('Listening on port 8000...'));