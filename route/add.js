const express = require('express');
const router = express.Router();
const db = require('../db/mysql');

router.post('/toy',(req,res)=>{
    let toys = {name:req.body.name,address:req.body.address,phone:req.body.phone,toy_name:req.body.toy_name,description:req.body.description};
    let sql = `INSERT INTO toy SET ?`;
    let query = db.query(sql,toys,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.render(form);
    });     

});
module.exports = router;

