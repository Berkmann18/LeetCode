'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const rmEl = (arr, idx) => arr.filter((_el, i) => i !== idx);
const permuteUnique = (nums) => {
  const perms = [];
  const ps = [];
  switch (nums.length) {
  case 0:
  case 1:
    return [nums];
  case 2:
    return nums[0] === nums[1] ? [nums] : [nums, [nums[1], nums[0]]];
  default:
    for (let i = 0; i < nums.length; ++i) {
      const p = permuteUnique(rmEl(nums, i)).map((arr) => [
        nums[i],
        ...arr
      ]);
      p.forEach((arr) => {
        const str = arr.toString();
        if (!ps.includes(str)) {
          ps.push(str);
          perms.push(arr);
        }
      });
    }
    return perms;
  }
};
exports.default = permuteUnique;
