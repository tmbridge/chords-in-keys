import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SentenceChord extends Component {
    render() {
        console.log("SentenceChord value in component: " + this.props.value)
        return this.props.value;
    }
}

export default SentenceChord;