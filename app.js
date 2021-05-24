const express = require('express');
const bodyParser = require('body-parser');
const reviewRoutes = require('./routes/reviews.routes');

//create express instance
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/reviews/', reviewRoutes);


//run the server
let port = 3000
app.listen(3000, () => console.log('Server running at ', port));