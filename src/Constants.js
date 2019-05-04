// Export is a node thing but also a webpack thing... TODO: research export
export const chordQualities = {
    major: {
        fullName: "major",
        abbreviation: "",
        symbol: "",
    },
    minor: {
        fullName: "minor",
        abbreviation:
            "m",
        symbol:
            "-"
    }
    ,
    7: {
        fullName: "Dominant 7",
        abbreviation:
            "7",
        symbol:
            "^7"
    }
    ,
    maj7: {
        fullName: "Major 7",
        abbreviation:
            "maj7",
        symbol:
            "Δ",
    }
    ,
    dim: {
        fullName: "Diminished",
        abbreviation:
            "dim",
        symbol:
            "°",
    }
    ,
    dim7: {
        fullName: "Diminished 7th",
        abbreviation:
            "dim7",
        symbol:
            "°^7",
    }
    ,
    dimMaj7: {
        fullName: "Diminished Major 7th",
        abbreviation:
            "dimMaj7",
        symbol:
            "°M7",
    }
    ,
    aug5: {
        fullName: "Augmented 5th",
        abbreviation:
            "aug5",
        symbol:
            "^5",
    }
    ,
    halfDim7: {
        fullName: "Half Diminished 7th",
        abbreviation:
            "halfDim7",
        symbol:
            "ø",
    }
    ,
    augMin7: {
        fullName: "Augmented Minor 7th",
        abbreviation:
            "augMin7",
        symbol:
            "+^7",
    }
    ,
    augMaj7: {
        fullName: "Augmented Major 7th",
        abbreviation:
            "augMaj7",
        symbol:
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

        // F
        [ 'F', 'G', 'A', 'Bb', 'C', 'D', 'E' ],

        // TODO:  Add flat scales here
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
    console.log("minorScale Gen:");
    console.log (minorScalesContainer);
    return minorScalesContainer;
}

// TODO: Question: Is there a better way to handle this process (constant generated from function).
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
        let keyName = scale[0];
        for (let noteString of scale) {
            //Build chord
            let noteInterval = scale.indexOf(noteString);
            let noteQuality = keyFormulas[keyQuality][noteInterval];
            let chord = {
                nashvilleRoman: nashvilleNumbers.roman[noteInterval],
                nashvilleArabic: nashvilleNumbers.arabic[noteInterval],
                chordFullName: noteString + " " + noteQuality.fullName,
                chordAbbreviation: noteString + noteQuality.symbol,
                chordQualityFull: noteQuality.fullName,
                chordQualityAbbreviation: noteQuality.abbreviation,
                baseNote: noteString,
                accidental: getAccidentalFromNoteString(noteString),
            };
            chords.push(chord);
        }
        allKeys[keyName] = {
            chords: chords
        };
    }
    return allKeys;
}

export const majorKeys = buildKeys('major');

export const minorKeys = buildKeys('minor');

// TODO: Use config to determine which source objects are used here.
export const getCurrentKeys = (keyQualityConfigSettings=['major','minor']) => {
    let currentKeys = {};
    for (let selectedKeyQuality of keyQualityConfigSettings) {
        currentKeys = Object.assign(currentKeys, selectedKeyQuality);
    }
    return currentKeys;
}

export const currentKeys = getCurrentKeys();
console.log("CurrentKeys");
console.log(currentKeys);