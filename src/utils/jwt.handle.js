const jwt = require('jsonwebtoken');

const {
    JWT_PRIVATE_KEY,
    JWT_PUBLIC_KEY 
} = require('../config/index.config');


const jwtSign = (user) => {
    const {id, name} = user;
    const token = jwt.sign({ id, name }, JWT_PRIVATE_KEY, {
        expiresIn: 60 * 60 * 24,
        algorithm: 'RS256'
    });
    return token;
}

const jwtVerify = (token) => {
    const user = jwt.verify(token, JWT_PUBLIC_KEY, {
        algorithms: ["RS256"]
    });
    return user;
}

module.exports = {
    jwtSign,
    jwtVerify,
}