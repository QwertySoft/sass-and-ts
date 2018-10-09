WebSocket = require('ws');

var port = process.env.PORT || 3000;
var WebSocketServer = WebSocket.Server;
var server = new WebSocketServer({ port: port });

server.on('connection', ws => {
    console.log('New connection arrived');
	ws.on('message', message => {
        try {
            console.log(message);
			broadcast('Pong >>> ' + new Date());
		} catch (e) {
			console.error(e.message);
		}
	});
});

function broadcast(data) {
	server.clients.forEach(client => {
		client.send(data);
	});	
};

console.log('Server is running on port', 3000);