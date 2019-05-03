import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sentence  from "./Sentence.js";
import AnswerContainer from "../Answer/AnswerContainer.js";

class SentenceContainer extends Component {

    render() {
        // TODO: Question: How to get currentKey from Sentence or Key component for use in line 15.
        let currentKey = "Am";
        return (
            <div>
                <Sentence />
                <br/>
                <AnswerContainer currentKey={currentKey}/>
                <br/>
            </div>
        );
    }
}

export default SentenceContainer;