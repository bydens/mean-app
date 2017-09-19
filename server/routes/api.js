const express = require('express');
const router = express.Router();

const db = require('../db');
const post = require('../post');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/posts', post.seeResult);
router.delete('/posts/:id', post.delete);

module.exports = router;