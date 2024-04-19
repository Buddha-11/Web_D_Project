const express =require('express')
 
const  router = express.Router(); 

const Apply = require('../models/apply');




//post request
router.post('/apply',(req,res)=>{
const apply = new Apply(req.body);
apply.save()
    .then((result)=>{
    res.redirect('/submit')
    })
    .catch((err)=>{
    console.log(err)
    });
})



module.exports =router;


