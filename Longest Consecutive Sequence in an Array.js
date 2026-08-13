let nums = [100, 4, 200, 1, 3, 2, 9, 10, 11, 12, 13, 14];

function longestConsecutive(nums) {
    let sequence = {};

    let lastIndex = Infinity;
    for (let i = 0; i < nums.length; i++) {
        sequence[nums[i]] = nums[i];
        if (nums[i] < lastIndex) {
            lastIndex = nums[i];
        }
    }

    let currentSequenceLength = 0;
    let longestSequence = 0;
    let sequenceStarted = false;

    for (const index in sequence) {
        if (Number(index) - lastIndex === 1 || sequenceStarted === false) {
            currentSequenceLength++;
            sequenceStarted = true;
        } else {
            longestSequence = Math.max(longestSequence, currentSequenceLength);

            // Current number starts the new sequence
            currentSequenceLength = 1;
            sequenceStarted = true;
        }

        lastIndex = Number(index);
    }

    // Check the final sequence
    longestSequence = Math.max(longestSequence, currentSequenceLength);

    return longestSequence;
}

console.log(longestConsecutive(nums));
