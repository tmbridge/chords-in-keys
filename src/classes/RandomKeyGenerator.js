import { majorKeys } from "../Constants"; // equal to var chordQualities = [].  Can use in class with just 'chordQualities'"

export const random = (ceiling, floor=0) => {
    return Math.floor(Math.random() * ceiling);
}

export const getRandomChordFromKey = (sourceKey) => {
    let length = sourceKey.chords.length;
    return sourceKey.chords[random(length)];
}

export const getRandomKey = () => {
    let objectKeys = Object.keys(majorKeys.keys);
    let length = objectKeys.length;
    return majorKeys.keys[objectKeys[random(length)]];
}

// TODO: write/test this method
export const getAllDistinctChords = (inKeys=majorKeys) => {
    return inKeys;
}

// TODO: write/test this method
export const getKeyByAbbreviation = (abbreviatedName) => {
    majorKeys.keys.chords.find(abbreviatedName);
}

// TODO: write/test this method
export const getMatchingRandomChord = (quality,
                                       baseNote,
                                       accidental,) => {
    let allKeys = {};
    if (quality == "major") {
        let allKeys = this.majorKeys;
    }
    let objectKeys = Object.keys(allKeys);
    return allKeys.chords[objectKeys[objectKeys.length * Math.random() << 0]];
}

// TODO: write a function that will replace unicode accidental characters ('♭','♯','♮') with ASCII characters ('b', '#', '') to use in systems unable to parse unicode?