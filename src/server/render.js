import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Layout from '../layout';
import {Provider} from 'react-redux';
import {getServerStore} from '../redux';

export default function(ctx) {
  const context = {};
  // 创建仓库的时候，仓库里的数据已经有了默认值
  const store = getServerStore();
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
      <script src='/client.js'></script>
    </body>
  </html>`
  ctx.body = html;
}