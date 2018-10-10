var socket = new WebSocket('ws://localhost:3000'); // Reemplazar por la IP correspondiente
var user = prompt('Ingrese su nombre completo');
socket.onmessage = function (message) {
    var data = JSON.parse(message.data);
    console.log(data);
    // TODO: mostrar mensaje de conversación según usuario
};
function getFormatedDate(value) {
    var date = new Date(value);
    return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
function clearInput() {
    // TODO: limpiar el input
}
function focus() {
    document.getElementById('text_data').focus();
}
function sendMessage() {
    // TODO: validar formulario y si no es válido mostrar alerta y hacer foco en el input
    var text = document.getElementById('text_data').value;
    socket.send(JSON.stringify({ user: user, text: text }));
    clearInput();
}
