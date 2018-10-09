WebSocket = require('ws');

var port = process.env.PORT || 3000;
var WebSocketServer = WebSocket.Server;
var server = new WebSocketServer({ port: port });

server.on('connection', ws => {
    console.log('New connection arrived');
	ws.on('message', message => {
        try {
            var data = JSON.parse(message);
            console.log('New message received >>> ', data);
			var chatMessage = {
                user: data.user,
                message: data.text
            };
			broadcast(JSON.stringify(chatMessage));
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