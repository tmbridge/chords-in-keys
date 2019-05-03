import { majorKeys } from "../Constants"; // equal to var chordQualities = [].  Can use in class with just 'chordQualities'"

export const random = (ceiling, floor=0) => {
    return Math.floor(Math.random() * ceiling);
}

export const randomChord = (sourceKey) => {
    console.log("sourceKey: " + sourceKey);
    let length = sourceKey.chords.length;
    console.log("Length: " + length);
    return sourceKey.chords[random(length)];
}

export const randomKey = () => {
    let objectKeys = Object.keys(majorKeys.keys);
    let length = objectKeys.length;
    return majorKeys.keys[objectKeys[random(length)]];
}


export class RandomKeyGenerator {

    constructor() {
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