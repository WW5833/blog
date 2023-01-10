const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/blog');

const schema = new mongoose.Schema({
    title: String,
    content: String,
    image: String,
    date: Date,
});

const post = mongoose.model('post', schema);

module.exports = post;