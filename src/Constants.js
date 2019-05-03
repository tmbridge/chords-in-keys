// Export is a node thing but also a webpack thing... TODO: research export
export const chordQualities = [
    {
        fullName: "major",
        abbreviation: "",
    },
    {
        fullName: "minor",
        abbreviation: "m",
        symbol: "-"
    },
    {
        fullName: "Dominant 7",
        abbreviation: "7",
        symbol: "^7"
    },
    {
        fullName: "Major 7",
        abbreviation: "maj7",
        symbol: "Δ",
    },
    {
        fullName: "Diminished",
        abbreviation: "dim",
        symbol: "°",
    },
    {
        fullName: "Diminished 7th",
        abbreviation: "dim7",
        symbol: "°^7",
    },
    {
        fullName: "Diminished Major 7th",
        abbreviation: "dimMaj7",
        symbol: "°M7",
    },
    {
        fullName: "Augmented 5th",
        abbreviation: "aug5",
        symbol: "^5",
    },
    {
        fullName: "Half Diminished 7th",
        abbreviation: "halfDim7",
        symbol: "ø",
    },
    {
        fullName: "Augmented Minor 7th",
        abbreviation: "augMin7",
        symbol: "+^7",
    },
    {
        fullName: "Augmented Major 7th",
        abbreviation: "augMaj7",
        symbol: "+Δ",
    },
];

// Base Notes
export const baseNotes = ['A','B','C','D','E','F','G'];

// Nashville Numbers
export const nashvilleNumbers = {
    // TODO: make this a nested function that generates 1-7
    arabic: [1, 2, 3, 4, 5, 6, 7],
    roman: ['I','II','III','IV','V','VI','VII'],
    };

// Key definitions
// TODO: How to make these constants?
// TODO: Extract randomChord() function to a class method so it's not included in each key's object.
// TODO: Get NashvilleNumbers without hardcoding index.
// TODO: Derive chordFullName this from baseNote and chordQuality
// TODO: Derive chordAbbreviation from baseNote, chordQuality, and accidental
// Key of A Major
export const A = {
    // TODO: Question: use the index of a chord within the chords array to get nashvillenumber instead of hardcoding index.
    chords: [
        {  // A
            nashvilleRoman: nashvilleNumbers.roman[0],
            nashvilleArabic: nashvilleNumbers.arabic[0],
            chordAbbreviation: "A", // TODO: Derive this from baseNote, chordQuality, and accidental
            chordFullName: "A major", // TODO: Derive this from baseNote and chordQuality
            chordQuality: "major",
            chordQualityAbbreviation: "", //TODO: Derive this chordQuality
            baseNote: 'A',
            accidental: "♮",
        },
        {  // Bm
            nashvilleRoman: nashvilleNumbers.roman[1],
            nashvilleArabic: nashvilleNumbers.arabic[1],
            chordAbbreviation: "Bm",
            chordFullName: "B minor",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'B',
            accidental: "♮",
        },
        {  // C♯m
            nashvilleRoman: nashvilleNumbers.roman[2],
            nashvilleArabic: nashvilleNumbers.arabic[2],
            chordFullName: "C♯ minor",
            chordAbbreviation: "C♯m",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'C',
            accidental: "♯",
        },
        {  // D
            nashvilleRoman: nashvilleNumbers.roman[3],
            nashvilleArabic: nashvilleNumbers.arabic[3],
            chordFullName: "D major",
            chordAbbreviation: "D",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'D',
            accidental: "♮",
        },
        {  // E
            nashvilleRoman: nashvilleNumbers.roman[4],
            nashvilleArabic: nashvilleNumbers.arabic[4],
            chordFullName: "E major",
            chordAbbreviation: "E",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'E',
            accidental: "♮",
        },
        {  // F♯m
            nashvilleRoman: nashvilleNumbers.roman[5],
            nashvilleArabic: nashvilleNumbers.arabic[5],
            chordFullName: "F♯ minor",
            chordAbbreviation: "F♯m",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'F',
            accidental: "♯",
        },
        {  // G♯dim
            nashvilleRoman: nashvilleNumbers.roman[6],
            nashvilleArabic: nashvilleNumbers.arabic[6],
            chordFullName: "G♯ diminished",
            chordAbbreviation: "G♯°",
            chordQualityFull: "diminished",
            chordQualityAbbreviation: "°",
            baseNote: 'G',
            accidental: "♯",
        },
    ],
    // TODO: Extract this function to a class method so it's not included in each key's object.
    randomChord: function () {
        let objectKeys = Object.keys(this.chords);
        return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }
};

