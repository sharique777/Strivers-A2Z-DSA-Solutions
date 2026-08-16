/**
 * @param {string} num
 * @return {string}
 */
let num = "35427";

var largestOddNumber = function (num) {
    let largestOddNumber = String(-Infinity);
    let currNum = "";

    for (let i = 1; i <= num.length + 0; i++) {
        for (let j = 0; j < num.length; j++) {
            currNum += num[j];
            if ((j + 1) % i === 0) {
                if (num[j] % 2 !== 0) {
                    largestOddNumber = findGreaterNumAsStr(
                        currNum,
                        largestOddNumber
                    );
                }

                currNum = "";
            }
        }

        currNum = "";
    }
    if (largestOddNumber == -Infinity) {
        return "";
    }
    return largestOddNumber;
};

function findGreaterNumAsStr(num1, num2) {
    const negative1 = num1[0] === "-";
    const negative2 = num2[0] === "-";

    // num1 is positive, num2 is negative
    if (!negative1 && negative2) {
        return num1;
    }

    // num1 is negative, num2 is positive
    if (negative1 && !negative2) {
        return num2;
    }

    // Both are negative
    if (negative1 && negative2) {
        const abs1 = num1.slice(1);
        const abs2 = num2.slice(1);

        // For negative numbers, smaller absolute value is greater
        if (abs1.length > abs2.length) {
            return num2;
        } else if (abs1.length < abs2.length) {
            return num1;
        }

        for (let i = 0; i < abs1.length; i++) {
            if (abs1[i] > abs2[i]) {
                return num2;
            } else if (abs1[i] < abs2[i]) {
                return num1;
            }
        }

        return num1;
    }

    // Both are positive
    if (num1.length > num2.length) {
        return num1;
    } else if (num1.length < num2.length) {
        return num2;
    }

    for (let i = 0; i < num1.length; i++) {
        if (num1[i] > num2[i]) {
            return num1;
        } else if (num1[i] < num2[i]) {
            return num2;
        }
    }

    return num1;
}

console.log(largestOddNumber(num));
 