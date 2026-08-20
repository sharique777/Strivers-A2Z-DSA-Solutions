let fruits = [1, 2, 1];
function totalFruit(fruits) {
    let hashMap = {};
    let maxFruit = 0;
    let secondMaxFruit = 0;
    for (const iterator_value of fruits) {
        //Arrays, strings, sets, maps (iterate over values)
        hashMap[iterator_value] = (hashMap[iterator_value] || 0) + 1;
        if (hashMap[iterator_value] > maxFruit) {
            //secondMaxFruit=maxFruit
            maxFruit = hashMap[iterator_value];
        }
    }
    for (const iterator_value of fruits) {
        if (
            hashMap[iterator_value] > secondMaxFruit &&
            hashMap[iterator_value] !== maxFruit
        ) {
            secondMaxFruit = hashMap[iterator_value];
        }
    }
    return maxFruit + secondMaxFruit;
}

console.log(totalFruit(fruits));
