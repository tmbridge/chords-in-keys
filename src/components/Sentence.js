import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chord from "./Chord.js";
import RomanNumeral from "./RomanNumeral.js";
import Key from "./Key.js";

// Helpers
import { RandomKeyGenerator } from "../classes/RandomKeyGenerator.js";

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
            <div>
              {/* { Object.keys(majorKeys.keys.A) }*/}
                <br/>
                <Chord value={currentChord.chordAbbreviation}/> is the <RomanNumeral value={currentChord.nashvilleRoman}/> in the key of <Key value={currentKey.chords[0].chordAbbreviation} />
            </div>
        );
    }
}

export default Sentence;