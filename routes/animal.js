const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ZooSchema = new Schema({
    animals: {
        type: Array
    }
});

const Animal = mongoose.model('Animal', ZooSchema);


// Get all zoos
const getAniamls = (req, res) => {
    Animal.find({}, (err, zoo) => {
        if (err) {
            res.send(err);
        }
        res.json(zoo);
    });
}


let middleware = (req) => {
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
};



router.get('/animals', (req, res, next) => {
    middleware(req);
    next();
}, getAniamls);


module.exports = router;
