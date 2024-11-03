const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book_controller');

router.get('/books', bookController.getAllBooks);
router.get('/book/:id', bookController.getBookById);

module.exports = router;
