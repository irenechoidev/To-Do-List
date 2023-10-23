const Todo = require('../models/todo');

exports.createTodo = async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        username: req.body.username,
        createdDate: new Date(),
        completed: false
    });

    let message = 'todo created';
    try {
        await todo.save();
    } catch (error) {
        message = error.message;
    }

    res.json({ message });
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
        await Todo.deleteOne({ _id: id });
    } catch (error) {
        message = error.message;
    }

    res.json({ message });
}


exports.getTodos = async (req, res) => {
    // const username = req.params.username;
    const { username } = req.params;
    
    // const todos = await Todo.find({ username: username });
    const todos = await Todo.find({ username });

    // sort Date from biggest to smallest (most recent at top)
    todos.sort((a, b) => b.createdDate - a.createdDate);
    res.json(todos);  
}