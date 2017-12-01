const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db/mysql');


const app = express();

const table = require('./route/table');
const createDb = require('./route/createDb');
const display = require('./route/display')
const add = require('./route/add');

//Set view engine
app.set('view engine','ejs');

//Set public directory
app.use(express.static(path.join(__dirname, 'public')));

//Body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set routes
app.use('/add',add);
app.use('/createDb',createDb);
app.use('/table',table);
app.use('/display',display);

//Run server
app.listen(3000,()=>{
    console.log('Server running at 3000');
});
