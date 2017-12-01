const express = require('express');
const router = express.Router();
const db = require('../db/mysql');

router.get('/form',(req,res)=>{
    res.render('form');
});

router.get('/toys',(req,res)=>{
    let sql = `SELECT * FROM toy`;
    let query = db.query(sql,(err,results)=>{
        if (err) throw err;
        console.log(results[0].name);
        res.render('toys',{results:results})
    });
});

module.exports = router;
