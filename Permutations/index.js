'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const rmEl = (arr, idx) => arr.filter((_el, i) => i !== idx);
const permute = (nums) => {
  let perms = [];
  switch (nums.length) {
  case 0:
  case 1:
    return [nums];
  case 2:
    return [nums, [nums[1], nums[0]]];
  default:
    for (let i = 0; i < nums.length; ++i) {
      const p = permute(rmEl(nums, i)).map((arr) => [
        nums[i],
        ...arr
      ]);
      perms = perms.concat(p);
    }
    return perms;
  }
};
exports.default = permute;
