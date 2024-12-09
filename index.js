const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const userRoutes = require('./server/routes/userRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// Execute routes
app.use('/', userRoutes);

app.listen(3000, () => {
    console.log("Serving on port 3000.");
})