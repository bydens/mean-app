require('mongoose').model('Post');

const mongoose = require('mongoose');
const Post = mongoose.model('Post');

module.exports = {
    seeResult(req, res) {
        Post.find()
            .then(posts => {
                res.status(200).json(posts);
            })
            .catch(err => {
                res.status(504).send(err);
            })
    }
}