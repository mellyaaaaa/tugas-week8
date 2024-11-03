const mongoose = require('mongoose');

const borrowBookSchema = new mongoose.Schema({
    book_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    borrower_name: { type: String, required: true },
    borrow_date: { type: Date, default: Date.now },
    return_date: { type: Date },
});

module.exports = mongoose.model('BorrowBook', borrowBookSchema);
