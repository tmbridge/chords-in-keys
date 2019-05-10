export const isInArray = (needle, haystack) => {
    if (haystack.indexOf(needle) > -1) {
        return true;
    }
    return false;
};

export const getAllKeysWithTrueValue = (obj) => {
    let out = [];
    let keys = Object.keys(obj);
    for (let i of keys) {
        if (obj[i] === true){
            out.push(i);
        }
    }
    return out;
}

// Extend this when adding new keys to the app
export const keyGroups = ['major', 'minor'];

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
    arabic: Array.from(Array(7).keys(), n => n + 1),
    roman: ['I','II','III','IV','V','VI','VII'],
    };

export const allMajorScales = [
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
    for (let majorScale of allMajorScales) {
        minorScalesContainer.push(majorScaleToMinorScale(majorScale));
    }
    return minorScalesContainer;
}

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

export const allMinorScales = buildRelativeMinorScales();

export const allScales = {
    major: allMajorScales,
    minor: allMinorScales,
};