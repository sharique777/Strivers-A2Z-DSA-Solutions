
#include <stdio.h>

int getCountOfSubarraysWithSumLessThanOrEqual(int* nums, int numsSize, int goal)
{
    if (0 > goal) {
    return 0;
} 
    int left = 0;
    int sum = 0;
    int totalValidSubarrays = 0;

    for (int right = 0; right < numsSize; right++)
    {
        sum += nums[right];

        while (sum > goal)
        {
            sum -= nums[left];
            left++;
        }

        int windownumsSize = right - left + 1;

            totalValidSubarrays += windownumsSize;
    }

    return totalValidSubarrays;
}

int numSubarraysWithSum(int* nums, int numsSize, int goal){
int k = getCountOfSubarraysWithSumLessThanOrEqual(nums, numsSize, goal);
int k2 = getCountOfSubarraysWithSumLessThanOrEqual(nums, numsSize, goal-1);
return k-k2;
}
int main(){
  }