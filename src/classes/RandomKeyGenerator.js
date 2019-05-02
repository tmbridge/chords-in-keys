export class RandomKeyGenerator {
    constructor() {

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
            // TODO: Extract this function to a class method so it's not included in each key's object.
            randomChord: function () {
                let objectKeys = Object.keys(this.chords);
                return this.chords[objectKeys[objectKeys.length * Math.random() << 0]];
            }
        };

        this.B = {
            chords: [
                // TODO: Instead of defining these with hard code, derive each using map functions and single-definitions for repeated data.
                {  // B
                    nashvilleRoman: this.getNashvilleNumbers('roman')[0],
                    nashvilleArabic: this.getNashvilleNumbers('arabic')[0],
                    chordAbbreviation: "B",
                    chordFull: "B major",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'B',
                    accidental: "",
                },
                {  // C#m
                    nashvilleRoman: this.getNashvilleNumbers('roman')[1],
                    nashvilleArabic: this.getNashvilleNumbers('arabic')[1],
                    chordAbbreviation: "C#m",
                    chordFull: "C# minor",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'C',
                    accidental: "#",
                },
                {  // D#m
                    nashvilleRoman: this.getNashvilleNumbers('roman')[2],
                    nashvilleArabic: this.getNashvilleNumbers('arabic')[2],
                    chordFull: "D# minor",
                    chordAbbreviation: "D#m",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'D',
                    accidental: "#",
                },
                {  // E
                    nashvilleRoman: this.getNashvilleNumbers('roman')[3],
                    nashvilleArabic: this.getNashvilleNumbers('arabic')[3],
                    chordFull: "E major",
                    chordAbbreviation: "E",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'E',
                    accidental: "",
                },
                {  // F#
                    nashvilleRoman: this.getNashvilleNumbers('roman')[4],
                    nashvilleArabic: this.getNashvilleNumbers('arabic')[4],
                    chordFull: "F# major",
                    chordAbbreviation: "F#",
                    chordQuality: "major",
                    chordQualityAbbreviation: "",
                    baseNote: 'F',
                    accidental: "#",
                },
                {  // G#m
                    nashvilleRoman: this.getNashvilleNumbers('roman')[5],
                    nashvilleArabic: this.getNashvilleNumbers('arabic')[5],
                    chordFull: "G# minor",
                    chordAbbreviation: "G#m",
                    chordQuality: "minor",
                    chordQualityAbbreviation: "m",
                    baseNote: 'G',
                    accidental: "#",
                },
                {  // A#dim
                    nashvilleRoman: this.getNashvilleNumbers('roman')[6],
                    nashvilleArabic: this.getNashvilleNumbers('arabic')[6],
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

        // TODO: Add sharp/flat keys and minor keys.  Ideally, flesh out the chord generation workflow from line 103 first and use it to generate the keys with as little repetition as possible.
        this.majorKeys = {
            keys: {
                A: this.A,
                B: this.B,
/*                C: "C",
                D: "D",
                E: "E",
                F: "F",
                G: "G",*/
            },
            randomKey: function () {
                let objectKeys = Object.keys(this.keys);
                return this.keys[objectKeys[objectKeys.length * Math.random() << 0]];
            }
        };
    }

    getNashvilleNumbers(type) {
      //  if (type == 'arabic') {
            return this.nashvilleNumbers.get(type);
     //   else {
      //      return this.nashvilleNumbers.get(type);
      //  }
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