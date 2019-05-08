import React, { Component } from 'react';
import Sentence  from "./Sentence.js";
class SentenceContainer extends Component {
    
    render() {
        let { currentKeys } = this.props;
        return (
            <div>
                <Sentence currentKeys={currentKeys} />
            </div>
        );
    }
}

export default SentenceContainer;