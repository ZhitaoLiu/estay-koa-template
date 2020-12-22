const Router = require('koa-router');
const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

const userRouter = new Router({prefix: '/users'});

userRouter.post('/', userMiddleware.verifyUser, userMiddleware.cryptoPassword, userController.create);

module.exports = userRouter;