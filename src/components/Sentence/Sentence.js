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

    render() {
        let { currentKey } = this.state;
        let { currentChord } = this.state;
        return (
            // Question: Why are divs needed here?  Get an error otherwise.
                <div>
                    <SentenceChord value={currentChord.chordAbbreviation} /> is the <SentenceRomanNumeral value={currentChord.nashvilleRoman} /> in the key of <SentenceKey value={currentKey.chords[0].chordAbbreviation} />
                </div>
        );
    }
}

export default Sentence;