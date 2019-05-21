import React, { Component } from 'react';
import SentenceChord from "./SentenceChord";
import SentenceNashvilleNumber from "./SentenceNashvilleNumber";
import SentenceKey from "./SentenceKey";
import Answer from "../Answer/Answer";

class Sentence extends Component {

    getSentenceValue(term) {
        let { currentKey, currentChord, currentQuestion } = this.props;
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

    render() {
        let { currentQuestion, currentKey, currentChord } = this.props;
        let { currentKeys, next } = this.props;
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
                            onSkipClicked={() => next()}
                        />
                </div>
        );
    }
}

export default Sentence;