const express = require('express');
const router = express.Router();

router.post('/toy',(req,res)=>{
    let toys = {name:req.body.name,body:'Motherfucker'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Post added');
    });     

});

module.exports = router;
