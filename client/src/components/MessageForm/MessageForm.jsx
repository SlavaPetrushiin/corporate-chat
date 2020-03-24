import React, {Component} from 'react';

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

        alert(this.state.text);

        this.setState({
            text: ''
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Отправить</button>
            </form>
        );
    }
}

export default MessageForm;