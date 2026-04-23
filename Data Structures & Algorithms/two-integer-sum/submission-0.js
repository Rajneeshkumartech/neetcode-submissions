class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        // Check if the complement is already in our Map
        if (prevMap.has(complement)) {
            // Return [smaller index, larger index]
            // prevMap.get(complement) will always be smaller because it was added earlier
            return [prevMap.get(complement), i];
        }

        // Store the current number and its index
        prevMap.set(currentNum, i);
    }
    }
}
