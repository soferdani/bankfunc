const express = require('express')
const app = express()
const mongoose = require ('mongoose')
const path = require('path')
const bodyparser = require('body-parser')
const api = require('./Routes/api')


try {
    mongoose.connect('mongodb://localhost/bank111', { useNewUrlParser: true, useUnifiedTopology: true },
        () =>console.log("connected to the DB"));
    } catch (error) {
    console.log("could not connect");
    }



app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use (express.static(path.join(__dirname, 'dist')))
app.use (express.static(path.join(__dirname, 'node_models')))
app.use('/', api)

const port = 8080
app.listen(port, function (req,res) {
    console.log(`running on port ${port}`);
})