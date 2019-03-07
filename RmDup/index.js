/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let cur = 0,
    len = 1;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === nums[cur]) continue;
    ++cur;
    nums[cur] = nums[i];
    ++len;
  }
  return len;
};

module.exports = removeDuplicates;