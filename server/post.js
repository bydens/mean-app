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
    },
    delete(req, res) {        
        Post.find({_id: req.params.id})
            .remove(() => {
                res.status(200).json(req.params.id);
            })
            .catch(err => {
                console.log('error', err);
            })
    }
}