// const factorial = (x: number): number => {
//   return x <= 1 ? x : x * factorial(x - 1);
// };

const rmEl = (arr: any[], idx: number): any[] => arr.filter((_el, i: number): boolean => i !== idx);

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums: number[]): number[][] => {
  // console.log('len=', nums.length, '! =', factorial(nums.length))
  let perms: number[][] = [];
  switch (nums.length) {
  case 0:
  case 1:
    return [nums];
  case 2:
    return [nums, [nums[1], nums[0]]];
  default:
    for (let i = 0; i < nums.length; ++i) {
      const p: number[][] = permute(rmEl(nums, i)).map((arr: number[]): number[] => [
        nums[i],
        ...arr
      ]);
      perms = perms.concat(p);
    }
    return perms;
  }
};

export default permute;
