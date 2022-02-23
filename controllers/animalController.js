const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ZooSchema = new Schema({
    animals: {
        type: Array
    }
})

const Animal = mongoose.model('Animal', ZooSchema);

const getAnimals = (req, res) => {
    Zoo.find({}, (err, zoo) => {
        if (err) {
            res.send(err);
        }
        res.json(zoo);
    });
}













module.exports = mongoose.model('Posts', PostSchema);