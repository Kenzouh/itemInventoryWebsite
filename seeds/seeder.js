// Seeder = Test or Dummy data for ADDING

const mongoose = require('mongoose');
const Item = require('../models/item');
                            // localhost:port/name of database
mongoose.connect('mongodb://127.0.0.1:27017/item-db') // Connection of database
    .then(() => {
        console.log("Connection open");
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })

// instance of the data
const seedDb = async() => {

    // await Item.deleteMany({}); // For  deleting everything for a fresh DB
    const items = new Item({
        name: 'Shovel',
        category: 'Grass Lands',
        quantity: 4,
        price: 800,
        description: "for digging.",
        createdAt: new Date()
    })
    await items.save();

    // insertMany is also okay
}

// Async and await = tandem

seedDb().then(() => {
    mongoose.connection.close();
})