const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ZooSchema = new Schema({
    animals: {
        type: Array
    }
});