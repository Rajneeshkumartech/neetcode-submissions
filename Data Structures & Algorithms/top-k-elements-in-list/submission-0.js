class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        for (let num of nums ){
count[num] = (count[num]||0) + 1 ;
}
        let key = Object.keys(count);
        key.sort((a , b) => count[b] -count[a]) ; 
        return key.slice(0,k).map(Number);
    }
}
