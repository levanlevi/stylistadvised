const logger = require('../lib/logger');

logger.info('Starting server...');
const server = require('../../server/main').listen(3000, () => {
  logger.success('Server is running at http://localhost:3000')
});

const connections = [];

const io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  
  socket.once('disconnect', function() {
    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log("Disconnected: %s sockets remaining.", connections.length);
  });

  connections.push(socket);
  console.log("Connected: %s sockets connected.", connections.length);
});