// Key of B Major
export const B = {
    // TODO: use the index of a chord within the chords array to get nashvillenumber instead of hardcoding index.
    chords: [
        {  // B
            nashvilleRoman: nashvilleNumbers.roman[0],
            nashvilleArabic: nashvilleNumbers.arabic[0],
            chordAbbreviation: "B",
            chordFullName: "B major",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'B',
            accidental: "♮",
        },
        {  // C♯m
            nashvilleRoman: nashvilleNumbers.roman[1],
            nashvilleArabic: nashvilleNumbers.arabic[1],
            chordAbbreviation: "C♯m",
            chordFullName: "C♯ minor",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'C',
            accidental: "♯",
        },
        {  // D♯m
            nashvilleRoman: nashvilleNumbers.roman[2],
            nashvilleArabic: nashvilleNumbers.arabic[2],
            chordFullName: "D♯ minor",
            chordAbbreviation: "D♯m",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'D',
            accidental: "♯",
        },
        {  // E
            nashvilleRoman: nashvilleNumbers.roman[3],
            nashvilleArabic: nashvilleNumbers.arabic[3],
            chordFullName: "E major",
            chordAbbreviation: "E",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'E',
            accidental: "♮",
        },
        {  // F♯
            nashvilleRoman: nashvilleNumbers.roman[4],
            nashvilleArabic: nashvilleNumbers.arabic[4],
            chordFullName: "F♯ major",
            chordAbbreviation: "F♯",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'F',
            accidental: "♯",
        },
        {  // G♯m
            nashvilleRoman: nashvilleNumbers.roman[5],
            nashvilleArabic: nashvilleNumbers.arabic[5],
            chordFullName: "G♯ minor",
            chordAbbreviation: "G♯m",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'G',
            accidental: "♯",
        },
        {  // A♯dim
            nashvilleRoman: nashvilleNumbers.roman[6],
            nashvilleArabic: nashvilleNumbers.arabic[6],
            chordFullName: "A♯ diminished",
            chordAbbreviation: "A♯°",
            chordQualityFull: "diminished",
            chordQualityAbbreviation: "°",
            baseNote: 'A',
            accidental: "♯",
        },
    ],
    // TODO: Question: How to extract this out to a class method ?
    randomChord: function () {
        let objectKeys = Object.keys(this.chords);
        return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }
};

// Key of C Major
export const C = {
    // TODO: use the index of a chord within the chords array to get nashvillenumber instead of hardcoding index.
    chords: [
        {  // C
            nashvilleRoman: nashvilleNumbers.roman[0],
            nashvilleArabic: nashvilleNumbers.arabic[0],
            chordAbbreviation: "C",
            chordFullName: "C major",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'C',
            accidental: "♮",
        },
        {  // D
            nashvilleRoman: nashvilleNumbers.roman[1],
            nashvilleArabic: nashvilleNumbers.arabic[1],
            chordAbbreviation: "Dm",
            chordFullName: "D minor",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'D',
            accidental: "♮",
        },
        {  // E
            nashvilleRoman: nashvilleNumbers.roman[2],
            nashvilleArabic: nashvilleNumbers.arabic[2],
            chordFullName: "E minor",
            chordAbbreviation: "C♯m",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'E',
            accidental: "♮",
        },
        {  // F
            nashvilleRoman: nashvilleNumbers.roman[3],
            nashvilleArabic: nashvilleNumbers.arabic[3],
            chordFullName: "F major",
            chordAbbreviation: "F",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'F',
            accidental: "♮",
        },
        {  // G
            nashvilleRoman: nashvilleNumbers.roman[4],
            nashvilleArabic: nashvilleNumbers.arabic[4],
            chordFullName: "G major",
            chordAbbreviation: "G",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'G',
            accidental: "♮",
        },
        {  // A
            nashvilleRoman: nashvilleNumbers.roman[5],
            nashvilleArabic: nashvilleNumbers.arabic[5],
            chordFullName: "A minor",
            chordAbbreviation: "Am",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'A',
            accidental: "♮",
        },
        {  // B
            nashvilleRoman: nashvilleNumbers.roman[6],
            nashvilleArabic: nashvilleNumbers.arabic[6],
            chordFullName: "B diminished",
            chordAbbreviation: "B°",
            chordQualityFull: "diminished",
            chordQualityAbbreviation: "°",
            baseNote: 'B',
            accidental: "♮",
        },
    ],
    // TODO: Extract this function to a class method so it's not included in each key's object.
    randomChord: function () {
        let objectKeys = Object.keys(this.chords);
        return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }
};

