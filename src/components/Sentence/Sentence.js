import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SentenceChord from "./SentenceChord.js";
import SentenceRomanNumeral from "./SentenceRomanNumeral.js";
import SentenceKey from "./SentenceKey.js";

// Helpers
import { RandomKeyGenerator } from "../../classes/RandomKeyGenerator.js";

class Sentence extends Component {

    // Constructor.
    constructor(props) {
        super(props);

        // Initalize RKG.
        // TODO: Question: How to intialize this in multi-component scope?
        const RKG = new RandomKeyGenerator();

        // State
        let newKey =  RKG.majorKeys.randomKey();
        this.state = {
            currentKey : newKey,
            currentChord : newKey.randomChord(),
        }
        // End state
    }
    // End Constructor

    // Method to advance to next sentence.
    next(){
        // Initalize RKG.
        // TODO: Question: How to intialize this in multi-component scope?
        const RKG = new RandomKeyGenerator();
        const { currentKey } = this.state;
        const { currentChord } = this.state;

        let newKey = RKG.majorKeys.randomKey();
        this.setState({
           currentKey : newKey,
           currentChord : newKey.randomChord(),
        });
    }

    render() {
        let { currentKey } = this.state;
        let { currentChord } = this.state;
        return (
            // TODO: Question: Why are divs needed here?  Get an error otherwise.
                <div>
                    <SentenceChord value={currentChord.chordAbbreviation} /> is the <SentenceRomanNumeral value={currentChord.nashvilleRoman} /> in the key of <SentenceKey value={currentKey.chords[0].chordAbbreviation} />
                    <br/>
                    {/*//TODO: Question: How can I move this button to AnswerContainer.js and use next() from this component?
                    //TODO: Question: Or should I move next() to AnswerContainer.js, too, and change the state of this component somehow?*/}
                    <button onClick={() => this.next()} value="skip">Skip</button>
                </div>
        );
    }
}

export default Sentence;