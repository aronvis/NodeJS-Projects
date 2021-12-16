// Base libraries 
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Environmental Variables
require('dotenv').config();

// Express Setup
const app = express()
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());


// MongoDB setup
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Connects routes for localhost:4000/users
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});




