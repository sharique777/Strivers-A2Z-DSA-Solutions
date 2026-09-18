function searchRange(nums, target) {
  const lastIndex = searchRangeHelper(nums, target, false);
  const firstIndex = searchRangeHelper(nums, target, true);
  
  if (lastIndex === -1) {
    return 0;
  } else { 
    return lastIndex - firstIndex + 1;
  }
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
let target = 8;
console.log(searchRange(nums, target));