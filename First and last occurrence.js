

function searchRange(nums, target) {
  return [
    searchRangeHelper(nums, target, true),
    searchRangeHelper(nums, target, false)
  ];
}

function searchRangeHelper(nums, target, isFirstOccurrence) {
  let low = 0;
  let high = nums.length - 1;
  let boundIndex = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) {
      boundIndex = mid;
      if (isFirstOccurrence) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return boundIndex;
}

let nums = [5, 7, 7, 8, 8, 10];
let target = 6;
console.log(searchRange(nums, target));