import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Constants
import {currentKeys, keyGroupsFilteredBySettings, nashvilleNumbers } from "../Constants";
import {getAllDistinctChords, getRandomChordFromKey} from "../RandomKeyGenerator";

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
            Guess Status: {((value == 1) ? "Correct" : "Incorrect" )}
            </div>
        );
    }
}

export default VerdictContainer;