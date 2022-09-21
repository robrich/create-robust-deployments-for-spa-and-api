import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import weatherForecastRouter from './routes/weather-forecast.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const CORS_DOMAIN = process.env.CORS_DOMAIN;
console.log(`CORS_DOMAIN: ${CORS_DOMAIN}`);
app.use(cors({origin: CORS_DOMAIN}));

app.use('/api/weatherforecast', weatherForecastRouter);

export default app;
