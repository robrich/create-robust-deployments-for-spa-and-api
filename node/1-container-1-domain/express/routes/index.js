import express from 'express';
import { join } from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const publicPath = join(__dirname, '../public');

router.use(express.static(publicPath));
router.use('/', (_, res) => {
  res.sendFile('index.html', { root: publicPath });
});
router.use('/about', (_, res) => {
  res.sendFile('index.html', { root: publicPath });
});

export default router;
