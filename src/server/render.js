import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter, matchPath} from 'react-router-dom';
import {Provider} from 'react-redux';
import {getServerStore} from '../redux';
import routes from '../routes';
import {renderRoutes, matchRoutes} from 'react-router-config';

export default async function(ctx, next) {
  let notFound = false;
  // 收集每个组件引入的样式
  const context = {csses: []};
  // 创建仓库的时候，仓库里的数据已经有了默认值
  const store = getServerStore(ctx);
  // 获取要渲染的组件
  // matchPath 判断路径和路由对象是否匹配
  const matchedRoutes = matchRoutes(routes, ctx.path);
  const promise = [];
  matchedRoutes.forEach( async ({route}) => {
    if(route.key === '/notFound') {
      notFound = true;
    }
    if(route.loadData) {
      promise.push(new Promise((resolve) => {
        return route.loadData(store).then(resolve, resolve)
      }));
    }
  });
  const data = await Promise.all(promise);
  
  const jsx = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={ctx.path}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>);
  const cssStr = context.csses.join('\n');
  const html = `
  <html>
    <head></head>
    <title>react-ssr</title>
    <style>${cssStr}</style>
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
  if(notFound) {
    ctx.status = 404;
  } else if(context.action === 'REPLACE') {
    ctx.status = 302;
    ctx.response.redirect(context.url);
  } else {
    ctx.body = html;
  }
}