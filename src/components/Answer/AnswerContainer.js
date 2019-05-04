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
    }


    static getDerivedStateFromProps(props, state) {
        const { currentQuestion, currentKey } = props;
        return {
            derivedCurrentQuestion: currentQuestion,
            derivedCurrentKey: currentKey,
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
        // Get which type of question this is: Key, Number, or Chord.
        let questionType = 'key'; // Get this from Sentence.
        // Get the current X of the question type (correctAnswer).
        let correctAnswer = 'A';  // Get this from state using a switch statement on questionType.
        // Compare guess to X.
        // Return true or false accordingly.
        // (Find a cleaner way to do this.  Perhaps with an additional function.
        if (guess == correctAnswer) {
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