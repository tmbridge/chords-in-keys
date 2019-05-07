import React, { Component } from 'react';
import SentenceContainer from './components/Sentence/SentenceContainer.js'
import SettingsContainer from './components/SettingsContainer.js'
import logo from './logo.svg';
import './App.css';
import {allScales, getAccidentalFromNoteString, isInArray, keyFormulas, nashvilleNumbers} from "./Constants";

class App extends Component
{
    state = {
        keyQualities: {
            major: 'true',
            minor: '',
        },
        keyAccidentals: {
            sharp: '',
            flat: '',
            natural: 'true',
        },
    }
    /*constructor(props) {
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
/!*        this.filteredMajorScales = this.filteredMajorScales.bind(this);
        this.filteredMinorScales = this.filteredMinorScales.bind(this);*!/
        this.filterScalesByAccidental = this.filterScalesByAccidental.bind(this);
        this.filterKeyGroupsBySettings = this.filterKeyGroupsBySettings.bind(this);
    }*/

    // TODO: write function that returns an object containing only the members that are true in the argument
    getKeysIfValueIsTrue = (obj) => {
        let keys = Object.keys(obj);

    }

    // TODO: Use Settings Form data for this function's argument
     filterScalesByAccidental = (scaleContainer, allowedAccidentals = ['sharp', 'natural', 'flat']) => {
         console.log("allowedAccidentals");
         console.log(allowedAccidentals);
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

    filteredMajorScales = this.filterScalesByAccidental(allScales.major, Object.keys(this.state.keyAccidentals));
    filteredMinorScales = this.filterScalesByAccidental(allScales.minor, Object.keys(this.state.keyAccidentals));

    allFilteredScales = {
        major: this.filteredMajorScales,
        minor: this.filteredMinorScales,
    };

    buildFilteredKeys = (keyQuality) => {
    let allKeys = {};
    for (let scale of this.allFilteredScales[keyQuality]) {
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

    allKeyGroupsWithFilteredKeys = {
    major: this.buildFilteredKeys('major'),
    minor: this.buildFilteredKeys('minor'),
}

    allKeyQualities = Object.keys(this.allKeyGroupsWithFilteredKeys);

// TODO: Use Settings form data for this function's argument
    filterKeyGroupsBySettings = (allowedGroups=['major','minor']) => {
    let filteredKeyGroups = {};
    for (let groupName in this.allKeyGroupsWithFilteredKeys) {
        if (isInArray(groupName, allowedGroups)) {
            Object.assign(filteredKeyGroups, this.allKeyGroupsWithFilteredKeys[groupName]);
        }
    }
    return filteredKeyGroups;
}

    keyGroupsFilteredBySettings = this.filterKeyGroupsBySettings(Object.keys(this.state.keyQualities));

    currentKeys = this.keyGroupsFilteredBySettings;

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
                    <SentenceContainer currentKeys={this.currentKeys}
                                       keyGroupsFilteredBySettings={this.keyGroupsFilteredBySettings}/>
                </header>
                <div>
                </div>
                <SettingsContainer settings={settings} handleCheckboxChange={() => this.handleCheckboxChange()} allKeyQualities={this.allKeyQualities}/>
            </div>
        );
    }
}

export default App;
