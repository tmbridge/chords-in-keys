import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Answer from "./Answer/Answer";
import {accidentals} from "../Constants";

class SettingsContainer extends Component {
    render() {
        let { settings, allKeyQualities, handleCheckboxChange } = this.props;
        console.log("settings");
        console.log(settings);
        return (
            <div>
                <p>
                    {allKeyQualities.map((quality, index) => (
                        <div>
                            <input
                                className='setting-checkbox'
                                type='checkbox'
                                settingGroup='keyQualities'
                                value={quality}
                                checked={settings['keyQualities'][quality]}
                                onChange = {handleCheckboxChange([quality])}
                            />
                            <label>{quality}</label>

                        </div>
                    ))}
                </p>
                <p>
                    {Object.keys(accidentals).map((accidental, index) => (
                        <div>
                            <input
                                className='setting-checkbox'
                                type='checkbox'
                                settingGroup='keyAccidentals'
                                value={accidental}
                                checked={settings['keyAccidentals'][accidental]}
                                onChange = {handleCheckboxChange([accidental])}
                            />
                            <label>{accidental}</label>
                        </div>
                    ))}
                </p>
            </div>
        );
    }
}

export default SettingsContainer;