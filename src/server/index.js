const Koa = require('koa');
import React from 'react';
import {renderToString} from 'react-dom/server';
import Counter from '../components/Counter';
const app = new Koa();

// 单独创建router的实例
const Router = require('koa-router');
const router = new Router();

const jsx = renderToString(<Counter />);
console.log(jsx);
const html = `
  <html>
    <head></head>
    <title>react-ssr</title>
    <body>
      <div id='root'>${jsx}</div>
      <script src='/client.js'></script>
    </body>
  </html>`

router.get('/', async ctx => {
  ctx.body = html;
});


// 启动路由
app.use(router.routes()).use(router.allowedMethods());
// 处理静态资源
app.use(require('koa-static')('public'));

app.listen(3001, error => {
  if (error) throw error;
  console.log(`App running at:`);
  console.log(`- Local:   http://localhost:3001`)
})