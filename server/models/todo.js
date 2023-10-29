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
    imgURL: {
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
    },
    username: {
        type: String,
        required: true
    }
});
 
const Todo = mongoose.model('todo', TodoSchema);
// 'todo' is the name of the MongoDB collection that this Mongoose model will be associated with. 
// If the "todo" collection doesn't exist in the database, Mongoose will create it when you interact with this model for the first time.
module.exports = Todo;