const Koa = require('koa');
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import routes from '../routes';
const app = new Koa();

// 处理静态资源
app.use(require('koa-static')('public'));

// 单独创建router的实例
const Router = require('koa-router');
const router = new Router();

router.get('(.*)', async (ctx) => {
  const jsx = renderToString(
    <StaticRouter context={{}} location={ctx.path}>
      {routes}
    </StaticRouter>);
  const html = `
  <html>
    <head></head>
    <title>react-ssr</title>
    <body>
      <div id='root'>${jsx}</div>
      <script src='/client.js'></script>
    </body>
  </html>`
  ctx.body = html;
});


// 启动路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, error => {
  if (error) throw error;
  console.log(`App running at:`);
  console.log(`- Local:   http://localhost:3001`)
})