let nums = [2, -4, 4, 0, 10];
let target = -1;
function linearSearch(nums, target) {
    for (const [index, value] of nums.entries()) {
        if (value === target) {
            return index;
        }
    }
    return -1;
}
console.log(linearSearch(nums, target));
