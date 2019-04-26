import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chord from "../../components/Chord/Chord.js";
import RomanNumeral from "../../components/RomanNumeral/RomanNumeral.js";
import Key from "../../components/Key/Key.js";

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
                <Chord value={i}/> is the <RomanNumeral value={i}/> in the key of <Key value={i}/>
            </div>
        );
    }
}

export default Sentence;