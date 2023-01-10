const express = require('express');
const router = express.Router();
const post = require('../models/post');

router.get('/post', (req, res) => {
    post.find((err, data) => {
        if (err) {
            res.status(500).send(err.toString());
            return;
        }

        res.json(data);
    });
});

router.post('/post', (req, res) => {
    console.log(req.body);
    if(!req.body.title || req.body.title == '' || !req.body.content || req.body.content == ''){
        return res.status(400).send('Title and content are required');
    }

    let newPost = new post({ title: req.body.title, content: req.body.content, image: null, date: new Date() });
    newPost.save((err, data) => {
        if (err) {
            res.status(500).send(err.toString());
            return;
        }

        res.json(data);
    });
});

router.get('/post/:id', (req, res) => {
    post.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err.toString());
            return;
        }

        res.json(data);
    });
});

router.put('/post/:id', (req, res) => {
    post.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
            res.status(500).send(err.toString());
            return;
        }

        res.json(data);
    });
});

router.delete('/post/:id', (req, res) => {
    post.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send(err.toString());
            return;
        }

        res.json(data);
    });
});

module.exports = router;