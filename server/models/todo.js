const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    createdDate: {
        type: Date,
        required: true
    },
    completed:{
        type: Boolean,
        required: true
    }
});
 
const Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;