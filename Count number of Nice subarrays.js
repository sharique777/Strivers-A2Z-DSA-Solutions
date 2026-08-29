
var numberOfSubarrays = function(nums, k){

    function countSubarraysAtMost(k) {
        if (k < 0) {
            return 0;
        }

        let left = 0;
        let sum = 0;
        let count = 0;

        for (let right = 0; right < nums.length; right++) {
            sum += nums[right]%2;

            while (sum > k) {
                sum -= nums[left]%2;
                left++;
            }

            let windowSize = right - left + 1;
            count += windowSize;
        }

        return count;
    }

    return countSubarraysAtMost(k) -
           countSubarraysAtMost(k - 1);
};