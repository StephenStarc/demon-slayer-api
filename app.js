const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyPaser = require('body-parser')

app = express()
app.use(bodyPaser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static('public'))
app.route('/')

.get((req,res)=>{
res.render('hero',{})
});

app.listen(process.env.PORT || 3000,()=>{
    console.log('Server is up and running.');
})