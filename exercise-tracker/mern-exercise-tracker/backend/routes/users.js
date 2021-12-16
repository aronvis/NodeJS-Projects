const router = require('express').Router();
const User = require('../models/user.model');

// Defines route for localhost:4000/users/
router.route('/').get(async function(req, res){
    try {
        const users = await User.find();
        res.json(users);
    } catch(error) {
        res.status(400).json('Error ' + error);
    }
});

// Defines route for localhost:4000/users/add
router.route('/add').post(async function(req, res){
    const username = req.body.username;
    const newUser = new User({username});
    try {
        await newUser.save();
        res.json('User added!');
    } catch(error) {
        res.status(400).json(`Error ${error}`);
    }
});

module.exports = router;