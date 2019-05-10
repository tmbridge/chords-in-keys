export const random = (ceiling, floor=0) => {
    return Math.floor(Math.random() * ceiling);
}

export const getRandomChordFromKey = (sourceKey) => {
    let length = sourceKey.chords.length;
    return sourceKey.chords[random(length)];
}

export const getRandomKey = (currentKeys) => {
    let objectKeys = Object.keys(currentKeys);
    let length = objectKeys.length;
    return currentKeys[objectKeys[random(length)]];
}

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

// TODO: write a function that will replace unicode accidental characters ('♭','♯','♮') with ASCII characters ('b', '#', '') to use in systems unable to parse unicode?