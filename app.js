const express = require('express');
const socketio = require('socket.io')
const http = require('http');
const uuidV4 = require('uuid/v4');
const config = require('config');

const PORT = config.get('port') || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const users = {};

io.on('connection', (socket) => {
    console.log('a user connected');
    const userId = uuidV4();
    users[userId] = socket;

    socket.send({type: 'hello', message: `Hello you id is ${userId}`, data: userId});

    socket
        .broadcast //всем коме отправителя
        .send('userID', {type: 'info', message: `New connection id=${userId}`});

    socket.on('SEND_MESSAGES', function(msg){
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        delete users[userId];
    });
});

server.listen(PORT, () => {
    console.log(`Server has been ${PORT}!`)
});
