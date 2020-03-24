import React, {useRef, useState} from 'react';
import io from 'socket.io-client';
import Title from "./components/Title/Title";
import MessageList from "./components/MessageList/MessageList";
import MessageForm from "./components/MessageForm/MessageForm";

const socket = io('http://localhost:5000');
socket.on('connect', function () {
    socket.send('hi');

    socket.on('message', function (msg) {
        // my msg
    });
});



function App() {

    const [messages, setMessages] = useState([
        {
            name: 'Kola',
            message: 'Привет!'
        },
        {
            name: 'Ivan1988',
            message: 'Привет Коля!'
        },
    ]);

    return (
        <div>
            <Title/>
            <MessageList messages={messages}/>
            <MessageForm/>
        </div>
    );
}

export default App;
