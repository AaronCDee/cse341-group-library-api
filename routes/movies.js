const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies');
// const validation = require('../middleware/validate');
const auth = require('../middleware/authenticate')

router.get('/', moviesController.getAllMovies);

router.get('/:id', moviesController.getSingleMovie);

router.post('/', auth.isAuthenticated, moviesController.createMovie)
router.put('/:id', auth.isAuthenticated, moviesController.updateMovie);
router.delete('/:id', auth.isAuthenticated, moviesController.deleteMovie);

module.exports = router;