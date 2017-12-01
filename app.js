const express = require('express');
const db = require('./db/mysql');
const app = express();
const table = require('./route/table');
const createDb = require('./route/createDb');

app.use('/createDb',createDb);
app.use('/table',table);

app.listen(3000,()=>{
    console.log('Server running at 3000');
});
