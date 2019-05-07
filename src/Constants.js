// Export is a node thing but also a webpack thing... TODO: research export
export const chordQualities = {
    major: {
        fullName: "major",
        textAbbreviation: "",
        symbolAbbreviation: "",
    },
    minor: {
        fullName: "minor",
        textAbbreviation:
            "m",
        symbolAbbreviation:
            "-"
    }
    ,
    7: {
        fullName: "Dominant 7",
        textAbbreviation:
            "7",
        symbolAbbreviation:
            "^7"
    }
    ,
    maj7: {
        fullName: "Major 7",
        textAbbreviation:
            "maj7",
        symbolAbbreviation:
            "Δ",
    }
    ,
    dim: {
        fullName: "Diminished",
        textAbbreviation:
            "°", //"dim",
        symbolAbbreviation:
            "°",
    }
    ,
    dim7: {
        fullName: "Diminished 7th",
        textAbbreviation:
            "dim7",
        symbolAbbreviation:
            "°^7",
    }
    ,
    dimMaj7: {
        fullName: "Diminished Major 7th",
        textAbbreviation:
            "dimMaj7",
        symbolAbbreviation:
            "°M7",
    }
    ,
    aug5: {
        fullName: "Augmented 5th",
        textAbbreviation:
            "aug5",
        symbolAbbreviation:
            "^5",
    }
    ,
    halfDim7: {
        fullName: "Half Diminished 7th",
        textAbbreviation:
            "halfDim7",
        symbolAbbreviation:
            "ø",
    }
    ,
    augMin7: {
        fullName: "Augmented Minor 7th",
        textAbbreviation:
            "augMin7",
        symbolAbbreviation:
            "+^7",
    }
    ,
    augMaj7: {
        fullName: "Augmented Major 7th",
        textAbbreviation:
            "augMaj7",
        symbolAbbreviation:
            "+Δ",
    }
};

// Base Notes
export const baseNotes = ['A','B','C','D','E','F','G'];

// Nashville Numbers
export const nashvilleNumbers = {
    // TODO: make this a nested function that generates 1-7
    arabic: [1, 2, 3, 4, 5, 6, 7],
    roman: ['I','II','III','IV','V','VI','VII'],
    };

