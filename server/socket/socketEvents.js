const _ = require('underscore');

const connections = [];
const audience = [];

var socketEvents = function(io) {

  io.on('connection', function(socket) {
    socket.once('disconnect', function() {
      var member = _.findWhere(audience, { id: this.id });
      
      if (member) {
        audience.splice(audience.indexOf(member), 1);
        io.sockets.emit('audience', audience);
        console.log("Left: %s (%s audience members)", member.name, audience.length)
      }

      connections.splice(connections.indexOf(socket), 1);
      socket.disconnect();
      console.log("Disconnected: %s sockets remaining.", connections.length);
    });
  
    socket.on('join', function(payload) {
      var newMember = {
        id: this.id,
        name: payload.name,
        type: 'audience'
      };
  
      this.emit('joined', newMember);
      audience.push(newMember);
      io.sockets.emit('audience', audience);
      console.log("Audience Joined: %s", payload.name);
    });
  
    connections.push(socket);
    console.log("Connected: %s sockets connected.", connections.length);
  });
}

module.exports = socketEvents;