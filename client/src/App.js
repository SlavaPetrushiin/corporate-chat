import React, {useState} from 'react';
import io from 'socket.io-client';
import Title from "./components/Title/Title";
import MessageList from "./components/MessageList/MessageList";
import {createUseStyles} from 'react-jss'
import UsersList from "./components/UsersList/UsersList";

const useStyles = createUseStyles({
    wrapper: {
        width: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: '100%'

    },
    header: {
        margin: '20px 0'
    },
    blockChat: {
        display: 'flex',
        flexGrow: 1
    }
});

const socket = io('http://localhost:5000');
socket.on('connect', function () {
    socket.send('hi');

    socket.on('message', function (msg) {
        // my msg
    });
});


function App() {
    const classes = useStyles();

    const [messages, setMessages] = useState([
        {
            userId: 1,
            name: 'Kola',
            message: 'Привет!',
        },
        {
            userId: 2,
            name: 'Ivan1988',
            message: 'Привет Коля!'
        },
    ]);

    return (
        <div className={classes.wrapper}>
            <header className={classes.header}>
                <Title/>
            </header>
            <div className={classes.blockChat}>
                <UsersList/>
                <MessageList messages={messages}/>
            </div>
        </div>
    );
}

export default App;
