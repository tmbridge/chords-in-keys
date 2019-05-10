import React, { Component } from 'react';
import VerdictContainer from "../VerdictContainer"

// Constants
import { nashvilleNumbers } from "../../constants/Constants";
import {getAllDistinctChords} from "../../lib/helpers/random";

class Answer extends Component {
    state = {
        guessResult: "N/A",
    }


    static getDerivedStateFromProps(props, state) {
        const { currentQuestion, currentKey, currentChord } = props;
        return {
            // TODO: Move this function up to App.js and pass it down via props.  This will likely allow removal of the props used in this function.
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
        let { currentQuestion, currentKeys } = this.props;
        switch (currentQuestion) {
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
                    <button onClick={this.props.onSkipClicked}>
                        Next
                    </button>
                </div>
                <div className="verdict-container">
                    <VerdictContainer value={this.state.guessResult}/>
                </div>
            </div>
        );
    }
}
export default Answer;