var frequencySort = function (s) {
    const freq = {};

    for (const ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    return Object.entries(freq)
        .sort((a, b) => {
            if (a[1] !== b[1]) {
                return b[1] - a[1]; // frequency: high → low
            }
            return a[0].localeCompare(b[0]); // alphabetical
        })
        .map(([ch]) => ch);
};

function manualFrequencySort(s) {
    const frequency = {};

    // Count character frequencies
    for (const ch of s) {
        frequency[ch] = (frequency[ch] || 0) + 1;
    }

    const entries = Object.entries(frequency);

    // Sort by frequency descending.
    // If frequencies are equal, sort alphabetically.
    function selectionSort(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            let maxIndex = i;

            for (let j = i + 1; j < arr.length; j++) {
                const [currentChar, currentFreq] = arr[j];
                const [maxChar, maxFreq] = arr[maxIndex];

                if (
                    currentFreq > maxFreq ||
                    (currentFreq === maxFreq && currentChar < maxChar)
                ) {
                    maxIndex = j;
                }
            }

            // Swap
            [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
        }

        return arr;
    }

    const sortedEntries = selectionSort(entries);

    return sortedEntries.map(([ch]) => ch);
}

//this one doesnt provide in descending order
var manualFrequencySort2 = function (s) {
    const frequencyMap = {};
    const frequencyToCharacters = {};
    const result = [];

    const alphabetLetterToNumber = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    };

    // Count frequency of each character.
    for (const character in s) {
        const currentCharacter = s[character];
        frequencyMap[currentCharacter] =
            (frequencyMap[currentCharacter] || 0) + 1;
    }

    // Store characters under their frequency.
    // The array index represents the alphabet number.
    for (const character in frequencyMap) {
        const frequency = frequencyMap[character];
        const alphabetNumber = alphabetLetterToNumber[character];

        if (frequencyToCharacters[frequency] === undefined) {
            frequencyToCharacters[frequency] = [];
        }

        frequencyToCharacters[frequency][alphabetNumber] = character;
    }

    // Frequencies are processed in ascending order.
    // for...in skips empty array positions.
    // Alphabet numbers naturally give alphabetical order.
    for (const frequency in frequencyToCharacters) {
        const characters = frequencyToCharacters[frequency];

        for (const alphabetNumber in characters) {
            result.push(characters[alphabetNumber]);
        }
    }

    return result;
};

console.log(manualFrequencySort2("zzraaajj"));
