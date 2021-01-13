import 'dotenv/config';
import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import compression from 'compression';
import path from 'path';
import { logger, stream } from './utils/logger';
import validateEnv from './utils/validateEnv';
import routes from './routes';
import errorMiddleware from './middlewares/error';

validateEnv();

const app: Express = express();
const port: string | number = process.env.PORT || 7000;
const env: string = process.env.NODE_ENV || 'development';

if (env === 'production') {
  app.use(morgan('combined', { stream }));
  app.use(cors({ origin: 'your.domain.com', credentials: true }));
} else if (env === 'development') {
  app.use(morgan('dev', { stream }));
  app.use(cors({ origin: true, credentials: true }));
}

app.use(hpp());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./build'));

routes.forEach((route) => {
  app.use('/api/', route);
});

app.get('/', function (req, res) {
  res.sendFile(path.join('./build', 'index.html'));
});

app.use(errorMiddleware);

app.listen(port, () => {
  logger.info(`App listening on the port ${port}`);
});
