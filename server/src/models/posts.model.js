const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const postSchema = new Schema ({
    title: String,
    body: String,
    publisher_id: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
});

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;