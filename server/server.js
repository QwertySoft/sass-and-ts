WebSocket = require('ws');

var port = process.env.PORT || 3000;
var WebSocketServer = WebSocket.Server;
var server = new WebSocketServer({ port: port });

server.on('connection', ws => {
    console.log('new connection');
	ws.on('message', message => {
        console.log('new message ', message);
		try {
            // var data = JSON.parse(message);
			// var userMessage = {
            //     name: data.name,
            //     message: data.text
            // };
			broadcast(JSON.stringify(message));
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