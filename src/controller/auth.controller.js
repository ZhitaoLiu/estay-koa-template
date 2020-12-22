const authService = require('../service/auth.service');
const { SuccessModel } = require('../model/response.model');

const { jwtSign } = require('../utils/jwt.handle');
class AuthController {

    async login(ctx, next) {
        const { id, name } = ctx.user;

        const token = jwtSign({id, name});

        ctx.body = new SuccessModel({id, name, token},'登录成功！',);
    }

    async testAuthSuc(ctx, next) {
        ctx.body = "授权成功~";
    }

}

module.exports = new AuthController();