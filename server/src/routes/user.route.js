const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');
const Post = require('../models/posts.model')

//sign up new users
router.post('/pandora/user/signup', (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw (err)
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            if (err) throw (err)
            else {
                const user = new User({
                    email: req.body.email,
                    firstName: req.body.firstName,
                    secondName: req.body.secondName,
                    userName: req.body.userName,
                    password: hash
                });
                user.save().then(function (result) {
                    res.json(result);
                }).catch(error => {
                    res.send(error)
                })
            }

        })
    })
});


//login
router.post('/pandora/user/login', (req, res, next) => {
    console.log(req.body)
    User.findOne({
        userName: req.body.userName
    }, (err, user) => {
        if (err) {
            res.send(err)
        } else {
            console.log(user)
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    res.send(err)
                } else if (result == false) {
                    console.log(result)
                    res.send("Not Allowed")
                } else {
                    const token = jwt.sign({
                        id: user._id
                    }, config.secret, {
                        expiresIn: 86400
                    });
                    res.json({
                        auth: true,
                        token: token,
                        id: user._id,
                        firstName: user.firstName,
                        secondName: user.secondName,
                        userName: user.userName,
                        email: user.email
                    })
                }
            })
        }
    })
});

//view a user profile
router.get('/pandora/users/:user_id', (req, res) => {
    User.findById(req.params.user_id, ).then(function (err, profile) {
        if (err) {
            res.send(err)
        } else {
            res.json(profile)
        }
    }).catch(err => res.send(err))
});

module.exports = router