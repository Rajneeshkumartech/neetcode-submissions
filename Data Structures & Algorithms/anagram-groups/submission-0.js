class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {};
        for (let s of strs){
let sortedword = s.split('').sort().join('');
if (!groups[sortedword]) {
groups[sortedword] = []
}
groups[sortedword].push(s)
        } return Object.values(groups)
    }
}
