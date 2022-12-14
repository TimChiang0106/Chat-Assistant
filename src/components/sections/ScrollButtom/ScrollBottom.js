import React, {Component} from 'react';



class ScrollBottom extends Component {
     scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({behavior: "smooth"});
    }
    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }
    render() {
        return (
              <div style={{float: "left", clear: "both"}}
                     ref={(el) => {
                         this.messagesEnd = el;
                     }}>
                </div>
        );
    }

}
export default ScrollBottom