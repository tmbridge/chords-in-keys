import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Answer from "./Answer";

// Constants
import {currentKeys, keyGroups, nashvilleNumbers } from "../../Constants";
import {getAllDistinctChords, getRandomChordFromKey} from "../../RandomKeyGenerator";

class AnswerContainer extends Component {
    state = {
        derivedCurrentQuestion: '',
        derivedCurrentKey: '',
        derivedCurrentChord: '',
    }


    static getDerivedStateFromProps(props, state) {
        const { currentQuestion, currentKey, currentChord } = props;
        return {

            // Trying to learn getDerivedStateFromProps here...
            // TODO: Question: Can the first three of these just be referenced through props?
            derivedCurrentQuestion: currentQuestion,
            derivedCurrentKey: currentKey,
            derivedCurrentChord: currentChord,
            derivedCurrentAnswer: (function (x) {
                switch (x) {
                    case 'chord':
                        return currentChord.chordAbbreviation;
                        break;
                    case 'number':
                        return currentChord.nashvilleRoman;
                        break;
                    case 'key':
                        return currentKey.keyName;
                        break;
                }
            }(currentQuestion)),
        };
    }

    getCurrentPossibleAnswers = () => {
        let { derivedCurrentQuestion, derivedCurrentKey } = this.state;
        switch (derivedCurrentQuestion) {
            case 'chord':
                return getAllDistinctChords(keyGroups[derivedCurrentKey.keyQuality]).sort();
                break;
            case 'number':
                return nashvilleNumbers.roman.sort();
                break;
            case 'key':
                return Object.keys(currentKeys).sort();
                break;
        }
    }

    checkGuess(guess) {
        let { derivedCurrentAnswer } = this.state;
        // Compare guess to derivedAnswer.
        // Return true or false accordingly.
        if (guess === derivedCurrentAnswer) {
            this.setState({
                guessResult: 1,
            });
        }
        else {
            this.setState({
                guessResult: 0,
            });
        }
    }

    render() {
        let currentPossibleAnswers = this.getCurrentPossibleAnswers();
        return (
            <div>
                {/*TODO: Set Button values to options associated with currently 'blanked out' Sentence component.*/}
                {currentPossibleAnswers.map((key, index) => (
                    /*TODO: Extract this button out to the Answer Component*/
                    <Answer onGuess={(guessToCheck) => this.checkGuess(guessToCheck)} value={key} />
                ))}
                <br/>
                <div className="answer-container">
                    <button onClick={this.props.onSkipClicked}>skip</button>
                </div>
            </div>
        );
    }
}
export default AnswerContainer;