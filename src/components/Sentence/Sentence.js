import React, { Component } from 'react';
import SentenceChord from "./SentenceChord.js";
import SentenceNashvilleNumber from "./SentenceNashvilleNumber.js";
import SentenceKey from "./SentenceKey.js";
import Answer from "../Answer/Answer";

// Constants
import { getRandomKey, getRandomChordFromKey } from "../../lib/helpers/random.js";
import {random} from "../../lib/helpers/random";

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
        const blankString = "_____"
        switch (term) {
            case 'chord':
                return ((term !== currentQuestion) ? currentChord.chordAbbreviation : blankString);
            case 'number':
                return ((term !== currentQuestion) ? currentChord.nashvilleRoman : blankString);
            case 'key':
                return ((term !== currentQuestion) ? currentKey.keyName : blankString);
            default:
                return "Uhoh";
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
        let { currentKeys } = this.props;
        return (
                <div>
                    <span className='sentence-question'>
                        <SentenceChord
                            value={this.getSentenceValue('chord')}
                        />
                    </span>
                    <span className='sentence-text-static'>
                        is the
                    </span>
                    <span className='sentence-question'>
                        <SentenceNashvilleNumber
                            value={this.getSentenceValue('number')}
                        />
                    </span>
                    <span className='sentence-text-static'>
                        in the key of
                    </span>
                    <span className='sentence-question'>
                        <SentenceKey
                            value={this.getSentenceValue('key')}
                        />
                    </span>
                        <br/>
                        <Answer
                            currentKeys={currentKeys}
                            currentKey={currentKey}
                            currentChord={currentChord}
                            currentQuestion={currentQuestion}
                            onSkipClicked={() => this.next()}
                        />
                </div>
        );
    }
}

export default Sentence;