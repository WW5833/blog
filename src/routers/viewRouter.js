const express = require('express');
const router = express.Router();
const post = require('../models/post');

router.get('/', (req, res) => {
    res.render('home', { basePath: "." });
});

router.get('/post/new', (req, res) => {
    res.render('new-post', { basePath: ".." });
});

router.get('/post/:id', (req, res) => {
    post.findById(req.params.id, (err, data) => {
        if(!data) {
            return res.status(400).send('<h1>Post not found</h1> <a href="/">Go back</a>');
        }
        res.render('post', { post: data, basePath: ".."  });
    });
});

router.get('/post/:id/edit', (req, res) => {
    post.findById(req.params.id, (err, data) => {
        if(!data) {
            return res.status(400).send('<h1>Post not found</h1> <a href="/">Go back</a>');
        }
        res.render('edit-post', { post: data, basePath: "../.."  });
    });
});

router.get('/post/:id/delete', (req, res) => {
    if(!data) {
        return res.status(400).send('<h1>Post not found</h1> <a href="/">Go back</a>');
    }
    post.findById(req.params.id, (err, data) => {
        res.render('delete-post', { post: data, basePath: "../.."  });
    });
});

module.exports = router;