const userService = require('../service/user.service');
const { SuccessModel } = require('../model/response.model');

class UserController {

    async create(ctx, next) {
        const user = ctx.request.body;
        const result = await userService.create(user);
        ctx.body = new SuccessModel(result,'创建用户成功',);
    }

}

module.exports = new UserController();