const Koa = require('koa');
const app = new Koa();

app.use(require('koa-static')('public'));
app.use(require('koa-bodyparser')());

const Router = require('koa-router');
const router = new Router();
let db = [];

router.get('/subscribe', async (ctx, next) => {
  const msg = await new Promise(resolve => {
    db.push(resolve);
  })

  ctx.body = msg;
});


router.post('/publish', async (ctx, next) => {
  if (!ctx.request.body.message) return; 
  
  db.forEach(function(item) {item(ctx.request.body.message)});
  
  ctx.body = 'ok'
  db = [];
});

app.use(router.routes());

module.exports = app;
