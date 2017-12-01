const express = require('express');
const db = require('../db/mysql');
const router = express.Router();

router.get('/toy',(req,res)=>{
    let sql = 'CREATE TABLE toy (toy_id int AUTO_INCREMENT,name VARCHAR(250),address VARCHAR(250),phone VARCHAR(250),toy_name VARCHAR(250),description VARCHAR(250),img VARCHAR(250),PRIMARY KEY(toy_id) )';
    db.query(sql,(err,result)=>{
        if (err) throw err;
        res.send('User table created');
    });
});
module.exports = router;
