const WebSocket = require('ws');

const PORT = 8080;

const server = new WebSocket.Server({ port: PORT }, () => {
    console.log(`Socket API is listening on ws://localhost:${PORT}`);
});

server.on('connection', socket => {
    socket.on('message', message => {
        socket.send(`Roger that! ${message}`)
    });
});
