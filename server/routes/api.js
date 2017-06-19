const express = require('express');
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
const router = express.Router();

/* GET api listing. */
router.get('/', function (req, res) {
  res.send('api works');
});

// Get all posts
router.get('/posts', function (req, res) {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(API + '/posts')
    .then(function (posts) {
      res.status(200).json(posts.data);
    })
    .catch(function (error) {
      res.status(500).send(error)
    });
});


module.exports = router;
