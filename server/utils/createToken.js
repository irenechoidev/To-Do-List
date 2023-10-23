const jwt = require('jsonwebtoken');

exports.createToken = (username) => {
    const tokenSecret = process.env.TOKEN_SECRET;
    const token = jwt.sign({ username }, tokenSecret, { expiresIn: '3d' });

    return token;
}

/*
    localStorage = { token: argon12345 }
    argon12345 --> { username: your_username, exp: 123434 }
*/  