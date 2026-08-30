function subarraysWithAtMostKDistinct(nums, k) {
    let left = 0, subarrayCount = 0;
    let distinctCount = 0;
    const hashMap = {};

    for (let right = 0; right < nums.length; right++) {
        if (hashMap[nums[right]] === undefined) {
            distinctCount++;
        }

        hashMap[nums[right]] = (hashMap[nums[right]] || 0) + 1;

        while (distinctCount > k) {
            hashMap[nums[left]]--;

            if (hashMap[nums[left]] === 0) {
                delete hashMap[nums[left]];
                distinctCount--;

            }
            left++;
        }
        subarrayCount+=right-left+1
    }

    return subarrayCount;
}

function subarraysWithKDistinct(nums, k) {
    return subarraysWithAtMostKDistinct(nums, k)
         - subarraysWithAtMostKDistinct(nums, k-1 );
}

let nums = [1,2,1,2,3], k = 2

console.log(subarraysWithKDistinct(nums, k));