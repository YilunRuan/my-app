var koa = require('koa');
var app = koa();

// logger
app.use(function *(next){
  var start = new Date();
  yield next;
  var ms = (new Date()) - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// response
app.use(function *(){
  this.body = 'Now: ' + (new Date());
});

app.listen(3000);
