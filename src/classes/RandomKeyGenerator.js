export class RandomKeyGenerator {
    constructor() {

        // Helper constants/methods.
        this.chordQualities = [
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
        this.baseNotes = ['A','B','C','D','E','F','G'];
        this.nashvilleNumbers = {
            // TODO: make this a nested function that generates 1-7
            arabic: [1, 2, 3, 4, 5, 6, 7],
            roman: ['I','II','III','IV','V','VI','VII'],
            get: function(i) {return this[i]},
            // Question: Why is this undefined in get2?
/*            get2: function(i) {return (function() {
                console.log("this:" + this + "i" + i);
                if(i in this.parent) {
                    return this[i];
                }
                else {
                    return this['roman'];
                }
            })()
            },*/
        };

        // Key definitions
        // TODO: How to make these constants?
        // TODO: Extract randomChord() function to a class method so it's not included in each key's object.
        // TODO: Get NashvilleNumbers without hardcoding index.
        // TODO: Derive chordFullName this from baseNote and chordQuality
        // TODO: Derive chordAbbreviation from baseNote, chordQuality, and accidental
        // Key of A Major
        this.A = {
            // TODO: Question: use the index of a chord within the chords array to get nashvillenumber instead of hardcoding index.
            chords: [
                {  // A
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[0],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[0],
                    chordAbbreviation: "A", // TODO: Derive this from baseNote, chordQuality, and accidental
                    chordFullName: "A major", // TODO: Derive this from baseNote and chordQuality
                    chordQuality: "major",
                    chordQualityAbbreviation: "", //TODO: Derive this chordQuality
                    baseNote: 'A',
                    accidental: "♮",
                },
                {  // Bm
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[1],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[1],
                    chordAbbreviation: "Bm",
                    chordFullName: "B minor",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'B',
                    accidental: "♮",
                },
                {  // C♯m
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[2],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[2],
                    chordFullName: "C♯ minor",
                    chordAbbreviation: "C♯m",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'C',
                    accidental: "♯",
                },
                {  // D
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[3],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[3],
                    chordFullName: "D major",
                    chordAbbreviation: "D",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'D',
                    accidental: "♮",
                },
                {  // E
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[4],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[4],
                    chordFullName: "E major",
                    chordAbbreviation: "E",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'E',
                    accidental: "♮",
                },
                {  // F♯m
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[5],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[5],
                    chordFullName: "F♯ minor",
                    chordAbbreviation: "F♯m",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'F',
                    accidental: "♯",
                },
                {  // G♯dim
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[6],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[6],
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
        this.B = {
            // TODO: use the index of a chord within the chords array to get nashvillenumber instead of hardcoding index.
            chords: [
                {  // B
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[0],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[0],
                    chordAbbreviation: "B",
                    chordFullName: "B major",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'B',
                    accidental: "♮",
                },
                {  // C♯m
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[1],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[1],
                    chordAbbreviation: "C♯m",
                    chordFullName: "C♯ minor",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'C',
                    accidental: "♯",
                },
                {  // D♯m
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[2],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[2],
                    chordFullName: "D♯ minor",
                    chordAbbreviation: "D♯m",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'D',
                    accidental: "♯",
                },
                {  // E
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[3],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[3],
                    chordFullName: "E major",
                    chordAbbreviation: "E",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'E',
                    accidental: "♮",
                },
                {  // F♯
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[4],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[4],
                    chordFullName: "F♯ major",
                    chordAbbreviation: "F♯",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'F',
                    accidental: "♯",
                },
                {  // G♯m
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[5],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[5],
                    chordFullName: "G♯ minor",
                    chordAbbreviation: "G♯m",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'G',
                    accidental: "♯",
                },
                {  // A♯dim
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[6],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[6],
                    chordFullName: "A♯ diminished",
                    chordAbbreviation: "A♯°",
                    chordQualityFull: "diminished",
                    chordQualityAbbreviation: "°",
                    baseNote: 'A',
                    accidental: "♯",
                },
            ],
            // Question: How to extract this out to a class method ?
            randomChord: function () {
                let objectKeys = Object.keys(this.chords);
                return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
            }
        };

        // Key of C Major
        this.C = {
            // TODO: use the index of a chord within the chords array to get nashvillenumber instead of hardcoding index.
            chords: [
                {  // C
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[0],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[0],
                    chordAbbreviation: "C",
                    chordFullName: "C major",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'C',
                    accidental: "♮",
                },
                {  // D
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[1],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[1],
                    chordAbbreviation: "Dm",
                    chordFullName: "D minor",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'D',
                    accidental: "♮",
                },
                {  // E
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[2],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[2],
                    chordFullName: "E minor",
                    chordAbbreviation: "C♯m",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'E',
                    accidental: "♮",
                },
                {  // F
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[3],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[3],
                    chordFullName: "F major",
                    chordAbbreviation: "F",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'F',
                    accidental: "♮",
                },
                {  // G
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[4],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[4],
                    chordFullName: "G major",
                    chordAbbreviation: "G",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'G',
                    accidental: "♮",
                },
                {  // A
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[5],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[5],
                    chordFullName: "A minor",
                    chordAbbreviation: "Am",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'A',
                    accidental: "♮",
                },
                {  // B
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[6],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[6],
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

        // Key of D Major
        this.D = {
            // TODO: use the index of a chord within the chords array to get nashvillenumber instead of hardcoding index.
            chords: [
                {  // D
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[0],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[0],
                    chordAbbreviation: "D",
                    chordFullName: "D major",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'D',
                    accidental: "♮",
                },
                {  // Em
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[1],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[1],
                    chordAbbreviation: "Em",
                    chordFullName: "E minor",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'E',
                    accidental: "♮",
                },
                {  // F♯m
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[2],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[2],
                    chordFullName: "F♯ minor",
                    chordAbbreviation: "F♯m",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'F',
                    accidental: "♯",
                },
                {  // G
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[3],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[3],
                    chordFullName: "G major",
                    chordAbbreviation: "G",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'G',
                    accidental: "♮",
                },
                {  // A
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[4],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[4],
                    chordFullName: "A major",
                    chordAbbreviation: "A",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'A',
                    accidental: "♮",
                },
                {  // Bm
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[5],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[5],
                    chordFullName: "B minor",
                    chordAbbreviation: "Bm",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'B',
                    accidental: "♮",
                },
                {  // C♯dim
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[6],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[6],
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

        // Key of E Major
        this.E = {
            // TODO: use the index of a chord within the chords array to get nashvillenumber instead of hardcoding index.
            chords: [
                {  // E
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[0],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[0],
                    chordAbbreviation: "E",
                    chordFullName: "E major",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'E',
                    accidental: "♮",
                },
                {  // F♯m
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[1],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[1],
                    chordAbbreviation: "F♯m",
                    chordFullName: "F♯ minor",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'F',
                    accidental: "♯",
                },
                {  // G♯m
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[2],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[2],
                    chordFullName: "G♯ minor",
                    chordAbbreviation: "G♯m",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'G',
                    accidental: "♯",
                },
                {  // A
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[3],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[3],
                    chordFullName: "A major",
                    chordAbbreviation: "A",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'A',
                    accidental: "♮",
                },
                {  // B
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[4],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[4],
                    chordFullName: "B major",
                    chordAbbreviation: "B",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'B',
                    accidental: "♮",
                },
                {  // C♯m
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[5],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[5],
                    chordFullName: "C minor",
                    chordAbbreviation: "Cm",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'C',
                    accidental: "♯",
                },
                {  // D♯dim
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[6],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[6],
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

        // Key of F Major
        this.F = {
            // TODO: use the index of a chord within the chords array to get nashvillenumber instead of hardcoding index.
            chords: [
                {  // F
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[0],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[0],
                    chordAbbreviation: "F",
                    chordFullName: "F major",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'F',
                    accidental: "♮",
                },
                {  // Gm
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[1],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[1],
                    chordAbbreviation: "Gm",
                    chordFullName: "G minor",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'G',
                    accidental: "♮",
                },
                {  // Am
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[2],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[2],
                    chordFullName: "A minor",
                    chordAbbreviation: "Am",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'A',
                    accidental: "♮",
                },
                {  // Bb
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[3],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[3],
                    chordFullName: "Bb major",
                    chordAbbreviation: "B♭",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'B',
                    accidental: "♭",
                },
                {  // C
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[4],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[4],
                    chordFullName: "C major",
                    chordAbbreviation: "C",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'C',
                    accidental: "♮",
                },
                {  // D
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[5],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[5],
                    chordFullName: "D minor",
                    chordAbbreviation: "Dm",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'D',
                    accidental: "♮",
                },
                {  // Edim
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[6],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[6],
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
        this.G = {
            // TODO: use the index of a chord within the chords array to get nashvillenumber instead of hardcoding index.
            chords: [
                {  // G
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[0],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[0],
                    chordAbbreviation: "G",
                    chordFullName: "G major",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'G',
                    accidental: "♮",
                },
                {  // Am
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[1],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[1],
                    chordAbbreviation: "Am",
                    chordFullName: "A minor",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'A',
                    accidental: "♮",
                },
                {  // Bm
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[2],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[2],
                    chordFullName: "B minor",
                    chordAbbreviation: "Bm",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'B',
                    accidental: "♮",
                },
                {  // C
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[3],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[3],
                    chordFullName: "C major",
                    chordAbbreviation: "C",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'C',
                    accidental: "♮",
                },
                {  // D
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[4],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[4],
                    chordFullName: "D major",
                    chordAbbreviation: "D",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'D',
                    accidental: "♮",
                },
                {  // Em
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[5],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[5],
                    chordFullName: "E minor",
                    chordAbbreviation: "Em",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'E',
                    accidental: "♮",
                },
                {  // F♯dim
                    nashvilleRoman: this.getAllNashvilleNumbers('roman')[6],
                    nashvilleArabic: this.getAllNashvilleNumbers('arabic')[6],
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

        // TODO: Add sharp/flat keys and minor keys.  Ideally, flesh out the chord generation workflow from line 103 first and use it to generate the keys with as little repetition as possible.
        this.majorKeys = {
            // TODO: Question: Build this object with a loop or map function.
            // TODO: Filter this object by configuration settings.
            keys: {
                A: this.A,
                B: this.B,
                C: this.C,
                D: this.D,
                E: this.E,
                F: this.F,
                G: this.G,
            },
            randomKey: function () {
                let objectKeys = Object.keys(this.keys);
                return this.keys[objectKeys[objectKeys.length * Math.random() << 0]];
            }
        };
    }

    getAllNashvilleNumbers(type) {
        return this.nashvilleNumbers.get(type);
    }

    getAllMajorKeys() {
        return this.majorKeys;
    }

    // TODO: write/test this method
    getAllChords(keys = this.getAllMajorKeys()) {
        console.log(keys);
        return keys;
    }

    // TODO: write/test this method
    getKeyByAbbreviation(abbreviatedName) {
        this.getAllMajorKeys().keys.chords.find(abbreviatedName);
    }

    // TODO: write/test this method
    getRandomChord(quality) {
        let allKeys = {};
        if (quality == "major") {
            let allKeys = this.majorKeys;
        }
        let objectKeys = Object.keys(allKeys);
        return allKeys.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }

    // TODO: write/test this method
    getRandomChordFromKey(key) {
        let objectKeys = Object.keys(this.chords);
        return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }
}