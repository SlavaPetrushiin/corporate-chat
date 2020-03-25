import React, {useEffect} from 'react';
import io from 'socket.io-client';
import Title from "./components/Title/Title";
import MessageList from "./components/MessageList/MessageList";
import {createUseStyles} from 'react-jss'
import UsersList from "./components/UsersList/UsersList";
import {useDispatch, useSelector} from "react-redux";
import {messagesAC} from "./store/actions/messages";

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

export const socket = io('http://localhost:5000');

function App() {
    const classes = useStyles();
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on('chat message', (mess) =>  {
            dispatch(messagesAC(mess));
        });
    }, [socket]);

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
