import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {RandomKeyGenerator} from "../../classes/RandomKeyGenerator";

class AnswerContainer extends Component {

    // TODO: Make this object global so all components can use it?
    // TODO: Understand static objects?
    // Constructor.
    constructor(props) {
        super(props);

        // Initalize RKG.
        const RKG = new RandomKeyGenerator();

        // State
        this.state = {
            allKeys :  Object.keys(RKG.majorKeys.keys),
            allNashvilleRomans : RKG.getAllNashvilleNumbers('roman'),
            allChords: RKG.getAllChords(),
            allChordsInCurrentKey: props.currentKey,
        }
        console.log(this.state.allNashvilleRomans);
        // End state
    }
    // End Constructor
    render() {
        const { allKeys } = this.state;
        return (
            <div>
                {allKeys.map((key, index) => (
                    <button value={key}>
                        { key }
                    </button>
                ))}
            </div>
        );
    }
}

// Question: Why is export used?
export default AnswerContainer;