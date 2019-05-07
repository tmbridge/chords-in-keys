import React, { Component } from 'react';
import SentenceContainer from './components/Sentence/SentenceContainer.js'
import SettingsContainer from './components/SettingsContainer.js'
import logo from './logo.svg';
import './App.css';
import {allScales, getAccidentalFromNoteString, isInArray, keyFormulas, nashvilleNumbers} from "./Constants";

// TODO: Use Settings Form data for this function's argument
let filterScalesByAccidental = (scaleContainer, allowedAccidentals = ['sharp', 'natural', 'flat']) => {
    let filteredScales = [];
    // TODO: Refactor this to a single if with all conditions in a single test
    // TODO: Refactor this to use accidentals object instead of string matching
    scaleContainer.forEach( function (scale) {
        if ((scale[0].includes('#')) && isInArray('sharp', allowedAccidentals)){
            filteredScales.push(scale);
        }
        else if ((scale[0].includes('b')) && isInArray('flat', allowedAccidentals)){
            filteredScales.push(scale);
        }
        else if ( ((!scale[0].includes('#')) && (!scale[0].includes('b'))) && isInArray('natural', allowedAccidentals)){
            console.log ("keeping natural scale "  + scale[0])
        }
    });
    return filteredScales;
}

let filteredMajorScales = filterScalesByAccidental(allScales.major);
let filteredMinorScales = filterScalesByAccidental(allScales.minor);

let allFilteredScales = {
    major: filteredMajorScales,
    minor: filteredMinorScales,
};

let buildFilteredKeys = (keyQuality) => {
    let allKeys = {};
    for (let scale of allFilteredScales[keyQuality]) {
        // Build key
        let chords = [];
        let keyName = ((keyQuality == 'major') ? scale[0] : scale[0] + "m");
        for (let noteString of scale) {
            //Build chord
            let noteInterval = scale.indexOf(noteString);
            let noteQuality = keyFormulas[keyQuality][noteInterval];
            let chord = {
                nashvilleRoman: nashvilleNumbers.roman[noteInterval],
                nashvilleArabic: nashvilleNumbers.arabic[noteInterval],
                chordFullName: noteString + " " + noteQuality.fullName,
                chordAbbreviation: noteString + noteQuality.textAbbreviation,
                chordQualityFull: noteQuality.fullName,
                chordQualityAbbreviation: noteQuality.textAbbreviation,
                baseNote: noteString,
                accidental: getAccidentalFromNoteString(noteString),
            };
            chords.push(chord);
        }
        allKeys[keyName] = {
            keyName: chords[0].chordAbbreviation,
            keyQuality: keyQuality,
            chords: chords,
        };
    }
    return allKeys;
}

let allKeyGroupsWithFilteredKeys = {
    major: buildFilteredKeys('major'),
    minor: buildFilteredKeys('minor'),
}

let allKeyQualities = Object.keys(allKeyGroupsWithFilteredKeys);

// TODO: Use Settings form data for this function's argument
let filterKeyGroupsBySettings = (allowedGroups=['major','minor']) => {
    let filteredKeyGroups = {};
    for (let groupName in allKeyGroupsWithFilteredKeys) {
        if (isInArray(groupName, allowedGroups)) {
            Object.assign(filteredKeyGroups, allKeyGroupsWithFilteredKeys[groupName]);
        }
    }
    return filteredKeyGroups;
}

let keyGroupsFilteredBySettings = filterKeyGroupsBySettings();

let currentKeys = keyGroupsFilteredBySettings;

class App extends Component
{

    constructor(props) {
        super(props);

        this.state = {
            keyQualities: {
                major: 'true',
                minor: 'true',
            },
            keyAccidentals: {
                sharp: 'true',
                flat: 'true',
                natural: 'true',
            },
        }

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    // TODO: Put this State into Sentence then pass it via prop into this Component's onChange?
    // TODO: Also move the filtering functions in Constants.js to Sentence component and keep the set of filtered keys as state therein?  This will allow this Checkbox change to directly affect the filtered keys in Sentence's state
    handleCheckboxChange = (field) => (e) => {
        let settingGroup = e.target.attributes['settingGroup'].value;
        let settingName = e.target.value;
        let settingChecked = e.target.checked;
        let stateObject = {};
        stateObject[settingGroup] = this.state[settingGroup];
        stateObject[settingGroup][settingName] = settingChecked;
        this.setState(stateObject);
    }

    render()
    {
        let settings = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <SentenceContainer currentKeys={currentKeys}
                                       keyGroupsFilteredBySettings={keyGroupsFilteredBySettings}/>
                </header>
                <div>
                </div>
                <SettingsContainer settings={settings} handleCheckboxChange={() => this.handleCheckboxChange()} allKeyQualities={allKeyQualities}/>
            </div>
        );
    }
}

export default App;
