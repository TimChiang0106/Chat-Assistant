import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './ChatBubble.css';
import ScrollBottom from '../ScrollButtom/ScrollBottom'

class ChatBubble extends Component {
    state = {
        newMessage: '',
        priority: '0',
        showMessage: false
    }

    getConversations(messages) {
        if (messages === undefined) {
            return;
        }
        const options = [
            {
                label: "Select a priority from the dropdown menu",
                value: "0",
            },
            {
                label: "P1",
                value: "1",
            },
            {
                label: "P2",
                value: "2",
            },
            {
                label: "P3",
                value: "3",
            },
            {
                label: "P4",
                value: "4",
            },
        ]
        const listItems = messages.map((message, index) => {
            let bubbleClass = 'me';
            let bubbleDirection = '';
            switch (message.type) {
                case 0:
                    bubbleClass = 'you';
                    bubbleDirection = "bubble-direction-reverse";
                    break;
                case 2:
                    return (
                        <div className={`bubble-container ${bubbleDirection}`} key={index}>
                            <div>
                                <select onChange={this.handlePriorityChange} className={`bubble ${bubbleClass}`}>
                                    {options.map((option) => (
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                                {this.state.showMessage && <p className="OqQuFc">Select right option.</p>}
                                <button className="btn" onClick={this.handleButtonOnClick}>CONTINUE</button>
                            </div>
                        </div>
                    );
                case 3:
                     return (
                        <div className={`bubble-container ${bubbleDirection}`} key={index}>
                            <div>
                                <div className={`bubble ${bubbleClass}`}>{message.text}</div>
                                <button className="btn" onClick={this.handleButtonNextOnClick}>NEXT</button>
                            </div>
                        </div>
                    );
                default:
                    return (
                        <div className={`bubble-container ${bubbleDirection}`} key={index}>
                            <div className={`bubble ${bubbleClass}`}>{message.text}</div>
                        </div>
                    );
            }
        });
        return listItems;
    }
    handleButtonNextOnClick = e =>{
        e.preventDefault()
        const {props: {onNewMessage}} = this
        if (onNewMessage) {

        }
    }
    handleButtonOnClick = e => {
        e.preventDefault()
        const priority = this.state.priority
        const {props: {onNewMessage}} = this
        if (onNewMessage && priority) {
            if (priority === "0") {
                if (!this.state.showMessage) {
                    this.setState({showMessage: !this.state.showMessage});
                }
            } else if (priority === "1") {
                let newMessage = "The priority is " + priority + ", we will make this progress fast because of P1. \n \n " +
                    "Please gathering list of details to finish this progress. \n" +
                    "\n  1. Issue type: change request  incident: " +
                    "\n  2. Resource id: " +
                    "\n  3. Collecting relative data and any error: " +
                    "\n  4. Troubleshooting actions performed: " +
                    "\n \n Please push next button when you're already."
                onNewMessage(newMessage, 3)
            } else {
                let newMessage = "The priority is " + priority
                onNewMessage(newMessage, 1)
            }
            this.componentDidMount()
        }
    }

    handlePriorityChange = e => this.setState({
        priority: e.target.value,
    })


    handleSubmit = e => {
        e.preventDefault()
        const {props: {onNewMessage}, state: {newMessage}} = this
        if (onNewMessage && newMessage) {
            onNewMessage(newMessage, 0)
        }
        this.setState({
            newMessage: '',
        })
    }

    handleInputChange = e => this.setState({
        newMessage: e.target.value,
    })


    render() {
        const {props: {messages}, state: {newMessage}} = this;
        const chatList = this.getConversations(messages);
        return (
            <div className="chats">
                <div className="chat-list">
                    {chatList}
                    <ScrollBottom/>
                </div>
                <form
                    className="new-message"
                    onSubmit={this.handleSubmit}
                >
                    <input
                        value={newMessage}
                        placeholder="Enter for sending message"
                        onChange={this.handleInputChange}
                        className="new-message-input"
                    />
                </form>

            </div>
        );
    }
}

ChatBubble.propTypes = {
    messages: PropTypes.array.isRequired,
    onNewMessage: PropTypes.func.isRequired,
};

export default ChatBubble;