const BorrowBook = require('../models/borrow_book_model');

exports.borrowBook = async (req, res) => {
    try {
        const newBorrow = new BorrowBook(req.body);
        await newBorrow.save();
        res.status(201).json({ message: 'Book borrowed successfully', data: newBorrow });
    } catch (error) {
        res.status(500).json({ message: 'Failed to borrow book', error });
    }
};

exports.getBorrowedBooks = async (req, res) => {
    try {
        const borrowedBooks = await BorrowBook.find();
        res.status(200).json({ message: 'List of borrowed books', data: borrowedBooks });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch borrowed books', error });
    }
};

