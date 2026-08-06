let nums = [64, 34, 25, 12, 22, 11, 90, 5, 9, 8, 6, 5, 4];

function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let swap = false;

        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                swap = true;
            }
        }

        if (!swap) {
            break;
        }
    }

    return nums;
}

console.log(bubbleSort(nums));