
const errorTypes = require('../constants/error.types');
const userService = require('../service/user.service');
const authService = require('../service/auth.service');
const md5password = require('../utils/password.handle');

const { jwtVerify } = require('../utils/jwt.handle');

// 登录校验
const verifyLogin = async (ctx, next) => {
    const { name, password } = ctx.request.body;

    if (!name || !password) {
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED);
        ctx.app.emit('error', error, ctx);
        return;
    }

    const result = await userService.getUserByName(name);
    const user = result[0];
    if (!user) {
        const error = new Error(errorTypes.USER_DOES_NOT_EXISTS);
        ctx.app.emit('error', error, ctx);
        return;
    }

    if (md5password(password) !== user.password) {
        const error = new Error(errorTypes.PASSWORD_IS_INCORRENT);
        ctx.app.emit('error', error, ctx);
        return;
    }

    // 将用户信息保存在全局变量下
    ctx.user = user;
    await next();

}

// 授权验证
const verifyAuth = async (ctx, next) => {
    const authorization = ctx.headers.authorization;

    if (!authorization) {
        const error = new Error(errorTypes.UNAUTHORIZATION);
        ctx.app.emit('error', error, ctx);
        return;
    }

    const token = authorization.replace('Bearer ', '');

    try {
        const user = jwtVerify(token);
        // 将用户信息保存在全局变量下
        ctx.user = user;
        await next();
    } catch (err) {
        const error = new Error(errorTypes.UNAUTHORIZATION);
        ctx.app.emit('error', error, ctx);
    }

}

// 权限验证
const verifyPermission = async (ctx, next) => {

}

module.exports = {
    verifyLogin,
    verifyAuth,
    verifyPermission
}