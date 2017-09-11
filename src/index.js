/* eslint-disable no-console */
const logger = require('winston');
const app = require('./app');
const host = app.get('host');
const port = app.get('port');
const server = app.listen(port || 3030);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info(
    `⌜ 
     | :love_letter: Feathers-mailer app started! :love_letter: 
     | Environment: ${process.env.NODE_ENV || 'Unknown'}
     | CORS: ${app.get('cors').origins || 'Unknown'}
     | OS hostname: ${require('os').hostname()}
     | App configured address: ${host}:${port}
     ⌞`
  )
);
