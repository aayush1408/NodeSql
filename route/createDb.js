const express = require('express');
const db = require('../db/mysql');
const router = express.Router();

router.get('/',(req,res)=>{
    let sql = 'CREATE DATABASE toystore';
    db.query(sql,(err,result)=>{
        if (err) throw err;
        res.send('Database created');
    });
});
module.exports = router;
