let nums = [-4, 4, -4, 4, -4, 4];
function rearrangeArrayElementsBySign(nums) {
    const output = [];
    let pIndex = 0;
    let nIndex = 1;

    for (const value of nums) {
        if (value > 0) {
            output[pIndex] = value;
            pIndex += 2;
        } else {
            output[nIndex] = value;
            nIndex += 2;
        }
    }

    return output;
}

console.log(rearrangeArrayElementsBySign([-4, 4, -4, 4, -4, 4]));
