const calculateBeautySum = function(inputString) {
  let totalBeautySum = 0;

  for (let startIndex = 0; startIndex < inputString.length; startIndex++) {
    const characterFrequencies = new Map();

p    for (let endIndex = startIndex; endIndex < inputString.length; endIndex++) {
      const currentCharacter = inputString[endIndex];
      
      characterFrequencies.set(
        currentCharacter, 
        (characterFrequencies.get(currentCharacter) || 0) + 1
      );

      let maximumFrequency = 0;
      let minimumFrequency = Infinity;

      for (const frequency of characterFrequencies.values()) {
        if (frequency > maximumFrequency) {
          maximumFrequency = frequency;
        }
        if (frequency < minimumFrequency) {
          minimumFrequency = frequency;
        }
      }

      totalBeautySum += (maximumFrequency - minimumFrequency);
    }
  }

  return totalBeautySum;
};

console.log(calculateBeautySum("aabcbaa"));