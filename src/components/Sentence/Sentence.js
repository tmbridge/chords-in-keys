import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SentenceChord from "./SentenceChord.js";
import SentenceNashvilleNumber from "./SentenceNashvilleNumber.js";
import SentenceKey from "./SentenceKey.js";

// Constants
import { getRandomKey, getRandomChordFromKey } from "../../classes/RandomKeyGenerator.js";

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
            // TODO: Question: Why are divs needed here?  Get an error otherwise.button
                <div>
                    {/*TODO: Randomly 'blank out' one of the three of these components and set Answer values to associated options.*/}
                    <SentenceChord value={currentChord.chordAbbreviation} /> is the <SentenceNashvilleNumber value={currentChord.nashvilleRoman} /> in the key of <SentenceKey value={currentKey.chords[0].chordAbbreviation} />
                    <br/>
                    {/*
                       TODO: Question: How can I move this button to AnswerContainer.js and still use next() from this component?
                       TODO: Question: Or should I move next() to AnswerContainer.js, too, and change the state of this component somehow?
                     */}
                    <button onClick={() => this.next()} value="skip">Skip</button>
                    {/*<Button onSomething={this.next}></Button>*/}
                </div>
        );
    }
}

export default Sentence;