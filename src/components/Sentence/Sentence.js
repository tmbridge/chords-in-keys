import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chord from "../../components/Chord/Chord.js";
import RomanNumeral from "../../components/RomanNumeral/RomanNumeral.js";
import Key from "../../components/Key/Key.js";

const A = {
    chords : {
        I: "A",
            II: "Bm",
            III: "C#m",
            IV: "D",
            V: "E",
            VI: "F#m",
            VII: "G#dim"
    },
    randomChord : function () {
        let objectKeys = Object.keys(this.chords);
        console.log(objectKeys);
        console.log(objectKeys[objectKeys.length * Math.random() << 0]);
        //console.log(this.keys[objectKeys[objectKeys.length * Math.random() << 0]]);
        return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }
};

const B = {
    chords : {
        I: "B",
        II: "C#m",
        III: "D#m",
        IV: "E",
        V: "F#",
        VI: "G#m",
        VII: "A#dim"
    },
    randomChord : function () {
        let objectKeys = Object.keys(this.chords);
        console.log(objectKeys);
        console.log(objectKeys[objectKeys.length * Math.random() << 0]);
        //console.log(this.keys[objectKeys[objectKeys.length * Math.random() << 0]]);
        return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }
};

const majorKeys = {
    keys: {
        A: A,
        B: B,
    },
    randomKey: function () {
        let objectKeys = Object.keys(this.keys);
        console.log(objectKeys);
        console.log(objectKeys[objectKeys.length * Math.random() << 0]);
        //console.log(this.keys[objectKeys[objectKeys.length * Math.random() << 0]]);
        return this.keys[objectKeys[objectKeys.length * Math.random() << 0]];
    }
};

class Sentence extends Component {

    // Constructor.
    constructor(props) {
        super(props);

        // State
        let newKey =  majorKeys.randomKey();
        this.state = {
            currentKey : newKey,
            currentChord : newKey.randomChord(),
        }
        console.log(this.state.currentKey);
        // End state
    }
    // End Constructor

/*    renderChord(key) {
        return <Chord />;
    }

    renderRomanNumeral(key) {
        return <RomanNumeral />;
    }

    renderKey(i) {
       // let { majorKeys } = this.state;
        return <Key value={i}/>;
    }*/

    

    render(i) {
        return (
            <div>
              {/* { Object.keys(majorKeys.keys.A) }*/}
                <br/>
                <Chord value={this.state.currentChord}/> is the <RomanNumeral value={Object.keys(this.state.currentChord).toString()}/> in the key of <Key value={this.state.currentKey.chords.I} />
            </div>
        );
    }
}

export default Sentence;