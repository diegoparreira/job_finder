'use strict'

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const db = require('./database/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

// body parser 

app.use(bodyParser.urlencoded({ extended: false }));

// handle bars

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// set static folder

app.use(express.static(path.join(__dirname, 'public')));

// db connect

db
    .authenticate()
    .then()
    .catch(e => {
        console.log("Error to connect database: " + e);
    });


// routes

app.get('/', (req, res) => {
    res.render('index');
})

// jobs routes

app.use('/jobs', require('./routes/jobs'));

// port listen

app.listen(PORT);