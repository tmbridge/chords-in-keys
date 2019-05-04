import React, { Component } from 'react';
import Answer from "./Answer";
import ReactDOM from 'react-dom';

// Constants
import {currentKeys, majorKeys, nashvilleNumbers } from "../../Constants";
import {getAllDistinctChords, getRandomChordFromKey} from "../../RandomKeyGenerator";

class AnswerContainer extends Component {
    // Constructor.
    constructor(props) {
        super(props);

        // State
        this.state = {
            allKeys :  Object.keys(currentKeys),
            allNashvilleRomans : nashvilleNumbers.roman,
            allChords: getAllDistinctChords(),
            allChordsInCurrentKey: props.currentKey,
        }
        // End state
    }
    // End Constructor

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
        const { allKeys } = this.state;
        return (
            <div>
                {/*TODO: Set Button values to options associated with currently 'blanked out' Sentence component.*/}
                {allKeys.map((key, index) => (
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