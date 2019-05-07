import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Answer from "./Answer/Answer";
import {accidentals, allKeyQualities} from "../Constants";

class SettingsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            settings : {
                keyQualities : {
                    major: '',
                    minor: 'checked',
                },
                keyAccidentals : {
                    sharp: 'checked',
                    flat: '',
                    natural: 'checked',
                }
            }
        }

        this.updateSettings = this.updateSettings.bind(this);
    }

    updateSettings(e) {
        console.log("Updating Settings State.");
        console.log(e.target);
        this.setState({
            settings : {
                keyQualities : {
                    major: this.in,
                    minor: '',
                },
                keyAccidentals : {
                    sharp: '',
                    flat: '',
                    natural: '',
                }
            }
        })
    }

    render() {
        let { settings } = this.state;
        return (
            <div>
                {allKeyQualities.map((quality, index) => (
                    React.createElement('input', {
                        type: 'checkbox',
                        placeholder: 'Name (required)',
                        value: settings.keyQualities[quality],
                    })
                ))}
            </div>
        )
    }
}

export default SettingsContainer;