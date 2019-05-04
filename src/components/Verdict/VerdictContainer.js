import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Constants
import {currentKeys, keyGroups, nashvilleNumbers } from "../../Constants";
import {getAllDistinctChords, getRandomChordFromKey} from "../../RandomKeyGenerator";

class VerdictContainer extends Component {
    state = {
        derivedCurrentQuestion: '',
        derivedCurrentKey: '',
        derivedCurrentChord: '',
    }

    render() {
        return (
            <div>
            Guess Status: {this.props.value}
            </div>
        );
    }
}

export default VerdictContainer;