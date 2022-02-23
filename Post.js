const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Posts', PostSchema);