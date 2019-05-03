import { chordQualities, baseNotes, nashvilleNumbers, A, B, C, D, E, F, G } from "../Constants"; // equal to var chordQualities = [].  Can use in class with just 'chordQualities'"

export const randomChord = (sourceKey) => {
    let length = sourceKey.chords.length;

    // Math.floor(Math.random() * length)

   // return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];

    //randomChord(A);
}

export class RandomKeyGenerator {

    constructor() {

        // Helper constants/methods.
    }

    getAllMajorKeys() {
        return this.majorKeys;
    }

    // TODO: write/test this method
    getAllChords(keys = this.getAllMajorKeys()) {
        console.log(keys);
        return keys;
    }

    // TODO: write/test this method
    getKeyByAbbreviation(abbreviatedName) {
        this.getAllMajorKeys().keys.chords.find(abbreviatedName);
    }

    // TODO: write/test this method
    getRandomChord(quality) {
        let allKeys = {};
        if (quality == "major") {
            let allKeys = this.majorKeys;
        }
        let objectKeys = Object.keys(allKeys);
        return allKeys.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }

    // TODO: write/test this method
    getRandomChordFromKey(key) {
        let objectKeys = Object.keys(this.chords);
        return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }

    // TODO: write a function that will replace unicode accidental characters ('♭','♯','♮') with ASCII characters ('b', '#', '') to use in systems unable to parse unicode?
}