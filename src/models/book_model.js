const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
});

module.exports = mongoose.model('Book', bookSchema);
