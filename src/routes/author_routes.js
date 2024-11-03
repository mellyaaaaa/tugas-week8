const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author_controller');

router.get('/authors', authorController.getAllAuthors);
router.get('/author/:id', authorController.getAuthorById);
router.post('/author', authorController.createAuthor); 

module.exports = router;
