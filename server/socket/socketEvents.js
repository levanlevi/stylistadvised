const _ = require('underscore');

const connections = [];
const audience = [];
const rooms = [];

var socketEvents = function(io) {

  io.on('connection', function(socket) {
    socket.once('disconnect', function() {
      var member = _.findWhere(audience, { socketId: this.id });
      
      if (member) {
        audience.splice(audience.indexOf(member), 1);
        io.sockets.emit('audience', audience);
        console.log("Left: %s (%s audience members)", member.name, audience.length);

        var room = _.find(rooms, function(room) { return member.id === room.between[0].id || member.id === room.between[1].id });
      
        if (room) {
          rooms.splice(rooms.indexOf(room), 1);
          io.sockets.emit('rooms', rooms);
          console.log("Left: %s (%s rooms)", room.name, rooms.length);
        }
      }      

      connections.splice(connections.indexOf(socket), 1);
      socket.disconnect();
      console.log("Disconnected: %s sockets remaining.", connections.length);
    });
  
    socket.on('join', function(payload) {
      var newMember = {
        id: payload.id,
        name: payload.name,
        type: 'audience',
        socketId: this.id,
      };
  
      this.emit('joined', newMember);
      audience.push(newMember);
      io.sockets.emit('audience', audience);
      console.log("Audience Joined: %s", payload.name);
    });

    socket.on('new message', function(message) {
      socket.broadcast.to(message.channelId).emit('new bc message', message);
    });

    socket.on('typing', function (data) {
      socket.broadcast.to(data.channel).emit('typing bc', data.user);
    });

    socket.on('stop typing', function (data) {
      socket.broadcast.to(data.channel).emit('stop typing bc', data.user);
    });

    socket.on('new private channel', function(data) {
      var room = _.findWhere(rooms, { id: data.channel.id });
      if (room) {
        socket.broadcast.to(data.socketId).emit('receive private channel', room);
      } else {
        socket.broadcast.to(data.socketId).emit('receive private channel', data.channel);

        rooms.push(data.channel);
        io.sockets.emit('room', rooms);
        console.log("Rooms Joined: %s", room);
      }
    });

    socket.on('join channel', function(channel) {
      socket.join(channel.id);
    });

    connections.push(socket);
    console.log("Connected: %s sockets connected.", connections.length);
    socket.emit('connected');
  });
}

module.exports = socketEvents;