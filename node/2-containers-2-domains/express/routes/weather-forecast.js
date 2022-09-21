import express from 'express';
import { DateTime } from 'luxon';

const router = express.Router();

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const summaries = [
  'Freezing', 'Bracing', 'Chilly', 'Cool', 'Mild', 'Warm', 'Balmy', 'Hot', 'Sweltering', 'Scorching'
];

router.get('/', function(req, res) {
  const forecasts = [];
  for (let i = 0; i < 5; i++) {
    let temperatureC = randomNum(-20, 55);
    let temperatureF = Math.floor((temperatureC * 1.8) + 32);
    let summary = summaries[randomNum(0, summaries.length)];
    const date = DateTime.local().plus({ days: i }).toFormat('yyyy-MM-dd');
    forecasts.push({
      date,
      temperatureC,
      temperatureF,
      summary
    });
  }
  return res.json(forecasts);
});

export default router;
