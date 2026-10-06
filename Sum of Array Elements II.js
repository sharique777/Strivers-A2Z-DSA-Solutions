let nums = [1, 2, 3];

function sumofArrayElementsII(i = 0, sum = 0) {
    if (i === nums.length) {
        return sum;
    }

    sum += nums[i];

    return sumofArrayElementsII(i + 1, sum);
}

console.log(sumofArrayElementsII());