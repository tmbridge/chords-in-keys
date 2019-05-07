import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sentence  from "./Sentence.js";
class SentenceContainer extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        let { currentKeys, keyGroupsFilteredBySettings } = this.props;
        return (
            <div>
                <Sentence currentKeys={currentKeys} keyGroupsFilteredBySettings={keyGroupsFilteredBySettings} />
            </div>
        );
    }
}

export default SentenceContainer;