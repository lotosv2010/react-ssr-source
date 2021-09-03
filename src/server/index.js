const Koa = require('koa');
import React from 'react';
import {renderToString} from 'react-dom/server';
import Home from '../components/Home';
const app = new Koa();

const jsx = renderToString(<Home />);
console.log(jsx);
const html = `
  <html>
    <head></head>
    <title>react-ssr</title>
    <body>
      <div id='root'>${jsx}</div>
    </body>
  </html>`

app.use(async ctx => {
  ctx.body = html;
});

app.listen(3000, error => {
  if (error) throw error;
  console.log(`App running at:`);
  console.log(`- Local:   http://localhost:3000`)
})