const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/posts.model');

//get all posts
router.get('/pandora/posts', (req, res) => {
    post.find().then(all => {
        res.json(all);
    })
})
//get user individual post for their profile
router.get('/pandora/posts/:user_id', (req, res)=>{
    post.find({publisher_id:req.params.user_id},
        (err, posts)=>{
        if (err){
            res.send(err)
        }
        else{
            res.json(posts)
        }
    })
})

//get an individual post
router.get('/pandora/post/:posts_id', (req, res) => {
    post.findById(req.params.posts_id).then(function (err, posts) {
        if (err) {
            res.send(err)
        } else {
            res.json(posts)
        }
    })
})

//delete individual post by getting it by ID
router.delete('/pandora/posts/:post_id', (req, res) => {
    post.findByIdAndDelete(req.body.post_id).then(
        res.send('Deleted successfully')
    ).catch(err => res.send("There was an error deleting the post"))
})

// submit a new post to the server
router.post('/pandora/posts/create', (req, res) => {
    const savePost = new post({
        publisher_id: req.body.publisher,
        title: req.body.title,
        body: req.body.body,
    });
    savePost.save().then( function (result) {
        res.json(result)
    })
    .catch(error => {
        res.send(error)
    })
})

module.exports = router