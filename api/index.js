const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
// const cors = require('@koa/cors');
const app = new Koa();

// session
app.keys = ['react-ssr'];
app.use(session(app));

// bodyParser
app.use(bodyParser());

// 单独创建router的实例
const Router = require('koa-router');
const router = new Router();

// 跨域
// app.use(cors());

router.get('/api/users', async (ctx) => {
  // 设置跨域
  // ctx.set('Access-Control-Allow-Origin', '*');
  const users = [{id: 1, name: 'test1'}, {id: 2, name: 'test2'}]
  ctx.body = users;
});

router.post('/api/login', async (ctx) => {
  const user = ctx.request.body;
  ctx.session.user = user;
  ctx.body = {
    code: 0,
    data: {
      user: user,
      success: '登录成功'
    }
  }
})

router.post('/api/logout', async (ctx) => {
  ctx.session.user = null;
  ctx.body = {
    code: 0,
    data: {
      success: '登出成功'
    }
  }
})

router.get('/api/info', async (ctx) => {
  const user = ctx.session.user;
  let res = {}
  if(user) {
    res = {code: 0, data: {error: '' , success: '获取用户信息成功', user}}
  } else {
    res = {code: 1 ,data: {error: '用户未登录', success: ''}}
  }
  ctx.body = res;
})

// 启动路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3002, error => {
  if (error) throw error;
  console.log(`App running at:`);
  console.log(`- Local:   http://localhost:3002`)
})