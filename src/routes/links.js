const express = require('express');
const router = express.Router();

const pool = require('../database');

//Views (Template Engine):
router.get('/add',(req,res)=>{
    res.render('links/add');
    }
)


module.exports = router;