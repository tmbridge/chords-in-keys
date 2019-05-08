import React, { Component } from 'react';
import {accidentals} from "../Constants";

class SettingsContainer extends Component {
    render() {
        let { settings, handleCheckboxChange } = this.props;
        return (
            <div className={'settings-container'}>
                    {settings.allKeyQualities.map((quality) => (
                        <div className='settings-qualities'  key={'quality' + quality}>
                            <input
                                className='setting-checkbox'
                                type='checkbox'
                                settinggroup='keyQualities'
                                value={quality}
                                checked={settings['keyQualities'][quality]}
                                onChange = {handleCheckboxChange([quality])}
                                key={quality}
                            />
                            <label>{quality}</label>

                        </div>
                    ))}
                    <br/><br/>
                    {Object.keys(accidentals).map((accidental) => (
                        <div className='settings-accidentals'  key={'accidental' + accidental}>
                            <input
                                className='setting-checkbox'
                                type='checkbox'
                                settinggroup='keyAccidentals'
                                value={accidental}
                                checked={settings['keyAccidentals'][accidental]}
                                onChange = {handleCheckboxChange([accidental])}
                                key={accidental}
                            />
                            <label>{accidental}</label>
                        </div>
                    ))}
            </div>
        );
    }
}

export default SettingsContainer;