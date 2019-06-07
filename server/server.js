const express = require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const post = require('./src/routes/post.route');
const user = require('./src/routes/user.route');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors({
    optionSuccessStatus: 200
}));
app.use(morgan('dev'))


mongoose.connect('mongodb://victor:victor1234@cluster0-shard-00-00-vfoph.mongodb.net:27017,cluster0-shard-00-01-vfoph.mongodb.net:27017,cluster0-shard-00-02-vfoph.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'|| 'mongodb://localhost:27017/pandora', {
    useNewUrlParser: true
});

app.use(post);
// all posts routes
app.use(user);
//all user routes

const port = process.env.PORT || 4400;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
})