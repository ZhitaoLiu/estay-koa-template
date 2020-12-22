const fs = require('fs');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config();

const {
    APP_HOST,
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD,
    SYS_USER_PWD_SECRET_KEY,
} = process.env

const JWT_PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './jwt/private.key'));
const JWT_PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './jwt/public.key'));

module.exports = {
    APP_HOST,
    APP_PORT,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
    MYSQL_USER,
    MYSQL_PASSWORD,
    SYS_USER_PWD_SECRET_KEY,
    JWT_PRIVATE_KEY,
    JWT_PUBLIC_KEY
}

