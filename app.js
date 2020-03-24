const express = require('express');
const socketio = require('socket.io')
const http = require('http');
const config = require('config');

const PORT = config.get('port') || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server has been ${PORT}!`)
});