// Key of E Major
export const E = {
    // TODO: use the index of a chord within the chords array to get nashvillenumber instead of hardcoding index.
    chords: [
        {  // E
            nashvilleRoman: nashvilleNumbers.roman[0],
            nashvilleArabic: nashvilleNumbers.arabic[0],
            chordAbbreviation: "E",
            chordFullName: "E major",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'E',
            accidental: "♮",
        },
        {  // F♯m
            nashvilleRoman: nashvilleNumbers.roman[1],
            nashvilleArabic: nashvilleNumbers.arabic[1],
            chordAbbreviation: "F♯m",
            chordFullName: "F♯ minor",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'F',
            accidental: "♯",
        },
        {  // G♯m
            nashvilleRoman: nashvilleNumbers.roman[2],
            nashvilleArabic: nashvilleNumbers.arabic[2],
            chordFullName: "G♯ minor",
            chordAbbreviation: "G♯m",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'G',
            accidental: "♯",
        },
        {  // A
            nashvilleRoman: nashvilleNumbers.roman[3],
            nashvilleArabic: nashvilleNumbers.arabic[3],
            chordFullName: "A major",
            chordAbbreviation: "A",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'A',
            accidental: "♮",
        },
        {  // B
            nashvilleRoman: nashvilleNumbers.roman[4],
            nashvilleArabic: nashvilleNumbers.arabic[4],
            chordFullName: "B major",
            chordAbbreviation: "B",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'B',
            accidental: "♮",
        },
        {  // C♯m
            nashvilleRoman: nashvilleNumbers.roman[5],
            nashvilleArabic: nashvilleNumbers.arabic[5],
            chordFullName: "C minor",
            chordAbbreviation: "Cm",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'C',
            accidental: "♯",
        },
        {  // D♯dim
            nashvilleRoman: nashvilleNumbers.roman[6],
            nashvilleArabic: nashvilleNumbers.arabic[6],
            chordFullName: "D♯ diminished",
            chordAbbreviation: "D♯°",
            chordQualityFull: "diminished",
            chordQualityAbbreviation: "°",
            baseNote: 'D',
            accidental: "♯",
        },
    ],
    // TODO: Extract this function to a class method so it's not included in each key's object.
    randomChord: function () {
        let objectKeys = Object.keys(this.chords);
        return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }
};

// Key of D Major
export const D = {
    // TODO: use the index of a chord within the chords array to get nashvillenumber instead of hardcoding index.
    chords: [
        {  // D
            nashvilleRoman: nashvilleNumbers.roman[0],
            nashvilleArabic: nashvilleNumbers.arabic[0],
            chordAbbreviation: "D",
            chordFullName: "D major",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'D',
            accidental: "♮",
        },
        {  // Em
            nashvilleRoman: nashvilleNumbers.roman[1],
            nashvilleArabic: nashvilleNumbers.arabic[1],
            chordAbbreviation: "Em",
            chordFullName: "E minor",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'E',
            accidental: "♮",
        },
        {  // F♯m
            nashvilleRoman: nashvilleNumbers.roman[2],
            nashvilleArabic: nashvilleNumbers.arabic[2],
            chordFullName: "F♯ minor",
            chordAbbreviation: "F♯m",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'F',
            accidental: "♯",
        },
        {  // G
            nashvilleRoman: nashvilleNumbers.roman[3],
            nashvilleArabic: nashvilleNumbers.arabic[3],
            chordFullName: "G major",
            chordAbbreviation: "G",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'G',
            accidental: "♮",
        },
        {  // A
            nashvilleRoman: nashvilleNumbers.roman[4],
            nashvilleArabic: nashvilleNumbers.arabic[4],
            chordFullName: "A major",
            chordAbbreviation: "A",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'A',
            accidental: "♮",
        },
        {  // Bm
            nashvilleRoman: nashvilleNumbers.roman[5],
            nashvilleArabic: nashvilleNumbers.arabic[5],
            chordFullName: "B minor",
            chordAbbreviation: "Bm",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'B',
            accidental: "♮",
        },
        {  // C♯dim
            nashvilleRoman: nashvilleNumbers.roman[6],
            nashvilleArabic: nashvilleNumbers.arabic[6],
            chordFullName: "C♯ diminished",
            chordAbbreviation: "C♯°",
            chordQualityFull: "diminished",
            chordQualityAbbreviation: "°",
            baseNote: 'C',
            accidental: "♯",
        },
    ],
    // TODO: Extract this function to a class method so it's not included in each key's object.
    randomChord: function () {
        let objectKeys = Object.keys(this.chords);
        return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }
};

