const mongoose = require('mongoose');
const Post = new mongoose.Schema({
    userId: Number,
    id: Number,
    title: String,
    body: String
});
mongoose.model('Post', Post);
mongoose.connect('mongodb://localhost/mean');
console.log('we are connected');