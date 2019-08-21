const Koa = require('koa');
const fs = require('fs');
const route = require('koa-route');
const serve = require('koa-static');
const path = require('path')
const app = new Koa();

// 中间件即是函数
// const main = ctx => {
//   // ctx.response.body = 'hello world'
//   // 文件流 文件传输有大小限制
//   // ctx.response.type = 'html';
//   // ctx.response.body = fs.createReadStream('./template.html')

//   // ----------------------------------------------------------------路径
//   // if (ctx.request.path !== '/') {
//   //   ctx.response.type = 'html';
//   //   ctx.response.body = '<a href="/">index page</a>';
//   // } else {
//   //   ctx.response.body = 'hello world';
//   // }
// }
const main = ctx => {
  ctx.response.body = '<div>hello world<a href="/about" style="text-decoration: none;">index</a></div>'
}
const about = ctx => {
  ctx.response.body = '<a href="/" style="text-decoration: none;">index page</a>'
}
const redirect = ctx => {
  ctx.response.redirect('/');
  ctx.response.body = '<a href="/" style="text-decoration: none;">index page</a>'
}
app.use(serve(path.join(__dirname,'assets')));
app.use(route.get('/',main));
app.use(route.get('/about',about));
app.use(route.get('/redirect',redirect));

// app.use(main)

app.listen(3000)