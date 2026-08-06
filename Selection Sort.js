let nums = [64, 34, 25, 12, 22, 11, 90, 5];

function selectionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let smallElement = Infinity;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[smallIndex]) {
                smallIndex = j;
            }
        }
        [nums[i], nums[smallIndex]] = [nums[smallIndex], nums[i]];
    }
    return nums;
}
console.log(selectionSort(nums));
