import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SentenceChord from "./SentenceChord.js";
import SentenceNashvilleNumber from "./SentenceNashvilleNumber.js";
import SentenceKey from "./SentenceKey.js";
import AnswerContainer from "../Answer/AnswerContainer";

// Constants
import { getRandomKey, getRandomChordFromKey } from "../../RandomKeyGenerator.js";

class Sentence extends Component {

    // Constructor.
    constructor(props) {
        super(props);

        // State
        let newKey =  getRandomKey();
        this.state = {
            currentKey : newKey,
            currentChord : getRandomChordFromKey(newKey),
        }
        // End state
    }
    // End Constructor

    // Method to advance to next sentence.
    next(){
        let newKey =  getRandomKey();
        this.setState({
            currentKey : newKey,
            currentChord : getRandomChordFromKey(newKey),
        });
    }

    render() {
        let { currentKey } = this.state;
        let { currentChord } = this.state;
        return (
                <div>
                    {/*TODO: Randomly 'blank out' one of the three of these components and set Answer values to associated options.*/}
                    <SentenceChord value={currentChord.chordAbbreviation} /> is the <SentenceNashvilleNumber value={currentChord.nashvilleRoman} /> in the key of <SentenceKey value={currentKey.chords[0].chordAbbreviation} />
                    <br/>
                    <AnswerContainer onSkipClicked={() => this.next()}/>
                </div>
        );
    }
}

export default Sentence;