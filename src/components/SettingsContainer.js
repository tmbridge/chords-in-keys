import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SettingsContainer extends Component {

    render() {
        // TODO: Question: How to get currentKey from Sentence or Key component for use in line 15.
        let currentKey = "Am";
        return (
            <div>
                Here will be configuration settings <br/>
                (e.g. <ul>
                <li>filter randomizer for specific key qualities,</li>
                <li>filter randomizer for specific key accidentals,</li>
                <li>filter randomizer for specfic keys,</li>
                <li>choose which of the three variables (Key, Number, Chord) get randomly 'blanked',</li>
                <li>Roman or Arabic Numerals,</li>
                <li>time allowed per sentence,</li>
                <li>Number of attempts before failure</li>
                <li>etc.</li>
                </ul>
            </div>
        );
    }
}

export default SettingsContainer;