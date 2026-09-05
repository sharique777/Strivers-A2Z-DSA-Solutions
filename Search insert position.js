var searchInsert = function (nums, target) {
    let low = 0,
        ans = nums.length;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] >= target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};
let nums = [1, 3, 5, 6],
    target = 2;
console.log(searchInsert(nums, target));
