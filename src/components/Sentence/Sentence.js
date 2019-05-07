import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SentenceChord from "./SentenceChord.js";
import SentenceNashvilleNumber from "./SentenceNashvilleNumber.js";
import SentenceKey from "./SentenceKey.js";
import AnswerContainer from "../Answer/AnswerContainer";

// Constants
import { getRandomKey, getRandomChordFromKey } from "../../RandomKeyGenerator.js";
import {random} from "../../RandomKeyGenerator";

class Sentence extends Component {

    possibleQuestions = ['chord','number','key']

    // Constructor.
    constructor(props) {
        super(props);

        // State
        let {currentKeys} = this.props;
        let newKey =  getRandomKey(currentKeys);
        this.state = {
            currentKey : newKey,
            currentChord : getRandomChordFromKey(newKey),
            currentQuestion : this.possibleQuestions[random(3)],
        }
        // End state
    }
    // End Constructor

    getSentenceValue(term) {
        let { currentKey, currentChord, currentQuestion } = this.state;
        let blankString = "_____"
        switch (term) {
            case 'chord':
                return ((term != currentQuestion) ? currentChord.chordAbbreviation : blankString);
                break;
            case 'number':
                return ((term != currentQuestion) ? currentChord.nashvilleRoman : blankString);
                break;
            case 'key':
                return ((term != currentQuestion) ? currentKey.keyName : blankString);
                break;
        }
    }

    // Method to advance to next sentence.
    next(){
        let {currentKeys} = this.props;
        let newKey =  getRandomKey(currentKeys);
        this.setState({
            currentKey : newKey,
            currentChord : getRandomChordFromKey(newKey),
            currentQuestion : this.possibleQuestions[random(3)],
        });
    }

    render() {
        let { currentQuestion, currentKey, currentChord } = this.state;
        let { currentKeys, keyGroupsFilteredBySettings } = this.props;
        return (
                <div>
                    {/*TODO: Randomly 'blank out' one of the three of these components and set Answer values to associated options.*/}
                    <p>
                        <SentenceChord value={this.getSentenceValue('chord')} /> is the <SentenceNashvilleNumber value={this.getSentenceValue('number')} /> in the key of <SentenceKey value={this.getSentenceValue('key')} />
                    </p>
                    <p>
                        <AnswerContainer currentKeys={currentKeys} keyGroupsFilteredBySettings={keyGroupsFilteredBySettings} currentKey={currentKey} currentChord={currentChord} currentQuestion={currentQuestion} onSkipClicked={() => this.next()}/>
                    </p>
                </div>
        );
    }
}

export default Sentence;