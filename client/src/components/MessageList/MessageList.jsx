import React, {Component} from 'react';
import classes from './MessageList.module.css';
import MessageForm from "../MessageForm/MessageForm";

const Message = ({name, message}) => {
    return (
        <li>
            <strong>
                {name}
                &nbsp;
            </strong>
            {message}
        </li>
    )
};

class MessageList extends Component {
    renderMessages = () => {
        return this.props.messages.map((message, index) => <Message {...message} key={index}/>)
    };

    render() {
        return (
            <div className={classes.messagesList}>
                <ul>
                    {
                        this.props.messages.length === 0
                            ? <li>Сообщений нет!</li>
                            : this.renderMessages()
                    }
                </ul>
                <MessageForm />
            </div>
        );
    }
}

export default MessageList;