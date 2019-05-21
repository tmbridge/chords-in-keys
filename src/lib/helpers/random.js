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