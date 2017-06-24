import mongoose from 'mongoose';
import express from 'express';
import parser from 'body-parser';
import morgan from 'morgan';
import routes from './src/routes';

const app = express();

app.use(morgan('dev'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test', (err) => {
  if (err) { console.log('error', err); } else { console.log('debug', 'Mongoose connected'); }
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

const router = express.Router();

routes(router);
app.use('/', router);
app.listen(3000);

export default app;
