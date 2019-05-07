import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Answer from "./Answer/Answer";
import {accidentals, allKeyQualities} from "../Constants";

class SettingsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            major: 'true',
            minor: 'true',
            sharp: 'true',
            flat: 'true',
            natural: 'true',
        }

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    // TODO: Put this State into Sentence then pass it via prop into this Component's onChange?
    // TODO: Also move the filtering functions in Constants.js to Sentence component and keep the set of filtered keys as state therein?  This will allow this Checkbox change to directly affect the filtered keys in Sentence's state
    handleCheckboxChange = (field) => (e) => {
        this.setState({
          [field]: e.target.checked
      });
    }

    render() {
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
                                checked={this.state[quality]}
                                onChange = {this.handleCheckboxChange([quality])}
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
                                checked={this.state[accidental]}
                                onChange = {this.handleCheckboxChange([accidental])}
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