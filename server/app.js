require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const todoRoutes = require('./routes/todo');

// routes
app.use('/', todoRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT); 
        })
    })
    .catch((error) => {
        console.log(error);
    });