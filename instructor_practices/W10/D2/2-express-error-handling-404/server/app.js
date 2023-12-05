const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

// 404 Not Found Middleware
app.use((req, res, next) => {
  const notFoundError = new Error('Sorry, the requested resource couldn\'t be found.')
  notFoundError.statusCode = 404;
  next(notFoundError);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message,
    statusCode
  })
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
