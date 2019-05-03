import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {RandomKeyGenerator} from "../../classes/RandomKeyGenerator";
import Sentence from "../Sentence/Sentence";

class AnswerContainer extends Component {

    // TODO: Question: Make this object global so all components can use it?
    // TODO: Question: Understand static objects?
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