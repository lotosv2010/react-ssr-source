import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter, matchPath} from 'react-router-dom';
import Layout from '../layout';
import {Provider} from 'react-redux';
import {getServerStore} from '../redux';
import routes from '../routes';

export default async function(ctx, next) {
  const context = {};
  // 创建仓库的时候，仓库里的数据已经有了默认值
  const store = getServerStore();
  // 获取要渲染的组件
  // matchPath 判断路径和路由对象是否匹配
  const matchRoutes = routes.filter(route => (matchPath(ctx.path, route)));
  const promise = [];
  matchRoutes.forEach( async (route) => {
    if(route.loadData) {
      promise.push(route.loadData(store));
    }
  });
  await Promise.all(promise);
  const jsx = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={ctx.path}>
        <Layout />
      </StaticRouter>
    </Provider>);
  const html = `
  <html>
    <head></head>
    <title>react-ssr</title>
    <link rel="stylesheet" type="text/css" href='https://unpkg.com/antd@4.17.0-alpha.0/dist/antd.css'>
    <body>
      <div id='root'>${jsx}</div>
      <script>
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      <script src='/client.js'></script>
    </body>
  </html>`;
  ctx.body = html;
}