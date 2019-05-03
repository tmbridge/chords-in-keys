import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Constants
import { majorKeys, nashvilleNumbers } from "../../Constants";
import { getAllDistinctChords } from "../../RandomKeyGenerator";

class AnswerContainer extends Component {

    // TODO: Question: Make this object global so all components can use it?
    // TODO: Question: Understand static objects?
    // Constructor.
    constructor(props) {
        super(props);

        // State
        this.state = {
            allKeys :  Object.keys(majorKeys.keys),
            allNashvilleRomans : nashvilleNumbers.roman,
            allChords: getAllDistinctChords(),
            allChordsInCurrentKey: props.currentKey,
        }
        // End state
    }
    // End Constructor
    render() {
        const { allKeys } = this.state;
        return (
            <div>
                {/*TODO: Set Button values to options associated with currently 'blanked out' Sentence component.*/}
                {allKeys.map((key, index) => (
                    /*TODO: Extract this button out to the Answer Component*/
                    <button value={key}>
                        { key }
                    </button>
                ))}
                <br/>
                {/*TODO: Question: How to use sibling Sentence component here.
                <button onClick={() =>  Sentence.next()} value="skip">Skip</button>*/}
            </div>
        );
    }
}

// TODO: Question: Why is export used?
export default AnswerContainer;