export const majorScales = [
        // C
        [ 'C', 'D', 'E', 'F', 'G', 'A', 'B' ],

        // G
        [ 'G', 'A', 'B', 'C', 'D', 'E', 'F#' ],

        // D
        [ 'D', 'E', 'F#', 'G', 'A', 'B', 'C#' ],

        // A
        [ 'A', 'B', 'C#', 'D', 'E', 'F#', 'G#' ],

        // E
        [ 'E', 'F#', 'G#', 'A', 'B', 'C#', 'D#' ],

        // B
        [ 'B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#' ],

        // F#
        [ 'F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#' ],

        // Gb
        [ 'Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F' ],

        // Db
        [ 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'F' ],

        // Ab
        [ 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G' ],

        // Eb
        [ 'Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D' ],

        // Bb
        [ 'Bb', 'C', 'D', 'Eb', 'F', 'G', 'A' ],

        // F
        [ 'F', 'G', 'A', 'Bb', 'C', 'D', 'E' ],

    ];

export const majorScaleToMinorScale = (majorScale) => {
    let minorScale = Array.from(majorScale);
    for (let i =0; i<2; i++) {
        minorScale.unshift(minorScale.pop());
    }
    return minorScale;
}

export const buildRelativeMinorScales = () => {
    let minorScalesContainer = [];
    for (let majorScale of majorScales) {
        minorScalesContainer.push(majorScaleToMinorScale(majorScale));
    }
    return minorScalesContainer;
}

// TODO: Question: Is there a better way to handle this process (constant generated from function).
// TODO: Replace build Function with closure for this kind of function.
export const minorScales = buildRelativeMinorScales();

export const allScales = {
    major: majorScales,
    minor: minorScales,
};

export const keyFormulas = {
    major : [
            chordQualities.major,
            chordQualities.minor,
            chordQualities.minor,
            chordQualities.major,
            chordQualities.major,
            chordQualities.minor,
            chordQualities.dim,
    ],
    minor : [
            chordQualities.minor,
            chordQualities.dim,
            chordQualities.major,
            chordQualities.minor,
            chordQualities.minor,
            chordQualities.major,
            chordQualities.major,
    ],
}

export const accidentals = {
    sharp : {
        fullName: 'sharp',
        ASCIISymbol: '#',
        unicodeSymbol: "♯",
    },
    flat : {
        fullName: 'flat',
        ASCIISymbol: 'b',
        unicodeSymbol: 'b', //TODO: replace with char
    },
    natural : {
        fullName: 'natural',
        ASCIISymbol: '',
        unicodeSymbol: "nat", //TODO: replace with char
    }
}

export const getAccidentalFromNoteString = (noteString) => {
    if (noteString.substr('#')) return accidentals.sharp;
    if (noteString.substr('b')) return accidentals.flat;
    return accidentals.natural;
}

export const buildKeys = (keyQualityString) => {
    let allKeys = {};
    for (let scale of allScales[keyQualityString]) {
        // Build key
        let chords = [];
        let keyName = ((keyQualityString == 'major') ? scale[0] : scale[0] + "m");
        for (let noteString of scale) {
            //Build chord
            let noteInterval = scale.indexOf(noteString);
            let noteQuality = keyFormulas[keyQualityString][noteInterval];
            let chord = {
                nashvilleRoman: nashvilleNumbers.roman[noteInterval],
                nashvilleArabic: nashvilleNumbers.arabic[noteInterval],
                chordFullName: noteString + " " + noteQuality.fullName,
                chordAbbreviation: noteString + noteQuality.textAbbreviation,
                chordQualityFull: noteQuality.fullName,
                chordQualityAbbreviation: noteQuality.textAbbreviation,
                baseNote: noteString,
                accidental: getAccidentalFromNoteString(noteString),
            };
            chords.push(chord);
        }
        allKeys[keyName] = {
            keyName: chords[0].chordAbbreviation,
            keyQualityString: keyQualityString,
            chords: chords,
        };
    }
    return allKeys;
}

//TODO: replace usages of this with allKeyGroups.x
export const majorKeys = buildKeys('major');

export const minorKeys = buildKeys('minor');

export const keyGroups = {
    major: buildKeys('major'),
    minor: buildKeys('minor'),
};

// TODO: Use config to determine which source objects are used in parameter.
// TODO: filter this functions output by selection in the Settings pane (key quality, single keys, sharp/flat keys only).
// TODO: When building the Settings Pane, start with indvidual selections only then build the UI elements to select 'preset groups' (Similar to Chord Circle)
// TODO: Refactor this to getAllKeys
export const allKeys = (function () {
    let flattenedKeys = {};
    for (let keyGroupIndex of Object.keys(keyGroups)) {
        flattenedKeys = Object.assign(flattenedKeys, keyGroups[keyGroupIndex]);
    }
    return flattenedKeys;
})();

export const filterKeysBySettings = (sourceKeySet, settings = {allowedKeyGroups: [majorKeys, minorKeys], allowedKeyRootAccidentals: [accidentals.natural, accidentals.sharp, accidentals.flat]}) => {
    let flattenedKeys = {};
    flattenedKeys = Object.assign(flattenedKeys, sourceKeySet);
    console.log("flattenedKeys");
    console.log(flattenedKeys);
    let output = ( Object.keys(flattenedKeys).map((keyName,index) => {
        console.log(flattenedKeys);
        console.log(flattenedKeys[keyName]);
        let tryKey = flattenedKeys[keyName];
        let newKeys = {};
        console.log("keyGroups[tryKey.keyQualityString]");
        console.log(keyGroups[tryKey.keyQualityString]);
        console.log("settings.allowedKeyGroups");
        console.log(settings.allowedKeyGroups);
        if(1) {
        //if ((keyGroups[tryKey.keyQualityString] in settings.allowedKeyGroups)) {//} && (tryKey.chords[0].accidental in settings.allowedKeyRootAccidentals)) {
            console.log(tryKey);
            console.log(" is in!");
            if (tryKey !== undefined) {
                return Object.assign(newKeys, tryKey);
            }
        }
    }));
    console.log("filteredKeys");
    console.log(Object.assign({}, output));
    return Object.assign({}, output);


    /*let currentKeys = {};
    for (let selectedKeyQuality of settings) {
        currentKeys = Object.assign(currentKeys, selectedKeyQuality);
    }*/
};

export const allSelectedKeys = (function () {
    return filterKeysBySettings(allKeys);
})();

//console.log(filterKeysBySettings());

export const containsObject = (obj, list) => {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return true;
};

/*export const getCurrentKeys = (settings = {
    keyGroups: [majorKeys,minorKeys],
    keyRootAccidentals: [accidentals.natural, accidentals.sharp, accidentals.flat]
}) => {
    let allSelectedKeys = {};
    console.log("settings.keyGroups:");
    console.log(settings.keyGroups);
    for (let selectedKeyGroups of settings.keyGroups) {
        console.log("selectedKeyGroups:");
        console.log(selectedKeyGroups);
        for (let x of Object.keys(selectedKeyGroups)) {
            console.log("x:");
            console.log(selectedKeyGroups[x]);
            // Only use the key if its root's accidental is in the settings.keyRootAccidentals array.
            console.log("Chords Accidental:");
            console.log(selectedKeyGroups[x].chords[0].accidental);
            console.log("Settings Accidentals");
            console.log(settings.keyRootAccidentals);
            // TODO: how to check if the chord accidental is in the keyRootAccidentals array
            if (containsObject(selectedKeyGroups[x].chords[0].accidental, settings.keyRootAccidentals )) {
                console.log("here");
                allSelectedKeys = Object.assign(allSelectedKeys, selectedKeyGroups[x]);
            }
        }
    }
    console.log("allSelectedKeys:");
    console.log(allSelectedKeys);
    return allSelectedKeys;
}*/


// TODO: Refactor this to allSelectedKeys
//export const allSelectedKeys = getCurrentKeys({keyGroups: [majorKeys, minorKeys],keyRootAccidentals: [accidentals.natural, accidentals.sharp, accidentals.flat]});