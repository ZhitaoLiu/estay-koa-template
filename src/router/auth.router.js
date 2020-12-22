const Router = require('koa-router');
const authController = require('../controller/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

const authRouter = new Router();

authRouter.post('/login', authMiddleware.verifyLogin, authController.login);

authRouter.post('/test', authMiddleware.verifyAuth, authController.testAuthSuc);

module.exports = authRouter;