const User = require('../models/user');
const argon2 = require('argon2');
const { createToken } = require('../utils/createToken');

exports.createUser = async (req, res) => {
    const hashedPassword = await argon2.hash(req.body.password);

    const user = new User({
        username: req.body.username,
        password: hashedPassword,
        createdDate: new Date(),
    });

    let message = 'user created';
    try {
        await user.save();
    } catch (error) {
        message = error.message;
    }

    res.json({ message });
}

exports.loginUser = async (req, res) => {
    // username check
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.json({ successful: false, token: '' });
    }
    
    // password check
    const hashedPassword = user.password;
    const isValid = await argon2.verify(hashedPassword, req.body.password); 
    if (!isValid) {
        return res.json({ successful: false, token: '' });
    }

    // successful login
    res.json({ 
        token: createToken(user.username),
        successful: true
    });
}