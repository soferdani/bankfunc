const express = require('express')
const app = express()
const mongoose = require ('mongoose')
const path = require('path')
const bodyparser = require ('body-parser')

mongoose.connect("mongodb://localhost/15Data", { useNewUrlParser: true, useUnifiedTopology: true })


app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use (express.static(path.join(__dirname, 'dist')))
app.use (express.static(path.join(__dirname, 'node_models')))


app.post("/posta", async (req,res) => {
    let word = req.body
    let toSave = new dataa (word)
    await toSave.save()
    res.send(toSave)
})


app.get("/get", async (req,res) => {
    goToFrontEnd = await dataa.find({})
    res.send(goToFrontEnd)
})


const port = 3000
app.listen(port, function (req,res) {
    console.log(`running on port ${port}`);
})