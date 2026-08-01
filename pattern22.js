let rightHalfLimit = 0;
let rightHalfLastValue = 0;
let rightHalfPreviousLimit = 0;
let leftHalfLastValue = 0;
let leftHalfPreviousLimit = 0;

let size = 5;

for (let row = 0; row < size; row++) {
    let descendingPart = "";
let ascendingPart = "";
    for (let currentValue = size; currentValue > 0; currentValue--) {
        if (currentValue <= rightHalfPreviousLimit) {
            descendingPart += (rightHalfPreviousLimit + 1) + " ";
            if (currentValue !==1 ){

ascendingPart = (rightHalfPreviousLimit + 1) + " "+ascendingPart;
} 
            rightHalfLastValue = currentValue + rightHalfPreviousLimit;
            
        } else {
            descendingPart += currentValue + " ";
            if ( currentValue!==1 ){

ascendingPart = currentValue + " "+ascendingPart;
} 
            rightHalfLastValue = currentValue;
        }
    }

    rightHalfPreviousLimit = rightHalfLastValue;

    

    /* for (let currentValue = 2; currentValue <= size; currentValue++) {
        if (size - currentValue <= leftHalfPreviousLimit) {
            ascendingPart += (leftHalfPreviousLimit + 1) + " ";
            leftHalfLastValue = currentValue + leftHalfPreviousLimit;
        } else {
            ascendingPart += currentValue + " ";

            if (currentValue === 2) {
                leftHalfLastValue = currentValue;
            }
        }
    } */

    console.log(descendingPart.trim() + " " +ascendingPart.trim());

    leftHalfPreviousLimit = leftHalfLastValue;
}