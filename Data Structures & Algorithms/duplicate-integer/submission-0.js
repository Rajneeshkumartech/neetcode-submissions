class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */

    hasDuplicate = function(nums) {
      const  newset = new Set(nums)
      return newset.size!==nums.length
    }
}
