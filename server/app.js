require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todo');

const app = express();

app.use(express.json());

// routes
app.use('/', todoRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, ()=>{
            console.log('connected to db & listening on port', process.env.PORT); 
        })
    })
    .catch((error) => {
        console.log(error);
    })