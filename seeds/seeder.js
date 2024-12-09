// Seeder = Test or Dummy data for ADDING

const mongoose = require('mongoose');
const User = require('../models/user');
                            // localhost:port/name of database
mongoose.connect('mongodb://127.0.0.1:27017/user-db') // Connection of database
    .then(() => {
        console.log("Connection open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })

// instance of the data
const seedDb = async() => {

    // await User.deleteMany({}); // For  deleting everything for a fresh DB
    const users = new User({
        name: 'Eijey Tamayo',
        emailAddress: 'testemail@email.com'
    })
    await users.save();

    // insertMany is also okay
}

// Async and await = tandem

seedDb().then(() => {
    mongoose.connection.close();
})