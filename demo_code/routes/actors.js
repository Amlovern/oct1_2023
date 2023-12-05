const express = require('express');
const router = express.Router();

router.get('/:actorId/movies/:movieId', (req, res) => {
    console.log(req.params)
});

router.get('/actors', (req, res) => {
    console.log(req.query)
})






module.exports = router;