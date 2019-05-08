import React, { Component } from 'react';
import VerdictContainer from "../VerdictContainer"

// Constants
import { nashvilleNumbers } from "../../Constants";
import {getAllDistinctChords} from "../../RandomKeyGenerator";

class Answer extends Component {
    state = {
        derivedCurrentQuestion: '',
        derivedCurrentKey: '',
        derivedCurrentChord: '',
        guessResult: "N/A",
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
                    case 'number':
                        return currentChord.nashvilleRoman;
                    case 'key':
                        return currentKey.keyName;
                    default:
                        return 'Uhoh';
                }
            }(currentQuestion)),
        };
    }

    getCurrentPossibleAnswers = () => {
        let { derivedCurrentQuestion } = this.state;
        let { currentKeys } = this.props;
        switch (derivedCurrentQuestion) {
            case 'chord':
                return getAllDistinctChords(currentKeys).sort();
            case 'number':
                return nashvilleNumbers.roman.sort();
            case 'key':
                return Object.keys(currentKeys).sort();
            default:
                return 'Uhoh';
        }
    }

    checkGuess(guess) {
        let { derivedCurrentAnswer } = this.state;
        if (guess.choice === derivedCurrentAnswer) {
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
        let currentChoices = this.getCurrentPossibleAnswers();
        return (
            <div>
                <div className="answer-container">
                {currentChoices.map((choice) => (
                    // TODO: Change UI for selecting answer.  Grid, Wheel, tree?
                    <button className="answer-button" key={choice} onClick={() => this.checkGuess({choice})} value={choice}>
                        { choice }
                    </button>
                ))}
                </div>
                <div className="skip-container">
                    <button onClick={this.props.onSkipClicked}>Next</button>
                </div>
                <div className="verdict-container">
                    <VerdictContainer value={this.state.guessResult}/>
                </div>
            </div>
        );
    }
}
export default Answer;