var sockjs = require('sockjs');

module.exports = function(server) {
  var sockjsOpts = {
    sockjs_url: "http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js",
    prefix: "/chat"
  };

  var sockjsChat = sockjs.createServer(sockjsOpts);

  var clients = {};
  // Broadcast to all clients
  function broadcast(message){
    // iterate through each client in clients object
    for (var client in clients){
      // send the message to that client
      clients[client].write(JSON.stringify(message));
    }
  }

  sockjsChat.on('connection', function(conn) {

    // add this client to clients object
    clients[conn.id] = conn;

    // on receive new data from client event
    conn.on('data', function(message) {
      // console.log(message);
      broadcast(JSON.parse(message));
    });

    // on connection close event
    conn.on('close', function() {
      delete clients[conn.id];
    });
  });

  sockjsChat.installHandlers(server);
}
