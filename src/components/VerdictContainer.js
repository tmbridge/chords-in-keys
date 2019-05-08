import React, { Component } from 'react';

// Constants
class VerdictContainer extends Component {
    state = {
        derivedCurrentQuestion: '',
        derivedCurrentKey: '',
        derivedCurrentChord: '',
    }

    render() {
        let { value } = this.props;
        return (
            <div>
            Guess Status: {((value === 1) ? "Correct" : "Incorrect" )}
            </div>
        );
    }
}

export default VerdictContainer;