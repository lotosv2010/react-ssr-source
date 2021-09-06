const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();

// 单独创建router的实例
const Router = require('koa-router');
const router = new Router();

app.use(cors());

router.get('/api/users', async (ctx) => {
  // 设置跨域
  // ctx.set('Access-Control-Allow-Origin', '*');
  const users = [{id: 1, name: 'test1'}, {id: 2, name: 'test2'}]
  ctx.body = users;
});

// 启动路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3002, error => {
  if (error) throw error;
  console.log(`App running at:`);
  console.log(`- Local:   http://localhost:3002`)
})