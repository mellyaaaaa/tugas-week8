const Book = require('../models/book_model');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({ message: 'List of books', data: books });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch books', error });
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json({ message: 'Book details', data: book });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch book', error });
    }
};

