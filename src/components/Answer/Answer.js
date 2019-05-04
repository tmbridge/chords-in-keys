import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {currentKeys, majorKeys, nashvilleNumbers} from "../../Constants";
import {getAllDistinctChords} from "../../RandomKeyGenerator";

class Answer extends Component {
    constructor(props) {
        super(props);
    }

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