// Key of F Major
export const F = {
    // TODO: use the index of a chord within the chords array to get nashvillenumber instead of hardcoding index.
    chords: [
        {  // F
            nashvilleRoman: nashvilleNumbers.roman[0],
            nashvilleArabic: nashvilleNumbers.arabic[0],
            chordAbbreviation: "F",
            chordFullName: "F major",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'F',
            accidental: "♮",
        },
        {  // Gm
            nashvilleRoman: nashvilleNumbers.roman[1],
            nashvilleArabic: nashvilleNumbers.arabic[1],
            chordAbbreviation: "Gm",
            chordFullName: "G minor",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'G',
            accidental: "♮",
        },
        {  // Am
            nashvilleRoman: nashvilleNumbers.roman[2],
            nashvilleArabic: nashvilleNumbers.arabic[2],
            chordFullName: "A minor",
            chordAbbreviation: "Am",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'A',
            accidental: "♮",
        },
        {  // Bb
            nashvilleRoman: nashvilleNumbers.roman[3],
            nashvilleArabic: nashvilleNumbers.arabic[3],
            chordFullName: "Bb major",
            chordAbbreviation: "B♭",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'B',
            accidental: "♭",
        },
        {  // C
            nashvilleRoman: nashvilleNumbers.roman[4],
            nashvilleArabic: nashvilleNumbers.arabic[4],
            chordFullName: "C major",
            chordAbbreviation: "C",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'C',
            accidental: "♮",
        },
        {  // D
            nashvilleRoman: nashvilleNumbers.roman[5],
            nashvilleArabic: nashvilleNumbers.arabic[5],
            chordFullName: "D minor",
            chordAbbreviation: "Dm",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'D',
            accidental: "♮",
        },
        {  // Edim
            nashvilleRoman: nashvilleNumbers.roman[6],
            nashvilleArabic: nashvilleNumbers.arabic[6],
            chordFullName: "E♯ diminished",
            chordAbbreviation: "E°",
            chordQualityFull: "diminished",
            chordQualityAbbreviation: "°",
            baseNote: 'E',
            accidental: "♮",
        },
    ],
    // TODO: Extract this function to a class method so it's not included in each key's object.
    randomChord: function () {
        let objectKeys = Object.keys(this.chords);
        return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }
};

// Key of G Major
export const G = {
    // TODO: use the index of a chord within the chords array to get nashvillenumber instead of hardcoding index.
    chords: [
        {  // G
            nashvilleRoman: nashvilleNumbers.roman[0],
            nashvilleArabic: nashvilleNumbers.arabic[0],
            chordAbbreviation: "G",
            chordFullName: "G major",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'G',
            accidental: "♮",
        },
        {  // Am
            nashvilleRoman: nashvilleNumbers.roman[1],
            nashvilleArabic: nashvilleNumbers.arabic[1],
            chordAbbreviation: "Am",
            chordFullName: "A minor",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'A',
            accidental: "♮",
        },
        {  // Bm
            nashvilleRoman: nashvilleNumbers.roman[2],
            nashvilleArabic: nashvilleNumbers.arabic[2],
            chordFullName: "B minor",
            chordAbbreviation: "Bm",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'B',
            accidental: "♮",
        },
        {  // C
            nashvilleRoman: nashvilleNumbers.roman[3],
            nashvilleArabic: nashvilleNumbers.arabic[3],
            chordFullName: "C major",
            chordAbbreviation: "C",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'C',
            accidental: "♮",
        },
        {  // D
            nashvilleRoman: nashvilleNumbers.roman[4],
            nashvilleArabic: nashvilleNumbers.arabic[4],
            chordFullName: "D major",
            chordAbbreviation: "D",
            chordQuality: "major",
            chordQualityAbbreviation: "",
            baseNote: 'D',
            accidental: "♮",
        },
        {  // Em
            nashvilleRoman: nashvilleNumbers.roman[5],
            nashvilleArabic: nashvilleNumbers.arabic[5],
            chordFullName: "E minor",
            chordAbbreviation: "Em",
            chordQuality: "minor",
            chordQualityAbbreviation: "m",
            baseNote: 'E',
            accidental: "♮",
        },
        {  // F♯dim
            nashvilleRoman: nashvilleNumbers.roman[6],
            nashvilleArabic: nashvilleNumbers.arabic[6],
            chordFullName: "F♯ diminished",
            chordAbbreviation: "F♯°",
            chordQualityFull: "diminished",
            chordQualityAbbreviation: "°",
            baseNote: 'F',
            accidental: "♯",
        },
    ],
    // TODO: Extract this function to a class method so it's not included in each key's object.
    randomChord: function () {
        let objectKeys = Object.keys(this.chords);
        return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }
};

// TODO: Add sharp/flat keys and minor keys.
// TODO: Ideally, flesh out the chord generation workflow from line 103 first and use it to generate the keys with as little repetition as possible.
export const majorKeys = {
    // TODO: Question: Build this object with a loop or map function.
    // TODO: Filter this object by configuration settings.
    keys: {
        A: A,
        B: B,
        C: C,
        D: D,
        E: E,
        F: F,
        G: G,
    },
    randomKey: function () {
        let objectKeys = Object.keys(this.keys);
        return this.keys[objectKeys[objectKeys.length * Math.random() << 0]];
    }
};