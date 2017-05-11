import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as bodyParser from 'koa-bodyparser';
import * as config from 'config';
import * as chalk from 'chalk';

const app: Koa = new Koa();

app.use(logger());
app.use(bodyParser());

app.use((ctx: Koa.Context) => {
  ctx.body = 'Koa with TS!';
});

const listen = () => {
  const port = config.get('PORT');
  console.log(chalk.green.bgBlack.bold(`app listenning on ${port} port...`))
  app.listen(port);
};

listen();
