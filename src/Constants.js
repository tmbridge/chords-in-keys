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

export const filterMajorScalesByAccidental = () => {

}

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

export const buildKeys = (keyQuality) => {
    let allKeys = {};
    for (let scale of allScales[keyQuality]) {
        // Build key
        let chords = [];
        let keyName = ((keyQuality == 'major') ? scale[0] : scale[0] + "m");
        for (let noteString of scale) {
            //Build chord
            let noteInterval = scale.indexOf(noteString);
            let noteQuality = keyFormulas[keyQuality][noteInterval];
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
            keyQuality: keyQuality,
            chords: chords,
        };
    }
    return allKeys;
}

//TODO: replace usages of this with allKeyGroups.x
export const majorKeys = buildKeys('major');

export const minorKeys = buildKeys('minor');

export const allKeyGroups = {
    major: buildKeys('major'),
    minor: buildKeys('minor'),
}

export const filteredKeyGroups = () => {
    return filterKeyGroupsBySettings();
}

export const isInArray = (needle, haystack) => {
    if (haystack.indexOf(needle) > -1) {
        return true;
    }
    return false;
};

// TODO: Use Settings form data for this function's argument
export const filterKeyGroupsBySettings = (allowedGroups=['major']) => {
    let filteredKeyGroups = {};
    for (let groupName in allKeyGroups) {
        if (isInArray(groupName, allowedGroups)) {
            Object.assign(filteredKeyGroups, allKeyGroups[groupName]);
        }
    }
    return filteredKeyGroups;
}

// TODO: Use config to determine which source objects are used in parameter.
// TODO: filter this functions output by selection in the Settings pane (key quality, single keys, sharp/flat keys only).
// TODO: When building the Settings Pane, start with indvidual selections only then build the UI elements to select 'preset groups' (Similar to Chord Circle)
export const getCurrentKeys = (keyQualityConfigSettings=[majorKeys,minorKeys]) => {
    let currentKeys = {};
    for (let selectedKeyQuality of keyQualityConfigSettings) {
        currentKeys = Object.assign(currentKeys, selectedKeyQuality);
    }
    return currentKeys;
}

export const currentKeys = filteredKeyGroups();