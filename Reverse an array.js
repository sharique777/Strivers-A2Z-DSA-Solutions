function reverse_an_array(arr, i) {
    // Initialize i to the last index on the first call
    if (i === undefined) {
        i = arr.length - 1;
    }

    let mid = Math.floor((arr.length - 1) / 2);

    // Base case: if we cross the middle, stop and return the array
    if (i <= mid) {
        return arr;
    }

    // Swap elements in-place
    let oppositeIndex = arr.length - 1 - i;
    [arr[i], arr[oppositeIndex]] = [arr[oppositeIndex], arr[i]];

    // Recursive call moving inwards
    return reverse_an_array(arr, i - 1);
}

console.log(reverse_an_array([1, 2, 3])); // Output: [3, 2, 1]
