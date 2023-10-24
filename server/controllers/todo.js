const Todo = require('../models/todo');
const { createUpload } = require('../utils/createUpload');
const path = require('path');
const fs = require('fs');

exports.createTodo = (req, res) => {
    const upload = createUpload();

    upload(req, res, async () => {
        const file = req.file;
        const imgURL = file? file.filename: '';

        const todo = new Todo({
            title: req.body.title,
            description: req.body.description,
            username: req.body.username,
            createdDate: new Date(),
            completed: false,
            imgURL
        });
    
        let message = 'todo created';
        try {
            await todo.save();
        } catch (error) {
            message = error.message;
        }
    
        res.json({ message });
    });
}

exports.getTodo =  async (req, res) => {
    let todo; 
    const { id } = req.params;

    try {
        todo = await Todo.findOne({ _id: id });
    } catch (error) {
        todo = { message: error.message };
    }

    res.json(todo);
}

exports.updateTodo = async (req, res) => {
    let message = 'updated successfully';
    
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        await Todo.updateOne({ _id: id }, { title , description });
    } catch (error) {
        message = error.message; 
    }

    res.json({ message });
}

exports.deleteTodo = async (req, res) => {
    let message = 'deleted successfully';
    const { id } = req.params;
    
    try {
        const todo = await Todo.findOne({ _id : id });
        await Todo.deleteOne({ _id: id });

        const pathname = path.join(__dirname, '../', 'public', todo.imgURL);
        fs.unlink(pathname, _ => _);
    } catch (error) {
        message = error.message;
    }

    res.json({ message });
}


exports.getTodos = async (req, res) => {
    // const username = req.params.username;
    const { username } = req.params;
    const prefix = req.params.prefix || '';
    
    // const todos = await Todo.find({ username: username, title: { $regex: prefix, $options: "i" }});
    const todos = await Todo.find({ username, title: { $regex: prefix, $options: "i" } });

    // sort Date from biggest to smallest (most recent at top)
    todos.sort((a, b) => b.createdDate - a.createdDate);
    res.json(todos);  
}