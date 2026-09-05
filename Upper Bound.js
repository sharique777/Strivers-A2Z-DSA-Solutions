function binarySearch(nums, target) {
    let low = 0,
        ans = nums.length;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] > target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
}
let nums = [3, 5, 8, 15, 19],
    x = 9;
console.log(binarySearch(nums, x));
