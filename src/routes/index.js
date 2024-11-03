const express = require("express")
const testRoutes = require("./test_routes")
const authorRoutes = require('./author_routes');
const bookRoutes = require('./book_routes');


const routes = express.Router()

// kumpulkan semua routes disini per bagian ex : /author,/books dll
routes.use('/api/v1', authorRoutes);
routes.use('/api/v1', bookRoutes);
routes.use('/api/v1', testRoutes);


module.exports = routes