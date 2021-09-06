const Koa = require('koa');
import render from './render';

const app = new Koa();
// 处理静态资源
app.use(require('koa-static')('public'));

// 单独创建router的实例
const Router = require('koa-router');
const router = new Router();

router.get('(.*)', async (ctx) => {
  render(ctx);
});

// 启动路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, error => {
  if (error) throw error;
  console.log(`App running at:`);
  console.log(`- Local:   http://localhost:3001`)
})