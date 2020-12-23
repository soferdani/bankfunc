const express = require('express');
const router = express.Router();
const Transaction = require('../Model/transaction');

router.post("/saveUser", async (req, res) => {
    try {
        let UserToSaveInDB = req.body
        toSave = new User(UserToSaveInDB)
        await toSave.save()
        res.send(toSave)
    } catch (err) {
        res.send(err)
    }
})



module.exports = router