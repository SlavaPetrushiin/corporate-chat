import React, {Component} from 'react';

const Message = ({name, message}) => {
    return (
        <li>
            <strong>
                {name}
            </strong>
            {message}
        </li>
    )
};

class MessageList extends Component {
    renderMessages = () => {
        return this.props.messages.map(message => <Message {...message}/>)
    };

    render() {
        debugger
        return (
            <div>
                <ul>
                    {
                        this.props.messages.length === 0
                            ? <li>Сообщений нет!</li>
                            : this.renderMessages()
                    }
                </ul>
            </div>
        );
    }
}

export default MessageList;