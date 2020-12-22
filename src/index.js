const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');

const config = require('./config/index.config');
const errorHandler = require('./utils/error.handle');
const useRoutes = require('./router/index');

// 连接数据库
require('./db/index.db');


app.use(bodyParser());

// 统一导入路由
app.useRoutes = useRoutes;
app.useRoutes();


app.listen(config.APP_PORT, () => {
    console.log(`node服务启动成功，端口号：${config.APP_PORT}`);
});

// 错误统一处理
app.on('error', errorHandler);