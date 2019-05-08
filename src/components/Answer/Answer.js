import React, { Component } from 'react';

class Answer extends Component {
    makeGuess(guessToCheck) {
        let { onGuess } = this.props;
        onGuess(guessToCheck.value);
    }
    // End Constructor
    render() {
        let {value} = this.props;
        return (
            <button onClick={() => this.makeGuess({value})} value={value}>
                { value }
            </button>
        );
    }
}

export default Answer;