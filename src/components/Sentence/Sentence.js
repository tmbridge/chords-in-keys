import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chord from "../../components/Chord/Chord.js";
import RomanNumeral from "../../components/RomanNumeral/RomanNumeral.js";
import Key from "../../components/Key/Key.js";

const A = {
    I : "A",
    II : "Bm",
    III : "C#m",
    IV : "D",
    V : "E",
    VI : "F#m",
    VII : "G#m",
}

const majorKeys = {
    A : A,
};


class Sentence extends Component {
    renderChord(i) {
        return <Chord />;
    }

    renderRomanNumeral(i) {
        return <RomanNumeral />;
    }

    renderKey(i) {
        return <Key />;
    }
    

    render(i) {
        return (
            <div>
                { Object.keys(majorKeys.A) }
                <br/>
                <Chord value={i}/> is the <RomanNumeral value={i}/> in the key of <Key value={i}/>
            </div>
        );
    }
}

export default Sentence;