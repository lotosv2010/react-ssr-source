const Koa = require('koa');
const favicon = require('koa-favicon');
const proxy = require('koa-proxies');
import render from './render';

const app = new Koa();
// 处理静态资源
app.use(require('koa-static')('public'));

// icon
app.use(favicon(__dirname, 'public/client.js'));

// proxy
app.use(proxy('/api', {
  target: 'http://localhost:3002',    
  changeOrigin: true,
  rewrite: path => path,
  logs: true
}))

// 单独创建router的实例
const Router = require('koa-router');
const router = new Router();

router.get('(.*)', async (ctx, next) => {
  await render(ctx, next);
});

// 启动路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, error => {
  if (error) throw error;
  console.log(`App running at:`);
  console.log(`- Local:   http://localhost:3001`)
})