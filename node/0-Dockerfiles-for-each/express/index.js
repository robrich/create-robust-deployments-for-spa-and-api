#!/usr/bin/env node

import http from 'http';
import app from './app.js';

const port = process.env.PORT || '5000';
app.set('port', port);

const server = http.createServer(app);
server.on('error', e => {
  console.error(`server error`, e);
  process.exit(1);
})
server.listen(port, () => {
  console.log(`listening on http://+:${port}`);
});
