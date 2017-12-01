const logger = require('../lib/logger');

logger.info('Starting server...');
const server = require('../../server/main').listen(3000, () => {
  logger.success('Server is running at http://localhost:3000');
});

const io = require('socket.io').listen(server);
const socketEvents = require('../../server/socket/socketEvents')(io);
