const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        "animals":[
            {"name":"Perry", "type":"Platypus", "age":2, "gender":"Female", "weight":3.2, "isPregnant":true},
            {"name":"Harry", "type":"Hummingbird", "age":4, "gender":"Male", "weight":7, "isPregnant":false},
            {"name":"Paul", "type":"Shark", "age":5, "gender":"Male", "weight":852, "isPregnant":false},
            {"name":"Charlie", "type":"Chimpanzee", "age":6, "gender":"Male", "weight":8, "isPregnant":false},
          ]
    })
});

module.exports = router;