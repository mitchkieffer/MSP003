const express = require('express');
const Post = require('../TESTSOMETHING/Post');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:"Something is Not Working"});
    }
});

router.post('/', (req, res) => {
    const test = new Post({
        id: req.body.id,
        name: req.body.name
    });

    test.save().then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json();
    })
});

module.exports = router;
