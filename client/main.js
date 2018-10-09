var socket = new WebSocket('ws://localhost:3000'); // Reemplazar por la IP correspondiente
var user = prompt('Ingrese su nombre completo');
socket.onmessage = function (message) {
    var data = JSON.parse(message.data);
    console.log(data);
    var className = 'other';
    var date = getFormatedDate(data.date);
    var userLabel = data.user + " dijo (" + date + "):";
    if (data.user === user) {
        className = 'me';
        userLabel = "Yo dije (" + date + "):";
    }
    document.getElementById('message_area').innerHTML += '<div> <p>' + userLabel + '</p> <p class="' + className + '">' + data.message + '</p></div>';
};
function getFormatedDate(value) {
    var date = new Date(value);
    return date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
function clearInput() {
    document.getElementById('text_data').value = '';
}
function focus() {
    document.getElementById('text_data').focus();
}
function sendMessage() {
    var formIsValid = document.forms['form'].checkValidity();
    if (!formIsValid) {
        alert('¡Ingrese un texto!');
        focus();
        return;
    }
    var text = document.getElementById('text_data').value;
    socket.send(JSON.stringify({ user: user, text: text }));
    clearInput();
}
