const express = require('express');
const router = express.Router();

router.post('/form',(req,res)=>{
    res.render('form');
});

module.exports = router;

