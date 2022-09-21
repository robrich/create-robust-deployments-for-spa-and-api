import express from 'express';
import logger from 'morgan';
import weatherForecastRouter from './routes/weather-forecast.js';
import indexRouter from './routes/index.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/weatherforecast', weatherForecastRouter);
app.use('/', indexRouter);

export default app;
