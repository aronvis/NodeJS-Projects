const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// Data inside URL
// Used to retrieve data
router.route('/').get(async function(req, res){
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch(error) {
        res.status(400).json('Error: ' + err);
    }  
});

// Date hidden
// Used to update data
router.route('/add').post(async function(req, res){
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    try {
        await newExercise.save();
        res.json('Exercise added!')
    } catch(error) {
        res.status(400).json('Error' + error);
    }
});

// Returns the exercise by ID
router.route("/:id").get(async function(req,res){
    try {
        const exercise = await Exercise.findById(req.params.id);
        res.json(exercise);
    } catch(error) {
        res.status(400).json(`Error ${error}`);
    }
});

// Remove the exercise by ID
router.route("/:id").delete(async function(req,res){
    try {
        const exercise = await Exercise.findByIdAndDelete(req.params.id);
        res.json('Exercise deleted.');
    } catch(error) {
        res.status(400).json(`Error ${error}`);
    }
});

// Update an existing exercise
router.route('/update/:id').post(async function(req, res){
    try {
        const exercise = await Exercise.findById(req.params.id);
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.data = Data.parse(req.body.date);
        await exercise.save();
        res.json('Exercise updates.')

    } catch(error) {
        res.status(400).json(`Error ${error}`);
    }
});

module.exports = router;