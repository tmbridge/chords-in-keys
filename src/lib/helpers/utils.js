import { chordQualities } from "../../constants/Constants";


// TODO: write/test this method
/*export const getKeyByAbbreviation = (abbreviatedName) => {
    currentKeys.chords.find(abbreviatedName);
}*/

// TODO: write/test this method
/*export const getMatchingRandomChord = (quality,
                                       baseNote,
                                       accidental,) => {
    let allKeys = {};
    if (quality === "major") {
        let allKeys = this.allKeyGroupsWithFilteredKeys.major;
    }
    let objectKeys = Object.keys(allKeys);
    return allKeys.chords[objectKeys[objectKeys.length * Math.random() << 0]];
}*/

export const getKeyQuality = (key) => {
    return chordQualities[key.keyQuality];
}

// TODO: write a function that will replace unicode accidental characters ('♭','♯','♮') with ASCII characters ('b', '#', '') to use in systems unable to parse unicode?