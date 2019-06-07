const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: String,
    firstName: String,
    secondName: String,
    userName: String,
    password: String,
})

const user = mongoose.model('User', userSchema)

module.exports = user