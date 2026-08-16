let num = "4206";

var largestOddNumber = function (num) {
    let oddIndex = -1;
    let desiredNum = "";

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            oddIndex = i;
        }
    }
    for (let i = 0; i <= oddIndex; i++) {
        desiredNum += num[i];
    }
    return desiredNum;
};

console.log(largestOddNumber(num));
