export class RandomKeyGenerator {
    constructor() {
        this.A = {
            chords: [
                {  // A
                    nashvilleRoman: 'I',
                    nashvilleArabic: '1',
                    chordAbbreviation: "A",
                    chordFull: "A major",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'A',
                    accidental: "",
                },
                {  // Bm
                    nashvilleRoman: 'II',
                    nashvilleArabic: '2',
                    chordAbbreviation: "Bm",
                    chordFull: "B minor",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'B',
                    accidental: "",
                },
                {  // C#m
                    nashvilleRoman: 'III',
                    nashvilleArabic: '3',
                    chordFull: "C# minor",
                    chordAbbreviation: "C#m",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'C',
                    accidental: "#",
                },
                {  // D
                    nashvilleRoman: 'IV',
                    nashvilleArabic: '4',
                    chordFull: "D major",
                    chordAbbreviation: "D",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'D',
                    accidental: "",
                },
                {  // E
                    nashvilleRoman: 'V',
                    nashvilleArabic: '5',
                    chordFull: "E major",
                    chordAbbreviation: "E",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'E',
                    accidental: "",
                },
                {  // F#m
                    nashvilleRoman: 'VI',
                    nashvilleArabic: '6',
                    chordFull: "F# minor",
                    chordAbbreviation: "F#m",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'F',
                    accidental: "#",
                },
                {  // G#dim
                    nashvilleRoman: 'VII',
                    nashvilleArabic: '7',
                    chordFull: "G# diminished",
                    chordAbbreviation: "G#°",
                    chordQualityFull: "diminished",
                    chordQualityAbbreviation: "°",
                    baseNote: 'G',
                    accidental: "#",
                },
            ],
            randomChord: function () {
                let objectKeys = Object.keys(this.chords);
                console.log(objectKeys);
                console.log(objectKeys[objectKeys.length * Math.random() << 0]);
                //console.log(this.keys[objectKeys[objectKeys.length * Math.random() << 0]]);
                return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
            }
        };

        this.B = {
            chords: [
                {  // B
                    nashvilleRoman: 'I',
                    nashvilleArabic: '1',
                    chordAbbreviation: "B",
                    chordFull: "B major",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'B',
                    accidental: "",
                },
                {  // C#m
                    nashvilleRoman: 'II',
                    nashvilleArabic: '2',
                    chordAbbreviation: "C#m",
                    chordFull: "C# minor",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'C',
                    accidental: "#",
                },
                {  // D#m
                    nashvilleRoman: 'III',
                    nashvilleArabic: '3',
                    chordFull: "D# minor",
                    chordAbbreviation: "D#m",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'D',
                    accidental: "#",
                },
                {  // E
                    nashvilleRoman: 'IV',
                    nashvilleArabic: '4',
                    chordFull: "E major",
                    chordAbbreviation: "E",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'E',
                    accidental: "",
                },
                {  // F#
                    nashvilleRoman: 'V',
                    nashvilleArabic: '5',
                    chordFull: "F# major",
                    chordAbbreviation: "F#",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'F',
                    accidental: "#",
                },
                {  // G#m
                    nashvilleRoman: 'VI',
                    nashvilleArabic: '6',
                    chordFull: "G# minor",
                    chordAbbreviation: "G#m",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'G',
                    accidental: "#",
                },
                {  // A#dim
                    nashvilleRoman: 'VII',
                    nashvilleArabic: '7',
                    chordFull: "A# diminished",
                    chordAbbreviation: "A#°",
                    chordQualityFull: "diminished",
                    chordQualityAbbreviation: "°",
                    baseNote: 'A',
                    accidental: "#",
                },
            ],
            // Question: How to extract this out to a class method ?
            randomChord: function () {
                let objectKeys = Object.keys(this.chords);
                return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
            }
        };

        this.majorKeys = {
            keys: {
                A: this.A,
                B: this.B,
            },
            randomKey: function () {
                let objectKeys = Object.keys(this.keys);
                return this.keys[objectKeys[objectKeys.length * Math.random() << 0]];
            }
        };
    }

    getMajorKeys() {
        return this.majorKeys;
    }

    getKey(abbreviatedName) {
        this.getMajorKeys().keys.chords.find(abbreviatedName);
    }

    getRandomChord(quality) {
        let allKeys = {};
        if (quality == "major") {
            let allKeys = this.majorKeys;
        }
        let objectKeys = Object.keys(allKeys);
        return allKeys.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }

    getRandomChordFromKey(key) {
        let objectKeys = Object.keys(this.chords);
        return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
    }
}