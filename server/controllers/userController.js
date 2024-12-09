const mongoose = require('mongoose');
const User = require('../../models/user');

mongoose.connect('mongodb://127.0.0.1:27017/user-db')
    .then(() => {
        console.log("Connection open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })

// List of All Users
exports.users = async(req, res) => {
    const users = await User.find({});
    console.log(User);
    res.render('index', {users});
}