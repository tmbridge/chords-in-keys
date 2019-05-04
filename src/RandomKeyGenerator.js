import { currentKeys, majorKeys, minorKeys } from "./Constants"; // equal to var chordQualities = [].  Can use in class with just 'chordQualities'"

export const random = (ceiling, floor=0) => {
    return Math.floor(Math.random() * ceiling);
}

export const getRandomChordFromKey = (sourceKey) => {
    let length = sourceKey.chords.length;
    return sourceKey.chords[random(length)];
}

export const getRandomKey = (filter) => {
    let objectKeys = Object.keys(currentKeys);
    let length = objectKeys.length;
    return currentKeys[objectKeys[random(length)]];
}

export const getAllDistinctChords = (inKeys=currentKeys) => {
    let allChords = [];
    for (let key of Object.keys(inKeys)) {
        let currentChords = inKeys[key].chords;
        for (let index in currentChords) {
            let currentChordAbbreviation = currentChords[index].chordAbbreviation;
            allChords.push(currentChordAbbreviation);
        }
    }
    // Dedupe before returning.
    return Array.from(new Set(allChords));
}

// TODO: write/test this method
export const getKeyByAbbreviation = (abbreviatedName) => {
    currentKeys.chords.find(abbreviatedName);
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