function checkIfStringIsPalindromeOrNot(inputString, currentRightIndex = inputString.length - 1, middleIndex = Math.floor((inputString.length - 1) / 2)) {
    if (currentRightIndex <= middleIndex) {
        return true;
    }
    
    const currentLeftIndex = inputString.length - 1 - currentRightIndex;
    
    if (inputString[currentRightIndex] !== inputString[currentLeftIndex]) {
        return false;
    }
    
    return checkIfStringIsPalindromeOrNot(inputString, currentRightIndex - 1, middleIndex);
}

console.log(checkIfStringIsPalindromeOrNot("dad"));