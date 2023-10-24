require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());

const todoRoutes = require('./routes/todo');
const userRoutes = require('./routes/user');


// routes
app.use('/todo', todoRoutes);
app.use('/user', userRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT); 
        })
    })
    .catch((error) => {
        console.log(error);
    });