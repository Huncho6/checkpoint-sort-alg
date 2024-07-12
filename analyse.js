function analyzeSentence(sentence) {
    let length = 0;      // Counter for the number of characters
    let wordCount = 0;   // Counter for the number of words
    let vowelCount = 0;  // Counter for the number of vowels
    let inWord = false;  // Flag to track if currently inside a word

    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']); // Set of vowels

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        length++; // Increment character count

        if (vowels.has(char)) {
            vowelCount++; // Increase vowel count if character is a vowel
        }

        if (char === ' ') {
            if (inWord) {
                wordCount++; // Increase word count when a space is found after a word
                inWord = false; 
            }
        } else if (char === '.') {
            if (inWord) {
                wordCount++; // Increment word count for the last word if sentence ends
            }
            break;
        } else {
            inWord = true; // Set inWord flag when a non-space, non-period character is found
        }
    }

    return {
        length: length,
        wordCount: wordCount,
        vowelCount: vowelCount
    };
}

//  usage
const sentence = "Hello world, this is a test sentence.";
const result = analyzeSentence(sentence);
console.log("Length of the sentence:", result.length);
console.log("Number of words:", result.wordCount);
console.log("Number of vowels:", result.vowelCount);
