const Koa = require('koa');

const app = new Koa();

const html = `
    <html>
        <head></head>
        <body>
            <p>hello</p>
        </body>
    </html>`

app.use(async ctx => {
    ctx.body = html;
});

app.listen(3000, error => {
    if(error) throw error;
    console.log(`App running at:`);
    console.log(`- Local:   http://localhost:3000`)
})