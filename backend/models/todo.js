const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
    name: {
        type: String
    },
    status: {
        type: Boolean
    }
});

module.exports = mongoose.model('Todo', Todo);
