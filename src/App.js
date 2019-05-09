import React, { Component } from 'react';
import Sentence from './components/Sentence/Sentence'
import Settings from './components/Settings'
import './App.css';
import {allScales, getAccidentalFromNoteString, isInArray, getAllKeysWithTrueValue, keyFormulas, nashvilleNumbers} from "./Constants";

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
                if ((scale[0].includes('#')) && isInArray('sharp', allowedAccidentals)) {
                    filteredScales.push(scale);
                }
                else if ((scale[0].includes('b')) && isInArray('flat', allowedAccidentals)) {
                    filteredScales.push(scale);
                }
                else if (((!scale[0].includes('#')) && (!scale[0].includes('b'))) && isInArray('natural', allowedAccidentals)) {
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

        let buildFilteredKeys = (keyQuality) => {
            let allKeys = {};
            for (let scale of allFilteredScales[keyQuality]) {
                // Build key
                let chords = [];
                let keyName = ((keyQuality === 'major') ? scale[0] : scale[0] + "m");
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

        let removeKeyGroupsBySettingsKeyQuality = (allowedGroups = ['major', 'minor']) => {
            let filteredKeyGroups = {};
            for (let groupName in allKeyGroupsWithFilteredKeys) {
                if (isInArray(groupName, allowedGroups)) {
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
