var socket = new WebSocket('ws://localhost:3000');

function showPing(value) {
    document.getElementById('dash').innerHTML += `<p class="ping">${value}</p>`
}

function showPong(value) {
    document.getElementById('dash').innerHTML += `<p class="pong">${value}</p>`
}

socket.onmessage = function (message) {
    showPong(message.data);
    console.log(message.data);
};
setInterval(() => {
    let ping = `Ping >>> ${new Date().toISOString()}`;
    showPing(ping);
    socket.send(ping);
}, 1000);