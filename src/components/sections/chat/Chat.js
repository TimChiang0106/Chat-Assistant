import React, {Component} from "react";
import ChatBubble from '../ChatBubble/ChatBubble'

class App extends Component {
  state = {
    messages: [
      {
        type: 1,
        text: "Hi! I’m your automated Milelync assistant. I'll help you find answers and contact support for any Google Cloud Platform issue."
      },
      {
        type:1,
        text: "Which priority do you facing now?"
      },
      {
        type: 2,
        text: "Priority"
      }
    ],
  };

  handleNewMessage = (text, type) =>
    this.setState({
      messages: this.state.messages.concat([{
        text,
        type
      }])
    });

  render() {
    return (
      <ChatBubble
        messages={this.state.messages}
        onNewMessage={this.handleNewMessage}
      />
    );
  }
}


export default App;
