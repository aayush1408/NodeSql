const express = require('express');
const db = require('../db/mysql');
const router = express.Router();

router.get('/',(req,res)=>{
    let sql = 'CREATE TABLE posts (id int AUTO_INCREMENT,title VARCHAR(250),body VARCHAR(250),PRIMARY KEY(id) )';
    db.query(sql,(err,result)=>{
        if (err) throw err;
        res.send('Table created');
    });
});
module.exports = router;
