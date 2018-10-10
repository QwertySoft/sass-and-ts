var socket = new WebSocket('ws://localhost:3000'); // Reemplazar por la IP correspondiente
var user: string = prompt('Ingrese su nombre completo');

socket.onmessage = function (message) {
    let data = JSON.parse(message.data);
    console.log(data);

    let className: string = 'other';
    let date = getFormatedDate(data.date);
    let userLabel: string = `${data.user} dijo (${date}):`;
    if (data.user === user) {
        className = 'me';
        userLabel = `Yo dije (${date}):`;
    }
    document.getElementById('message_area').innerHTML += '<div> <p>' + userLabel + '</p> <p class="' + className + '">' + data.message + '</p></div>';
};

function getFormatedDate(value: string) {
    let date  = new Date(value);
    return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function clearInput(): void {
    (<HTMLInputElement> document.getElementById('text_data')).value = '';
}

function focus2() {
    (<HTMLInputElement> document.getElementById('text_data')).focus();
}

function sendMessage() {
    let formIsValid: boolean = document.forms['form'].checkValidity();
    if (!formIsValid) {
        alert('¡Ingrese un texto!');
        focus2();
        return;
    }
    let text = (<HTMLInputElement> document.getElementById('text_data')).value;
    socket.send(JSON.stringify({user: user, text: text}));
    clearInput();
}