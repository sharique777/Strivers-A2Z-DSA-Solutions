let nums = [-3, 4, 5, 1, -4, -5];
function getLeadersInAnArray(nums) {
    let biggestNumAsOfNow = -Infinity;
    let leaders = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > biggestNumAsOfNow) {
            biggestNumAsOfNow = nums[i];
            leaders[i] = nums[i];
        }
    }
    return leaders;
}
console.log(getLeadersInAnArray(nums));
