 const numbersArray = [0, 1, 2, 4, 5, 6];

function getMissingNumber(inputNumbersArray) {
    const totalElementsCount = inputNumbersArray.length;
    
    // Calculate the expected sum if no numbers were missing in the range 0 to n
    const expectedTotalSum = (totalElementsCount * (totalElementsCount + 1)) / 2;
    
    let actualCalculatedSum = 0;
    
    for (let currentIndex = 0; currentIndex < totalElementsCount; currentIndex++) {
        actualCalculatedSum += inputNumbersArray[currentIndex];
    }
    
    const missingNumberResult = expectedTotalSum - actualCalculatedSum;
    
    return missingNumberResult;
}

console.log(getMissingNumber(numbersArray));