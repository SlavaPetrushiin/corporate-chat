import React, {Component} from 'react';
import classes from './MessageForm.module.css';
import {socket} from '../../App'
import {SEND_MESSAGES} from "../../store/actions/actionTypes";

class MessageForm extends Component {
    state = {
        text: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    handleChange = (e) => {
        this.setState({
            text: e.currentTarget.value
        });
    };

    handleClick = (e) => {
        e.preventDefault();

        const message = this.state.text;

        socket.emit('SEND_MESSAGES', message);
        this.setState({
            text: ''
        });
    };

    render() {
        return (
            <div className={classes.blockForm}>
                <form
                    onSubmit={this.handleSubmit}
                >
                <textarea
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                    <button onClick={this.handleClick}>Отправить</button>
                </form>
            </div>
        );
    }
}

export default MessageForm;