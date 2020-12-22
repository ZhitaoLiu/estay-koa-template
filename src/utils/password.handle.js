const crypto = require('crypto');
const config = require('../config/index.config')


const md5password = (password) => {
    const saltPassword = `password=${password}&key=${config.SYS_USER_PWD_SECRET_KEY}`;

    const md5 = crypto.createHash('md5');
    const result = md5.update(saltPassword).digest('hex');
    return result;
}

module.exports = md5password;