require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const reviewRoutes = require('./routes/reviews.routes');

//create express instance
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/reviews/', reviewRoutes);


//run the server
const {PORT, START_UP_MESSAGE} = process.env
app.listen(PORT, () => console.log(`${START_UP_MESSAGE} ${PORT}`));