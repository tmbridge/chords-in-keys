import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SentenceKey extends Component {
    render() {
        console.log("SentenceKey value in component: " + this.props.value)
        return this.props.value;
    }
}

export default SentenceKey;