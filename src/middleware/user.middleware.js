const errorTypes = require('../constants/error.types');
const userService = require('../service/user.service');
const md5password = require('../utils/password.handle');

// 验证用户
const verifyUser = async (ctx, next) => {

    const { name, password } = ctx.request.body;

    if (!name || !password) {
      const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED);
      ctx.app.emit('error', error, ctx);
      return;
    }

    const result = await userService.getUserByName(name);
    if (result.length) {
      const error = new Error(errorTypes.USER_ALREADY_EXISTS);
      ctx.app.emit('error', error, ctx);
      return;
    }
  
    await next();
}

// 密码加密
const cryptoPassword = async (ctx, next) => {
    const { password } = ctx.request.body;
    ctx.request.body.password = md5password(password);

    await next();
}

module.exports = {
    verifyUser,
    cryptoPassword
}
  