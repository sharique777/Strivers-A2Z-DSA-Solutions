const numbersArray = [1, 1, 1, 2, 1, 2];
function getMajorityElement(inputNumbersArray) {
    let hashMap = {};
    let majorityElementMajorCount = -Infinity;
    let majorityElement = 0;
    for (const currentNumber of inputNumbersArray) {
        hashMap[currentNumber] = (hashMap[currentNumber] || 0) + 1;
        if (hashMap[currentNumber] > majorityElementMajorCount) {
            majorityElementMajorCount = hashMap[currentNumber];
            majorityElement = currentNumber;
        }
    }
    return majorityElement;
}

console.log(getMajorityElement(numbersArray));
