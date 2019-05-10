import React, { Component } from 'react';
import Sentence from './components/Sentence/Sentence'
import Settings from './components/Settings'
import './App.css';
import {allScales, getAccidentalFromNoteString, getAllKeysWithTrueValue, keyFormulas, nashvilleNumbers, keyGroups} from "./Constants";

class App extends Component
{

    componentWillMount() {
        this.resetCurrentKeysByFilters();
    }

    resetCurrentKeysByFilters() {
        let removeScalesBySettingsKeyAccidental = (scaleContainer, allowedAccidentals) => {
            let filteredScales = [];
            // TODO: Refactor this to a single if with all conditions in a single test
            // TODO: Refactor this to use accidentals object instead of string matching
            scaleContainer.forEach(function (scale) {
                if ((scale[0].includes('#')) && (!scale[0].includes('b')) && allowedAccidentals.includes('sharp')) {
                    filteredScales.push(scale);
                }
                else if ((scale[0].includes('b')) && (!scale[0].includes('b')) && allowedAccidentals.includes('flat')) {
                    filteredScales.push(scale);
                }
                else if ((!scale[0].includes('#')) && (!scale[0].includes('b')) && allowedAccidentals.includes('natural')) {
                    filteredScales.push(scale);
                }
            });
            return filteredScales;
        }

        let filteredMajorScales = removeScalesBySettingsKeyAccidental(allScales.major, getAllKeysWithTrueValue(this.state.keyAccidentals));
        let filteredMinorScales = removeScalesBySettingsKeyAccidental(allScales.minor, getAllKeysWithTrueValue(this.state.keyAccidentals));

        let allFilteredScales = {
            major: filteredMajorScales,
            minor: filteredMinorScales,
        };

        let getKeyName = (keyQuality, scale) => {
            switch (keyQuality) {
                case 'major':
                    return scale[0];
                case 'minor':
                    return `${scale[0]}m`;
                default:
                    return scale[0];
            }
        }

        let buildFilteredKeys = (keyQuality) => {
            let allKeys = {};
            for (let scale of allFilteredScales[keyQuality]) {
                // Build key
                let chords = [];
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
                allKeys[getKeyName(keyQuality, scale)] = {
                    keyName: chords[0].chordAbbreviation,
                    keyQuality: keyQuality,
                    chords: chords,
                };
            }
            return allKeys;
        }

        let allKeyGroupsWithFilteredKeys = function () {
            const out = {};
            keyGroups.forEach(value => out[value] = buildFilteredKeys(value));
            return out;
        }();

        let removeKeyGroupsBySettingsKeyQuality = (allowedGroups = ['major', 'minor']) => {
            let filteredKeyGroups = {};
            for (let groupName in allKeyGroupsWithFilteredKeys) {
                if (allowedGroups.includes(groupName)) {
                    Object.assign(filteredKeyGroups, allKeyGroupsWithFilteredKeys[groupName]);
                }
            }
            return filteredKeyGroups;
        }

        this.setState({
            currentKeys: removeKeyGroupsBySettingsKeyQuality(getAllKeysWithTrueValue(this.state.keyQualities)),
            allKeyQualities: Object.keys(allKeyGroupsWithFilteredKeys),
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            keyQualities: {
                major: true,
                minor: false,
            },
            keyAccidentals: {
                sharp: false,
                flat: false,
                natural: true,
            },
        }
    }

    handleCheckboxChange = (field) => (e) => {
        let settinggroup = e.target.attributes['settinggroup'].value;
        let settingName = e.target.value;
        let settingChecked = e.target.checked;
        let stateObject = this.state;

        stateObject[settinggroup] = this.state[settinggroup];
        stateObject[settinggroup][settingName] = settingChecked;
        this.setState(stateObject);
        this.resetCurrentKeysByFilters();
    }

    render()
    {
        let settings = this.state;
        let { currentKeys } = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <Sentence currentKeys={currentKeys} />
                </header>
                <div>
                </div>
                <Settings
                    settings={settings}
                    handleCheckboxChange={() => this.handleCheckboxChange()}
                    allKeyQualities={this.allKeyQualities}
                />
            </div>
        );
    }
}

export default App;
