let lastNumBackward = 0;
let lastNumBackward1 = 0;
let lastNumBackward2 = 0;
let n = 5;

for (let row = 0; row < n; row++) {
    let str = "";

    for (let currentNum = n; currentNum > 0; currentNum--) {
        if (currentNum <= lastNumBackward2) {
            str += (currentNum + lastNumBackward2  -currentNum + 1) + " ";
            lastNumBackward1 = currentNum + lastNumBackward2/* + row - 1*/;
        } else {
            str += currentNum + " ";
            lastNumBackward1 = currentNum;
        }
    }

    console.log(str.trim());
    lastNumBackward2 = lastNumBackward1;
}