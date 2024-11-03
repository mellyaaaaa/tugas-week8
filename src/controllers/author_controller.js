const Author = require('../models/author_model');

exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json({ message: 'List of authors', data: authors });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch authors', error });
    }
};

exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) return res.status(404).json({ message: 'Author not found' });
        res.status(200).json({ message: 'Author details', data: author });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch author', error });
    }
};

