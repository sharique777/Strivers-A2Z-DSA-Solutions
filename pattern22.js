let rightHalfLimit = 0;
let rightHalfLastValue = 0;
let rightHalfPreviousLimit = 0;
let leftHalfLastValue = 0;
let leftHalfPreviousLimit = 0;

let size = 2;
let result=[]
for (let row = 0; row < size; row++) {
    let descendingPart = "";
    let ascendingPart = "";
    for (let currentValue = size; currentValue > 0; currentValue--) {
        if (currentValue <= rightHalfPreviousLimit) {
            descendingPart += rightHalfPreviousLimit + 1 + " ";
            if (currentValue !== 1) {
                ascendingPart =
                    rightHalfPreviousLimit + 1 + " " + ascendingPart;
            }
            rightHalfLastValue = currentValue + rightHalfPreviousLimit;
        } else {
            descendingPart += currentValue + " ";
            if (currentValue !== 1) {
                ascendingPart = currentValue + " " + ascendingPart;
            }
            rightHalfLastValue = currentValue;
        }
    }

    rightHalfPreviousLimit = rightHalfLastValue;


    //console.log(descendingPart.trim() + " " + ascendingPart.trim());
    result.push(descendingPart.trim() + " " + ascendingPart.trim())
    

    leftHalfPreviousLimit = leftHalfLastValue;
}
for (let i =  result. length -1; i >= 0; i--){
      console.log(result[i]); 
} 
for (let i = 1 ; i < result. length ; i++){
      console.log(result[i]); 
} 