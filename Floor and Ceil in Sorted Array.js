function getFloorCeil(numbers, target) {
  let low = 0;
  let high = numbers.length - 1;
  let floorValue = -1;
  let ceilValue = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (numbers[mid] === target) {
      floorValue = numbers[mid];
      ceilValue = numbers[mid];
      break;
    } else if (numbers[mid] < target) {
      floorValue = numbers[mid];
      low = mid + 1;
    } else {
      ceilValue = numbers[mid];
      high = mid - 1;
    }
  }

  return floorValue + " " + ceilValue;
}

const numbers = [2, 4, 6, 8];
const targetValue = 1;
console.log(getFloorCeil(numbers, targetValue));
