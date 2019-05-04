import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sentence  from "./Sentence.js";
import AnswerContainer from "../Answer/AnswerContainer.js";

class SentenceContainer extends Component {

    render() {
        let currentKey = "Am";
        return (
            <div>
                <Sentence />
            </div>
        );
    }
}

export default SentenceContainer;